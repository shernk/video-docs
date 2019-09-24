import { Topic } from "./topic.model";

export class TopicFull implements Topic {
  public id: string;
  public label: string;
  public simpleId: string;
  public playlistId: string;
  public videoId: string;

  constructor(data?: any) {
    const defaults = {
      id: "",
      label: "",
      simpleId: "",
      playlistId: "",
      videoId: "",
      ...data
    };

    this.id = defaults.id;
    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
    this.playlistId = defaults.playlistId;
    this.videoId = defaults.videoId;
  }
}
