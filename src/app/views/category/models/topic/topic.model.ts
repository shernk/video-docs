import { Playlist } from "./../../../../components/shared/models/playlist.model";
export class Topic {
  public label: string;
  public simpleId: string;
  public playlist: Playlist;

  constructor(data?: any) {
    const defaults = {
      label: "",
      simpleId: "",
      playlist: [],
      ...data
    };

    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
    this.playlist = new Playlist(defaults.playlist);
  }
}
