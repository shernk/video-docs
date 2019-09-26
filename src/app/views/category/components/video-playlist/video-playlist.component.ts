import { PlaylistItem } from "./../../../../components/shared/models/playlist-item.model";
import { Playlist } from "./../../../../components/shared/models/playlist.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video-playlist",
  templateUrl: "./video-playlist.component.html",
  styleUrls: ["./video-playlist.component.scss"]
})
export class VideoPlayListComponent implements OnInit {
  @Input() public playlist: Playlist = new Playlist();
  public selectedVideo: PlaylistItem = new PlaylistItem();

  constructor(public route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {});
  }
}
