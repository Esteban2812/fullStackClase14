import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';

const routes: Routes = [

  {path:"", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CabeceraComponent]
})
export class NucleRoutingModule { }
