import { Category } from "../../models/category.model";

export abstract class ACategoryService {
  abstract async getCategory(id: string): Promise<Category>;
  abstract async getCategoryWithTopics(categoryId: string): Promise<Category>;
  abstract async getCategoryWithDetails(categoryId: string): Promise<Category>;
}
