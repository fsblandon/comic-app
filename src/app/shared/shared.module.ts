import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharacterComponent } from '../views/character/character.component';
import { ComicsComponent } from '../views/comics/comics.component';
import { StoriesComponent } from '../views/stories/stories.component';
import { CardComponent } from '../components/card/card.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    CharacterComponent,
    ComicsComponent,
    StoriesComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  exports: [
    CharacterComponent,
    ComicsComponent,
    StoriesComponent,
    CardComponent,
  ]
})
export class SharedModule { }
