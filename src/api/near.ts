import nearAPI from 'near-api-js'

export async function auth(): Promise<string>{
  return 'foobar'
}

const testNetConfig = {
  networkId: 'default',
  nodeUrl: 'https://rpc.testnet.near.org',
  contractName: "bob",
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org'
};



export async function init(): Promise<void> {
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()
    },
    ...testNetConfig
  });
  const wallet = new nearAPI.WalletConnection(near, null);
  wallet.requestSignIn(
    "example-contract.testnet",     // contract requesting access 
    "Example App",                  // optional
  );

}

export {}