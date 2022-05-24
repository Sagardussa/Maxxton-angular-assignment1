import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  @HostBinding('style.border') b: string = '';
  @HostBinding('style.background') c: string = '';

  @HostListener('mouseover') onMouseOver() {
    this.b = '2px solid blue';
    this.c = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.b = '';
    this.c = '';
  }

  // constructor(private element: ElementRef) {
  // this.element.nativeElement.style.border = '2px solid blue';
  // this.element.nativeElement.style.width = '195px';
  // this.element.nativeElement.style.height = '40px';
  // }
}
