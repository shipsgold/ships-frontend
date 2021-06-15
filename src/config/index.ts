export interface ShipsConfig {
   apiURI: string
   apiPort: string 
   contractId: string
   frontendURI: string
   env: string
}

const config: ShipsConfig = {
  apiURI: process.env.SHIPS_API_URI || "http://localhost",
  apiPort: process.env.SHIPS_API_PORT || "8001",
  contractId: process.env.SHIPS_CONTRACT_ID || "",
  frontendURI: process.env.SHIPS_FRONTEND_URI || "http://localhost:3000", 
  env: process.env.SHIPS_ENV || "development",
}

export default config;