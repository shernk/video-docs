import { Component, Input } from "@angular/core";
import { Category } from '../../models/category.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  /**
   * TODO: watch again Eps38 at 35:00
   */
  @Input() public category: Category = new Category();
  @Input() public label = '';
  @Input() public description = '';
  @Input() public simpleId = '';
}
