import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { AuthService } from './auth.service';

@Injectable()
export class DataStorage{
    constructor(private http : HttpClient , private recipe : RecipeService , private authService : AuthService){}

    storeData(){
        const token = this.authService.getToken() ;
        return this.http.put("https://angular-test-4818f.firebaseio.com/recipes.json?auth=" + token , this.recipe.getRecipe());
    }

    fetchData(){
        const token = this.authService.getToken();
        this.http.get("https://angular-test-4818f.firebaseio.com/recipes.json?auth=" + token )
        .subscribe(
            (response ) => {
                const recipes  = <Recipe[]>response ;   //type error but works  
                this.recipe.setRecipe(recipes) ;
            }
        );
    }
}