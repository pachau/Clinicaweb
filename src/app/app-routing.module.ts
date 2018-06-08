import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HistoriaComponent } from './historia/historia.component';
import { CreacionDIRESAComponent } from './creacion-diresa/creacion-diresa.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { RedDeSaludComponent } from './red-de-salud/red-de-salud.component';

const routes: Routes = [
  {path:'historia',component:HistoriaComponent},
  {path: 'ubicacion', component:UbicacionComponent},
  {path:'inicio', component:InicioComponent},
  {path: 'objetivo', component: ObjetivoComponent},
  {path:'mision-vision', component: MisionVisionComponent},
  {path:'creacion-diresa', component: CreacionDIRESAComponent},
  {path:'estructura', component: EstructuraComponent},
  {path:'red-de-salud', component: RedDeSaludComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
