import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: ':recipeId',
    loadChildren: () =>
      import('./recipe-details/recipe-details.module').then(
        (m) => m.RecipeDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
