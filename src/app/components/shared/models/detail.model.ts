export class Detail {
  public readonly simpleId: string;
  public readonly categorySimpleId: string;
  public readonly topicSimpleId: string;
  public readonly videoId: string;
  public description: string;
  public title: string;
  public thumnailUrl: string;

  constructor(data?: any) {
    const defaults = {
      simpleId: "",
      categorySimpleId: "",
      topicSimpleId: "",
      videoId: "",
      title: "",
      thumnailUrl: "",
      description: "",

      ...data
    };

    this.simpleId = defaults.simpleId;
    this.categorySimpleId = defaults.categorySimpleId;
    this.topicSimpleId = defaults.topicSimpleId;
    this.videoId = defaults.videoId;
    this.description = defaults.description;
    this.title = defaults.title;
    this.thumnailUrl = `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg`;
  }
}
