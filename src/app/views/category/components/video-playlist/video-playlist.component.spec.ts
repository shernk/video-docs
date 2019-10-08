import { MockActivatedRoute } from "./../../../../components/shared/mocks/mock-activated-route";
import { VideoPlayListComponent } from "./video-playlist.component";
import { of } from "rxjs";
import { Detail } from 'src/app/components/shared/models/detail.model';

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
        expect(component.playlist).toBe(null);
      });
    });

    describe("Selects Video", () => {
      it("Updates video selection", () => {
        // arrange
        component.playlist = [];
        component.selectedVideo = null;

        // act
        component.selectVideo(component.playlist[0]);

        // assert
        expect(component.selectedVideo).toEqual(component.playlist[0]);
      });
    });

    describe("Video Playlist", () => {
      it("Have any video items on playlist", () => {
        // arrange
        component.playlist = [];

        // act
        component.selectedVideo = component.playlist[0];

        // assert
        expect(component.playlist.length > 0).toBe(true);
      });
    });
  });
});
