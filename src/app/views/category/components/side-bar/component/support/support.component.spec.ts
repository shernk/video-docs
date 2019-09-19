import { SupportComponent } from "./support.component";

describe("Share Component", () => {
  it("Exists", () => {
    // assert
    expect(SupportComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new SupportComponent();

    // expect
    expect(component instanceof SupportComponent).toBe(true);
  });
});
