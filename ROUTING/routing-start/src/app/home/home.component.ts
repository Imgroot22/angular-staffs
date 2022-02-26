import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router , private activeRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  GotOServicesA(){
    this.router.navigate(["/servers"]);
  }
}
