import hre from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { deployMockContract, MockContract } from "ethereum-waffle";
import { Artifact } from "hardhat/types";

export async function deployMockMyContract(owner: SignerWithAddress): Promise<MockContract> {
  const artifact: Artifact = await hre.artifacts.readArtifact("MyContract");
  const contract = await deployMockContract(owner, artifact.abi);
  return contract;
}
