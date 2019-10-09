import { Component, Injectable } from "@angular/core";
import { AIconService } from "src/app/shared/services/icon/aicon.service";
import { AHeaderService } from "./service/aheader.service";
import { Header } from './model/header.model';

Injectable();
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  /**
   * create object of model to access to get data have available
   */
  public header: Header = new Header();
  /**
   * create the `sample` to connect between the logic `model-view` (the logic is programming into component) and view(html)
   */
  public iconClasses = "";
  public categoryCSSClass = "";

  /**
   * constructor where set; get; the service
   */
  constructor(
    public iconService: AIconService,
    public headerService: AHeaderService
  ) {
    this.headerService.headerSubject.subscribe(header => {
      this.header = header;
      this.updateStyles(this.header.simpleId);
    });
  }

  /**
   * Programming to set the logic between the service and
   * the `sample`
   */
  private updateStyles(categorySimpleId: string): void {
    this.iconClasses = this.iconService.getIconByCategoryID(categorySimpleId);
    this.categoryCSSClass = categorySimpleId;
  }
}
