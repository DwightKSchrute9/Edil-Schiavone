import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isSticky: boolean = false;
  isHidden: boolean = false;
  isScrolled:boolean = false;

  images = [
    {
      src: 'assets/wright1.jpg', // Percorso relativo all'immagine 1
      alt: 'Descrizione immagine 1'
    },
    {
      src: 'assets/wright3.jpg', // Percorso relativo all'immagine 2
      alt: 'Descrizione immagine 2'
    },
    // Aggiungi altre immagini
  ];


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const triggerPosition = 100; // Posizione in pixel da cui far diventare sticky il div

    this.isSticky = scrollPosition >= triggerPosition;

    // Aggiungi questa condizione per nascondere la navbar quando scorri verso il basso
    if (scrollPosition > triggerPosition) {
      this.isHidden = scrollPosition > triggerPosition + 50; // Nascondi la navbar solo quando hai scrollato di 50px in basso
    } else {
      this.isHidden = false; // Mostra la navbar quando scorri verso l'alto
    }
  }
}
