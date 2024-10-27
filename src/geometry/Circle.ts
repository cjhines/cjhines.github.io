import Point from './Point';

type Arguments = {
  x: number;
  y: number;
  colour: string;
  radius: number;
  pointCount: number;
  range: {
    min: number;
    max: number;
  };
  canvas: CanvasRenderingContext2D;
  compositionOperation: GlobalCompositeOperation;
};

// Class which represents a given number of 2D points.
export default class Circle {
  x: number;
  y: number;
  colour: string;
  radius: number;
  pointCount: number;
  range: { min: number; max: number };
  canvas: CanvasRenderingContext2D;
  compositionOperation: GlobalCompositeOperation;
  position: { x: number; y: number };
  points: Point[];

  constructor({
    x,
    y,
    colour,
    radius,
    pointCount,
    range,
    canvas,
    compositionOperation,
  }: Arguments) {
    this.colour = colour;
    this.position = { x, y };
    this.radius = radius;
    this.canvas = canvas;
    this.compositionOperation = compositionOperation;

    // Create and store as many point instances as specified.
    this.points = [];
    for (let i = 0; i < pointCount; i += 1) {
      const angle = ((Math.PI * 2) / pointCount) * i;
      this.points.push(
        new Point({
          x: Math.cos(angle) * this.radius + this.position.x,
          y: Math.sin(angle) * this.radius + this.position.y,
          range,
          canvas: this.canvas,
        })
      );
    }
  }

  // Draw and fill curves from each point to the next.
  draw(): void {
    this.canvas.globalCompositeOperation = this.compositionOperation;
    this.canvas.fillStyle = this.colour;
    this.canvas.strokeStyle = this.colour;
    this.canvas.beginPath();

    // Move to first control point.
    let xc = (this.points[0].position.x + this.points[1].position.x) / 2;
    let yc = (this.points[0].position.y + this.points[1].position.y) / 2;
    this.canvas.moveTo(xc, yc);

    // Draw curve to each next point.
    this.points.forEach((point, index, points) => {
      const nextPoint =
        index === points.length - 1
          ? points[0] // Back to start if end is reached.
          : points[index + 1];

      xc = (point.position.x + nextPoint.position.x) / 2;
      yc = (point.position.y + nextPoint.position.y) / 2;
      this.canvas.quadraticCurveTo(point.position.x, point.position.y, xc, yc);
    });

    // Do first point again to smooth loop.
    xc = (this.points[0].position.x + this.points[1].position.x) / 2;
    yc = (this.points[0].position.y + this.points[1].position.y) / 2;

    this.canvas.quadraticCurveTo(
      this.points[0].position.x,
      this.points[0].position.y,
      xc,
      yc
    );
    this.canvas.stroke();
    this.canvas.fill();
    this.points.forEach((points) => points.render());
  }
}
