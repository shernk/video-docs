import { Alert } from "src/app/components/alert/models/alert.model";
import { AlertTypes } from "./../../components/alert/models/enums/alert-types.enum";
import { AlertService } from "./../../components/alert/services/alert/alert.service";
import { Injectable } from "@angular/core";
import { Observable, fromEvent } from "rxjs";

@Injectable()
export class OfflineOnlineService {
  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;

  constructor(public alertService: AlertService) {}

  public init(): void {
    this.onlineEvent = fromEvent(window, "online");
    this.offlineEvent = fromEvent(window, "offline");

    this.onlineSubscription();
    this.offlineSubscription();
  }

  private onlineSubscription(): void {
    this.onlineEvent.subscribe(e => {
      const onlineAlert = new Alert({
        type: AlertTypes.Success,
        title: "Online",
        content: "Application back online",
        key: null
      });
      this.alertService.callAlert(onlineAlert);
    });
  }

  private offlineSubscription(): void {
    this.offlineEvent.subscribe(e => {
      const onlineAlert = new Alert({
        type: AlertTypes.Error,
        title: "Offline",
        content: "Application went offline",
        key: null
      });
      this.alertService.callAlert(onlineAlert);
    });
  }
}
