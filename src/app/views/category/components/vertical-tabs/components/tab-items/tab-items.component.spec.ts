import { TabItemsComponent } from "./tab-items.component";
import { identifierModuleUrl } from "@angular/compiler";
import { Tab } from 'src/app/views/category/models/tab.model';


describe("Tab Items Component", () => {
  it("Can be built", () => {
    // assert
    expect(TabItemsComponent).toBeDefined();
  });

  it("Exists", () => {
    // act
    const component = new TabItemsComponent();

    // assert
    expect(component instanceof TabItemsComponent).toBe(true);
  });

  describe("General", () => {
    let component: TabItemsComponent;

    beforeEach(() => {
      component = new TabItemsComponent();
    });

    describe("On Init", () => {
      it("Makes first tab selected", () => {
        // arrange
        component.tabItems = [new Tab(), new Tab()];

        // act
        component.ngOnInit();

        // assert
        expect(component.selectedTabItem).toEqual(component.tabItems[0]);
      });
    });
  });
});
