import { Category } from "./../../models/category.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ACategoryService } from "../../services/category/acategory.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss", "../../category.component.scss"]
})
export class DetailComponent implements OnInit {
  public category: Category = new Category();

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { categoryId, detailId } = params;

      this.updateDetail(categoryId, detailId);
      this.updateCategory(categoryId);
    });
  }

  private async updateDetail(categoryId: string, detailId: string): Promise<void> {
    this.category = await this.categoryService.getCategoryWithDetails(categoryId, detailId);
  }

  private async updateCategory(categoryId: string): Promise<void> {
    this.category = await this.categoryService.getCategory(categoryId);
  }
}
