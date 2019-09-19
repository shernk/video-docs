import { MockActivatedRoute } from "./../../../../components/shared/mocks/mock-activated-route";
import { VideoPlayListComponent } from "./video-playlist.component";
import { of } from "rxjs";

describe("Video Play List Component", () => {
  it("Can be built", () => {
    // arrange
    const component = new VideoPlayListComponent(null);

    // assert
    expect(component instanceof VideoPlayListComponent).toBeDefined();
  });

  describe("General", () => {
    let component: VideoPlayListComponent;
    let mockActivatedRoute: MockActivatedRoute;

    beforeEach(() => {
      mockActivatedRoute = new MockActivatedRoute();
      component = new VideoPlayListComponent(
        mockActivatedRoute,
      );
    });

    describe("Defaults", () => {
      it("Has Play List", () => {
        // assert
        expect(component.playlist).toBeDefined();
      });

      it("Has Video Selected", () => {
        // assert
        expect(component.selectedVideo).toBeDefined();
      });
    });

    describe("On Init", () => {
      it("Updates Play List", async() => {
        // arrange
        component.playlist = null;
        mockActivatedRoute.params = of({ id: "javascript" });

        // act
        component.ngOnInit();

        // assert

        expect(component.playlist.items.length > 0).toBe(true);
      });
    });
  });
});
