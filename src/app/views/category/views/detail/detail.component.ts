import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ADetailService } from "../../services/detail/adetail.service";
import { ASeoService } from "src/app/shared/seo/aseo.service";
import { Detail } from "src/app/shared/models/detail.model";
import { AHeaderService } from "../../components/header/service/aheader.service";
import { MetaTag } from "src/app/shared/models/enums/meta-tag.enum";
import { Header } from '../../components/header/model/header.model';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  public detail: Detail = new Detail();
  public detailPlaylist: Detail[] = [];

  constructor(
    private route: ActivatedRoute,
    private headerService: AHeaderService,
    private detailService: ADetailService,
    private seoService: ASeoService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const categoryId = this.route.parent.snapshot.paramMap.get("categoryId");
      const { topicId, detailId } = params;

      this.updateDetail(categoryId, topicId, detailId);
      this.updateDetailPlaylist(categoryId, topicId);
    });
  }

  private async updateDetail(
    categorySimpleId: string,
    topicSimpleId: string,
    detailSimpleId: string
  ): Promise<void> {
    this.detail = await this.detailService.getDetailByCategoryTopicSimpledId(
      categorySimpleId,
      topicSimpleId,
      detailSimpleId
    );
    this.updateHeader(this.detail);
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

  private updateHeader(detail: Detail): void {
    const header = new Header({ ...detail });
    this.headerService.callHeader(header);
    this.seoService.addMetaTag(MetaTag.Description, header.description);
    this.seoService.addTwitterMeta(
      header.description,
      this.detail.thumbnailUrl
    );
  }
}
