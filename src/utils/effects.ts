interface ChromaticAberrationOptions {
  width: number;
  height: number;
  offset: number;
}

/**
 * Adds a simple chromatic aberration effect to a given 2D canvas.
 * Shifts the RED channel horizontally (left or right) and the BLUE channel the opposite way.
 */
export function addChromaticAberration(
  context: CanvasRenderingContext2D,
  { width, height, offset = 3 }: ChromaticAberrationOptions
) {
  // Get the current image data from the canvas
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  // Copy it so we can read from copy and write to original
  const copy = new Uint8ClampedArray(data);

  // We'll shift the RED channel to the right by `offset`
  // and shift the BLUE channel to the left by `offset`.
  // Green channel will remain as is to serve as our “base.”
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // index in the 1D array
      const i = (y * width + x) * 4;

      // Shift RED channel: read from x-offset in `copy`, write into x in `data`
      const redShiftedX = x - offset;
      if (redShiftedX >= 0 && redShiftedX < width) {
        const from = (y * width + redShiftedX) * 4;
        data[i] = copy[from]; // data[i] is the Red component
      }

      // Shift BLUE channel: read from x+offset in `copy`, write into x in `data`
      const blueShiftedX = x + offset;
      if (blueShiftedX >= 0 && blueShiftedX < width) {
        const from = (y * width + blueShiftedX) * 4;
        data[i + 2] = copy[from + 2]; // data[i+2] is the Blue component
      }
    }
  }

  context.putImageData(imageData, 0, 0);
}
