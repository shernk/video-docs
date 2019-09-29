import { ASeoService } from "./aseo.service";

export class MockSeoService implements ASeoService {
  public lastTagName = "";
  public lastContent = "";

  public addMetaTag(tagName: string, content: string): void {
    this.lastTagName = tagName;
    this.lastContent = content;
  }
}
