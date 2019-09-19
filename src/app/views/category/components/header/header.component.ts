import { Component, Input } from "@angular/core";
import { Category } from '../../models/category.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() public category: Category = new Category();
}
