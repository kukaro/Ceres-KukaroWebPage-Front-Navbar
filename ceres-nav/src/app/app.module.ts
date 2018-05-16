import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {NavBrandComponent} from './nav/nav-brand/nav-brand.component';
import {NavTogglerComponent} from './nav/nav-toggler/nav-toggler.component';
import {NavCollapseComponent} from './nav/nav-collapse/nav-collapse.component';
import {NavCollapseSearchComponent} from './nav/nav-collapse/nav-collapse-search/nav-collapse-search.component';
import { ArticleComponent } from './article/article.component';
import { SigninComponent } from './article/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavBrandComponent,
    NavTogglerComponent,
    NavCollapseComponent,
    NavCollapseSearchComponent,
    ArticleComponent,
    SigninComponent,
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
