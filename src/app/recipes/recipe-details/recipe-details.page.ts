import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipes.model';
import { RecipesService } from 'src/app/recipes/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipesService.getRecipe(recipeId!);
    });
  }

  alertButtons = [
    { text: 'Cancel', role: 'cancel' },
    {
      text: 'Delete',
      handler: () => {
        this.recipesService.deleteRecipe(this.recipe?.id!);
        this.router.navigate(['']);
      },
    },
  ];
}
