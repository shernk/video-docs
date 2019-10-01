import { MetaTag } from "src/app/components/shared/models/enums/meta-tag.enum";
import { ASeoService } from "./aseo.service";
import { Meta, Title } from "@angular/platform-browser";

export class SeoService implements ASeoService {
  // description
  constructor(public meta: Meta, public titleSerive: Title) {}

  public addMetaTag(name: MetaTag, content: string): void {
    this.handleMetaUpdate(name, content);
  }

  public addTwitterMeta(content: string, imageUrl: string): void {
    this.handleMetaUpdate(MetaTag.TwitterCard, "summary");
    this.handleMetaUpdate(MetaTag.TwitterSite, "@Sherk");
    this.handleMetaUpdate(MetaTag.TwitterTitle, this.titleSerive.getTitle());
    this.handleMetaUpdate(MetaTag.TwitterDescription, content);
    this.handleMetaUpdate(MetaTag.TwitterCreator, "@Sherk");
    this.handleMetaUpdate(MetaTag.TwitterDescription, imageUrl);
  }

  private handleMetaUpdate(name: MetaTag, content: string): void {
    const metaTag = this.meta.updateTag({ name, content });

    if (!metaTag) {
      this.meta.addTag({ name, content });
    }
  }
}
