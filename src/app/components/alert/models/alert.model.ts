import { LocalStorageKey } from "../../shared/models/enums/local-storage-key.enum";
import { AlertTypes } from "./enums/alert-types.enum";

export class Alert {
  public type: AlertTypes;
  public title: string;
  public content: string;
  public key: LocalStorageKey;

  constructor(data?: any) {
    const defaults = {
      title: "",
      content: "",
      ...data
    };

    this.type = defaults.type;
    this.title = defaults.title;
    this.content = defaults.content;
    this.key = defaults.key;
  }
}
