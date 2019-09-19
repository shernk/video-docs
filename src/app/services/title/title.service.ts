import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { DISPLAY_META_DATA } from "src/app/components/shared/models/data/display-meta-data.data";

@Injectable({
  providedIn: "root"
})
export class TitleService {
  constructor(public router: Router, public titleService: Title) {}

  public init(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        this.updateTitle(navigationEnd);
      });
  }

  private updateTitle(navigation: NavigationEnd): void {
    const urlPieces: string[] = navigation.url
      .split("/")
      .filter(piece => piece.length > 0);
    urlPieces[urlPieces.length - 1] = this.removeHash(urlPieces);

    switch (urlPieces.length) {
      case 1:
        this.setRootPage(urlPieces);
        break;
      case 2:
        this.setSubCategoryTitle(urlPieces);
        break;
      default:
        this.titleService.setTitle("Video Dev Docs | VDD");
    }
  }

  private setRootPage(urlPiece: string[]): void {
    const capitalizeRootPage = `${urlPiece[0][0].toUpperCase()}${urlPiece[0].slice(
      1
    )} - Video Dev Docs | VDD`;

    this.titleService.setTitle(capitalizeRootPage);
  }

  private setSubCategoryTitle(urlPieces: string[]): void {
    const actualCategory = urlPieces[1];
    const title = `${actualCategory.toUpperCase()} | VDD`;

    if (actualCategory === "javascript") {
      this.titleService.setTitle(`${DISPLAY_META_DATA[actualCategory]} |  VDD`);
    }

    this.titleService.setTitle(title);
  }

  private removeHash(urlPieces: string[]): string {
    return urlPieces.length
      ? urlPieces[urlPieces.length - 1].split("#")[0]
      : "";
  }
}
