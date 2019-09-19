import { CardComponent } from "./card.component";

describe("Card Component", () => {
  it("Exists", () => {
    // assert
    expect(CardComponent).toBeDefined();
  });

  it("Can be built", () => {
    const component = new CardComponent();

    // assert
    expect(component instanceof CardComponent).toBe(true);
  });

  describe("General", () => {
    let component: CardComponent;

    beforeEach(() => {
      component = new CardComponent();
    });
  });
});
