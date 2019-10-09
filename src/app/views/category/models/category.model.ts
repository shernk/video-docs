import { TabContainer } from "./tab-container.model";
import { Topic } from "./topic/topic.model";

export class Category {
  public simpleId: string;
  public label: string;
  public description: string;
  public topics: Topic[];
  public tabContainers: TabContainer[];

  constructor(data?: any) {
    const defaults = {
      id: "",
      simpleId: "",
      label: "",
      description: "",
      topics: [],
      tabContainers: [],

      ...data
    };

    this.simpleId = defaults.simpleId;
    this.label = defaults.label;
    this.description = defaults.description;
    this.topics = defaults.topics.map((topic: any) => new Topic(topic));
    this.tabContainers = defaults.tabContainers.map(
      tabContainer => new TabContainer(tabContainer)
    );
  }
}
