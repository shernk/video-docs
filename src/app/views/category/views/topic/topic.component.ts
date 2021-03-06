import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ATopicService } from "../../services/topic/atopic.service";
import { TopicFull } from "../../models/topic/topic-full.model";
import { ADetailService } from "../../services/detail/adetail.service";
import { Detail } from 'src/app/shared/models/detail.model';
import { ASeoService } from 'src/app/shared/seo/aseo.service';
import { AHeaderService } from '../../components/header/service/aheader.service';
import { Topic } from '../../models/topic/topic.model';
import { MetaTag } from 'src/app/shared/models/enums/meta-tag.enum';
import { Header } from '../../components/header/model/header.model';

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss"]
})
export class TopicComponent implements OnInit {
  public topic: TopicFull = new TopicFull();
  public detailPlaylist: Detail[] = [];

  constructor(
    private route: ActivatedRoute,
    private topicService: ATopicService,
    private headerService: AHeaderService,
    private detailService: ADetailService,
    private seoService: ASeoService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const categoryId = this.route.snapshot.paramMap.get("categoryId");
      const { topicId } = params;
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
    categorySimpleId: string,
    topicId: string
  ): Promise<void> {
    this.topic = await this.topicService.getTopicByCategoryId(
      categorySimpleId,
      topicId
    );

    this.updateHeader(this.topic);
  }

  private updateHeader(topic: Topic): void {
    const header = new Header({ ...topic });
    this.headerService.callHeader(header);
    this.seoService.addMetaTag(MetaTag.Description, header.description);
  }
}
