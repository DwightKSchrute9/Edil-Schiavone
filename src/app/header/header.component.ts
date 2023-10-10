import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  currentUrl: string = ''; // Inizializza currentUrl

  tabContainerHeight: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.onRouteChange();
      }
    });
  }

  ngOnInit() {
    this.tabContainerHeight = $('.et-hero-tabs').height();
    this.onRouteChange();
  }

  ngAfterViewInit() {
    this.setupScrollSpy();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.onRouteChange();
  }

  onRouteChange() {
    const self = this;
    const element = $(`a[href='${this.currentUrl}']`);
    if (element) {
      const scrollTop = element.offset()?.top - this.tabContainerHeight + 1;
      const offset = $('.et-hero-tabs').offset()?.top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if (offset !== undefined && $(window).scrollTop() > offset) {
        element.parent().removeClass('et-hero-tab-active');
      } else if (scrollTop !== undefined && $(window).scrollTop() >= scrollTop) {
        element.parent().addClass('et-hero-tab-active');
        element.parent().siblings().removeClass('et-hero-tab-active');
      }
    }
  }

  setupScrollSpy() {
    $('a.scrollable').on('click', (event: Event) => { // Utilizza una freccia lambda qui
      const id = $(event.currentTarget).attr('href'); // Utilizza event.currentTarget
      event.preventDefault();
      const target = $(id);
      const offsetTop = target.offset()?.top;
      const offsetBottom = offsetTop !== undefined && target ? offsetTop + (target[0] as HTMLElement).clientHeight - this.tabContainerHeight : undefined;

      if (offsetTop !== undefined && offsetBottom !== undefined && $(window).scrollTop() >= offsetTop && $(window).scrollTop() < offsetBottom) {
        const newCurrentId = id;
        this.router.navigateByUrl(newCurrentId);
      }
    });
  }
}
