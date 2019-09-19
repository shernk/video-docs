import { ModalComponent } from "./modal.component";

describe("Modal Component", () => {
  it("Exists", () => {
    //assert
    expect(ModalComponent).toBeDefined();
  });

  it("Can be built", () => {
    const component = new ModalComponent();

    //assert
    expect(component instanceof ModalComponent).toBe(true);
  });

  describe("General", () => {
    let component: ModalComponent;

    beforeEach(() => {
      component = new ModalComponent();
    });

    describe('Initialization', () =>{
      it('Is hidden on load', () =>{
        // assert
        expect(component.isHidden).toBe(true);
      });
    });

    it('Opens modal', () => {
      // arrange
      component.isHidden = true;

      // act
      component.open();

      // assert
      expect(component.isHidden).toBe(false);
    });

    it('Closes modal', () => {
      // arrange
      component.isHidden = true;

      // act
      component.close();

      // assert
      expect(component.isHidden).toBe(true);
    });
  });
});
