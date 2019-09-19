import { ACategoryService } from "./acategory.service";
import { Category } from "../../models/category.model";

export class MockCategoryService extends ACategoryService {
  public lastCategoryId = '';

  public getCategory(simpleId: string): any {
    this.lastCategoryId = simpleId;

    return new Category({ simpleId });
  }


  public getCategoryTopic(categoryId: string, topicId: string): Promise<any> {
    return;
  }
}
