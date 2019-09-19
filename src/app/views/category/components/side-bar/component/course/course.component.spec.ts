import { CourseComponent } from "./course.component";

describe("Course Component", () => {
  it("Exists", () => {
    // assert
    expect(CourseComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new CourseComponent();

    // expect
    expect(component instanceof CourseComponent).toBe(true);
  });
});
