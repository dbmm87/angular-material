import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ModulesModule } from '../modules/modules.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AgregarUsuarioComponent } from './usuarios/agregar-usuario/agregar-usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ModulesModule,
    DashboardRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
