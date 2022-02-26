import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  constructor(private recipesService:RecipesService,private route:Router,private activeRoute:ActivatedRoute) { }
  @Input() recipe:Recipe = new Recipe("","","",[]);
  @Input() id:number | undefined;

  ngOnInit(): void {
  }
}