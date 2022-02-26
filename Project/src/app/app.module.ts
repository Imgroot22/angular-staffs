import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './common/dropdown.directive';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeNotSelectedComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
