import { ACategoryService } from "./acategory.service";
import { Category } from "../../models/category.model";

export class MockCategoryService extends ACategoryService {
  public lastCategoryId = "";

  public getCategory(simpleId: string): any {
    this.lastCategoryId = simpleId;

    return new Category({ simpleId });
  }

  public async getCategoryWithTopics(simpleId: string,topicId: string): Promise<Category> {
    this.lastCategoryId = simpleId;

    return new Category({ simpleId });
  }

  public async getCategoryWithDetails(simpleId: string, detailId: string): Promise<Category> {
    this.lastCategoryId = simpleId;

    return new Category({ simpleId });
  }
}
