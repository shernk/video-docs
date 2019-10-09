import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TopicFull } from "./../../models/topic/topic-full.model";
import { ATopicService } from "./atopic.service";
import { AHttpUtilityService } from "src/app/shared/services/http-utility/ahttp-utility.service";

@Injectable()
export class TopicService extends ATopicService {
  public base: string;

  constructor(public httpUtil: AHttpUtilityService, public http: HttpClient) {
    super();
    this.base = this.httpUtil.base;
  }

  public async getTopicByCategoryId(
    categoryId: string,
    topicId: string
  ): Promise<TopicFull> {
    try {
      const res = await this.http
        .get(`${this.base}/v1/topics/${topicId}/category/${categoryId}`)
        .toPromise();

      return new TopicFull(res);
    } catch (err) {
      return new TopicFull();
    }
  }
}
