import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas
import {app_routing} from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramarcitaComponent } from './components/programarcita/programarcita.component';
import { AdoptameComponent } from './components/adoptame/adoptame.component';
import { MascotasdiponiblesComponent } from './components/mascotasdiponibles/mascotasdiponibles.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { app} from 'controllers';

@NgModule({
  declarations: [
    AppComponent,
    ProgramarcitaComponent,
    AdoptameComponent,
    MascotasdiponiblesComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
