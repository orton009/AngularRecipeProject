import {Component , OnInit, ViewChild, OnDestroy} from '@angular/core' ;
import {Ingredients} from '../../shared/ingredients.model' ;
import {shoppingListService} from '../../shared/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector : 'app-shopping-list-edit' ,
    templateUrl : "shopping-list-edit.component.html" 
})
export class ShoppingListEditComponent implements OnInit , OnDestroy{
   @ViewChild('f' , null) slForm : NgForm ;
    editMode = false;
    editedIndex : number ;
    editedItem : Ingredients ;
    subscription : Subscription ;
    constructor(private _shoppingList : shoppingListService){}

    ngOnInit(){
            this.subscription=this._shoppingList.ingredientEdited.subscribe((index)=>{
            this.editMode=true;
            this.editedIndex=index;
            this.editedItem = this._shoppingList.getIngredient(index);
            this.slForm.setValue({
                'name' : this.editedItem.name ,
                'amount' : this.editedItem.amount
            });
        });     
    }
    onAddItem(form : NgForm){
        const ingredient = new Ingredients(form.value.name,form.value.amount);
        if(this.editMode){
            this._shoppingList.updateIngredient(this.editedIndex , ingredient);
        }
        else
            this._shoppingList.addIngredients(ingredient);
        this.onClear();
    }

    onDeleteItem(){
        this._shoppingList.deleteIngredient(this.editedIndex) ;
        this.onClear() ;
    }

    onClear(){
        this.editMode = false ;
        this.slForm.reset();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe() ;
    }
}