import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicpassdata]'
})
export class DynamicpassdataDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  @Input() mouseentercolor!: string;
  @Input() mouseleavecolor!: string;


  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.mouseentercolor
  }

  @HostListener('mouseleave') mouseOver() {
    this.backgroundColor = this.mouseleavecolor
  }

}
