import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    {
        path: 'test',
        loadChildren: './mytest.module#MyTestWrapperModule'
    },
    {
        path: 'package-2',
        loadChildren: () => import('@multilex/package-2').then(mod => mod.Package2Module)
    },
    {
        path: 'welcome',
        loadChildren: './welcome.module#WelcomeModule'
    }
    /*{
        path: '',
        component: WelcomeComponent,
        pathMatch: 'full'
    }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
