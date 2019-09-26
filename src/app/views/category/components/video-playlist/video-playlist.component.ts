import { PlaylistItem } from "./../../../../components/shared/models/playlist-item.model";
import { Playlist } from "./../../../../components/shared/models/playlist.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-video-playlist",
  templateUrl: "./video-playlist.component.html",
  styleUrls: ["./video-playlist.component.scss"]
})
/**
 * ! Merge Playlist & PlaylistItem to Detail
 * At Ep41 - 19:26
 */
export class VideoPlayListComponent {
  @Input() public playlist: Playlist = new Playlist();
  public selectedVideo: PlaylistItem = new PlaylistItem();

  public selectVideo(video: PlaylistItem): void {
    this.selectedVideo = video;
  }
}
