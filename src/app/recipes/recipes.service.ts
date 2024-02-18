import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from 'src/app/recipes/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-1-1-728x891.jpg',
      ingredients: ['french fries', 'pork meat', 'salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredients: ['spaghetti', 'meat', 'tomato sauce'],
    },
  ];

  private recipeSubject = new BehaviorSubject<Recipe[]>(this.recipes);

  constructor() {}

  getAllRecipes = () => {
    return this.recipeSubject.asObservable();
  };

  getRecipe = (id: string): Recipe | undefined => {
    return this.recipes.find((recipe) => recipe.id === id);
  };

  deleteRecipe = (id: string) => {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.recipeSubject.next(this.recipes);
  };
}
