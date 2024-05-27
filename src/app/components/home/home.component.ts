import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Fconsult!: FormGroup;
  mostrar2: boolean = false;
  bandera1: boolean = false;

    //en el constructor va todo lo que se ejecuta al iniciar el componente
    constructor(private fb: FormBuilder, public notiSvc: NgxToastService) {
      this.crearFormularioConsult(); //se ejectuta al arrancar el servicio la funcion crearformulario para cargarlo al inicio
    }
    
  listRecord = [
    {
      no: 1,
      nombre: 'Jossue Noe Martinez Cruz',
      fecha: '15/05/2024',
      hora: '3:45:PM',
      motivoConslt: 'Cita Por Dolor de Estomago.',
    },
  ];
  indexR = 1;

    //se crea una funcion que diseña los campos de un formulario
    crearFormularioConsult() {
      this.Fconsult = this.fb.group({
        nombre: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        hora: ['', [Validators.required]],
        motivoConslt: ['', [Validators.required]],
      });
    }

      //funcion que inserta en el arreglo los datos según sus campos
  agregar() {
    this.indexR = this.indexR + 1;
    this.listRecord.push({
      no: this.indexR,
      nombre: this.Fconsult.get('nombre')?.value,
      fecha: this.Fconsult.get('fecha')?.value,
      hora: this.Fconsult.get('hora')?.value,
      motivoConslt: this.Fconsult.get('motivoConslt')?.value
    });
  }

  eliminar(indexR: number) {
    this.listRecord.splice(indexR, 1);
  }

  addWarning(): void {
    this.notiSvc.onWarning(
      'No se realizo la actualizacion de los campos',
      'Se actualizarón cancelada'
    );
  }

  limpiarCampos() {
    this.Fconsult.get('nombre')?.setValue(''),
      this.Fconsult.get('fecha')?.setValue(''),
      this.Fconsult.get('hora')?.setValue(''),
      this.Fconsult.get('motivoConslt')?.setValue('')
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

   // Esta función formatea la hora a un formato de 12 horas
   formatHoraTo12Hour(hora: string): string {
    if (!hora) return '';
    const [hour, minute] = hora.split(':');
    const parsedHour = parseInt(hour);
    const parsedMinute = parseInt(minute);
    const period = parsedHour >= 12 ? 'PM' : 'AM';
    const formattedHour = parsedHour % 12 === 0 ? 12 : parsedHour % 12;
    const formattedMinute = parsedMinute < 10 ? '0' + parsedMinute : parsedMinute;
    return `${formattedHour}:${formattedMinute} ${period}`;
  }
  
  abrirModalAct(){
    this.mostrar2 = !this.mostrar2;
    this.bandera1 = !this.bandera1;
  }

}
