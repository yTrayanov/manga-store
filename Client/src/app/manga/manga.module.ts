import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms'

import { CartComponent } from './cart/cart.component';
import { AllMangaComponent } from './all-manga/all-manga.component';
import { DetailsMangaComponent } from './details-manga/details-manga.component';
import { EditMangaComponent } from './edit-manga/edit-manga.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';
import {MangaRoutingModule} from './manga-routing.module'


@NgModule({
  declarations: [
    CartComponent,
    AllMangaComponent,
    DetailsMangaComponent,
    EditMangaComponent,
    CreateMangaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MangaRoutingModule
  ]
})
export class MangaModule { }
