import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated  // 3 encapsulation -> Emulated(default), None(global styling) , ShadowDom 
})
export class ServerElementComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("ngOnChanges compiled!! "+ changes);

  }

  ngOnInit(): void {
    console.log("ngOnInit compiled!!");
  }


  @Input('svrElement') element:{type:string,name:string,content:string}={
    type:"",
    name:"",
    content:""
  };

}
