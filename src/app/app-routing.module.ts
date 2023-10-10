import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ServiziComponent } from './servizi/servizi.component'; // Importa le altre componenti necessarie

const routes: Routes = [
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'servizi', component: ServiziComponent },
  // Aggiungi le altre rotte per le tue sezioni
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
