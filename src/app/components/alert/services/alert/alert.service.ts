import { Alert } from "../../models/alert.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AlertService {
  public alertSubject = new Subject();

  public callAlert(alert: Alert) {
    this.alertSubject.next(alert);
  }
}
