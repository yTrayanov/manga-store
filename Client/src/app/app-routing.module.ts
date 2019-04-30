import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full' , redirectTo:'/manga'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent },
  {path:'manga' , loadChildren: './manga/manga.module#MangaModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
