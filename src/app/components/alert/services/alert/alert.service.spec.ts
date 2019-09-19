
import { Alert } from "../../models/alert.model";
import { AlertTypes } from "../../models/enums/alert-types.enum";
import { AlertService } from "./alert.service";
import { Subject } from "rxjs";

describe("Alert Service", () => {
  it("Exists", () => {
    // assert
    expect(AlertService).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const service = new AlertService();

    // assert
    expect(service instanceof AlertService).toBe(true);
  });

  describe("General", () => {
    let service: AlertService;

    beforeEach(() => {
      service = new AlertService();
    });

    describe("Defaults", () => {
      it("Has alert subject", () => {
        // assert
        expect(service.alertSubject instanceof Subject).toBe(true);
      });
    });

    describe("Call Alert", () => {
      it("Pushes next alert data", done => {
        // arrange
        const type = AlertTypes.Info;
        const title = "title";
        const content = "content";
        const key = 'localStorageKey';

        const alert = new Alert({type, title, content, key});

        service.alertSubject.asObservable().subscribe((data: any) => {
          // assert
          expect(data.type).toBe(type);
          expect(data.title).toBe(title);
          expect(data.content).toBe(content);
          expect(data.key).toBe(key);
          done();
        });

        // act
        service.callAlert(alert);
      });
    });
  });
});
