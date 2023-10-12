import { Component } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent {


  images = [
    {
      src: 'assets/wright1.jpg',
      alt: 'Descrizione immagine 1',
    },
    {
      src: 'assets/wright3.jpg',
      alt: 'Descrizione immagine 2',
    },
    // Aggiungi altre immagini
  ];

}
