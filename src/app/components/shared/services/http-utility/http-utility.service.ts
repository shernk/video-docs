import { AHttpUtilityService } from "./ahttp-utility.service";
import { environment } from "src/environments/environment";

export class HttpUtilityService extends AHttpUtilityService {
  public base = "https://video-docs-services.herokuapp.com/api";

  constructor() {
    super();
    // this.updateBase();
  }

  // private async updateBase() {
  //   /***
  //    ** Eps34
  //    ** Time: 1:15:58
  //    *! Failed to get http://localhost:4200/api/environment
  //    ** BEGIN
  //    */
  //   let isProduction;
  //   try {
  //     const res = await fetch("/api/environment");
  //     const json = await res.json();
  //     isProduction = json;
  //   } catch {
  //     isProduction = false;
  //     //// console.error("API ERROR");
  //   }
  //   /***
  //    ** END
  //    */

  //   const productionBase = "https://video-docs-services.herokuapp.com/api/";

  //   /***
  //    ** Eps31
  //    ** Time: 50:00
  //    *! Failed to get http://localhost:4200/v1/category
  //    ** BEGIN
  //    */

  //   return isProduction ? productionBase : "http://localhost:3000/api/";
  //   /***
  //    ** END
  //    */
  // }
}
