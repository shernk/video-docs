import { NavigationEnd } from "@angular/router";
import { Observable } from "rxjs";

export class MockRouter {
  public url = "";
  public routerEvent: NavigationEnd;

  public routerObservable = new Observable(observer => {
    observer.next(this.routerEvent);
    observer.complete();
  });

  public get events() {
    return this.routerObservable;
  }
}
