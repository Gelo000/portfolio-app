import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  title = 'portfolio-app';
  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fade-in');
    const windowBottom = window.innerHeight + window.scrollY;
    const elementsButton = this.elementRef.nativeElement.querySelectorAll('.fade-in-scroll-button');
    const windowBottomButton = window.innerHeight + window.scrollY;

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
        element.removeAttribute('disabled');
      } else {
        element.classList.remove('visible');
        element.setAttribute('disabled', 'disabled');
      }
    });
    
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}