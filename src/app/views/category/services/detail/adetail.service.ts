import { PlaylistItem } from './../../../../components/shared/models/playlist-item.model';

export abstract class ADetailService {
  public abstract async getDetailByCategoryTopic(
    categorySimpleId: string,
    topicSimpleId: string
  ): Promise<PlaylistItem[]>;

  public abstract async getDetailByCategoryTopicSimpledId(
    categorySimpleId: string,
    topicSimpleId: string,
    detailSimpleId: string
  ): Promise<PlaylistItem>;
}
