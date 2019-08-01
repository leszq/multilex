import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    {
        path: 'package-1',
        loadChildren: () => import('@multilex/package-1').then(mod => mod.Package1Module)
    },
    {
        path: 'package-2',
        loadChildren: () => import('@multilex/package-2').then(mod => mod.Package2Module)
    },
    {
        path: '',
        component: WelcomeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
