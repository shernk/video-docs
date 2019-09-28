import { Alert } from "../../models/alert.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AAlertService } from "./aalert.service";
@Injectable({
  providedIn: "root"
})
export class AlertService implements AAlertService {
  public alertSubject = new Subject<Alert>();

  public callAlert(alert: Alert) {
    this.alertSubject.next(alert);
  }
}
