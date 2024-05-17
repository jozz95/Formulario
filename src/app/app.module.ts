import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxToastNotifierModule} from "ngx-toast-notifier";
import { LoginComponent } from './components/login/login.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormularioUsuComponent } from './components/formulario-usu/formulario-usu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetalleComponent,
    FormularioUsuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxToastNotifierModule.forRoot({
      timeOut: 10500,
      bgColors: {
       success: '#54a254',
       info: '#1976d2',
       warning: '#e09f26',
       danger: '#da2d2d',
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
