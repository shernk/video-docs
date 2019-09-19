import { Component, Input, Type } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"]
})

export class ResourcesComponent {
  @Input() public title = '';
  @Input() public list: string[];

  // constructor(public component: Type<any>) {}
}
