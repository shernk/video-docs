import { MetaTag } from "src/app/components/shared/models/enums/meta-tag.enum";
import { Component } from "@angular/core";
import { ASeoService } from "src/app/components/shared/seo/aseo.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  constructor(public seoService: ASeoService) {
    this.updateMetaDescription();
  }

  private updateMetaDescription(): void {
    this.seoService.addMetaTag(MetaTag.Description, "Connect");
  }
}
