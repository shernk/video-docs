import { DISPLAY_META_DATA } from "src/app/components/shared/models/data/display-meta-data.data";

export class BreadCrumb {
  public label: string;
  public urlPiece: string;
  public iconClasses: string;

  constructor(data?: any) {
    const defaults = {
      urlPiece: "",

      ...data
    };

    this.label = this.getLabel(defaults.urlPiece);
    this.urlPiece = defaults.urlPiece;
    this.iconClasses = this.getIconClasses(defaults.urlPiece);
  }

  private getLabel(urlPiece: string): string {
    if (DISPLAY_META_DATA.hasOwnProperty(urlPiece)) {
      return DISPLAY_META_DATA[urlPiece].label;
    }

    urlPiece = `${urlPiece[0].toUpperCase()}${urlPiece.slice(1)}`;

    return urlPiece;
  }

  private getIconClasses(urlPiece: string): string {
    if (DISPLAY_META_DATA.hasOwnProperty(urlPiece)) {
      return DISPLAY_META_DATA[urlPiece].iconClasses;
    }

    return "";
  }
}
