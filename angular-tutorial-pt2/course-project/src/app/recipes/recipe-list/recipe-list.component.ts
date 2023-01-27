import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }
}
