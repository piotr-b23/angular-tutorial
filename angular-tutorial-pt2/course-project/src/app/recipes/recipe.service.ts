import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Array<Recipe> = [];

  // private recipes: Array<Recipe> = [
  //   new Recipe(
  //     'A Test Recipe 1',
  //     'This is simply a test 1',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'A Test Recipe 2',
  //     'This is simply a test 2',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg',
  //     [new Ingredient('Buns', 2), new Ingredient('French Fries', 25)]
  //   ),
  //   new Recipe(
  //     'A Test Recipe 3',
  //     'This is simply a test 3',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg',
  //     [new Ingredient('Meat', 3), new Ingredient('French Fries', 123)]
  //   ),
  // ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  recipeDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  constructor(private slService: ShoppingListService) {}
}
