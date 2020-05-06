import { NgModule, Directive } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';
import { Http1Component } from './http1/http1.component';


const routes: Routes = [
  {
    path:"directives",
    component:DirectivesComponent
  },
  {
    path:"pipes",
    component:PipesComponent
  },
  {
    path:"http",
    component:HttpComponent
  },{
    path:"http1",
    component:Http1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
