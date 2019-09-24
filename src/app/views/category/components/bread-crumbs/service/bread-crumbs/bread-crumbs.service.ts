import { BreadCrumb } from "src/app/views/category/models/bread-crumbs.model";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable()
/**
 * TODO: watch again Ep38-50:00 util the end
 * TODO: have to fixe the breadCrumbs
 * https://www.youtube.com/watch?v=-XOdRzNsjcY
 */
export class BreadCrumbsService {
  public breadCrumbs: BreadCrumb[] = [];

  constructor(public router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        this.updateBreadCrumbs(navigationEnd.url);
      });
  }

  private updateBreadCrumbs(url: string): void {
    const nonValidUrlPieces = ['category', 'topic', 'detail'];
    const validCrumbs = url.split("/")
                          .filter(piece => piece.length > 0 && !nonValidUrlPieces.includes(piece));
    validCrumbs[validCrumbs.length - 1] = this.removeHash(validCrumbs);
    const crumbPices = validCrumbs.map(p => new BreadCrumb({ urlPiece: p }));
    this.breadCrumbs = crumbPices;
  }

  private removeHash(urlPieces: string[]): string {
    return urlPieces.length
      ? urlPieces[urlPieces.length - 1].split("#")[0]
      : "";
  }
}
