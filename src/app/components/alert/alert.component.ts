import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { AlertTypes } from './models/enums/alert-types.enum';
import { AlertService } from './services/alert/alert.service';
import { Alert } from './models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public alert: Alert = new Alert();
  public alertTypes = AlertTypes;
  public isShown = true;
  public isNeeded = false;

  constructor(
    public alertService: AlertService,
    @Inject(LOCAL_STORAGE) private localStorage: any
  ) { }

  public ngOnInit(): void {
    this.alertService.alertSubject.asObservable().subscribe(data => {
      this.alert = new Alert(data);
      this.isNeeded = true;
    });
  }

  public close(): void {
    this.isShown = false;

    if (this.alert.key) {
      this.localStorage.setItem(this.alert.key, 'true');
    }
  }
}
