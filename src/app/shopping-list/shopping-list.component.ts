import { Component, OnInit, OnDestroy } from '@angular/core';

import {Ingredients} from '../shared/ingredients.model' ;
import {shoppingListService} from '../shared/services/shopping-list.service' ;
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients : Ingredients [] ;
  ingSubscription : Subscription ;
  constructor(private _shoppingList : shoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingList.getIngredients() ;
    this.ingSubscription =  this._shoppingList.ingredientChanged.subscribe(
      (ingredients : Ingredients[]) => {
        this.ingredients = ingredients ;
      }
    );
  }

  onItemClick(index : number){
    this._shoppingList.ingredientEdited.next(index);
  }

  ngOnDestroy(){
    this.ingSubscription.unsubscribe(); 
  }
}
