import { AHttpUtilityService } from "./ahttp-utility.service";
import { environment } from "src/environments/environment";

export class HttpUtilityService extends AHttpUtilityService {
  public base = "https://video-docs-services.herokuapp.com/api";

  constructor() {
    super();
  }
}
