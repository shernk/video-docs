import { StarListComponent } from "./star-list.component";

describe("StarList Component", () => {
  it("Exists", () => {
    // assert
    expect(StarListComponent).toBeDefined();
  });

  it("Can be built", () => {
    const component = new StarListComponent();

    // assert
    expect(component instanceof StarListComponent).toBe(true);
  });

  describe("General", () => {
    let component: StarListComponent;

    beforeEach(() => {
      component = new StarListComponent();
    });

    describe("Defaults", () => {
      it("Rating has 5 star when no rating", () => {
        // assert
        expect(component.rating).toBe(5);
      });

      describe("General", () => {
        it("Gets total full star rating", () => {
          // arange
          component.rating = 4.75;

          // act
          const result = component.fullStars;

          // expect
          expect(result.length).toBe(4);
        });

        it("Gets if we have a half star when less than 5", () => {
          // arange
          component.rating = 4.75;

          // act
          const result = component.hasHalfStars;

          // expect
          expect(result).toBe(true);
        });

        it("Gets total empty star", () => {
          // arange
          component.rating = 2.75;

          // act
          const result = component.emptyStars;

          // expect
          expect(result.length).toBe(2);
        });
      });
    });
  });
});
