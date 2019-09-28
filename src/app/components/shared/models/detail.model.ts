export class Detail {
  public readonly simpleId: string;
  public readonly categorySimpleId: string;
  public readonly topicSimpleId: string;
  public readonly videoId: string;
  public description: string;
  public label: string;
  public thumnailUrl: string;

  constructor(data?: any) {
    const defaults = {
      simpleId: "",
      categorySimpleId: "",
      topicSimpleId: "",
      videoId: "",
      label: "",
      thumnailUrl: "",
      description: "",

      ...data
    };

    this.simpleId = defaults.simpleId;
    this.categorySimpleId = defaults.categorySimpleId;
    this.topicSimpleId = defaults.topicSimpleId;
    this.videoId = defaults.videoId;
    this.description = defaults.description;
    this.label = defaults.label;
    this.thumnailUrl = `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg`;
  }
}
