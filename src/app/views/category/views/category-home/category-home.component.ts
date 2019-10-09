import { MetaTag } from "src/app/shared/models/enums/meta-tag.enum";
import { Category } from "../../models/category.model";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ACategoryService } from "../../services/category/acategory.service";
import { AHeaderService } from "../../components/header/service/aheader.service";
import { ASeoService } from "src/app/shared/seo/aseo.service";
import { Header } from '../../components/header/model/header.model';

@Component({
  selector: "app-category-home",
  templateUrl: "./category-home.component.html",
  styleUrls: ["./category-home.component.scss"]
})
export class CategoryHomeComponent implements OnInit {
  @Input() public category: Category = new Category();

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService,
    private headerService: AHeaderService,
    private seoService: ASeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const { categoryId } = params;
      this.category = await this.categoryService.getCategory(categoryId);
      this.updateHeader(this.category);
    });
  }

  private updateHeader(category: Category): void {
    const header = new Header({ categorySimpleId: category.simpleId });
    this.headerService.callHeader(header);
    this.updateMetaDescription(header);
  }

  private updateMetaDescription(header: Header): void {
    this.seoService.addMetaTag(MetaTag.Description, header.description);
  }
}
