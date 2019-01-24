import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompartidoModule } from '../compartido/compartido.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CompartidoModule
  ],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }
