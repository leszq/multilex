import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Package1Component } from './package-1/package-1.component';

const routes: Routes = [
    {
        path: '',
        component: Package1Component,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Package1RoutingModule { }
