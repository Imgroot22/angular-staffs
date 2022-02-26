import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipeList:Recipe[]=[];
  
  constructor( private recipesService:RecipesService ,private route:Router,private activeRoute:ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.recipeList = this.recipesService.getRecipes();
  }
  onNewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activeRoute});
  }

}
