import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:"[appDropdown]"
})
export class DropdownDirective{
    
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click',['$event'])
    toggleOpen(event:Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
        // this.isOpen = !this.isOpen;
    }

    constructor(private elRef:ElementRef,private ren:Renderer2 ){}
}