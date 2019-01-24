import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routing.module'
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module'
import { EditorialesModule } from './editoriales/editoriales.module'
import { NucleModule } from './nucle/nucle.module'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    NucleModule,
    AutoresModule,
    EditorialesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
