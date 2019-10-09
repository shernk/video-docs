import { Component } from "@angular/core";
import { ASeoService } from 'src/app/shared/seo/aseo.service';
import { MetaTag } from 'src/app/shared/models/enums/meta-tag.enum';
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
