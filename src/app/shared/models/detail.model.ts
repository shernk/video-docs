export class Detail {
  public readonly categorySimpleId: string;
  public readonly videoId: string;
  public readonly topicSimpleId: string;
  public readonly simpleId: string;
  public label: string;
  public description: string;
  public thumbnailUrl: string;

  constructor(data?: any) {
    const defaults = {
      videoId: '',
      topicSimpleId: '',
      simpleId: '',
      label: '',
      description: '',
      thumbnailUrl: '',
      categorySimpleId: '',
      ...data
    };

    this.categorySimpleId = defaults.categorySimpleId;
    this.simpleId = defaults.simpleId;
    this.videoId = defaults.videoId;
    this.topicSimpleId = defaults.topicSimpleId;
    this.label = defaults.label;
    this.description = defaults.description;
    this.thumbnailUrl = `https://i.ytimg.com/vi/${this.videoId}/default.jpg`;
  }
}
