import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 20)
    ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}