import { Header } from './models/header/header.model';
import { ActivatedRoute } from "@angular/router";
import { ACategoryService } from "./services/category/acategory.service";
import { AResourcesService } from "./services/resources/aresources.service";
import { Resources } from "./models/resources.model";
import { Component, OnInit } from "@angular/core";
import { Category } from "./models/category.model";
import { ASeoService } from 'src/app//shared/seo/aseo.service';
import { MetaTag } from 'src/app/shared/models/enums/meta-tag.enum';

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
/**
 * TODO: change CategoryComponent to documentationComponent
 * *Ep38
 * TODO: stransfrom whole CategoryComponent's content to cateComponent and change the its name.
 */
export class CategoryComponent implements OnInit {
  /**
   * TODO: change category's content related to to resources's content, services's related to content
   * *Ep38
   */
  /**
   * TODO: Create Header Service to update header depend on API
   * *Ep42
   */
  /**
   * TODO: Need to transform to cate(category) component.
   * *Ep42 - 41:44
   */
  public category = new Category();

  constructor(
    private route: ActivatedRoute,
    /* private headerService: AHeaderService */
    private seoService: ASeoService,
    private categoryService: ACategoryService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { categoryId } = params;
      this.category = await this.categoryService.getCategory(categoryId);
      // this.updateHeader(this.category);
    });
  }

  // private updateHeader(category: Category): void {
  //   const header = new Header({...category, categorySimpleId: category.simpleId});
  //   this.headerService.callHeader(header);
  //   this.updateMetaDescription(header);
  // }

  private updateMetaDescription(header: Header): void {
    this.seoService.addMetaTag(MetaTag.Description, header.description);
  }
}

//  ! this is a own content
export class DocumentationComponent implements OnInit {
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
