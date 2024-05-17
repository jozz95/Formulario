import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',// te manda a una ruta principal en caso de venir vacia la ruta
},
//{ path:'**', redirectTo: 'login' }, // te manda a una ruta principal en caso de escribir una ruta fallida
{
    path: 'login',
    canActivate: [],
    component: LoginComponent,

},
{
  path: 'login2',
  canActivate: [],
  component: LoginComponent,

},
{
    path: 'detalle', //muestra la ruta de la pagina principal
    canActivate: [],
    component: DetalleComponent,
  
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
