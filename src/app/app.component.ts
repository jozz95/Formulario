import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxToastService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fechaHoraActual: string = '';

  constructor() { }

  ngOnInit(): void {
    this.obtenerFechaYHora(); // Obtener la fecha y hora cuando se inicializa el componente

    // Actualizar la fecha y hora cada segundo
    setInterval(() => {
      this.obtenerFechaYHora();
    }, 1000);
  }

  obtenerFechaYHora() {
    // Obtener la fecha y hora actual
    const fechaHora = new Date();
    // Formatear la fecha y hora como texto en el formato deseado
    this.fechaHoraActual = fechaHora.toLocaleString('ES-MX', {
      day: '2-digit',
      month: 'short', // Mostrar el mes en formato abreviado
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true // Mostrar en formato de 12 horas
    });
  }
  
}
