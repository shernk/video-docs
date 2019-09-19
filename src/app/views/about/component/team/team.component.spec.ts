import { TeamComponent } from "./team.component";

describe("Team Component", () => {
  it("Exists", () => {
    // assert
    expect(TeamComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new TeamComponent();

    // assert
    expect(component instanceof TeamComponent).toBe(true);
  });
});
