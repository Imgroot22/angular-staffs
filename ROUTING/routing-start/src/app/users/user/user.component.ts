import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor( private activeRoute:ActivatedRoute ) { }

  ngOnInit() {
  this.user={
    id: this.activeRoute.snapshot.params['id'] ,
    name:this.activeRoute.snapshot.params['name']
  }
  this.activeRoute.params.subscribe((data:Params)=>{
    this.user.id = data['id'];
    this.user.name = data['name'];
  });
  }
}
