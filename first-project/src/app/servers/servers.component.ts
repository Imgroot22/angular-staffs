import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serviceName = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickService(){
  }

  onInputServiceName(e:Event){
    // console.log(e);
    this.serviceName=(<HTMLInputElement>e.target).value;
  }

  isEmpty = false;
  username = '';
  onResetUser(){
    this.username="";
  }  


  // next one

  toggle = false;
  log :number[]= [];
  count = 0;
  logTime:Date[] =[];
  onClickedToggle(){
    this.toggle = !this.toggle; 
    this.log.push(++this.count); 
    this.logTime.push(new Date());
    console.log(this.log);
  }

  getColor(){
    if(this.count >=5){
      return "red";
    }
    return "";
  }

}
