import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import('./views/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./views/comics/comics.module').then(m => m.ComicsModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./views/stories/stories.module').then(m => m.StoriesModule)
  },
  {
    path: '**',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
