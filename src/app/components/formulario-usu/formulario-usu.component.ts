import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-formulario-usu',
  templateUrl: './formulario-usu.component.html',
  styleUrls: ['./formulario-usu.component.css']
})
export class FormularioUsuComponent {
  @Input() valor: string = '';
  mostrar: boolean = false;

  Formulario!: FormGroup;
  bandera: boolean = false;
  bandera1: boolean = false;
  listDatos = [
    {
      no: 1,
      nombre: 'jossue',
      edad: 29,
      sexo: 'Masculino',
      telefono: 2971042473,
      lugar: 'Calle Sinaloa #12',
      referencia: 'Frente a la Capilla',
    },
  ];
  index = 1;

  //en el constructor va todo lo que se ejecuta al iniciar el componente
  constructor(private fb: FormBuilder, public notiSvc: NgxToastService) {
    this.crearFormulario(); //se ejectuta al arrancar el servicio la funcion crearformulario para cargarlo al inicio
  }

  //se crea una funcion que diseña los campos de un formulario
  crearFormulario() {
    this.Formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefono: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      lugar: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
    });
  }

  limpiarCampos() {
    this.Formulario.get('nombre')?.setValue(''),
      this.Formulario.get('edad')?.setValue(''),
      this.Formulario.get('sexo')?.setValue(''),
      this.Formulario.get('telefono')?.setValue(''),
      this.Formulario.get('lugar')?.setValue(''),
      this.Formulario.get('referencia')?.setValue('');
  }

  ejecutar() {
    this.bandera = !this.bandera; //bandera para ocultar el formulario
  }

  ejecutar1() {
    this.bandera1 = !this.bandera1; //bandera para ocultar la tabla
  }

  //funcion que inserta en el arreglo los datos según sus campos
  agregar() {
    this.index = this.index + 1;
    this.listDatos.push({
      no: this.index,
      nombre: this.Formulario.get('nombre')?.value,
      edad: this.Formulario.get('edad')?.value,
      sexo: this.Formulario.get('sexo')?.value,
      telefono: this.Formulario.get('telefono')?.value,
      lugar: this.Formulario.get('lugar')?.value,
      referencia: this.Formulario.get('referencia')?.value,
    });
  }

eliminarRegistro(indexR: number) {
    this.listDatos.splice(indexR, 1);
}

actualizarRegistro(){
  
}

//modal
abrirModal(){
  this.mostrar = !this.mostrar;
  this.bandera1 = !this.bandera1;
}

ocultarModal(){
  this.mostrar = !this.mostrar;
}

//alertas
addSuccess(): void {
  this.notiSvc.onSuccess(
    'Guardado Exítoso',
    'Su registro se Ingreso Correctamente'
  );
}
addInfo(): void {
  this.notiSvc.onInfo(
    'Limpieza Realizada',
    'Se limpiaron todos los campos correctamente'
  );
}
addWarning(): void {
  this.notiSvc.onWarning(
    'Se dio un reset a el sistema',
    'Se actualizarón los estatus'
  );
}
addDanger(): void {
  this.notiSvc.onDanger(
    'No se Guardo el Registro', 'Guardado Incorrecto'
  );
}


}
