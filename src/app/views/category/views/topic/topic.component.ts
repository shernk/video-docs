import { Category } from "./../../models/category.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ACategoryService } from "../../services/category/acategory.service";
import { ATopicService } from "../../services/topic/atopic.service";
import { TopicFull } from '../../models/topic/topic-full.model';

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss", "../../category.component.scss"]
})
export class TopicComponent implements OnInit {
  public categoryId = "";
  public topic: TopicFull = new TopicFull();

  constructor(
    private route: ActivatedRoute,
    private topicService: ATopicService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { categoryId, topicId } = params;
      this.categoryId = this.route.snapshot.paramMap.get('categoryId');
      this.updateTopic(categoryId, topicId);
    });
  }

  private async updateTopic(
    categoryId: string,
    topicId: string
  ): Promise<void> {
    this.topic = await this.topicService.getTopicByCategoryId(
      categoryId,
      topicId
    );
  }
}
