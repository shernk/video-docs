import { OfflineOnlineService } from "./services/offline-online/offline-online.service";
import { TitleService } from "./services/title/title.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: TitleService,
    public offlineOnlineService: OfflineOnlineService
  ) {}

  ngOnInit(): void {
    this.titleService.init();
    this.offlineOnlineService.init();
  }
}
