import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-twitter-post",
  templateUrl: "./twitter-post.component.html",
  styleUrls: ["./twitter-post.component.scss"]
})
export class TwitterPostComponent {
  constructor(public titleService: Title, public router: Router) {}

  public get twitterMessage(): string {
    const base = this.getBaseWithHashtagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()}! Where documentation is more than just text!`
    );

    return `${base}${message}`;
  }

  private getBaseWithHashtagsAndRoute(): string {
    const route = this.getRouteUrl();
    const hashtags = this.getRouteHashtags();

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashtags
    )}&related=pizzapokerguy&url=${route}&text=`;
  }

  private getRouteUrl(): string {
    return encodeURI(
      `https://www.VideoDevDocs.com${this.getHashFragmentFreeURL()}`
    );
  }

  private getRouteHashtags(): string {
    const removeHashFragments = this.getHashFragmentFreeURL();
    const routePieces = removeHashFragments
      .split("/")
      .filter(routePiece => routePiece.length);
    const hashTags = [];

    for (let i = 1; i < routePieces.length; i++) {
      hashTags.push(routePieces[i]);
    }

    return hashTags.join(",");
  }

  private getHashFragmentFreeURL(): string {
    const hasHashFragment = this.router.url.includes("#");

    if (hasHashFragment) {
      const hasFragments = this.router.url.split("#");
      hasFragments.pop();

      return hasFragments.join("");
    }

    return this.router.url;
  }
}
