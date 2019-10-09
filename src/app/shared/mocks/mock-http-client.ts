import { of } from 'rxjs';
import { Observable } from 'rxjs';

export class MockHttpClient {
  public lastRoute = '';
  public response = null;

  public get(route: string): Observable<any> {
    this.lastRoute = route;

    return of(this.response);
  }
}
