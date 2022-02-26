import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/common/ingredient.model';
// import { Ingredient } from 'src/app/common/ingredient.model';
// import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit,OnDestroy {

  @ViewChild('form') shoppingForm: NgForm | undefined;
  ingredientSelected = false;
  selectedUpdated = false;
  constructor(private shoppingListService:ShoppingListService) { }
  shoppingListSubcripton:Subscription= new Subscription();

  ngOnInit(): void {
    this.shoppingListSubcripton = this.shoppingListService.ShoppingListItemSeleted.subscribe((selectedIngredient:Ingredient)=>{
      setTimeout(
        ()=>{
        this.shoppingForm?.setValue(selectedIngredient);
        this.ingredientSelected = true;
        this.selectedUpdated = true;
        },);
    });
  }

  Add(){
  console.log(this.shoppingForm);
    this.shoppingListService.AddIngredient({name:this.shoppingForm?.form.value.name,amount:Number(this.shoppingForm?.form.value.amount)});
    this.clr();
  }

  clr(){
    this.shoppingForm?.reset();
    this.ingredientSelected = false;
    this.selectedUpdated = false;
  }
  Delete(){
    this.shoppingListService.DeleteIngredient({name:this.shoppingForm?.form.value.name,amount:Number(this.shoppingForm?.form.value.amount)});
    this.clr();
  }

  ngOnDestroy(){
    this.shoppingListSubcripton.unsubscribe();
  }

}
