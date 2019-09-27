import { Detail } from './../../../../components/shared/models/detail.model';
import { Component, Input } from "@angular/core";

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
  @Input() public playlist: Detail = new Detail();
  public selectedVideo: Detail = new Detail();

  public selectVideo(video: Detail): void {
    this.selectedVideo = video;
  }
}
