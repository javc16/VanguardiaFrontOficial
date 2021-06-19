import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AngularMaterialModule } from './angular-material.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    ExternalApiComponent,
    ErrorComponent,
    ProveedorComponent,
    VistaprincipalComponent,
    AgregarProveedorComponent,
    TipoServicioComponent,
    CrearTipoServicioComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    TipoUsuarioComponent,
    ServicioComponent,
    CrearServicioComponent,
    CrearTipoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HighlightModule,
    FontAwesomeModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
