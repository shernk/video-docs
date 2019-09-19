import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: "app-twitter-post",
  templateUrl: "./twitter-post.component.html",
  styleUrls: ["./twitter-post.component.scss"]
})
export class TwitterPostComponent {
  // public twitterMessage = '';
  constructor(public titleService: Title, public router: Router) {}

  // public ngOnInit() {
  //   this.getTwitterMessage();
  // }

  public get getTwitterMessage(): string {
    const hashTags = this.getRouteHashTags();
    const link = encodeURI(`https://www.VideoDevDocs.com${this.router.url}`);
    const base = `https://twitter.com/intent/tweet?hashtags=${hashTags}&related=1696198=${link}&text=`;
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()}! Where documentation is more than just text!`
    );

    return `${base}${message}`;
  }

  public getRouteHashTags(): string {
    const routePieces = this.router.url
      .split("/")
      .filter(routePiece => routePiece.length);
    let hashTags = "";

    for (let i = 1; i < routePieces.length; i++) {
      hashTags += routePieces[i];
    }

    return hashTags;
  }
}
