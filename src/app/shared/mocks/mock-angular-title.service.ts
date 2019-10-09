export class MockAngularTitleService {
  public lastTitle: string;

  public setTitle(value: string): void {
    this.lastTitle = value;
  }

  public getTitle(): string {
    return this.lastTitle;
  }
}
