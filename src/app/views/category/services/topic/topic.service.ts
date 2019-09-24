import { HttpClient } from "@angular/common/http";
import { AHttpUtilityService } from "src/app/components/shared/services/http-utility/ahttp-utility.service";
import { Injectable } from "@angular/core";
import { TopicFull } from "./../../models/topic/topic-full.model";
import { ATopicService } from "./atopic.service";

@Injectable()
export class TopicService extends ATopicService {
  public base: string;

  constructor(
    public httpUtil: AHttpUtilityService,
    public http: HttpClient
  ) {
    super();
    this.base = this.httpUtil.base;
  }

  public async getTopicByCategoryId(
    categoryId: string,
    topicId: string
  ): Promise<TopicFull> {
    try {
      const res = await this.http
      /***
       * TODO: change route
       * ? `${this.base}/v1/topics/${categoryId}/category/${topicId}`
       * TODO: change route at server
       * TODO: watch again Ep37 at 1:54:10
       */
        .get(`${this.base}/v1/category/${categoryId}/topics/${topicId}`)
        .toPromise();

      return new TopicFull(res);
    } catch (err) {
      return new TopicFull();
    }
  }
}
