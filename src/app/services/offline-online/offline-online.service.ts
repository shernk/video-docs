import { Alert } from "src/app/components/alert/models/alert.model";
import { AlertTypes } from "./../../components/alert/models/enums/alert-types.enum";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Observable, fromEvent } from "rxjs";
import { AAlertService } from 'src/app/components/alert/services/alert/aalert.service';
import { AOfflineOnlineService } from './aoffline-online.service';
import { WINDOW } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class OfflineOnlineService implements AOfflineOnlineService {
  public onlineEvent: Observable<Event>;
  public offlineEvent: Observable<Event>;

  constructor(public alertService: AAlertService, @Inject(WINDOW) private window: any, @Inject(PLATFORM_ID) private platformId: object) { }

  public init(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.onlineEvent = fromEvent(this.window, 'online');
      this.offlineEvent = fromEvent(this.window, 'offline');
      this.onlineSubscription();
      this.offlineSubscription();
    }
  }

  private onlineSubscription(): void {
    this.onlineEvent.subscribe(e => {
      const onlineAlert = new Alert({ type: AlertTypes.Success, title: 'Online', content: 'Application back online', key: null });
      this.alertService.callAlert(onlineAlert);
    });
  }

  private offlineSubscription(): void {
    this.offlineEvent.subscribe(e => {
      const onlineAlert = new Alert({ type: AlertTypes.Error, title: 'Offline', content: 'Application went offline', key: null });
      this.alertService.callAlert(onlineAlert);
    });
  }
}
