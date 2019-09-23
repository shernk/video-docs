import { Category } from './../../models/category.model';
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.scss"]
})
export class TopiclistComponent {
  @Input() public category: Category = new Category();
}
