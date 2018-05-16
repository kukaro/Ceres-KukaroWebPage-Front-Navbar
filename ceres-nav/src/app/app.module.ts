import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavBrandComponent} from './nav-brand/nav-brand.component';
import {NavTogglerComponent} from './nav-toggler/nav-toggler.component';
import {NavCollapseComponent} from './nav-collapse/nav-collapse.component';
import {NavCollapseSearchComponent} from './nav-collapse/nav-collapse-search/nav-collapse-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBrandComponent,
    NavTogglerComponent,
    NavCollapseComponent,
    NavCollapseSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
