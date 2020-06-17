import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SlRoutingModule } from './sl-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports : [
        CommonModule,
        SlRoutingModule,
        FormsModule
    ] ,
    declarations : [
        ShoppingListComponent,
        ShoppingListEditComponent 
    ]
})
export class ShoppingListModule{}