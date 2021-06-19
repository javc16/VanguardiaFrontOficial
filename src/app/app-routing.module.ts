import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { VistaprincipalComponent } from './components/proveedor/vistaprincipal/vistaprincipal.component';
import { AgregarProveedorComponent } from './components/proveedor/agregar-proveedor/agregar-proveedor.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { CrearTipoServicioComponent } from './components/tipo-servicio/crear-tipo-servicio/crear-tipo-servicio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { CrearServicioComponent } from './components/servicio/crear-servicio/crear-servicio.component';
import { CrearTipoUsuarioComponent } from './components/tipo-usuario/crear-tipo-usuario/crear-tipo-usuario.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'etc',
    component: HomeComponent,
    pathMatch: 'full',
  }, {
    path: 'proveedor',
    component: ProveedorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'agregarproveedor',
    component: AgregarProveedorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: VistaprincipalComponent
  },
  {
    path: 'tiposervicio',
    component: TipoServicioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'creartiposervicio',
    component: CrearTipoServicioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'agregarusuario',
    component: CrearUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tipousuario',
    component: TipoUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'creartipousuario',
    component: CrearTipoUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'servicio',
    component: ServicioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'createservicio',
    component: CrearServicioComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
