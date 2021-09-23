import hre from 'hardhat';
import { Artifact } from 'hardhat/types';
import { expect } from 'chai';
import { contract } from './utils/context';
import { MyContract } from '../typechain/MyContract';

const { deployContract } = hre.waffle;

contract('MyContract', function () {
  beforeEach(async function () {
    const MyContractArtifact: Artifact = await hre.artifacts.readArtifact('MyContract');
    this.contract = <MyContract>await deployContract(this.signers.owner, MyContractArtifact, []);
  });

  it('returns greeting', async function () {
    expect(await this.contract.greet()).to.equal('Hello World!');
  });
});
