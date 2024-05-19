import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuComponent } from './components/formulario-usu/formulario-usu.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',// te manda a una ruta principal en caso de venir vacia la ruta
},
//{ path:'**', redirectTo: 'home' }, // te manda a una ruta principal en caso de escribir una ruta fallida
{
    path: 'home', //redirige al componente home
    canActivate: [],
    component: HomeComponent,
},
{
    path: 'formUsu', //muestra la ruta del formulario de usuarios
    canActivate: [],
    component: FormularioUsuComponent,
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
