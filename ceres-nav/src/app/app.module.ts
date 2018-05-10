import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavBrandComponent} from './nav-brand/nav-brand.component';
import {NavTogglerComponent} from './nav-toggler/nav-toggler.component';
import {NavCollapseComponent} from './nav-collapse/nav-collapse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBrandComponent,
    NavTogglerComponent,
    NavCollapseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
