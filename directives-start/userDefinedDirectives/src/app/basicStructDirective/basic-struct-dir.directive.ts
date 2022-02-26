import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


// opposite of if
@Directive({
  selector: '[unless]'
})
export class BasicStructDirDirective {

  @Input() set unless(condition:boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.tempRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }


}
