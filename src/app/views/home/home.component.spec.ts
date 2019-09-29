import { MockSeoService } from "./../../components/shared/seo/mock-seo.service";
import { HomeComponent } from "./home.component";

describe("Home Component", () => {
  it("Exists", () => {
    // assert
    expect(HomeComponent).toBeDefined();
  });

  it("Can be built", () => {
    // act
    const mockSeoService = new MockSeoService();
    const component = new HomeComponent(mockSeoService);

    // assert
    expect(component instanceof HomeComponent).toBe(true);
  });

  describe("General", () => {
    let component: HomeComponent;
    let mockSeoService: MockSeoService;

    beforeEach(() => {
      mockSeoService = new MockSeoService();

      component = new HomeComponent(mockSeoService);
    });
  });
});
