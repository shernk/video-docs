import { CategoryService } from "./category.service";
import { MockHttpUtilityService } from "src/app/components/shared/services/http-utility/mock-http-utility.service";

describe("Category Service", () => {
  it("Exists", () => {
    // assert
    expect(CategoryService).toBeDefined();
  });

  it("Can be built", () => {
    // arrange
    const mockHttpUtilityService = new MockHttpUtilityService();

    // act
    const service = new CategoryService(mockHttpUtilityService, null);

    // assert
    expect(service instanceof CategoryService).toBe(true);
  });
});
