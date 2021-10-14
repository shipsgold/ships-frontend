import { assign, createMachine, Interpreter, StateConfig } from "xstate"

export type AuthContext = {
  authKey?: string
  privKey?: string
}

type InitialContext = {
  authKey: undefined 
  privKey: undefined
}

type AuthenticatedContext = {
  authKey: string
}
export type AuthState = |
{
    value: 'unauthenticated',
    context: InitialContext
}|
{
    value: 'authenticating',
    context: InitialContext, 
} |
{
    value: 'authenticated',
    context: AuthenticatedContext 
} |
{
    value: 'failure',
    context: AuthContext 
}

export type AuthInterpeter = Interpreter<AuthContext, AuthState, AuthEvents>
export type AuthSerializedState = StateConfig<AuthContext, AuthEvents>

type AuthSuccess = { type: 'AUTH_SUCCESS'; authKey: string }
type AuthRequest = { type: 'AUTH_REQUEST' }
type AuthFailure = { type: 'AUTH_FAILURE' }
type AuthRemove = { type: "AUTH_REMOVE" }
type AuthRetry = { type: "AUTH_RETRY"}

export type AuthEvents =
    | AuthSuccess
    | AuthFailure
    | AuthRequest
    | AuthRemove
    | AuthRetry
    ;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const authMachine = (authKey?: string) => createMachine<AuthContext, AuthEvents, AuthState>({
  id: 'auth',
  initial: 'unauthenticated',
  context: {
    authKey
  },
  states: {
    unauthenticated: {
      on: {
        AUTH_REQUEST: 'authenticating'
      }
    },
    authenticating: {
      invoke: {
        id: 'near-auth',
        src: 'auth',
        onDone: {
          target: 'authenticated',
          actions: assign({
            authKey: (_context, event) => event.data
          })
        },
        onError: {
          target: 'failure'
        }
      }
    },
    authenticated: {
      on: {
        AUTH_REMOVE: {
          target: 'unauthenticated',
          actions: assign({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            authKey: (_c, _e) => undefined
          })
        },
        AUTH_REQUEST: 'authenticated'
      }
    },
    failure: {
      on: {
        AUTH_RETRY: 'unauthenticated',
      }
    }
  },
},
{
  services: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    auth: async (_context, _event): Promise<string> =>
      "tempKey"
  }
})

export type AuthMachine = ReturnType<typeof authMachine>

