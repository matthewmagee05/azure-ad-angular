import { HttpModule } from '@angular/http';
import { RoutingModule } from './error-pages.routing';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule { }
