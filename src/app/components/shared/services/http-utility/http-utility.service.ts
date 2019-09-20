import { AHttpUtilityService } from "./ahttp-utility.service";
import { environment } from "src/environments/environment";

export class HttpUtilityService extends AHttpUtilityService {
  public base = "";

  constructor() {
    super();
    this.updateBase();
  }

  private updateBase(): string {
    const { production: isProduction } = environment;
    const productionBase = "video-docs-services.herokuapp.com/api/";

    return isProduction ? productionBase : "http://localhost:3000/api";
  }
}
