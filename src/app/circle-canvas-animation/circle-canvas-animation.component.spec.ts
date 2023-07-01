import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCanvasAnimationComponent } from './circle-canvas-animation.component';

describe('CircleCanvasAnimationComponent', () => {
  let component: CircleCanvasAnimationComponent;
  let fixture: ComponentFixture<CircleCanvasAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCanvasAnimationComponent]
    });
    fixture = TestBed.createComponent(CircleCanvasAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
