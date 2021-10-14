/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const process = require('process')

async function outputScript(){
  // path is assumed path to near/dev-account for the contract you want 
  const devPath = process.argv[2]; 
  const contractName = (await fs.readFile(`${devPath}`)).toString()
  await fs.writeFile(`${__dirname}/dev_env.sh`,`#!/bin/bash
export REACT_APP_SHIPS_PROJECT_CONTRACT_NAME=${contractName}
`)
}
outputScript()
