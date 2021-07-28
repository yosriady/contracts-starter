import { Signers } from "./";

declare module "mocha" {
  export interface Context {
    signers: Signers;
  }
}
