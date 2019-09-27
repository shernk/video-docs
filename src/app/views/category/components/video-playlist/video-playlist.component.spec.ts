import { Detail } from "../../../../components/shared/models/detail.model";
import { MockActivatedRoute } from "./../../../../components/shared/mocks/mock-activated-route";
import { VideoPlayListComponent } from "./video-playlist.component";
import { of } from "rxjs";

describe("Video Play List Component", () => {
  it("Can be built", () => {
    // arrange
    const component = new VideoPlayListComponent();

    // assert
    expect(component instanceof VideoPlayListComponent).toBeDefined();
  });

  describe("General", () => {
    let component: VideoPlayListComponent;
    let mockActivatedRoute: MockActivatedRoute;

    beforeEach(() => {
      mockActivatedRoute = new MockActivatedRoute();
      component = new VideoPlayListComponent();
    });

    describe("Defaults", () => {
      it("Has Video Selected", () => {
        // assert
        expect(component.selectedVideo).toBeDefined();
      });

      it("Updates Play List", async() => {
        // arrange
        component.playlist = null;
        mockActivatedRoute.params = of({ id: "javascript" });

        // assert
        expect(component.playlist).toBe(true);
      });
    });

    describe("Selects Video", () => {
      it("Updates video selection", () => {
        // arrange
        component.playlist = new Detail({ items: [new Detail()] });
        component.selectedVideo = null;

        // act
        component.selectVideo(component.playlist);

        // assert
        expect(component.selectedVideo).toBe(component.playlist[0]);
      });
    });
  });
});
