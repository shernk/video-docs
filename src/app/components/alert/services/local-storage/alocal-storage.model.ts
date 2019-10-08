
export abstract class ALocalStorage {
  abstract getItem(key: string): string;
  abstract setItem(key: string, value: string): void;
}
