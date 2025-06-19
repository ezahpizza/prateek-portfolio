import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// StarfieldBackground: Canvas-based starfield, GSAP-powered hyperspace effect
const StarfieldBackground: React.FC<{
  onHyperspaceEnd: () => void;
  triggerHyperspace: boolean;
}> = ({ onHyperspaceEnd, triggerHyperspace }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHyperspace, setIsHyperspace] = useState(false);
  const starCount = 1200;
  const stars = useRef<any[]>([]);
  const animationRef = useRef<number>();
  const phaseRef = useRef<'normal' | 'entry' | 'tunnel' | 'exit'>('normal');
  const starSpeedRef = useRef(1);
  const starLineWidthRef = useRef(1);
  const starGlowRef = useRef(0.1);
  const tunnelTimeout = useRef<NodeJS.Timeout>();
  const exitTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // clean on mount
    phaseRef.current = 'normal';
    starSpeedRef.current = 1;
    starLineWidthRef.current = 1;
    starGlowRef.current = 0.1;
    setIsHyperspace(false);
    
    // Kill any existing GSAP animations
    gsap.killTweensOf(starSpeedRef);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let w = window.innerWidth;
    let h = window.innerHeight;
    let x = w / 2;
    let y = h / 2;
    let z = (w + h) / 2;
    let starRatio = 256;
    let starColorRatio = 1 / z;

    // Enable anti-aliasing for smoother lines
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // canvas reset
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgb(0, 0, 36)';
    ctx.fillRect(0, 0, w, h);

    // Resize handler
    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      x = w / 2;
      y = h / 2;
      z = (w + h) / 2;
      starColorRatio = 1 / z;
      canvas.width = w;
      canvas.height = h;
      // Re-enable anti-aliasing after canvas resize
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialize stars
    function initStars() {
      stars.current = [];
      for (let i = 0; i < starCount; i++) {
        stars.current.push([
          Math.random() * w * 2 - x * 2,
          Math.random() * h * 2 - y * 2,
          Math.round(Math.random() * z),
          0,
          0,
        ]);
      }
    }
    initStars();

    // Animation loop
    function animate() {
      ctx.fillStyle = `rgba(0, 0, 36, ${starGlowRef.current})`;
      ctx.fillRect(0, 0, w, h);
      
      for (let i = 0; i < starCount; i++) {
        let s = stars.current[i];
        let prevX = s[3];
        let prevY = s[4];
        
        s[2] -= starSpeedRef.current;
        if (s[2] < 1) s[2] = z;
        
        s[3] = x + (s[0] / s[2]) * starRatio;
        s[4] = y + (s[1] / s[2]) * starRatio;
        
        if (prevX > 0 && prevX < w && prevY > 0 && prevY < h) {
          ctx.save();
          
          // Calculate line width based on depth and speed
          const lineWidth = (1 - starColorRatio * s[2]) * starLineWidthRef.current;
          ctx.lineWidth = Math.max(0.2, lineWidth * 0.4);
          
          // Set up glow effect
          if (isHyperspace) {
            ctx.shadowColor = 'rgba(180, 220, 255, 0.8)';
            ctx.shadowBlur = 7;
            ctx.strokeStyle = 'rgba(180, 220, 255, 0.9)';
          } else {
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.shadowBlur = 2;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          }
          
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(s[3], s[4]);
          ctx.stroke();
          
          ctx.restore();
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Hyperspace effect sequence
    if (triggerHyperspace && phaseRef.current === 'normal') {
      setIsHyperspace(true);
      phaseRef.current = 'entry';
      
      // Entry: ramp up speed, line width, and change background opacity
      gsap.to(starSpeedRef, {
        current: 18,
        duration: 1.2,
        ease: 'power2.in',
        onUpdate: () => {
          // Increase line width multiplier
          starLineWidthRef.current = 1 + (starSpeedRef.current - 1) * 0.8;
        },
        onComplete: () => {
          phaseRef.current = 'tunnel';
          // Tunnel: maintain high speed, thick/bright lines
          tunnelTimeout.current = setTimeout(() => {
            phaseRef.current = 'exit';
            // Exit: slow down first, then flash to white
            gsap.to(starSpeedRef, {
              current: 1,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                // Decrease line width as speed decreases
                starLineWidthRef.current = 1 + (starSpeedRef.current - 1) * 0.8;
              },
              onComplete: () => {              
                setIsHyperspace(false);
                starSpeedRef.current = 1;
                starLineWidthRef.current = 1;
                starGlowRef.current = 0.1;
                phaseRef.current = 'normal';
                onHyperspaceEnd();
              }
            });
          }, 4000); 
        }
      });
    }

    return () => {
      // cleanup
      gsap.killTweensOf(starSpeedRef);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current!);
      clearTimeout(tunnelTimeout.current!);
      clearTimeout(exitTimeout.current!);
    };
  }, [triggerHyperspace]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-50 bg-black"
      style={{ display: 'block' }}
    />
  );
};

export default StarfieldBackground;