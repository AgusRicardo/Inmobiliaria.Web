import { RouterModule, Routes } from '@angular/router';
import { InquilinosComponent } from './modules/layout/inquilinos/inquilinos.component';
import { NgModule } from '@angular/core';
import { loginGuard } from './guards/login.guard';
import { noLoginGuard } from './guards/noLogin.guard';
import { PropiedadesComponent } from './modules/layout/propiedades/propiedades.component';
import { ContratosComponent } from './modules/layout/contratos/contratos.component';
import { LoginComponent } from './modules/layout/login/login.component';
import { InicioComponent } from './modules/layout/inicio/inicio.component';
import { NuevoInquilinoComponent } from './modules/layout/inquilinos/nuevo-inquilino/nuevo-inquilino.component';
import { PropietariosComponent } from './modules/layout/propietarios/propietarios.component';
import { NuevoContratoComponent } from './modules/layout/contratos/nuevo-contrato/nuevo-contrato.component';
import { NuevoPropietarioComponent } from './modules/layout/propietarios/nuevo-propietario/nuevo-propietario.component';
import { NuevaPropiedadComponent } from './modules/layout/propiedades/nueva-propiedad/nueva-propiedad.component';


export const routes: Routes = [
  // Public routes
  { path: '', redirectTo: '/login', pathMatch: 'full'}, // Ruta por defecto no logueado
  { path: 'login', component: LoginComponent, canActivate: [noLoginGuard] },

  // Private routes
  { path: 'inicio', component: InicioComponent, canActivate: [loginGuard]},
  { path: 'inquilinos', component: InquilinosComponent, canActivate: [loginGuard] },
  { path: 'inquilinos/nuevo-inquilino', component: NuevoInquilinoComponent, canActivate: [loginGuard] },
  { path: 'propietarios', component: PropietariosComponent, canActivate: [loginGuard] },
  { path: 'propiedades', component: PropiedadesComponent, canActivate: [loginGuard] },
  { path: 'contratos', component: ContratosComponent, canActivate: [loginGuard] },
  { path: 'contratos/nuevo-contrato', component: NuevoContratoComponent, canActivate: [loginGuard] },
  { path: 'propietarios/nuevo-propietario', component: NuevoPropietarioComponent, canActivate: [loginGuard] },
  { path: 'propiedades/nueva-propiedad', component: NuevaPropiedadComponent, canActivate: [loginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
