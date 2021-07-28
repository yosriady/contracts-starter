import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Signers } from "../../types";

/// This is run at the beginning of each suite of tests
export function contract(description: string, hooks: () => void): void {
  describe(description, function () {
    before(async function () {
      this.signers = {} as Signers;
      const signers: SignerWithAddress[] = await ethers.getSigners();
      this.signers.owner = signers[0];
      this.signers.other = signers[1];

      // Space to initialize other helper functions below
      // this.loadFixture = createFixtureLoader((signers as Signer[]) as Wallet[]);
    });

    hooks();
  });
}
