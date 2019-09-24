import { Category } from "../../models/category.model";

export abstract class ACategoryService {
  abstract async getCategory(id: string): Promise<Category>;
}
