export class Course {
  public imageUrl: string;
  public title: string;
  public author: string;
  public authorImageUrl: string;
  public url: string;

  constructor(data?: any) {
    const defaults = {
      imageUrl: 'https://via.placeholder.com/640x360',
      title: '',
      author: '',
      time: '',
      authorImageUrl: '',
      url: '',
      ...data
    };

    this.imageUrl = defaults.imageUrl;
    this.title = defaults.title;
    this.author = defaults.author;
    this.authorImageUrl = defaults.authorImageUrl;
    this.url = defaults.url;
  }
}
