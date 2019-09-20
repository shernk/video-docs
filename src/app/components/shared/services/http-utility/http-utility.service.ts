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

    const productionBase = "https://video-docs-services.herokuapp.com/api/";

    /***
    ** Eps31
    ** Time: 50:00
    * ! Failed to get http://localhost:3000/v1/category, status 404
    */

    return isProduction ? productionBase : "http://localhost:3000/api/";
  }
}
