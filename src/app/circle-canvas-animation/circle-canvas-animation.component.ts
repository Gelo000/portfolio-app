import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circle-canvas-animation',
  template: `
    <canvas #canvas></canvas>
  `,
  styles: [
    `
      canvas {
        display: block;
      }
    `
  ]
})
export class CircleCanvasAnimationComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  circles: any[] = [];

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('2D context is not available.');
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const getRandomHue = () => {
      return Math.floor(Math.random() * 360);
    };

    const updateHue = () => {
      this.circles.forEach((circle: any, index: number) => {
        const hue = (index % 3) * 120;
        circle.color = `hsl(${hue}, 100%, 50%)`;
      });
    };

    for (let i = 0; i < 40; i++) {
      const circle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 80 + 40,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        color: ''
      };

      this.circles.push(circle);
    }

    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.circles.forEach((circle: any) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();

        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }

        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }

        circle.color = `hsl(${(parseInt(circle.color.split(',')[0].split('(')[1]) + 1) % 360}, 100%, 50%)`;
      });

      requestAnimationFrame(drawCircles);
    };

    updateHue();

    drawCircles();
  }
}
