import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBrandComponent } from './nav-brand/nav-brand.component';
import { NavTogglerComponent } from './nav-toggler/nav-toggler.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBrandComponent,
    NavTogglerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
