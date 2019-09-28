import { MockRouter } from "./components/shared/mocks/mock-router";
import { AppComponent } from "./app.component";
import { MockTitleService } from "./services/title/mock-title.service";

describe("App Component", () => {
  it("Exists", () => {
    // assert
    expect(AppComponent).toBeDefined();
  });

  it("Can be built", () => {
    const component = new AppComponent(null, null);

    // assert
    expect(component instanceof AppComponent).toBe(true);
  });

  describe("General", () => {
    let component: AppComponent;
    let mockRouter: any;
    let mockTitleService: any;

    beforeEach(() => {
      mockRouter = new MockRouter();
      mockTitleService = new MockTitleService();
      component = new AppComponent(mockTitleService, mockRouter);
    });

    describe("On Init", () => {
      // it("Only pushes through Navigation End Events", () => {
      //   // act
      //   component.ngOnInit();
      //   // assert
      //   expect(mockTitleService.lastTitle).toBe("");
      // });
      // it("On Url Navigation end update title default", () => {
      //   // arrange
      //   mockRouter.routerSubject.next({ url: "/" });
      //   // act
      //   component.ngOnInit();
      //   // assert
      //   expect(mockTitleService.lastTitle).toBe("Video Dev Docs | VDD");
      // });
    });
  });
});
