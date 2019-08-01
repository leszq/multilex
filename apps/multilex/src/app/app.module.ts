import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Package1Module } from '@multilex/package-1';
import { Package2Module } from '@multilex/package-2';
import { ThemeModule } from '@multilex/theme';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
      AppComponent,
      WelcomeComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ThemeModule,
      Package1Module,
      Package2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
