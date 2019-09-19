import { BookComponent } from "./book.component";

describe("Book Component", () => {
  it("Exists", () => {
    //assert
    expect(BookComponent).toBeDefined();
  });

  it("Can be built", () => {
    const component = new BookComponent();

    // assert
    expect(component instanceof BookComponent).toBe(true);
  });

  describe("General", () => {
    let component: BookComponent;

    beforeEach(() => {
      component = new BookComponent();
    });
  });
});
