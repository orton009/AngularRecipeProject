import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model' ;
import {RecipeService} from '../../shared/services/recipe.service' ;
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe : Recipe ;
  id : number ;
  constructor(private _recipeService : RecipeService , 
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param) => {
        this.id = +param['id'] ;
        this.selectedRecipe = this._recipeService.getRecipeById(this.id) ;
      }
    );
  }

  addToShoppingList(){
    this._recipeService.addIngredientToSL(this.selectedRecipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'] , {relativeTo : this.route});
  }

  onDeleteRecipe(){
    this._recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}
