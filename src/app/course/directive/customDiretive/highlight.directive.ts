import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}


// it will be access without render the DOM. it is not proper way.