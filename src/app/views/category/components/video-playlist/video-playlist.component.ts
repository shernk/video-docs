import { Component, Input } from "@angular/core";
import { Detail } from 'src/app/shared/models/detail.model';

@Component({
  selector: "app-video-playlist",
  templateUrl: "./video-playlist.component.html",
  styleUrls: ["./video-playlist.component.scss"]
})
/**
 * ! Merge Playlist & Detail to Detail
 * At Ep41 - 19:26
 */
export class VideoPlayListComponent {
  @Input() public nextRouterPiece = "";
  @Input() public playlist: Detail[] = [];
  public selectedVideo: Detail = new Detail();

  public selectVideo(video: Detail): void {
    this.selectedVideo = video;
  }
}
