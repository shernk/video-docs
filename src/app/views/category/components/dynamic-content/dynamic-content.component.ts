import { ResourcesComponent } from "./../resources/resources.component";
import {
  Type,
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";

// import { DynamicDirective } from "./dynamic.directive";
import { DYNAMIC_CONTENT } from "./dynamic-content.enum";

@Component({
  selector: "app-dynamic-content",
  template: `
    <div>
      <h3>Dynamic Component</h3>
      <ng-template #content></ng-template>
    </div>
  `
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @Input() public type: string;
  @Input() public context: any;

  @ViewChild("content", { static: true, read: ComponentRef })
  container: ViewContainerRef;

  // dynamicContainer: DynamicDirective;
  // interval: any;
  // currentAdIndex = -1;

  private componentRef: ComponentRef<{}>;
  private mappings = DYNAMIC_CONTENT;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      // Represents a component created by a ComponentFactory.
      this.componentRef = this.container.createComponent(factory) as any;

      (this.componentRef.instance as any) = { ...this.context };

      // this.loadComponent();
      // this.getContent();
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }

    // clearInterval(this.interval);
  }

  getComponentType(typeName?: any) {
    const type = this.mappings[typeName];
    return type;
  }

  /*  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.mappings;
    // const adItem = this.ads[this.currentAdIndex];

    const componentType = this.getComponentType(this.type);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );

    console.log(componentType);
    console.log(componentFactory);

    const viewContainerRef = this.dynamicContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (componentRef.instance as any) = { ...this.context };
  } */

  /* getContent() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  } */
}
