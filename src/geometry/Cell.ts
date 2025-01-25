import Circle from './Circle';

// Configuration objects for each circle within the cell.
const configurations = [
  {
    colour: '#008AD2',
    radius: 430,
    pointCount: 90,
    range: { min: 1, max: 10 },
  },
  {
    colour: '#F44336',
    radius: 360,
    pointCount: 70,
    range: { min: 1, max: 10 },
  },
  {
    colour: '#FFC107',
    radius: 290,
    pointCount: 60,
    range: { min: 1, max: 3 },
  },
  {
    colour: '#008AD2',
    radius: 220,
    pointCount: 30,
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
    pointCount: 10,
    range: { min: 1, max: 3 },
  },
];

// Cell class which consists of a number of pre-configured circles.
export default class {
  circles: Circle[];

  // Initialise with canvas and dimensions.
  constructor(canvas: CanvasRenderingContext2D, width: number, height: number) {
    const x = width / 2;
    const y = height / 2;

    // Initialise circles from configuration array entries.
    this.circles = [];
    configurations.forEach((configuration) => {
      this.circles.push(
        new Circle({
          x,
          y,
          canvas,
          compositionOperation: 'source-over', // Default.
          ...configuration,
        })
      );
    });
  }

  // Iterate through configured circles and animate.
  animate = (): void => {
    this.circles.forEach((circle) => circle.draw());
  };
}
