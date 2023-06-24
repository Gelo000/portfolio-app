import { AfterViewInit, Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const loadingScreen = document.querySelector('.loading');
    this.removeLoadingScreen().subscribe(() => {
      loadingScreen?.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen?.remove();
      }, 500); // Wait for the transition to complete before removing the element
    });
  }

  removeLoadingScreen(): Observable<any> {
    return of(null).pipe(delay(3000));
  }

}