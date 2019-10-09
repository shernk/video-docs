import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent {
  private embedUrl = "";
  public thumbnailUrl = '';
  @Input() public set videoId(value: string) {
    if (value) {
      this.videoUrl = '';
      this.embedUrl = `https://www.youtube.com/embed/${value}?autoplay=1`;
      this.thumbnailUrl = `https://i.ytimg.com/vi/${value}/hqdefault.jpg`;
    }
  }
  public videoUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) {}

  public playVideo(): void {
    if (!this.videoUrl) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.embedUrl
      );
    }
  }
}
