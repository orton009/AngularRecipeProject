import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'recipes' , loadChildren : './recipes/recipe.module#RecipeModule'},
  {path : 'shopping-list' , loadChildren : './shopping-list/shoppingList.module#ShoppingListModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes , {preloadingStrategy : PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
