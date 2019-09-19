export class PlaylistItem {
  public readonly videoId: string;
  public description: string;
  public title: string;
  public thumnailUrl: string;

  constructor(data?: any) {
    const defaults = {
      playlistId: "",
      title: "",
      thumnailUrl: "",
      description: "",
      snippet: {},
      resourceId: {},
      thumnails: { medium: {} },

      ...data
    };

    this.videoId = defaults.resourceId.videoId;
    this.description = defaults.snippet.description;
    this.title = defaults.snippet.title;
    this.thumnailUrl = defaults.thumnails.medium.url;
  }
}
