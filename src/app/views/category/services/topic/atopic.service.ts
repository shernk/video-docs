import { TopicFull } from './../../models/topic/topic-full.model';

export abstract class ATopicService {
  abstract async getTopicByCategoryId(categorySimpleId: string, topicSimpleId: string): Promise<TopicFull>;
}
