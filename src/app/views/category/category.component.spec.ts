import { MockSeoService } from "./../../components/shared/seo/mock-seo.service";
import { MockCategoryService } from "./services/category/mock-category.service";
import { CategoryComponent } from "./category.component";
import { MockActivatedRoute } from "src/app/components/shared/mocks/mock-activated-route";

describe("Category Component", () => {
  it("Exists", () => {
    // assert
    expect(CategoryComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const categoryService = new MockCategoryService();
    const mockActivatedRoute = new MockActivatedRoute();
    const mockSeoService = new MockSeoService();
    const component = new CategoryComponent(
      mockActivatedRoute as any,
      mockSeoService,
      categoryService
    );

    // assert
    expect(component instanceof CategoryComponent).toBe(true);
  });

  describe("General", () => {
    let component: CategoryComponent;
    let categoryService: MockCategoryService;
    let mockActivatedRoute: MockActivatedRoute;
    let mockSeoService: MockSeoService;

    beforeEach(() => {
      categoryService = new MockCategoryService();
      mockActivatedRoute = new MockActivatedRoute();
      mockSeoService = new MockSeoService();

      component = new CategoryComponent(
        mockActivatedRoute as any,
        mockSeoService,
        categoryService
      );
      categoryService = new MockCategoryService();
    });

    describe("On init", () => {
      it("Update category", async() => {
        // arrange
        component.category.simpleId = "javascript";

        // act
        await component.ngOnInit();

        // assert
        expect(component.category.simpleId).toBe("javascript");
      });

      /*
     it("Update header", async() => {
        // arrange
        component.category.lastHeader = "javascript";

        // act
        await component.ngOnInit();

        // assert
        expect(component.category.lastHeader).toBe("javascript");
      });
      */
    });
  });
});
