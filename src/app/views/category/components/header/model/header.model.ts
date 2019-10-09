export class Header {
  public label: string;
  public description: string;
  public simpleId: string;
  public categorySimpleId: string;

  constructor(data?: any) {
    const defaults = {
      label: '',
      description: '',
      simpleId: '',
      categorySimpleId: '',
      ...data
    };

    this.label = defaults.label;
    this.description = defaults.description;
    this.simpleId = defaults.simpleId;
    this.categorySimpleId = defaults.categorySimpleId;
  }
}
