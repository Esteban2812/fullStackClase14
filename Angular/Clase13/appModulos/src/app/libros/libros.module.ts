import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoLibrosComponent } from '../listado-libros/listado-libros.component';
import { EdicionLibroComponent } from '../edicion-libro/edicion-libro.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { ReactiveFormsModule } from '@angular/core'
import { LibrosService } from './libros.service';



const routes: Routes =   [{path: "libros", children:[
  {path: "", component: ListadoLibrosComponent},
  {path: "edicion", component: EdicionLibroComponent}
]}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    CompartidoModule,
    ReactiveFormsModule
  ],
  providers:LibrosService
})
export class LibrosModule { }
