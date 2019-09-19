import { ALocalStorage } from "./alocal-storage.model";

export class MockCategoryService extends ALocalStorage {
  public storage = {};

  public getItem(key: string): string {
    return this.storage[key];
  }

  public setItem(key: string, value: string): void {
    this.storage[key] = value;
  }
}
