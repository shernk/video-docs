import { Component } from "@angular/core";
import { ASeoService } from 'src/app/shared/seo/aseo.service';
import { MetaTag } from 'src/app/shared/models/enums/meta-tag.enum';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(public seoService: ASeoService) {
    this.addMetaTags();
  }

  private addMetaTags(): void {
    const descriptionContent =
      "VideoDevDocs is video based documentation for learning, testing, training developers of all skill sets.";
    this.seoService.addMetaTag(MetaTag.Description, descriptionContent);
  }
}
