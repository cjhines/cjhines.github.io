import React, { useEffect, useState, useRef } from 'react';

import Cell from '../geometry/Cell';
import useCanvas from '../hooks/useCanvas';
import '../App.scss';
import { addChromaticAberration } from '../utils/effects';

type Props = {
  children: React.ReactNode;
};

const Canvas: React.FunctionComponent<Props> = ({ children }: Props) => {
  const canvasRef = useCanvas();
  const timestampRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const sizeRef = useRef(size);

  // 1) Initially measure and save dimensions of parent
  // 2) Setup resize handler
  useEffect(() => {
    measureSize();
    window.addEventListener('resize', measureSize);
    return () => {
      window.removeEventListener('resize', measureSize);
    };
  }, []);

  // Creates a new Cell instance then starts recursive animation
  function animate(timestamp: number) {
    timestampRef.current = timestamp;
    const context = canvasRef.current.getContext('2d');
    const cell = new Cell(
      context,
      sizeRef.current.width,
      sizeRef.current.height
    );

    // Recursive function. Only loops latest scaled canvas
    const animateCell = () => {
      if (timestamp >= timestampRef.current) {
        // Fill background with solid color
        context.fillStyle = '#FFC107';
        context.fillRect(0, 0, sizeRef.current.width, sizeRef.current.height);
        cell.animate();
        // Effects
        addChromaticAberration(context, {
          width: sizeRef.current.width,
          height: sizeRef.current.height,
          offset: 8,
        });
        requestAnimationFrame(animateCell);
      }
    };
    requestAnimationFrame(animateCell);
  }

  // Retrieves and saves the canvas parents' dimensions
  const measureSize = () => {
    const { parentElement } = canvasRef.current;
    const newSize = {
      ...sizeRef.current,
      width: parentElement.clientWidth,
      height: parentElement.clientHeight,
    };
    sizeRef.current = newSize;
    setSize(newSize);
    // Update timestamp reference and start animation
    requestAnimationFrame(animate);
  };

  return (
    <div className="canvasContainer hide-if-small">
      <canvas
        className="canvas"
        ref={canvasRef}
        width={size.width}
        height={size.height}
      />
      {children}
    </div>
  );
};

export default Canvas;
