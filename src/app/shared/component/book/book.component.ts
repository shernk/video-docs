import { Component, Input } from "@angular/core";
import { Book } from "../../models/book.model";

@Component({
  selector: "app-books",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BooksComponent {
  @Input() public books: Book[] = [];
}
