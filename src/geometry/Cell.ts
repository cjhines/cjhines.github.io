import Circle from './Circle';

// Configuration objects for each circle within the cell
const configurations = [
  {
    colour: '#FFC107',
    radius: 100000000,
    pointCount: 4,
    range: { min: 1, max: 1 },
  },
  {
    colour: '#008AD2',
    radius: 250,
    pointCount: 50,
    range: { min: 1, max: 10 },
  },
  {
    colour: '#F44336',
    radius: 150,
    pointCount: 20,
    range: { min: 1, max: 10 },
  },
  {
    colour: '#FFC107',
    radius: 80,
    pointCount: 20,
    range: { min: 1, max: 3 },
  },
];

// Cell class which consists of a number of pre-configured circles
export default class {
  circles: Circle[];

  // Initialise with canvas and dimensions
  constructor(canvas: CanvasRenderingContext2D, width: number, height: number) {
    const x = width / 2;
    const y = height / 2;

    // Initialise circles from configuration array entries
    this.circles = [];
    configurations.forEach((configuration) => {
      this.circles.push(
        new Circle({
          x,
          y,
          canvas,
          compositionOperation: 'source-over', // default
          ...configuration,
        })
      );
    });
  }

  // Iterate through configured circles and animate
  animate = (): void => {
    this.circles.forEach((circle) => circle.draw());
  };
}
