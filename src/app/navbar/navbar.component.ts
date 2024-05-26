// navbar.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: any;
  showProfileOverlay = false;

  toggleProfileOverlay() {
    this.showProfileOverlay = !this.showProfileOverlay;
  }
}
