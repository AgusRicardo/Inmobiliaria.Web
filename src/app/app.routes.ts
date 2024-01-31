import { RouterModule, Routes } from '@angular/router';
import { InquilinosComponent } from './inquilinos/inquilinos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { loginGuard } from './guards/login.guard';
import { noLoginGuard } from './guards/noLogin.guard';
import { NuevoInquilinoComponent } from './nuevo-inquilino/nuevo-inquilino.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { ContratosComponent } from './contratos/contratos.component';
import { NuevoContratoComponent } from './nuevo-contrato/nuevo-contrato.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
