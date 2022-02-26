import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() CreateServer=new EventEmitter<{name:string,content:string}>();
  @Output() CreateBlueprint=new EventEmitter<{name:string,content:string}>();

  @ViewChild('serverContent',{static:true}) serverContent:ElementRef=new ElementRef<{}>("");

  // newServerName = '';
  // newServerContent = '';
  onAddServer(serverName:HTMLInputElement) {
    // console.log(serverName.value);
    // this.CreateServer.emit({name:serverName.value,content:this.newServerContent}); // using Local reference
    // this.CreateServer.emit({name:this.newServerName,content:this.newServerContent});
    // console.log(this.serverContent.nativeElement.value); using @ViewChild() 
    this.CreateServer.emit({name:serverName.value,content:this.serverContent.nativeElement.value}); // using Local reference
    
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.CreateBlueprint.emit({name:serverName.value,content:this.serverContent.nativeElement.value});
  }

}
