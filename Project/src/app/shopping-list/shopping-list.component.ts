import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredientList:Ingredient[]=[];
  shoppingListServiceSub:Subscription|undefined;
  constructor(private shoppingListService:ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredientList=this.shoppingListService.getIngredientList();
    this.shoppingListServiceSub = this.shoppingListService.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredientList = ingredients;
    });
  }

  ngOnDestroy(){
    this.shoppingListServiceSub?.unsubscribe();
  }

  ingredientSelected(ingredient:Ingredient ){
    this.shoppingListService.ShoppingListItemSeleted.next(ingredient);
  }
}
