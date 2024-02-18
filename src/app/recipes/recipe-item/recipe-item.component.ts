import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor() {
    this.recipeItem = {} as Recipe;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
