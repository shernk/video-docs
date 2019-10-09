import { NavigationEnd } from "@angular/router";
import { BreadCrumbsService } from "./bread-crumbs.service";
import { MockRouter } from 'src/app/shared/mocks/mock-router';

describe("Bread Crumbs Service", () => {
  it("Can be built", () => {
    // arrange
    const mockRouter = new MockRouter();

    // act
    const service = new BreadCrumbsService(mockRouter as any);

    // assert
    expect(service instanceof BreadCrumbsService).toBeDefined();
  });

  describe("General", () => {
    let mockRouter: MockRouter;
    let service: BreadCrumbsService;

    describe("On Navigation End", () => {
      it("Sets bread crumbs", () => {
        // arrange
        const navigationEnd = new NavigationEnd(
          1,
          "category/javascript/topic/arrays",
          "category/javascript/arrays"
        );
        mockRouter = new MockRouter();
        mockRouter.routerEvent = navigationEnd;
        service = new BreadCrumbsService(mockRouter as any);

        // assert
        expect(service.breadCrumbsSubject[0].label).toBe("JavaScript");
        expect(service.breadCrumbsSubject[1].label).toBe("Arrays");
      });

      it("Removes hash from bread crumbs url piece", () => {
        // arrange
        const navigationEnd = new NavigationEnd(
          1,
          "category/javascript/topic/arrays",
          "category/javascript/arrays#books"
        );
        mockRouter = new MockRouter();
        mockRouter.routerEvent = navigationEnd;
        service = new BreadCrumbsService(mockRouter as any);

        // assert
        expect(service.breadCrumbsSubject[0].label).toBe("JavaScript");
        expect(service.breadCrumbsSubject[1].label).toBe("Arrays");
      });
    });
  });
});
