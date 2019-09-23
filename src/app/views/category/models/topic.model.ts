export class Topic {
  public id: string;
  public label: string;
  public simpleId: string;

  constructor(data?: any) {
    const defaults = {
      id: "",
      label: "",
      simpleId: "",
      ...data
    };

    this.id = defaults.id;
    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
  }
}
