import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  typedText: string = '';
  fullText: string = 'Passionate web dev, studying to become a skilled front-end developer.';
  typingDelay: number = 80;
  
  constructor() { }

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.typingDelay);
  }
}

