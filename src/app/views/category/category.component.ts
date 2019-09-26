import { async } from "q";
import { ActivatedRoute, Params } from "@angular/router";
import { ACategoryService } from "./services/category/acategory.service";

import { Component, OnInit } from "@angular/core";
import { Category } from "./models/category.model";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
/**
 * TODO: change CategoryComponent to documentationComponent
 * Ep38
 */
export class CategoryComponent implements OnInit {
  /**
   * TODO: change category's content related to to resources's content, services's related to content Ep38
   */
  public category = new Category();

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) {}

  public ngOnInit(): void {
    this.updateCategoryData();
  }

  private updateCategoryData(): void {
    this.route.params.subscribe(async params => {
      const { categoryId } = params;

      this.category = await this.categoryService.getCategory(categoryId);
    });
  }
}
