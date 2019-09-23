import { Category } from "./../../models/category.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ACategoryService } from "../../services/category/acategory.service";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.scss", "../../category.component.scss"]
})
export class TopicComponent implements OnInit {
  public category: Category = new Category();

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { categoryId, topicId } = params;

      this.updateTopic(categoryId, topicId);
      this.updateCategory(categoryId);
    });
  }

  private async updateTopic(categoryId: string, topicId: string): Promise<void> {
    // this.category = await this.categoryService.getCategoryWithTopics(categoryId, topicId);
  }

  private async updateCategory(categoryId: string): Promise<void> {
    this.category = await this.categoryService.getCategory(categoryId);
  }
}
