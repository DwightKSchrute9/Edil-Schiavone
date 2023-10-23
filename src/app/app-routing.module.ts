import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa il componente HomeComponent
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ServiziComponent } from './servizi/servizi.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rotta vuota per la home
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'servizi', component: ServiziComponent },
  // Aggiungi le altre rotte per le tue sezioni
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
