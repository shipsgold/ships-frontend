/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const process = require('process')
const os = require("os");

async function outputScript(){
  // path is assumed path to near/dev-account for the contract you want 
  const devPath = process.argv[2]; 
  const contractName = (await fs.readFile(`${devPath}`)).toString()
  const contractKeyfile = `${os.homedir()}/.near-credentials/testnet/${contractName}.json`
  const keyJSON = await fs.readJSON(contractKeyfile)
  await fs.writeFile(`${__dirname}/dev_env.sh`,`#!/bin/bash
export REACT_APP_SHIPS_PROJECT_CONTRACT_NAME=${contractName}
`)
}
outputScript()
