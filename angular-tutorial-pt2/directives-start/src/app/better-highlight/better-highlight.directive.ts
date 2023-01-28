import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';


  @HostBinding('style.backgroundColor') backGroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
   this.backGroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backGroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mauseleave(eventData: Event) {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backGroundColor = this.defaultColor;
  }

}
