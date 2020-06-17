import {Ingredients} from '../ingredients.model' ;
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs' ;

export class shoppingListService{
    ingredientChanged = new Subject<Ingredients[]>() ;
    ingredientEdited = new Subject<number>() ;

    private ingredients : Ingredients [] = [
        new Ingredients("Apple" , 5) ,
        new Ingredients("Tomatoes" , 10)
      ] ;
    getIngredients(){
        return this.ingredients.slice();
    } 

    getIngredient(index){
        return this.ingredients[index] ;
    }
    addIngredients(ing : Ingredients){
        this.ingredients.push(ing);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addMultiIngredients(ing : Ingredients[]){
        this.ingredients.push(...ing) ; //push all ing one by one 
        this.ingredientChanged.next(this.ingredients.slice());
    }
    updateIngredient(index : number , ing : Ingredients){
        this.ingredients[index] = ing ;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index : number){
        this.ingredients.splice(index , 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}