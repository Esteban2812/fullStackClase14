import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule, Route, PreloadAllModules} from "@angular/router"

      const rutas: Route[] = [
        {path: "libros", loadChildren: "./libros/libros.module#LibrosModule"},
        {path: "autores", loadChildren: "./autores/autores.module#AutoresModule"},
        {path: "editoriales", loadChildren: "./editoriales/editoriales.module#EditorialesModule"}
      ]


// const rutas: Route[] = [
//   {path: "", component: LoginComponent},

//   {path: "autores", children: [
//     {path: "", component: ListadoAutoresComponent},
//     {path: "edicion", component: EdicionAutorComponent}
//   ]},
//   {path: "editoriales", children: [
//     {path: "", component: ListadoEditorialesComponent},
//     {path: "edicion", component: EdicionEditorialComponent}
//   ]}
// ]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(rutas,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
}
)
export class AppRouting { }

