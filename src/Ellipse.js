import React, { useRef, useEffect } from 'react';

const Ellipse = ({ ellipses }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ellipses.forEach(({ x, y, rx, ry, rotation, fill }) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation * Math.PI / 180);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, 2 * Math.PI);
      if (fill) {
        ctx.fillStyle = 'black';
        ctx.fill();
      } else {
        ctx.stroke();
      }
      ctx.restore();
    });
  }, [ellipses]);

  return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />;
};

export default Ellipse;
