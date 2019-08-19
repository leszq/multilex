import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Package1Module, Package1Component } from '@multilex/package-1';


const routes: Routes = [
    {
        path: '**',
        component: Package1Component
    }
];


@NgModule({
  imports: [
      Package1Module,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MyTestWrapperModule { }
