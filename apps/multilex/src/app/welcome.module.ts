import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
      WelcomeComponent,
  ],
  imports: [
      WelcomeRoutingModule
  ],
  exports: [
      WelcomeComponent
  ]
})
export class WelcomeModule { }
