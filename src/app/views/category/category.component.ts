import { ActivatedRoute } from "@angular/router";
import { AResourcesService } from "./services/resources/aresources.service";
import { Resources } from "./models/resources.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  public resources = new Resources();

  constructor(
    private route: ActivatedRoute,
    private resourcesService: AResourcesService
  ) {}

  public ngOnInit(): void {
    this.updateResources();
  }

  private updateResources(): void {
    this.route.params.subscribe(async params => {
      const { categoryId } = params;
      this.resources = await this.resourcesService.getResourcesById(categoryId);
    });
  }
}
