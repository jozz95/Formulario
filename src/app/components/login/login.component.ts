import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
bandera: boolean = false;
Formulario!: FormGroup;

constructor(private fb: FormBuilder){
  this.crearFormulario();
}

mostrarFormu(){
  this.bandera = !this.bandera;
}

crearFormulario() { //se crea una funcion que diseña los campos de un formulario
  this.Formulario = this.fb.group({
    nombre: [''],
  });
}

}
