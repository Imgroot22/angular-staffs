import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:{type:string,name:string,content:string}[]=[];
  newServerName = '';
  newServerContent = '';

  constructor(){
    this.serverElements.push({type:'server',name:'test server',content:'just a test server'});
    this.serverElements.push({type:'blueprint',name:'test Blueprint',content:'just a test blueprint'});
  }

  CreateServer(e:any) {
    this.serverElements.push({
      type: 'server',
      name: e.name,
      content: e.content
    });
  }

  CreateBlueprint(e:any) {
    this.serverElements.push({
      type: 'blueprint',
      name: e.name,
      content: e.content
    });
  }

}
