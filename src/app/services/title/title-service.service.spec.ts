import { NavigationEnd } from "@angular/router";
import { MockAngularTitleService } from "../../components/shared/mocks/mock-angular-title.service";
import { MockRouter } from "./../../components/shared/mocks/mock-router";
import { TitleService } from "./title.service";

describe("Title Service", () => {
  it("Can be built", () => {
    // act
    const component = new TitleService(null, null);

    // assert
    expect(component instanceof TitleService).toBeDefined();
  });

  describe("General", () => {
    let mockAngularTitleService: any;
    let mockRouter: any;
    let service: TitleService;

    beforeEach(() => {
      mockAngularTitleService = new MockAngularTitleService();
      mockRouter = new MockRouter();
      service = new TitleService(mockRouter, mockAngularTitleService);
    });

    describe("On init title update", () => {
      it("Only pushes through Navigation nad Events", () => {
        // assert
        mockAngularTitleService.lastTitle = "";

        // act
        service.init();

        // assert
        expect(mockAngularTitleService.lastTitle).toBe("");
      });

      it("On URL navigation end update title for default", () => {
        // arrange
        const navigationEnd = new NavigationEnd(1, "", "");
        mockRouter.routerEvent = navigationEnd;

        // act
        service.init();

        // assert
        expect(mockAngularTitleService.lastTitle).toBe('Video Dev Docs | VDD');
      });

      /* it('If url has a hash remove it', () => {
        // arrange
        const navigationEnd = new NavigationEnd(1, 'javascript#')
      }) */
    });
  });
});
