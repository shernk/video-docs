import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ATopicService } from "../../services/topic/atopic.service";
import { TopicFull } from "../../models/topic/topic-full.model";
import { Detail } from "src/app/components/shared/models/detail.model";
import { ADetailService } from "../../services/detail/adetail.service";
import { Topic } from "../../models/topic/topic.model";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss", "../../category.component.scss"]
})
export class TopicComponent implements OnInit {
  public topic: TopicFull = new TopicFull();
  public detailPlaylist: Detail[] = [];

  constructor(
    private route: ActivatedRoute,
    private topicService: ATopicService,
    /* private headerService: AHeaderService */
    private detailService: ADetailService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { topicId } = params;
      const categoryId = this.route.snapshot.paramMap.get("categoryId");
      this.updateDetailPlaylist(categoryId, topicId);
      this.updateTopic(categoryId, topicId);
    });
  }

  private async updateDetailPlaylist(
    categorySimpleId: string,
    topciSimpleId: string
  ): Promise<void> {
    this.detailPlaylist = await this.detailService.getDetailByCategoryTopic(
      categorySimpleId,
      topciSimpleId
    );
  }

  private async updateTopic(
    categoryId: string,
    topicId: string
  ): Promise<void> {
    this.topic = await this.topicService.getTopicByCategoryId(
      categoryId,
      topicId
    );

    // this.updateHeader(this.topic);
  }

  /* private updateHeader(topic: Topic, categorySimpleId: string): void {
    const header = new Header({ ...topic, categorySimpleId });
    this.headerService.callHeader(header);
  } */
}
