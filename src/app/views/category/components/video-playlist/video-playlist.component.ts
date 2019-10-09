import { Component, Input } from "@angular/core";
import { Detail } from "src/app/shared/models/detail.model";

@Component({
  selector: "app-video-playlist",
  templateUrl: "./video-playlist.component.html",
  styleUrls: ["./video-playlist.component.scss"]
})
export class VideoPlayListComponent {
  @Input() public nextRoutePiece = "";
  @Input() public pickedVideo = 1;
  @Input() public playlists: Detail[] = [];
  public selectedVideo: Detail = new Detail();

  public selectVideo(video: Detail): void {
    this.selectedVideo = video;
  }

  public pickVideo(): void {
    this.pickedVideo = this.playlists.length - this.selectVideo.length;
  }
}
