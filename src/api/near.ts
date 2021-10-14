import {connect, keyStores, Near, WalletConnection} from "near-api-js";
import config, { getNetworkConfig } from "../config";


export async function getConnection(keyStore: keyStores.BrowserLocalStorageKeyStore):Promise<Near>{
  return connect({
    deps: {
      keyStore
    },
    ...getNetworkConfig()
  });
}

export async function getWalletConnection(near: Near): Promise<WalletConnection> {
  return new WalletConnection(near, null);
}

export const walletSignIn = async (wallet: WalletConnection, contractId: string, contractName: string): Promise<string> => {
  if(wallet.isSignedIn() === false){
    // eslint-disable-next-line no-underscore-dangle
    await wallet.requestSignIn(
      contractId,     // contract requesting access 
      contractName,                  // optional
      config.frontendURI, // successs
      config.frontendURI, // failure
    );
  }
  return wallet.getAccountId();
}

export default getWalletConnection 