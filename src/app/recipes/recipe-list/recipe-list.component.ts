import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import {Recipe} from '../recipe.model' ;
import {RecipeService} from '../../shared/services/recipe.service' ;
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy{
  recipes : Recipe[];
  recipeSubsciption : Subscription ;

  constructor(private _recipeService : RecipeService,
      private router : Router ,
      private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipe();
    this.recipeSubsciption  = this._recipeService.recipeChanged.subscribe((recipes)=>{
      this.recipes = recipes ;
    });
  }
  onNewRecipe(){
    this.router.navigate(['new'] , {relativeTo : this.route});
  }

  ngOnDestroy(){
    this.recipeSubsciption.unsubscribe() ;
  }
}
