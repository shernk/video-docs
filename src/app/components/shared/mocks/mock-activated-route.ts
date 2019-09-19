import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

export class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    // Converts the arguments to an observable sequence.
    this.params = of({});
  }
}
