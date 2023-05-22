import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fade-in');
    const windowBottom = window.innerHeight + window.pageYOffset;

    elements.forEach((element: HTMLElement) => {
      const elementTop = element.offsetTop;

      if (elementTop < windowBottom) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
}
