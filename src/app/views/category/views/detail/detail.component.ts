import { Detail } from "src/app/components/shared/models/detail.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ADetailService } from "../../services/detail/adetail.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  public detail: Detail = new Detail();

  constructor(
    private route: ActivatedRoute,
    /* private headerService: AHeaderService */
    private detailService: ADetailService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const categoryId = this.route.parent.snapshot.paramMap.get("categoryId");
      const { topicId ,detailId } = params;

      this.updateDetail(categoryId, topicId, detailId);
    });
  }

  private async updateDetail(categorySimpleId: string, topicSimpleId: string,detailSimpleId: string): Promise<void> {
    this.detail = await this.detailService.getDetailByCategoryTopicSimpledId(
      "javascript",
      'array',
      detailSimpleId
    );
    // this.updateHeader(this.detail);
  }

  // private updateHeader(detail: Detail): void {
  //   const header = new Header({...detail });
  //   this.headerService.callHeader(header);
  // }
}
