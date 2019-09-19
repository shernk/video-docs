import { Component } from "@angular/core";
import { sideNavComponent } from "./side-nav.component";

describe("Side Nav Component", () => {
  it("Exists", () => {
    // assert
    expect(sideNavComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new sideNavComponent();

    // assert
    expect(component instanceof sideNavComponent).toBe(true);
  });

  describe("General", () => {
    let component: sideNavComponent;

    beforeEach(() => {
      component = new sideNavComponent();
    });

    describe("Initialization", () => {
      it("Menu is closed", () => {
        // assert
        expect(component.isClosed).toBe(true);
      });
    });

    it("Menu is opened", () => {
      // arrange
      component.isClosed = true;

      // act
      component.openMenu();

      // assert
      expect(component.isClosed).toBe(false);
    });

    it("Menu is closed", () => {
      // arrange
      component.isClosed = false;

      // act
      component.closeMenu();

      // assert
      expect(component.isClosed).toBe(true);
    });

  });
});
