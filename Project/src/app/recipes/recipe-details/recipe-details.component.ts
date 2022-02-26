import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  // @Input() 
  selectedItem:Recipe=new Recipe("","","",[]);
  id:number=0;
  constructor(private recipeService:RecipesService,private activeRoute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.selectedItem = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedItem.ingredients);
  }
  onEditRecipe(){
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activeRoute});
    this.router.navigate(['edit'],{relativeTo:this.activeRoute});

  }
}
