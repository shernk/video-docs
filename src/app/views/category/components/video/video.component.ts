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
  @Input() public set videoId(videoId: string) {
    if (videoId) {
      this.videoUrl = '';
      this.embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      this.thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
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
