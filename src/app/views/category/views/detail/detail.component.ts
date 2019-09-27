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
      const topicId = this.route.parent.snapshot.paramMap.get("topicId");
      const { detailId } = params;

      this.updateDetail();
    });
  }

  private async updateDetail(): Promise<void> {
    this.detail = await this.detailService.getDetailByCategoryTopicSimpledId(
      "javascript",
      "array",
      "filter"
    );
    // this.updateHeader(this.detail);
  }

  // private updateHeader(detail: Detail): void {
  //   const header = new Header({...detail, categorySimpleId: detail.simpleId});
  //   this.headerService.callHeader(header);
  // }
}
