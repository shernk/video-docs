import { Detail } from 'src/app/shared/models/detail.model';

export class Topic {
  public label: string;
  public simpleId: string;

  constructor(data?: any) {
    const defaults = {
      label: "",
      simpleId: "",
      ...data
    };

    this.label = defaults.label;
    this.simpleId = defaults.simpleId;
  }
}
