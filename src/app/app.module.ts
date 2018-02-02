import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import {Routes, RouterModule} from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';


const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle', component: DetalleComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
