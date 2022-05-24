import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIfdirective]',
})
export class IfdirectiveDirective implements OnChanges {
  @Input() appIfdirective: boolean;
  constructor(
    private template: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  ngOnChanges() {
    if (this.appIfdirective) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }
}
