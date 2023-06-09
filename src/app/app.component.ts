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
    const elementsButton = this.elementRef.nativeElement.querySelectorAll('.fade-in-scroll-button');
    const elementsOpposite = this.elementRef.nativeElement.querySelectorAll('.fade-in-opposite');
    const windowBottom = window.innerHeight + window.pageYOffset;
    const windowBottomButton = window.innerHeight + window.pageYOffset;
    const windowBottomOpposite = window.innerHeight + window.pageYOffset;

    elements.forEach((element: HTMLElement) => {
      const elementTop = element.offsetTop;

      if (elementTop < windowBottom) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
    elementsButton.forEach((element: HTMLElement) => {
      const elementTop = element.offsetTop;

      if (elementTop < windowBottomButton) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
    elementsOpposite.forEach((element: HTMLElement) => {
      const elementTopOpposite = element.offsetTop;

      if (elementTopOpposite < windowBottomOpposite) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}