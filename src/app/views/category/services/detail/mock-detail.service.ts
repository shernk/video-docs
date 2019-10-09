import { ADetailService } from "./adetail.service";
import { Detail } from 'src/app/shared/models/detail.model';

export class MockDetailService extends ADetailService {
  public lastCategorySimpleId = "";
  public lastTopicSimpleId = "";
  public lastDetailSimpleId = "";
  public detail = new Detail();
  public details = [];

  public async getDetailByCategoryTopic(
    categorySimpleId: string,
    topicSimpleId: string
  ): Promise<Detail[]> {
    this.lastCategorySimpleId = categorySimpleId;
    this.lastTopicSimpleId = topicSimpleId;

    return this.details;
  }

  public async getDetailByCategoryTopicSimpledId(
    categorySimpleId: string,
    topicSimpleId: string,
    detailSimpleId: string
  ): Promise<Detail> {
    this.getId(categorySimpleId, topicSimpleId, detailSimpleId);

    return this.detail;
  }

  private getId(
    lastCategorySimpleId: string,
    lastTopicSimpleId: string,
    lastDetailSimpleId: string
  ) {
    this.lastCategorySimpleId = lastCategorySimpleId;
    this.lastTopicSimpleId = lastTopicSimpleId;
    this.lastDetailSimpleId = lastDetailSimpleId;
  }
}
