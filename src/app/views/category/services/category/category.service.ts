import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../../models/category.model";
import { ACategoryService } from "./acategory.service";
import { AHttpUtilityService } from "src/app/components/shared/services/http-utility/ahttp-utility.service";

@Injectable()
export class CategoryService extends ACategoryService {
  public base: string;

  constructor(public httpUtil: AHttpUtilityService, public http: HttpClient) {
    super();
    this.base = this.httpUtil.base;
  }

  public async getCategory(categoryId: string): Promise<Category> {
    try {
      const res = await this.http
        /***
         ** Eps31
         ** Time: 50:00
         * ! Failed to get http://localhost:3000/v1/category, status 404
         //// .get(`${this.base}/v1/category`)
         */
        .get(`${this.base}/v1/category/${categoryId}`)    .toPromise();

      return new Category(res);
    } catch (err) {
      return new Category();
    }
  }
}
