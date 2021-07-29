import ShipsApiClient from "@shipsgold/ships-client";
import { keyStores } from "near-api-js"

export interface ShipsConfig {
   apiURI: string
   apiPort: string 
   contractId: string
   frontendURI: string
   env: string
}
// eslint-disable-next-line no-debugger
const env =  process.env.SHIPS_ENV || "development"; 

interface NearNetworkConfig {
  networkId: string,
  nodeUrl: string,
  walletUrl: string,
}
type NetworkConfigs = { [index: string]: NearNetworkConfig };
const networksConfig: NetworkConfigs = {
  development: {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org"
  },
  staging: {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org"
  },
  production: {
    networkId: "mainnet",
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org"
  },
}

export const getNetworkConfig = (ev: string = env): NearNetworkConfig => {
  if(networksConfig[ev] === undefined) throw new Error(`Network does not exist ${config.env}`)
  return networksConfig[ev]
}


const config: ShipsConfig = {
  apiURI: process.env.SHIPS_API_URI || "http://localhost",
  apiPort: process.env.SHIPS_API_PORT || "8081",
  contractId: process.env.REACT_APP_SHIPS_PROJECT_CONTRACT_NAME || "",
  frontendURI: process.env.SHIPS_FRONTEND_URI || "http://localhost:3000", 
  env,
}


const getApi = () => {
  const apiURL = new URL(config.apiURI)
  const protocol = apiURL.protocol.slice(0,apiURL.protocol.length -1)
  const apiClient = new ShipsApiClient({
    transport: {
      host: apiURL.host,
      port: parseInt(config.apiPort, 10),
      type: protocol as "http" | "https",

    }
  })
  return apiClient
}
export const apiClient = getApi();


export default config;