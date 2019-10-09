import { BreadCrumbsService } from "./service/bread-crumbs/bread-crumbs.service";
import { BreadCrumb } from "./../../models/bread-crumbs.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.scss"]
})
export class BreadCrumbsComponent {
  @Input() public breadCrumbs: BreadCrumb[] = [];

  constructor(public breadCrumbsService: BreadCrumbsService) {
    this.breadCrumbsService.breadCrumbsSubject
      .asObservable()
      .subscribe((breadCrumbs: BreadCrumb[]) => {
        this.breadCrumbs = breadCrumbs;
      });
  }

  public getRouteUrl(index: number): string {
    let url = "/category/";

    if (index >= 0) {
      url += this.breadCrumbs[0].urlPiece;
    }

    if (index >= 1) {
      url += `/topic/${this.breadCrumbs[1].urlPiece}`;
    }

    if (index >= 2) {
      url += `/detail/${this.breadCrumbs[2].urlPiece}`;
    }

    return url;
  }
}
