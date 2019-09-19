export class Course {
  public imageUrl: string;
  public title: string;
  public author: string;
  public authorImageUrl: string;
  public time: string;
  public url: string;

  constructor(data?: any) {
    const defaults = {
      imageUrl: "https://via.placeholder.com/320x180",
      title: "",
      author: "",
      authorImageUrl: 'https://via.placeholder.com/70x70',
      time: "",
      url: '',

      ...data
    };

    this.imageUrl = defaults.imageUrl;
    this.title = defaults.title;
    this.author = defaults.author;
    this.authorImageUrl = defaults.authorImageUrl;
    this.time = defaults.time;
    this.url = defaults.url;
  }
}
