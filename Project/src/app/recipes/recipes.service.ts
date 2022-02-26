import { Injectable,EventEmitter } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipeList:Recipe[]=[
    new Recipe("first test recipe","the first and test description and staffs","../../../assets/recipe-img.png",[new Ingredient("tomoto",1)]),
    new Recipe("second test recipe","the second and test description and staffs","../../../assets/recipe-img.png",[new Ingredient('PineApple',2),new Ingredient("meat",12)])
  ]
  
  // selectedItemEvent = new EventEmitter<Recipe>();
  
  getRecipes(){
    return this.recipeList.slice();
  }
  
  constructor(private shoppingListService:ShoppingListService) { }
  
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.AddIngredients(ingredients);
  }
  getRecipe(id: number): Recipe {
    return this.recipeList[id];
  }
}
