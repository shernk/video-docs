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
export class CategoryComponent implements OnInit {
  public category = new Category();
  public resourceList = ["books", "courses"];

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) {}

  public ngOnInit(): void {
    this.updateCategoryDate();
  }

  private updateCategoryDate(): void {
    this.route.params.subscribe(async params => {
      const { categoryId } = params;

      this.category = await this.categoryService.getCategory(categoryId);      
    });
  }
}
