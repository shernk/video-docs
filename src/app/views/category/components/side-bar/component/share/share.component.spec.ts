import { ShareComponent } from "./share.component";

describe("Share Component", () => {
  it("Exists", () => {
    // assert
    expect(ShareComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new ShareComponent();

    // expect
    expect(component instanceof ShareComponent).toBe(true);
  });
});
