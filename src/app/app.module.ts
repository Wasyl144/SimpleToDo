import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './main-wrapper/list/list.component';
import { FormComponent } from './main-wrapper/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    MainWrapperComponent,
    PageNotFoundComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
