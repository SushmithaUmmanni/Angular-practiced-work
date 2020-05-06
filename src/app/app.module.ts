import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { Http1Component } from './http1/http1.component';
// import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipesComponent,
    HttpComponent,
    SearchComponent,
    UsersComponent,
    Http1Component,
    // RoutingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
