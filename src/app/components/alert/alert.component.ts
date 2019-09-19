import { Alert } from "./models/alert.model";
import { AlertTypes } from "./models/enums/alert-types.enum";
import { AlertService } from "./services/alert/alert.service";
import { ALocalStorage } from "../shared/services/local-storage/alocal-storage.model";
import { Component, OnInit } from "@angular/core";
import { LocalStorageKey } from "./../shared/models/enums/local-storage-key.enum";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  public alert: Alert = new Alert();
  public alertTypes = AlertTypes;
  public isShown = true;
  public isNeeded = false;

  constructor(
    private alertService: AlertService,
    private localStorage: ALocalStorage
  ) {}

  public ngOnInit(): void {
    this.alertService.alertSubject.asObservable().subscribe(data => {
      this.alert = new Alert(data);
    });

    this.mustCallAlerts();
  }

  public close(): void {
    this.isShown = false;
    this.localStorage.setItem(this.alert.key, "true");
  }

  private mustCallAlerts(): void {
    if (!this.localStorage.getItem(LocalStorageKey.CookieNotification)) {
      console.log(this.localStorage.getItem(LocalStorageKey.CookieNotification));
      this.callCookieNotification();
    }
  }

  private callCookieNotification(): void {
    this.isNeeded = true;

    this.alert = new Alert({
      type: AlertTypes.Info,
      title: "'What do we use for Cookies for?'",
      content:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus doloribus dignissimos ipsam praesentium.'",
      key: LocalStorageKey.CookieNotification
    });
  }
}
