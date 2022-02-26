import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appBasicCorrectWay]'
})
export class BasicCorrectWayDirective implements OnInit {

  @Input() inizialColor:string ="blue";
  @Input() hoverColor:string ="red";

  // simple way of doing this is using HostBinnding...

  @HostBinding("style.backgroundColor") backgroundColor:string=this.inizialColor;

  constructor(private renderer2:Renderer2, private elementRef:ElementRef) { }
  
  ngOnInit(){
    // this.renderer2.setStyle(this.elementRef.nativeElement,"background-color",this.inizialColor);
    this.backgroundColor=this.inizialColor;
  }

  @HostListener("mouseenter")
  mouseEnter(){
    // this.renderer2.setStyle(this.elementRef.nativeElement,"background-color",this.hoverColor);
    this.backgroundColor=this.hoverColor;
  }

  @HostListener("mouseleave")
  mouseleave(){
    // this.renderer2.setStyle(this.elementRef.nativeElement,"background-color",this.inizialColor);
    this.backgroundColor=this.inizialColor;
  }

}
