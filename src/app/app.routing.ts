import { AuthenticationGuard } from './common/guards/authentication-guard';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    { path: 'error', loadChildren: './error-pages/error-pages.module#ErrorPagesModule'},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent},
    { path: '', component: MainComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children: [
      { path: '', component: HomeComponent },
    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
  ]
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    declarations: []
  })
  export class RoutingModule { }