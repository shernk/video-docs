import { ASeoService } from "./aseo.service";

export class MockSeoService implements ASeoService {
  public lastImageUrl = "";
  public lastTagName = "";
  public lastContent = "";

  public addMetaTag(tagName: string, content: string): void {
    this.lastTagName = tagName;
    this.lastContent = content;
  }

  public addTwitterMeta(content: string, imageUrl: string): void {
    this.lastContent = content;
    this.lastImageUrl = imageUrl;
  }
}
