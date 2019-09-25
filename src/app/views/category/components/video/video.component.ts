import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent {
  private embedUrl = "";
  public backgroundImageUrl = "";
  public videoUrl: SafeResourceUrl = "";
  @Input() public set videoId(value: string) {
    if (value) {
      this.embedUrl = `https://www.youtube.com/embed/${value}?autoplay=1`;
      this.backgroundImageUrl = `https://i.ytimg.com/vi/${value}/hqdefault.jpg`;
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

  public playVideo(): void {
    if (!this.videoUrl) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.embedUrl
      );
    }
  }
}
