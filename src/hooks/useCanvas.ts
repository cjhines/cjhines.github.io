import { useEffect, useRef } from 'react';

// Generic 2D canvas reference hook
export default function (): React.MutableRefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Configure any canvas properties
  useEffect((): void => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 0;
  });

  return canvasRef;
}
