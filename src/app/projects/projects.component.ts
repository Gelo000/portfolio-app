import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isHovered: number | null = null;

  toggleHoverState(index: number) {
    this.isHovered = this.isHovered === index ? null : index;
  }
}
