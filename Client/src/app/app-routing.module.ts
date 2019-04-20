import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMangaComponent } from './manga/create-manga/create-manga.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AllMangaComponent } from './manga/all-manga/all-manga.component';
import { DetailsMangaComponent } from './manga/details-manga/details-manga.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { AdminGuard } from './authentication/guards/admin.guard';
import { CartComponent } from './manga/cart/cart.component';
import { EditMangaComponent } from './manga/edit-manga/edit-manga.component';

const routes: Routes = [
  {path:'',pathMatch:'full' , redirectTo:'/home'},
  {path:'home' , component:AllMangaComponent},
  {path:'cart',component:CartComponent ,canActivate:[AuthGuard]},
  {path:'create', component:CreateMangaComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent },
  {path:'edit/:id', component:EditMangaComponent , canActivate:[AdminGuard]},
  {path:'details/:id' , component:DetailsMangaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
