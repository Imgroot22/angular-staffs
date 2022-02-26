import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:"[simpleDirective]"
})
export class BasicDirctive implements OnInit{
    
    constructor( private elementRef:ElementRef ){
    }

    ngOnInit(){
        // not a correct way of doing it...

        this.elementRef.nativeElement.style.color="red";


    }

}