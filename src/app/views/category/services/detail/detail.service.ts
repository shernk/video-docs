import { HttpClient } from "@angular/common/http";
import { ADetailService } from "./adetail.service";
import { Injectable } from "@angular/core";
import { AHttpUtilityService } from 'src/app/shared/services/http-utility/ahttp-utility.service';
import { Detail } from 'src/app/shared/models/detail.model';

@Injectable()
export class DetailService extends ADetailService {
  public base: string;

  constructor(public httpUtil: AHttpUtilityService, public http: HttpClient) {
    super();
    this.base = this.httpUtil.base;
  }

  public async getDetailByCategoryTopicSimpledId(
    categorySimpleId: string,
    topicSimpleId: string,
    detailSimpleId: string
  ): Promise<Detail> {
    try {
      const res: any = await this.http
        .get(
          `${this.base}/v1/details/${detailSimpleId}/category/${categorySimpleId}/topics/${topicSimpleId}`
        )
        .toPromise();

      return new Detail(res);
    } catch (error) {
      return new Detail();
    }
  }

  public async getDetailByCategoryTopic(
    categorySimpleId: string,
    topicsSimpleId: string
  ): Promise<Detail[]> {
    try {
      const res: any = await this.http
        .get(
          `${this.base}/v1/details/category/${categorySimpleId}/topics/${topicsSimpleId}`
        )
        .toPromise();

      return res.map((playlistItem: any) => new Detail(playlistItem));
    } catch (error) {
      return [];
    }
  }
}
