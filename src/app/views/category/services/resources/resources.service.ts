import { HttpClient } from "@angular/common/http";
import { AResourcesService } from "./aresources.service";
import { Resources } from "../../models/resources.model";
import { Injectable } from '@angular/core';
import { AHttpUtilityService } from 'src/app/shared/services/http-utility/ahttp-utility.service';

@Injectable()
export class ResourcesService extends AResourcesService {
  public base: string;

  constructor(public httpUtil: AHttpUtilityService, public http: HttpClient) {
    super();
    this.base = this.httpUtil.base;
  }

  public async getResourcesById(simpleId: string): Promise<any> {
    try {
      const res = await this.http.get(`${this.base}/v1/resources/${simpleId}`);

      return new Resources(res);
    } catch (error) {
      return new Resources();
    }
  }
}
