import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-animation',
  templateUrl: './canvas-animation.component.html',
  styleUrls: ['./canvas-animation.component.css']
})
export class CanvasAnimationComponent implements AfterViewInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private stars: any[] = [];
  private FPS = 60;
  private x = 100;
  private mouse = { x: 0, y: 0 };

  ngAfterViewInit(): void {
    console.log('canvas entered')
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d')!;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      console.log('canvas size', this.canvas)
    } else {
      console.error('Canvas element not found');
    }

    // Push stars to array
    for (let i = 0; i < this.x; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    this.tick(); // Start the animation
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalCompositeOperation = 'lighter';

    for (let i = 0, x = this.stars.length; i < x; i++) {
      const s = this.stars[i];
      this.ctx.fillStyle = 'green';
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.fillStyle = 'yellow';
      this.ctx.stroke();
    }

    this.ctx.beginPath();
    for (let i = 0, x = this.stars.length; i < x; i++) {
      const starI = this.stars[i];
      this.ctx.moveTo(starI.x, starI.y);
      if (this.distance(this.mouse, starI) < 150) this.ctx.lineTo(this.mouse.x, this.mouse.y);
      for (let j = 0, x = this.stars.length; j < x; j++) {
        const starII = this.stars[j];
        if (this.distance(starI, starII) < 150) {
          this.ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    this.ctx.lineWidth = 0.05;
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
  }

  private distance(point1: any, point2: any): number {
    const xs = point2.x - point1.x;
    const ys = point2.y - point1.y;
    return Math.sqrt(xs * xs + ys * ys);
  }

  private update(): void {
    for (let i = 0, x = this.stars.length; i < x; i++) {
      const s = this.stars[i];
      s.x += s.vx / this.FPS;
      s.y += s.vy / this.FPS;

      if (s.x < 0 || s.x > this.canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > this.canvas.height) s.vy = -s.vy;
    }
  }

  private tick(): void {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.tick());
  }
}