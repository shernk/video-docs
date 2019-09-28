import { Subject } from "rxjs";
import { Alert } from '../../models/alert.model';

export abstract class AAlertService {
  public abstract alertSubject: Subject<Alert>;
  public abstract callAlert(alert: Alert): void;
}
