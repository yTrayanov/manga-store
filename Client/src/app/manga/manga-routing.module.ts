import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { AllMangaComponent } from './all-manga/all-manga.component';
import { DetailsMangaComponent } from './details-manga/details-manga.component';
import { EditMangaComponent } from './edit-manga/edit-manga.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';

import { AuthGuard } from '../authentication/guards/auth.guard';
import { AdminGuard } from '../authentication/guards/admin.guard';

const routes: Routes =[
    {path:'' ,component:AllMangaComponent},
    {path:'cart',component:CartComponent ,canActivate:[AuthGuard]},
    {path:'create', component:CreateMangaComponent, canActivate:[AuthGuard,AdminGuard]},
    {path:'edit/:id', component:EditMangaComponent , canActivate:[AdminGuard]},
    {path:'details/:id' , component:DetailsMangaComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MangaRoutingModule { }