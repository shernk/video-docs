import { AlertComponent } from "./alert.component";
import { AlertService } from "./services/alert/alert.service";
import { LocalStorageKey } from "./models/enums/local-storage-key.enum";
import { MockCategoryService } from "./services/local-storage/mock-local-storage.model";

describe("Alert Component", () => {
  it("Exists", () => {
    // assert
    expect(AlertComponent).toBeDefined();
  });

  it("Can be built", () => {
    // arrange
    const alertService = new AlertService();
    const mockCategoryService = new MockCategoryService();

    // act
    const component = new AlertComponent(alertService, mockCategoryService);

    // assert
    expect(component instanceof AlertComponent).toBe(true);
  });

  describe("General", () => {
    let component: AlertComponent;
    let alertService: AlertService;
    let mockCategoryService: MockCategoryService;

    beforeEach(() => {
      alertService = new AlertService();
      mockCategoryService = new MockCategoryService();
      component = new AlertComponent(alertService, mockCategoryService);
    });

    describe("On Init", () => {
      xit("Calls cookie notification if not previously called", () => {
        // arrange
        mockCategoryService.storage = {};

        // act
        component.ngOnInit();

        // assert
        expect(component.alert.key).toBe(LocalStorageKey.CookieNotification);
        expect(component.isNeeded).toBe(true);
      });
    });

    describe("Close", () => {
      it("Close alert", () => {
        // arrange
        component.isShown = true;

        // act
        component.close();

        // assert
        expect(component.isShown).toBe(false);
      });

      it("Updates storage so alert is called just once", () => {
        // arrange
        const key = LocalStorageKey.CookieNotification;
        component.alert.key = key;

        // act
        component.close();

        // assert
        expect(mockCategoryService.storage[key]).toBe("true");
      });
    });
  });
});
