import { PlaylistItem } from "src/app/components/shared/models/playlist-item.model";
import { HttpClient } from "@angular/common/http";
import { AHttpUtilityService } from "src/app/components/shared/services/http-utility/ahttp-utility.service";
import { ADetailService } from "./adetail.service";
import { Injectable } from "@angular/core";

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
  ): Promise<PlaylistItem> {
    try {
      const res: any = await this.http
        .get(
          `${this.base}/v1/details/${detailSimpleId}/category/${categorySimpleId}/topics/${topicSimpleId}`
        )
        .toPromise();

      return new PlaylistItem(res);
    } catch (error) {
      return new PlaylistItem();
    }
  }

  public async getDetailByCategoryTopic(
    categorySimpleId: string,
    topicsSimpleId: string
  ): Promise<PlaylistItem[]> {
    try {
      const res: any = await this.http
        .get(
          `${this.base}/v1/details/category/${categorySimpleId}/topics/${topicsSimpleId}`
        )
        .toPromise();

      return res.map((playlistItem: any) => new PlaylistItem(playlistItem));
    } catch (error) {
      return [];
    }
  }
}
