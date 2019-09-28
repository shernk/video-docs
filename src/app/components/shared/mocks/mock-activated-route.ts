import { of } from "rxjs";

export class MockActivatedRoute {
  public params: any;

  public parent: any = {
    snapShot: {
      paramMap: {
        get(id: string) {
          return id;
        }
      }
    }
  };

  constructor() {
    // Converts the arguments to an observable sequence.
    this.params = of({});
  }
}
