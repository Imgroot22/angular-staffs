import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientChanged= new EventEmitter<Ingredient[]>();
  ingredientChanged= new Subject<Ingredient[]>();
  ShoppingListItemSeleted = new Subject<Ingredient>();

  private ingredientList:Ingredient[]=[
    new Ingredient("Apple",10),
    new Ingredient("Orange",4)
  ];

  getIngredientList(){
    // return this.ingredientList; return the same array
    return this.ingredientList.slice(); // return the copy the array
  }
  DeleteIngredient(ingredient:Ingredient){
    for(let i=0;i<this.ingredientList.length;i++){
      if(this.ingredientList[i].name.toLowerCase() === ingredient.name.toLowerCase()){
        if(this.ingredientList[i].amount > Number(ingredient.amount)){
          this.ingredientList[i].amount=this.ingredientList[i].amount - Number(ingredient.amount);
        }else{
          this.ingredientList.splice(i,1);
        }
        break;
      }
    }
    this.ingredientChanged.next(this.ingredientList.slice());
  }
  AddIngredient(ingredient:Ingredient){
    let flag = false;
    for(let i=0;i<this.ingredientList.length;i++){
      if(this.ingredientList[i].name.toLowerCase() === ingredient.name.toLowerCase()){
        this.ingredientList[i].amount=Number(ingredient.amount);
        flag=true;
        break;
      }
    }
    if(!flag){
      this.ingredientList.push(ingredient);
    }
    this.ingredientChanged.next(this.ingredientList.slice());
  }
  
  AddIngredients(ingredients:Ingredient[]){
    for(let ingredient of ingredients){
      this.AddIngredient(ingredient);
    }
    this.ingredientChanged.next(this.ingredientList.slice());
  }
  constructor() { }

}
