import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBatterHighllight]'
})
export class BatterHighllightDirective {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

}
