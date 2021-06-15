import ShipsClient from "@shipsgold/ships-client";
import config from "../config";

const client = new ShipsClient({
  "transport": {
    "host": config.apiURI,
    type: "http",
    port: parseInt(config.apiPort, 10)
  }
});

export default client;

