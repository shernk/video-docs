import { Detail } from './../../../../components/shared/models/detail.model';
import { Topic } from "./topic.model";

export class TopicFull implements Topic {
  public categorySimpleId: string;
  public description: string;
  public label: string;
  public simpleId: string;
  public playlistId: string;
  public playlist: Detail;
  public videoId: string;

  constructor(data?: any) {
    const defaults = {
      categorySimpleId: "",
      description: "",
      label: "",
      simpleId: "",
      playlistId: "",
      playlist: [],
      videoId: "",
      ...data
    };

    this.categorySimpleId = defaults.categorySimpleId;
    this.description = defaults.description;
    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
    this.playlistId = defaults.playlistId;
    this.playlist = new Detail(defaults.playlist);
    this.videoId = defaults.videoId;
  }
}
