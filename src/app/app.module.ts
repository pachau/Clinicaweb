import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HistoriaComponent } from './historia/historia.component';
import { CreacionDIRESAComponent } from './creacion-diresa/creacion-diresa.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { MarcoLegalComponent } from './marco-legal/marco-legal.component';
import { RedComponent } from './red/red.component';
import { RedDeSaludComponent } from './red-de-salud/red-de-salud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    MisionVisionComponent,
    ObjetivoComponent,
    UbicacionComponent,
    HistoriaComponent,
    CreacionDIRESAComponent,
    EstructuraComponent,
    MarcoLegalComponent,
    RedComponent,
    RedDeSaludComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
