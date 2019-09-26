import { PlaylistItem } from "./../../../../components/shared/models/playlist-item.model";
import { ADetailService } from "./adetail.service";
import { timingSafeEqual } from 'crypto';

export class MockDetailService extends ADetailService {

  public lastCategorySimpleId = "";
  public lastTopicSimpleId = "";
  public lastDetailSimpleId = "";
  public detail = new PlaylistItem();
  public details = [];

  public async getDetailByCategoryTopic(categorySimpleId: string, topicSimpleId: string): Promise<PlaylistItem[]> {
    this.lastCategorySimpleId = categorySimpleId;
    this.lastTopicSimpleId = topicSimpleId;

    return this.details;
  }



  public async getDetailByCategoryTopicSimpledId(categorySimpleId: string, topicSimpleId: string, detailSimpleId: string): Promise<PlaylistItem> {
    this.getId(categorySimpleId, topicSimpleId, detailSimpleId);

    return this.detail;
  }

  private getId(lastCategorySimpleId: string, lastTopicSimpleId: string, lastDetailSimpleId: string) {
    this.lastCategorySimpleId = lastCategorySimpleId;
    this.lastTopicSimpleId = lastTopicSimpleId;
    this.lastDetailSimpleId = lastDetailSimpleId;
  }
}
