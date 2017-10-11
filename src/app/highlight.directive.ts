import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private e: ElementRef) {
  }

  @HostListener('mouseenter') mouseenter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') mouseleave() {
    this.highlight('black');
  }

  private highlight(highlightColor: string) {
    this.e.nativeElement.style.color = highlightColor;
  }
}
