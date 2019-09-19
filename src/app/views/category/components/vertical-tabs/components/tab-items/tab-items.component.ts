import { Component, Input, OnInit } from "@angular/core";
import { Tab } from "src/app/views/category/models/tab.model";

@Component({
  selector: "app-tab-items",
  templateUrl: "./tab-items.component.html",
  styleUrls: ["./tab-items.component.scss"]
})
export class TabItemsComponent implements OnInit {
  @Input() public tabItems: Tab[] = [];
  public selectedTabItem: Tab;

  public ngOnInit() {
    this.selectedTabItem = this.tabItems[0];
  }

  public selectTabItem(tabItem: Tab) {
    this.selectedTabItem = tabItem;
  }
}
