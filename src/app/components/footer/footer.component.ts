import { Component, Inject } from "@angular/core";
import { WINDOW } from "@ng-toolkit/universal";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  constructor(@Inject(WINDOW) private window: Window) {}

  public get currentYear(): number {
    const year = new Date().getFullYear();
    return year;
  }

  public gotoTopOfPage(): void {
    this.window.scroll(0, 0);
  }
}
