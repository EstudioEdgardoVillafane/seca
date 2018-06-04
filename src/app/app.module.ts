import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CielorrasosComponent } from './cielorrasos/cielorrasos.component';
import { RevestimientosComponent } from './revestimientos/revestimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { ColocacionplacasComponent } from './colocacionplacas/colocacionplacas.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GraciasComponent } from './gracias/gracias.component';
import { ConsultaporobraComponent } from './consultaporobra/consultaporobra.component';
import { BackendContentComponent } from './backend-content/backend-content.component';
import { ContentService } from './content.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { UsosComponent } from './usos/usos.component';
import { ItemUsosComponent } from './item-usos/item-usos.component';
import { BackendNavbarComponent } from './backend-navbar/backend-navbar.component';
import { BackendLoginComponent } from './backend-login/backend-login.component';
import { BackendLoginService } from './backend-login.service';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: BackendNavbarComponent,
  },
  {
    path: 'admin/contenido',
    component: BackendContentComponent,
  },
  {
    path: 'usos',
    component: UsosComponent,
  },
  {
    path: 'usos/:nombre',
    component: ItemUsosComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'revestimientos/:nombre',
    component: RevestimientosComponent,
  },
  {
    path: 'cielorrasos/:nombre',
    component: CielorrasosComponent,
  },
  {
    path: 'instalaciones/:slug',
    component: ColocacionplacasComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'gracias',
    component: GraciasComponent,
  },
  {
    path: 'consulta',
    component: ConsultaporobraComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CielorrasosComponent,
    RevestimientosComponent,
    ContactoComponent,
    HomeComponent,
    CarouselBasicComponent,
    ColocacionplacasComponent,
    NavigationComponent,
    GraciasComponent,
    ConsultaporobraComponent,
    BackendContentComponent,
    UsosComponent,
    ItemUsosComponent,
    BackendNavbarComponent,
    BackendLoginComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    HttpModule,
    HttpClientModule,
  ],
  exports: [
    [RouterModule]
  ],
  providers: [ContentService,BackendLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
