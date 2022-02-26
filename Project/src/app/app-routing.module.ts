import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes',
    component:RecipesComponent,
    children:[
      {
        path:'',
        component:RecipeNotSelectedComponent
      },
      {
        path:'new',
        component:EditRecipeComponent
      },
      {
        path:':id',
        component:RecipeDetailsComponent
      },
      {
        path:':id/edit',
        component:EditRecipeComponent
      }
    ]
  },
  {
    path:'shoppingList',
    component:ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
