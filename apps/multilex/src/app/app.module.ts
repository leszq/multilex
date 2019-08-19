import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from '@multilex/theme';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
