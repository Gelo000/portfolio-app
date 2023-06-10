import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarCollapsed: boolean = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  navbarAnimationStyle() {
    if (this.isNavbarCollapsed) {
      return {};
    } else {
      return { 'animation': 'slideIn 0.5s' };
    }
  }
}
