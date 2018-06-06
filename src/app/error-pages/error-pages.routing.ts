import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";

const errorRoutes: Route[] = [
    { path: '404', component: NotFoundComponent }
];
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(errorRoutes)
    ],
    declarations: []
  })
  export class RoutingModule { }