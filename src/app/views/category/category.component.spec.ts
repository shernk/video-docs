import { MockCategoryService } from "./services/category/mock-category.service";
import { CategoryComponent } from "./category.component";
import { ACategoryService } from "./services/category/acategory.service";
import { of } from "rxjs/internal/observable/of";
import { Categories } from "./models/enums/categories.enum";
import { MockActivatedRoute } from "src/app/components/shared/mocks/mock-activated-route";

describe("Category Component", () => {
  it("Exists", () => {
    // assert
    expect(CategoryComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const component = new CategoryComponent(null, null);

    // assert
    expect(component instanceof CategoryComponent).toBe(true);
  });

  describe("General", () => {
    let component: CategoryComponent;
    let categoryService: ACategoryService;
    let activatedRoute: any;

    beforeEach(() => {
      activatedRoute = new MockActivatedRoute();
      activatedRoute.params = of({ id: Categories.JavaScript });

      component = new CategoryComponent(activatedRoute, categoryService);
      categoryService = new MockCategoryService();
    });

    describe("On init", () => {
      // tslint:disable-next-line: space-before-function-paren
      it("Update category", async () => {
        // arrange
        component.category.simpleId = 'javascript';

        // act
        await component.ngOnInit();

        // assert
        expect(component.category.simpleId).toBe("javascript");
      });
    });
  });
});
