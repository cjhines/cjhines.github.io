// Collection of utility functions.
// Exclusively for geometry usage for now.

export default {
  random: (min: number, max: number): number =>
    min + Math.random() * (max - min),

  randomA: (min: number, max: number): number =>
    Math.floor(min + Math.random() * (max - min + 1)),

  easing: {
    linear: (n: number): number => n,

    elastic: (n: number): number =>
      n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),

    inExpo: (n: number): number => 2 ** (10 * (n - 1)),
  },
};
