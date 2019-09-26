import { Category } from "./../../models/category.model";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cate",
  templateUrl: "cate.component.html",
  styleUrls: ["./cate.component.scss"]
})
export class CateComponent implements OnInit {
  @Input() public category: Category = new Category();
  constructor() {}

  ngOnInit() {}
}
