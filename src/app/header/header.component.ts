import { Component } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onTabChange($event: NgbNavChangeEvent) {
    const targetSectionId = $event.nextId;
    const targetSection = document.getElementById(`section-${targetSectionId}`);

    if (targetSection) {
      window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    }
  }
}
