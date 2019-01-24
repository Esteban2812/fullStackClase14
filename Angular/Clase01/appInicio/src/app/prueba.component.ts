import { Component } from "@angular/core"

@Component({
	selector: "app-prueba",
	templateUrl: "./prueba.component.html",
	styleUrls: ["./prueba.component.css"]
	/*template: `<h1>Prueba</h1>
			   <strong>Curso: {{nombreCurso.toUpperCase()}}</strong>
			   <div [innerHTML]='nombreCurso.toLowerCase()'></div>
	`,
	styles: [
		`h1 
			{
				color: red;
				font-family: Arial
			}
		h2 {
			color: green
		}
		`
	]*/
})
export class PruebaComponent {
	nombreCurso: string = "FullStack"

	fechaHora = new Date()

	constructor() {
		setInterval(() => {
			this.fechaHora = new Date()
		}, 1000)
	}

}