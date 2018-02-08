import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from "@angular/forms";

import {Routes, RouterModule} from '@angular/router';

import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import {CrearComponent} from "./crear/crear.component";
import {ContactoComponent} from "./contacto/contacto.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";

import { LugaresService } from './services/lugares.service';
import { AutorizacionService } from './services/autorizacion.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyGuard } from "./services/my-guard.service";




const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'crear/:id', component: CrearComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyAjC7nfVhiqcYt0VGDDs7zu3ZDNhLZlQLk",
  authDomain: "mapsproject-9dfcb.firebaseapp.com",
  databaseURL: "https://mapsproject-9dfcb.firebaseio.com",
  storageBucket: "",
  projectId: "mapsproject-9dfcb",
  messagingSenderId: "1008422005310"
};

@NgModule({
  declarations: [
    AppComponent,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      LoginComponent,
      RegistroComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [LugaresService,AutorizacionService,MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
