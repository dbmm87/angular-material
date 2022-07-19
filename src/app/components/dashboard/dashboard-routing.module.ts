import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarUsuarioComponent } from './usuarios/agregar-usuario/agregar-usuario.component';

const routes: Routes = [
 {path:'', component:DashboardComponent, children:[
  {path:'', component:InicioComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'agregar-usuario', component:AgregarUsuarioComponent}
 ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }