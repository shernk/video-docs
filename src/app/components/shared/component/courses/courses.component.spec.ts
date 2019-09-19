import { CoursesComponent } from "./courses.component";

describe("Coureses Component", () => {
  it("Exists", () => {
    // assert
    expect(CoursesComponent).toBeDefined();
  });

  it("Can be built", () => {  
    // act
    const component = new CoursesComponent();

    // assert
    expect(component instanceof CoursesComponent).toBe(true);
  });
});
