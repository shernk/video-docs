import { Detail } from 'src/app/shared/models/detail.model';

export abstract class ADetailService {
  public abstract async getDetailByCategoryTopic(
    categorySimpleId: string,
    topicSimpleId: string
  ): Promise<Detail[]>;

  public abstract async getDetailByCategoryTopicSimpledId(
    categorySimpleId: string,
    topicSimpleId: string,
    detailSimpleId: string
  ): Promise<Detail>;
}
