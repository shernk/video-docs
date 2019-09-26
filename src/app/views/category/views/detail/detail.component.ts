import { PlaylistItem } from "src/app/components/shared/models/playlist-item.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ADetailService } from "../../services/detail/adetail.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss", "../../category.component.scss"]
})
export class DetailComponent implements OnInit {
  public detail: PlaylistItem = new PlaylistItem();

  constructor(
    private route: ActivatedRoute,
    private detailService: ADetailService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const topicId = this.route.parent.snapshot.paramMap.get("topicId;");
      const { detailId } = params;

      this.updateDetail();
    });
  }

  private async updateDetail(
  ): Promise<void> {
    this.detail = await this.detailService.getDetailByCategoryTopicSimpledId(
      "javascript",
      "array",
      "filter"
    );
  }
}
