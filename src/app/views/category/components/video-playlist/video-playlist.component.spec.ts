import { VideoPlayListComponent } from "./video-playlist.component";
import { of } from "rxjs";
import { MockActivatedRoute } from 'src/app/shared/mocks/mock-activated-route';

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
        component.playlists = null;
        mockActivatedRoute.params = of({ id: "javascript" });

        // assert
        expect(component.playlists).toBe(null);
      });
    });

    describe("Selects Video", () => {
      it("Updates video selection", () => {
        // arrange
        component.playlists = [];
        component.selectedVideo = null;

        // act
        component.selectVideo(component.playlists[0]);

        // assert
        expect(component.selectedVideo).toEqual(component.playlists[0]);
      });
    });

    describe("Video Playlist", () => {
      it("Have any video items on playlist", () => {
        // arrange
        component.playlists = [];

        // act
        component.selectedVideo = component.playlists[0];

        // assert
        expect(component.playlists.length > 0).toBe(true);
      });
    });
  });
});
