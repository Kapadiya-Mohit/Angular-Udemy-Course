import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseenterover]'
})
export class MouseenteroverDirective {

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    //this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'green')
    this.backgroundColor = 'blue'
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    //this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'blue')
    this.backgroundColor = 'transparent'
  }

  // using host binding

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

}
