import { waitUntilSettled } from "./wait-until-settled.js";

/** Generic implementation of `waitUntil` */
export class WaitUntilList {
  public settled = false;
  /** List of promises */
  private promises: Promise<any>[] = [];
  /** Add promise to wait until list */
  waitUntil = (promise: Promise<any>) => {
    if (this.settled) {
      throw new Error("WaitUntilList is already settled");
    }
    this.promises.push(promise);
  }
  /** Returns a promise that resolves when all promises in the list have been settled */
  waitUntilSettled = async () => {
    const results = await waitUntilSettled(this.promises);
    this.settled = true;
    return results;
  }
}
