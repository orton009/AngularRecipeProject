import {Recipe} from '../../recipes/recipe.model' ;
import {Injectable } from '@angular/core';
import { Ingredients } from '../ingredients.model';
import {shoppingListService} from '../services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    recipeChanged = new Subject<Recipe[]>() ;
    constructor(private _slService : shoppingListService){}

    private recipes : Recipe[] = [
        new Recipe("Tasty Schnitzel" , 
            "A super-tasty Schnitzel -just awesome!" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2J66RbxYHWNMD8fOGTvCt8N_Rs303xbBZ-7d7GCS4ex4thalX8g" , 
            [
                new Ingredients("Meat" , 1),
                new Ingredients(" Buns" , 2)
            ]),
        new Recipe("Big Fat Burger" , 
            "what else do you need to say?" , 
            "data:image/jpeg;base64,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"
            ,[
                new Ingredients("Buns" , 2),
                new Ingredients("Meat" , 2),
                new Ingredients("cheese"  ,1)
            ]
            )
    ] ;
    getRecipe(){
        return this.recipes ;
    }
    addIngredientToSL(ing : Ingredients[]){
        this._slService.addMultiIngredients(ing);
    }
    getRecipeById(id  :number){
        return this.recipes[id] ;
    }

    addRecipe(newRecipe : Recipe){
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index : number , newRecipe : Recipe){
        this.recipes[index] = newRecipe ;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index : number){
        this.recipes.splice(index,1) ;
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipe(recipes : Recipe[]){
        this.recipes = recipes ;
        this.recipeChanged.next(this.recipes.slice());
    }
}