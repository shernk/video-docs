import { AIconService } from './aicon.service';
import { Categories } from 'src/app/views/category/models/enums/categories.enum';

export class IconService implements AIconService {
  public getIconByCategoryID(simpleId: string): string {
    switch (simpleId) {
      case Categories.JavaScript:
        return 'fab fa-js';

      default:
        return '';
    }
  }
}
