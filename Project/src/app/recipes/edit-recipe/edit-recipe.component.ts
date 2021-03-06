import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id:number|undefined;
  editMode=false;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editMode=params['id'] != null && params['id'] != undefined;
      console.log(this.editMode);
    });
  }

}
