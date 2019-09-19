import { PlaylistItem } from "./../../../../components/shared/models/playlist-item.model";
import { Playlist } from "./../../../../components/shared/models/playlist.model";
import { PLAYLIST_IDS } from "./../../../../components/shared/models/data/playlist-ids.data";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-video-playlist",
  templateUrl: "./video-playlist.component.html",
  styleUrls: ["./video-playlist.component.scss"]
})
export class VideoPlayListComponent implements OnInit {
  public playlist: Playlist = new Playlist();
  public selectedVideo: PlaylistItem = new PlaylistItem();

  constructor(
    public route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.updatePlayList(params);
    });
  }

  private async updatePlayList(params: Params): Promise<void> {
    const playListId = PLAYLIST_IDS[params.id];


    this.selectVideo(playListId);
  }

  public selectVideo(videoId: string): void {
    this.selectedVideo = this.playlist.items[videoId];
  }
}
