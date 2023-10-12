import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  isHidden: boolean = false;
  imagesLoaded = false;

  @ViewChild('etHeroTabsContainer')
  etHeroTabsContainer!: ElementRef;

  isMobileView = false; // Aggiungi questa variabile per gestire la vista mobile

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

  ngOnInit(): void {
    this.checkMobileView();
  }

  checkMobileView() {
    const screenWidth = window.innerWidth;
    this.isMobileView = screenWidth < 768; // Adatta la larghezza in base alle tue esigenze
  }

  handleImagesLoaded() {
    this.imagesLoaded = true;
  }

  showTabs() {
    this.isHidden = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkMobileView(); // Aggiorna la vista mobile durante lo scorrimento

    const scrollPosition = window.scrollY;
    const triggerPosition = 100;

    if (this.imagesLoaded && scrollPosition > triggerPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }

    if (this.imagesLoaded && scrollPosition > triggerPosition) {
      this.isHidden = scrollPosition > triggerPosition + 50;
    } else {
      this.isHidden = false;
    }
  }
}
