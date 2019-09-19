export class Book {
  public imageUrl: string;
  public title: string;
  public description: string;
  public href: string;
  public rating: any;

  constructor(data?: any) {
    const defaults = {
      imageUrl: '',
      title: '',
      description: '',
      href: '',
      rating: '',
      ...data
    };

    this.imageUrl = defaults.imageUrl;
    this.title = defaults.title;
    this.description = defaults.description;
    this.href = defaults.href;
    this.rating = defaults.rating;
  }
}
