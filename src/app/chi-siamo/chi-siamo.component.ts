// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chi-siamo',
//   templateUrl: './chi-siamo.component.html',
//   styleUrls: ['./chi-siamo.component.scss']
// })
// export class ChiSiamoComponent {


//   images = [
//     {
//       src: 'assets/wright1.jpg',
//       alt: 'Descrizione immagine 1',
//     },
//     {
//       src: 'assets/wright3.jpg',
//       alt: 'Descrizione immagine 2',
//     },
//     // Aggiungi altre immagini
//   ];

// }

// chi-siamo.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class ChiSiamoComponent implements OnInit {
  sectionState = 'show'; // Inizializza con "show"

  constructor() {}

  ngOnInit() {}

  onScroll(event: any): void {
    // Logic to handle scrolling and change sectionState based on scroll position
    // E.g., use event listeners to detect scrolling and set sectionState accordingly
  }
}
