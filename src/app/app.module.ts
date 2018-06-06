import { AuthenticationGuard } from './common/guards/authentication-guard';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {Http, HttpModule } from '@angular/http';
import { AdalService, AdalGuard} from 'adal-angular4';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { RoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpModule
  ],
  providers: [
      AdalService,
      AdalGuard,
      AuthenticationGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
