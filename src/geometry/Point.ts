import utils from './utils';

type Arguments = {
  x: number;
  y: number;
  range: Range;
  canvas: CanvasRenderingContext2D;
};

type Coordinate = {
  x: number;
  y: number;
};

type Range = {
  min: number;
  max: number;
};

const randomDuration = () => utils.random(100, 5000);

// Class which represents a point in 2D space
export default class Point {
  position: Coordinate;
  canvas: CanvasRenderingContext2D;
  anchor: Coordinate;
  vel: Coordinate;
  range: Range;
  springTarget: Coordinate;
  time: Date;
  springLength: number;
  duration: number;
  friction: number;
  direction: number;
  k: number;

  constructor({ x, y, range, canvas }: Arguments) {
    this.canvas = canvas;
    this.anchor = { x, y };
    this.position = { x, y };
    this.vel = { x: 0, y: 0 };
    this.range = range;
    this.time = new Date();
    this.duration = randomDuration();
    this.addSpring(this.anchor);
    this.friction = 0.98;
    this.direction = this.target(window.innerWidth * 0.25,  window.innerHeight / 2)
    this.setSpeed(utils.random(this.range.min, this.range.max));
    this.setAngle(this.direction);
  }

  getSpeed = (): number =>
    Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y);

  setSpeed(speed: number): void {
    const angle = this.getAngle();
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
  }

  getAngle = (): number => Math.atan2(this.vel.y, this.vel.x);

  setAngle(angle: number): void {
    const speed = this.getSpeed();
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
  }

  target = (x: number, y: number): number =>
    Math.atan2(y - this.position.y, x - this.position.x);

  refresh(): void {
    this.vel.x *= this.friction;
    this.vel.y *= this.friction;
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;
  }

  render(): void {
    const time = new Date().getTime() - this.time.getTime();
    if (time < this.duration) {
      this.refreshSpring();
    } else {
      this.time = new Date();
      this.duration = randomDuration();
      this.setSpeed(utils.random(this.range.min, this.range.max));
    }
  }

  addSpring(springTarget: Coordinate): void {
    this.springTarget = springTarget;
    this.k = 0.02;
    this.springLength = 0.8;
    this.friction = 0.9;
  }

  refreshSpring(): void {
    this.vel.x *= this.friction;
    this.vel.y *= this.friction;
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;

    const dx = this.springTarget.x - this.position.x;
    const dy = this.springTarget.y - this.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const springForce = (distance - this.springLength) * this.k;
    const ax = (dx / distance) * springForce;
    const ay = (dy / distance) * springForce;
    this.vel.x += ax;
    this.vel.y += ay;
  }
}
