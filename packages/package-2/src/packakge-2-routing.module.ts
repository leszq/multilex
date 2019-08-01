import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Package2Component } from './package-2/package-2.component';

const routes: Routes = [
    {
        path: '',
        component: Package2Component,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Package2RoutingModule { }
