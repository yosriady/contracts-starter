import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

import './tasks/accounts';
import './tasks/clean';

import { resolve } from 'path';
import { config as dotenvConfig } from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';
dotenvConfig({ path: resolve(__dirname, './.env') });

// Ensure that we have all the environment variables we need.
let mnemonic: string;
if (!process.env.MNEMONIC) {
  throw new Error('Please set your MNEMONIC in a .env file');
} else {
  mnemonic = process.env.MNEMONIC;
}
const accounts = {
  mnemonic,
};

let infuraApiKey: string;
if (!process.env.INFURA_API_KEY) {
  throw new Error('Please set your INFURA_API_KEY in a .env file');
} else {
  infuraApiKey = process.env.INFURA_API_KEY;
}

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts,
      chainId: 31337,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraApiKey}`,
      accounts,
      chainId: 42,
    },
  },
  namedAccounts: {
    deployer: 0,
    other: 1,
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    version: '0.8.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 50,
    enabled: process.env.DISABLE_GAS_REPORT ? false : true,
  },
};

export default config;
