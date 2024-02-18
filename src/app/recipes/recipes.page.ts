import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';
import { RecipesService } from 'src/app/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService
      .getAllRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }
}
