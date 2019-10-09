import { JAVASCRIPT_DATA } from "./../../../../views/category/models/data/javascript";
import { Component, Input } from "@angular/core";
import { Book } from "../../models/book.model";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent {
  @Input() public books: Book[] = [];
}
