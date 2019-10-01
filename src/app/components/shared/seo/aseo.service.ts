export abstract class ASeoService {
  public abstract addMetaTag(tagName: string, content: string): void;
  public abstract addTwitterMeta(content: string, imageUrl: string);
}
