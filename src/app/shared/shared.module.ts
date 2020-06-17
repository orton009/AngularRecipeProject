import { NgModule } from '@angular/core';
import { DropDown } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports  :[CommonModule],
    declarations : [DropDown],
    exports : [DropDown]
})
export class SharedModule{}