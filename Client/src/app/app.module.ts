import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CreateMangaComponent } from './manga/create-manga/create-manga.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthService } from './authentication/auth.service';
import { MangaService } from './manga/manga.service';
import { AllMangaComponent } from './manga/all-manga/all-manga.component';
import { DetailsMangaComponent } from './manga/details-manga/details-manga.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { CartComponent } from './manga/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CartComponent,
    CreateMangaComponent,
    RegisterComponent,
    LoginComponent,
    AllMangaComponent,
    DetailsMangaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    MangaService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
