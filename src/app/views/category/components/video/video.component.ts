import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent {
  public hasBeenPlayed = false;
  public videoUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) {}

  public playVideo() {
    if (!this.hasBeenPlayed) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/gaYWg9967ZY?autoplay=1"
      );
    }

    this.hasBeenPlayed = true;
  }
}
