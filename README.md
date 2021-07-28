# Hardhat Boilerplate

## Setup

```sh
$ yarn install
$ yarn prepare
```

Create a `.env` following the `.env.example`:

```
INFURA_API_KEY=zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
MNEMONIC=here is where your twelve words mnemonic should be put my friend
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ yarn typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ yarn lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ yarn lint:ts
```

### Format files

```sh
$ yarn prettier
```

### Test

Run unit tests:

```sh
$ yarn test
```

Run a single test:

```sh
$ yarn test test/MyContract.test.ts
```

### Coverage

Generate a test coverage report:

```sh
$ yarn coverage
```

### Deploy and Verify

```sh
$ yarn deploy:kovan
$ yarn verify:kovan
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ yarn clean
```

## Tooling

- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
- [Solhint](https://github.com/protofire/solhint): linter
- [Solcover](https://github.com/sc-forks/solidity-coverage) code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter
