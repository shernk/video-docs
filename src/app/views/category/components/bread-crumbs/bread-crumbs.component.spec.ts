import { Subject } from "rxjs";
import { BreadCrumbsService } from "./service/bread-crumbs/bread-crumbs.service";
import { Router } from "@angular/router";
import { BreadCrumb } from "src/app/views/category/models/bread-crumbs.model";
import { BreadCrumbsComponent } from "./bread-crumbs.component";
import { MockBreadCrumbsService } from "./service/bread-crumbs/mock-bread-crumbs.service";
import { AsyncResource } from "async_hooks";

describe("Bread Crumbs Component", () => {
  it("Can be Built", () => {
    const sub: any = new Subject();
    const component = new BreadCrumbsComponent(sub);

    // assert
    expect(component instanceof BreadCrumbsComponent).toBeDefined();
  });

  describe("General", () => {
    let component: BreadCrumbsComponent;
    let mockBreadCrumbsService: MockBreadCrumbsService;

    beforeEach(() => {
      mockBreadCrumbsService = new MockBreadCrumbsService();
      component = new BreadCrumbsComponent(mockBreadCrumbsService as any);
    });

    describe("On Init", () => {
      it("Updates bread crumbs", () => {
        // arrange
        component.breadCrumbs = [];
        mockBreadCrumbsService.breadCrumbs = [
          new BreadCrumb({ urlPiece: "javascript" }),
          new BreadCrumb({ urlPiece: "arrays" })
        ];

        // assert
        expect(component.breadCrumbs[0].urlPiece).toEqual("javascript");
        expect(component.breadCrumbs[1].urlPiece).toEqual("arrays");
      });
    });

    describe("Get Route Url", () => {
      it("Category Level", () => {
        // arrange
        component.breadCrumbs = [new BreadCrumb({ urlPiece: "javascript" })];

        // act
        const result = component.getRouteUrl(0);

        // expect
        expect(result).toBe("/category/javascript");
      });

      it("Topic level", () => {
        // arrange
        component.breadCrumbs = [
          new BreadCrumb({ urlPiece: "javascript" }),
          new BreadCrumb({ urlPiece: "arrays" })
        ];

        // act
        const result = component.getRouteUrl(1);

        // expect
        expect(result).toBe("/category/javascript/topic/arrays");
      });

      it("Detail level", () => {
        // arrange
        component.breadCrumbs = [
          new BreadCrumb({ urlPiece: "javascript" }),
          new BreadCrumb({ urlPiece: "arrays" }),
          new BreadCrumb({ urlPiece: "map" })
        ];

        // act
        const result = component.getRouteUrl(2);

        // expect
        expect(result).toBe("/category/javascript/topic/arrays/detail/map");
      });
    });
  });
});

