import { Detail } from 'src/app/shared/models/detail.model';

export class Topic {
  public label: string;
  public simpleId: string;
  public playlist: Detail;

  constructor(data?: any) {
    const defaults = {
      label: "",
      simpleId: "",
      playlist: [],
      ...data
    };

    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
    this.playlist = new Detail(defaults.playlist);
  }
}
