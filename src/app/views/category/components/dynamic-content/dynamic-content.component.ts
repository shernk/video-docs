import { DYNAMIC_CONTENT_KEYS } from "./dynamic-content.enum";
import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";

@Component({
  selector: "app-dynamic-content",
  template: `
    <div>
      <div #content></div>
    </div>
  `
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild("container", { static: true, read: ComponentRef })
  container: ViewContainerRef;

  @Input() public type: string;
  @Input() public context: any;

  private componentRef: ComponentRef<{}>;
  private mappings = DYNAMIC_CONTENT_KEYS;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      // Represents a component created by a ComponentFactory.
      this.componentRef = this.container.createComponent(factory);

      this.updateInputs(this.componentRef.instance);
    }
  }

  public updateInputs(instance: any): void {
    const keys = Object.keys(this.context);
    instance.context = this.context;

    for (const key of keys) {
      instance[key] = this.context[key];
    }
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private getComponentType(typeName: string): any {
    const type = this.mappings[typeName];

    return type;
  }
}
