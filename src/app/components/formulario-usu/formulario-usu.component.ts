import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-usu',
  templateUrl: './formulario-usu.component.html',
  styleUrls: ['./formulario-usu.component.css']
})
export class FormularioUsuComponent {
@Input() valor: string = '';
mostrar: boolean = false;

constructor(){
  
}

abrirModal(){
  this.mostrar = !this.mostrar;
}




}
