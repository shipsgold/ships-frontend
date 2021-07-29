import { KeyPairEd25519 } from "near-api-js/lib/utils";
import { assign, createMachine, Interpreter, State } from "xstate"
import { keyStores } from "near-api-js";
import { encode } from "bs58";
import config, {apiClient, getNetworkConfig} from "../config";
import {getWalletConnection, walletSignIn, getConnection} from "../api/near"
import client from "../api/client";

export type EmailVerificationStatus = "pending" | "verified" | "unknown"
export type UserContext = {
  privKey?: string,
  recoverKey?: string,
  accessToken?: string,
  emailVerified: EmailVerificationStatus, 
  email?: string
  gitCode?: string,
}

type InitialContext = {
  privKey: undefined, 
  recoverKey?:string,
  accessToken: undefined,
  emailVerified: "unknown", 
  gitCode:undefined,
  email: undefined
}

type InitializedContext = {
  privKey: string,
  recoverKey?:string,
  accessToken?: string,
  emailVerified: EmailVerificationStatus,
  gitCode?: string,
  email?: string 
}

type PendingEmailVerificationContext = {
  privKey: string,
  recoverKey?:string,
  accessToken?: string,
  emailVerified: "pending",
  gitCode?:string,
  email: string 
}


type PendingGitVerificationContext = {
  privKey: string,
  recoverKey?:string,
  accessToken?: string,
  emailVerified: EmailVerificationStatus,
  gitCode: string,
}


export type UserState = |
{
    value: 'uninitialized',
    context: InitialContext,
}|
{
    value: 'initializing',
    context: InitialContext, 
} |
{
    value: 'initialized',
    context: InitializedContext,
} |
{
  value: 'pendingEmailVerification',
  context: PendingEmailVerificationContext, 

} | 
{
  value:'pendingGitVerification',
  context: PendingGitVerificationContext
} |
{
  value:'requestEmailVerification',
  context: PendingEmailVerificationContext
} |
{
  value:'requestWalletVerification',
  context: PendingEmailVerificationContext
} |
{
  value:'verifyingEmail',
  context: PendingGitVerificationContext
} |
{
  value: 'restoring',
  context: UserContext, 
} |
{
    value: 'failure',
    context: UserContext 
}

export type UserInterpeter = Interpreter<UserContext, UserState, UserEvents>
export type UserSerializedState = State<UserContext, UserEvents>

// Used to generate pub/private Key pair
type UserInitialize = { type: 'USER_INIT' }
type UserRequestGitAuth = {type: 'GIT_AUTH'; code: string}
type UserRequestEmailAuth = { type: 'EMAIL_AUTH'; email: string }
type UserRequestWalletAuth = { type: 'WALLET_AUTH'; }
type UserVerifyEmail = { type: 'VERIFY_EMAIL'; token: string }
type UserRestoreKey = { type: 'RESTORE'; token: string }

export type UserEvents =
    | UserInitialize 
    | UserRequestGitAuth 
    | UserRequestEmailAuth 
    | UserVerifyEmail
    | UserRestoreKey
    | UserRequestWalletAuth
    ;

  
const gitAuth = async (context: UserContext, _event: any): Promise<string> =>  {
  const pubKey = KeyPairEd25519.fromString(context.privKey as string).getPublicKey().toString();
  const result = await apiClient.requestGithubAuth(pubKey, context.gitCode as string, config.frontendURI)
  return `${result}` 
}
const verifyEmail = async (_context: any, _event: any): Promise<string> => "email verify"
const verifyWallet = async (_context: any, _event: any): Promise<string> => {
  const keystore = new keyStores.BrowserLocalStorageKeyStore();
  const near = await getConnection(keystore);
  console.log("past")
  const wc = await getWalletConnection(near);
  console.log(wc)
  const accountId = await walletSignIn(wc, config.contractId, "Ships Dev");
  try{
    const nonce = await apiClient.getNonce();
    console.log(nonce)
    const keyPair = await keystore.getKey(getNetworkConfig().networkId,accountId);
    const { publicKey, signature } = keyPair.sign(Buffer.from(nonce));
    const res = await apiClient.verifyNonce(nonce, accountId, publicKey.toString(), encode(signature));
    console.log("results: ", res)
    
  }catch(e){
    console.log(e)
  }
  // const approved = await client.verifyNonce(nonce, publicKey, signature, accountId);
  return accountId
}
const checkEmailVerification = async (_context: any, _event: any): Promise<string> => "check verify"
const generatePrivateKey = async (_context:UserContext, _event: any): Promise<string> => KeyPairEd25519.fromRandom().secretKey


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userMachine = () => createMachine<UserContext, UserEvents, UserState>({
  id: 'user',
  initial: 'uninitialized',
  context: {
    privKey: undefined,
    accessToken: undefined,
    emailVerified: "unknown",
  },
  states: {
    uninitialized: {
      always: 'initializing'
    },
    initializing: {
      invoke: {
        id: 'init-key',
        src: generatePrivateKey,
        onDone: {
          target: 'initialized',
          actions: assign({
            privKey: (_context, event)=> event.data
          })
        },
        onError: {
          target: 'failure'
        }
      }
    },
    initialized: {
      on: {
        GIT_AUTH: {
          target: 'pendingGitVerification',
          actions: assign((_context,event)=>({gitCode: event.code}))
        },
        EMAIL_AUTH: {
          target: 'requestEmailVerification',
          actions: assign((_context,event)=>({email: event.email}))
        },
        WALLET_AUTH: 'requestWalletVerification',
        RESTORE: {
          target: 'restoring',
          actions: assign((_context, event)=>({ recoverKey: event.token }))
        },
        USER_INIT: 'initializing',
      }
    },
    pendingGitVerification: {
      invoke: {
        src: gitAuth,
        onDone: {
          target: 'initialized',
          actions: assign((_context,event)=>({accessToken: event.data}))
        },
        onError: {
          target: 'failure'
        }
      }
    },
    requestEmailVerification : {
      invoke: {
        src: verifyEmail,
        onDone: {
          target: 'pendingEmailVerification',
          actions: assign({
            email: (_context, event) => event.data
          }),
        },
        onError: {
          target: 'failure'
        }
      }   
    },
    requestWalletVerification: {
      invoke: {
        src: verifyWallet,
        onDone: {
          target: 'initialized',
        }
      }
    },
    pendingEmailVerification : {
      on: { 
        VERIFY_EMAIL: {
          target: 'verifyingEmail',
          actions: assign((_context,event)=>({accessToken: event.token}))
        }
      }
    },
    verifyingEmail:{
      invoke: {
        src: checkEmailVerification,
        onDone: {
          target: 'initialized',
          actions: assign((_context,event)=>({emailVerified: event.data}))
        },
        onError: {
          target: 'failure'
        }
      }
    },
    restoring: {
      

    },
    failure: {
      on: {
        GIT_AUTH: 'initialized'
        // TODO fix this state
        // AUTH_RETRY: 'initialized',
      }
    }
  },
},
{
  services: {
  }
})


export type UserMachine = ReturnType<typeof userMachine>;
