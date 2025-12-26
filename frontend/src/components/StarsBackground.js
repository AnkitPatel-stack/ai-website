import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const StarsBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const createStars = () => {
      const stars = [];
      const starCount = Math.min(200, Math.floor(window.innerWidth * window.innerHeight / 5000));
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.05 + 0.02,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          originalOpacity: Math.random() * 0.5 + 0.3
        });
      }
      
      // Add some special pink stars
      for (let i = 0; i < 15; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          originalOpacity: Math.random() * 0.7 + 0.3,
          color: '#fa8072'
        });
      }
      
      return stars;
    };

    starsRef.current = createStars();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      starsRef.current.forEach(star => {
        // Move star
        star.y += star.speed;
        
        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Twinkle effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity > star.originalOpacity + 0.3 || star.opacity < star.originalOpacity - 0.3) {
          star.twinkleDirection *= -1;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        if (star.color) {
          // Pink stars
          ctx.fillStyle = `rgba(255, 0, 144, ${star.opacity})`;
          // Add glow effect for pink stars
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          glow.addColorStop(0, `rgba(255, 0, 144, ${star.opacity})`);
          glow.addColorStop(1, 'rgba(255, 0, 144, 0)');
          ctx.fillStyle = glow;
        } else {
          // White stars
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        }
        
        ctx.fill();
      });
      
      // Draw shooting stars occasionally
      if (Math.random() < 0.002) {
        drawShootingStar(ctx, canvas);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const drawShootingStar = (ctx, canvas) => {
    const x = Math.random() * canvas.width;
    const length = 100 + Math.random() * 50;
    const speed = 15;
    
    for (let i = 0; i < length; i++) {
      const segmentX = x - i * 0.5;
      const segmentY = i;
      const segmentRadius = (length - i) / 20;
      const opacity = (length - i) / length;
      
      const gradient = ctx.createRadialGradient(
        segmentX, segmentY, 0,
        segmentX, segmentY, segmentRadius * 2
      );
      gradient.addColorStop(0, `rgba(255, 0, 144, ${opacity})`);
      gradient.addColorStop(1, 'rgba(255, 0, 144, 0)');
      
      ctx.beginPath();
      ctx.arc(segmentX, segmentY, segmentRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default StarsBackground;