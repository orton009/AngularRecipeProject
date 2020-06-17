import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl  , FormArray, Validators} from '@angular/forms';
import {RecipeService} from '../../shared/services/recipe.service' ;
import { Recipe } from '../recipe.model';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number ;
  allowEdit : boolean = false ;
  recipeForm : FormGroup ;
  constructor(private route : ActivatedRoute , private _recipeService : RecipeService, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.allowEdit = params['id'] != null ;
        this.onFormInit();
      }
    );
  }

  onFormInit(){
    let name = '';
    let imagePath = '' ;
    let description = '' ;
    let recipeIng = new  FormArray([]) ;

    if(this.allowEdit){
      const recipe : Recipe = this._recipeService.getRecipeById(this.id);
      name=recipe.name ;
      imagePath = recipe.imagePath ;
      description = recipe.description ;
      if(recipe.ingredients){
        for(let ing of recipe.ingredients){
          recipeIng.push(
            new FormGroup({
              'name' : new FormControl(ing.name , Validators.required) ,
              'amount' : new FormControl(ing.amount , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(name , Validators.required) ,
      'imagePath' : new FormControl(imagePath , Validators.required) ,
      'description' : new FormControl(description,[Validators.required]),
      'ingredients' : recipeIng
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    if(this.allowEdit){
      this._recipeService.updateRecipe(this.id , this.recipeForm.value);
    }
    else{
      this._recipeService.addRecipe(this.recipeForm.value) ;
    }
    this.router.navigate(["../"] , {relativeTo : this.route});
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name'  : new FormControl(null , Validators.required),
        'amount' : new FormControl(null , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    this.router.navigate(["../"] , {relativeTo : this.route});
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index) ;
  }

}
