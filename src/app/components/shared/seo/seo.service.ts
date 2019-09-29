import { ASeoService } from "./aseo.service";
import { Meta } from "@angular/platform-browser";

export class SeoService implements ASeoService {
  // description
  constructor(public meta: Meta) {}

  public addMetaTag(name: string, content: string): void {
    this.meta.addTag({name, content});
  }
}
