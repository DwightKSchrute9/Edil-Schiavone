import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  scrollPosition: number;
  windowHeight: number;
  documentHeight: number;

  constructor() {
    this.scrollPosition = 0;
    this.windowHeight = 0;
    this.documentHeight = 0;

    // Inoltre, assicurati di inizializzare queste variabili all'interno del costruttore
    // quando il componente viene creato per la prima volta.
    this.updateScrollInfo();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollInfo();

    if (this.scrollPosition + this.windowHeight >= this.documentHeight - 50) {
      $('#site-footer').removeClass('hidden-footer').addClass('visible-footer');
    } else {
      $('#site-footer').removeClass('visible-footer').addClass('hidden-footer');
    }
  }

  private updateScrollInfo() {
    this.scrollPosition = $(window).scrollTop() || 0;
    this.windowHeight = $(window).height() || 0;
    this.documentHeight = $(document).height() || 0;
  }
}
