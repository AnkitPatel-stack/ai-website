// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const SolarSystemBackground = () => {
//   const mountRef = useRef(null);
  
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);
    
//     const particlesGeometry = new THREE.BufferGeometry();
//     const count = 2000;
//     const positions = new Float32Array(count * 3);
    
//     for(let i = 0; i < count * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 100;
//     }
    
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       color: 0x0A84FF,
//       transparent: true,
//       opacity: 0.6
//     });
    
//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);
//     camera.position.z = 5;
    
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particles.rotation.x += 0.0005;
//       particles.rotation.y += 0.0005;
//       renderer.render(scene, camera);
//     };
//     animate();
    
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);
  
//   return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} />;
// };

// export default SolarSystemBackground;


// // src/components/SolarSystemBackground.jsx
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const SolarSystemBackground = () => {
//   const mountRef = useRef(null);
  
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true, 
//       antialias: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }
    
//     // Create particles with pink accents
//     const particlesCount = 1500;
//     const positions = new Float32Array(particlesCount * 3);
//     const colors = new Float32Array(particlesCount * 3);
//     const sizes = new Float32Array(particlesCount);
    
//     // Color palette with pink accents
//     const colorPalette = [
//       new THREE.Color(0xff0090), // Primary pink
//       new THREE.Color(0xff1dce), // Lighter pink
//       new THREE.Color(0xFFFFFF), // White
//       new THREE.Color(0xCCCCCC), // Light gray
//       new THREE.Color(0x999999), // Gray
//     ];
    
//     for(let i = 0; i < particlesCount; i++) {
//       const radius = 10 + Math.random() * 40;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
//       const z = radius * Math.cos(phi);
      
//       positions[i * 3] = x;
//       positions[i * 3 + 1] = y;
//       positions[i * 3 + 2] = z;
      
//       // 30% chance for pink particles
//       const isPink = Math.random() < 0.3;
//       const color = isPink ? colorPalette[0] : 
//                    (Math.random() < 0.5 ? colorPalette[2] : colorPalette[3]);
      
//       colors[i * 3] = color.r;
//       colors[i * 3 + 1] = color.g;
//       colors[i * 3 + 2] = color.b;
      
//       sizes[i] = isPink ? 0.05 + Math.random() * 0.15 : 0.02 + Math.random() * 0.08;
//     }
    
//     const particlesGeometry = new THREE.BufferGeometry();
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//     particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//       sizeAttenuation: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);
    
//     // Add larger pink "stars"
//     const pinkStarsGeometry = new THREE.BufferGeometry();
//     const pinkStarsCount = 20;
//     const pinkStarsPositions = new Float32Array(pinkStarsCount * 3);
    
//     for(let i = 0; i < pinkStarsCount * 3; i += 3) {
//       pinkStarsPositions[i] = (Math.random() - 0.5) * 60;
//       pinkStarsPositions[i + 1] = (Math.random() - 0.5) * 30;
//       pinkStarsPositions[i + 2] = (Math.random() - 0.5) * 60;
//     }
    
//     pinkStarsGeometry.setAttribute('position', new THREE.BufferAttribute(pinkStarsPositions, 3));
    
//     const pinkStarsMaterial = new THREE.PointsMaterial({
//       size: 0.3,
//       color: 0xff0090,
//       transparent: true,
//       opacity: 0.9,
//       sizeAttenuation: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const pinkStars = new THREE.Points(pinkStarsGeometry, pinkStarsMaterial);
//     scene.add(pinkStars);
    
//     camera.position.z = 15;
    
//     let animationId;
//     let time = 0;
    
//     const animate = () => {
//       animationId = requestAnimationFrame(animate);
      
//       time += 0.001;
      
//       particles.rotation.y += 0.0001;
//       particles.rotation.x += 0.00005;
      
//       pinkStars.material.opacity = 0.7 + 0.3 * Math.sin(time * 2);
//       pinkStars.rotation.y += 0.0003;
      
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//       if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       pinkStarsGeometry.dispose();
//       pinkStarsMaterial.dispose();
//     };
//   }, []);
  
//   return (
//     <div 
//       ref={mountRef} 
//       style={{ 
//         position: 'fixed', 
//         top: 0, 
//         left: 0, 
//         width: '100%', 
//         height: '100%', 
//         zIndex: 0,
//         pointerEvents: 'none'
//       }} 
//     />
//   );
// };

// export default SolarSystemBackground;

// // src/components/SolarSystemBackground.jsx
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const SolarSystemBackground = () => {
//   const mountRef = useRef(null);
  
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true, 
//       antialias: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }
    
//     // Create white stars only
//     const starsCount = 2000;
//     const positions = new Float32Array(starsCount * 3);
//     const sizes = new Float32Array(starsCount);
    
//     for(let i = 0; i < starsCount; i++) {
//       const radius = 5 + Math.random() * 50;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
//       const z = radius * Math.cos(phi);
      
//       positions[i * 3] = x;
//       positions[i * 3 + 1] = y;
//       positions[i * 3 + 2] = z;
      
//       // Different sizes for stars
//       sizes[i] = 0.02 + Math.random() * 0.15;
//     }
    
//     const starsGeometry = new THREE.BufferGeometry();
//     starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
//     const starsMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       color: 0xFFFFFF, // Pure white
//       transparent: true,
//       opacity: 0.9,
//       sizeAttenuation: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);
    
//     // Add some twinkling stars
//     const twinklingStarsGeometry = new THREE.BufferGeometry();
//     const twinklingStarsCount = 100;
//     const twinklingPositions = new Float32Array(twinklingStarsCount * 3);
//     const twinklingSizes = new Float32Array(twinklingStarsCount);
    
//     for(let i = 0; i < twinklingStarsCount * 3; i += 3) {
//       twinklingPositions[i] = (Math.random() - 0.5) * 80;
//       twinklingPositions[i + 1] = (Math.random() - 0.5) * 40;
//       twinklingPositions[i + 2] = (Math.random() - 0.5) * 80;
//       twinklingSizes[i/3] = 0.1 + Math.random() * 0.2;
//     }
    
//     twinklingStarsGeometry.setAttribute('position', new THREE.BufferAttribute(twinklingPositions, 3));
//     twinklingStarsGeometry.setAttribute('size', new THREE.BufferAttribute(twinklingSizes, 1));
    
//     const twinklingStarsMaterial = new THREE.PointsMaterial({
//       size: 0.1,
//       color: 0xFFFFFF,
//       transparent: true,
//       opacity: 0.8,
//       sizeAttenuation: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const twinklingStars = new THREE.Points(twinklingStarsGeometry, twinklingStarsMaterial);
//     scene.add(twinklingStars);
    
//     camera.position.z = 15;
    
//     let animationId;
//     let time = 0;
    
//     const animate = () => {
//       animationId = requestAnimationFrame(animate);
      
//       time += 0.001;
      
//       // Slow rotation for depth effect
//       stars.rotation.y += 0.00005;
//       twinklingStars.rotation.y += 0.0001;
      
//       // Twinkling effect
//       twinklingStars.material.opacity = 0.6 + 0.4 * Math.sin(time * 3);
//       twinklingStars.material.size = 0.08 + 0.04 * Math.sin(time * 2);
      
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//       if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       starsGeometry.dispose();
//       starsMaterial.dispose();
//       twinklingStarsGeometry.dispose();
//       twinklingStarsMaterial.dispose();
//     };
//   }, []);
  
//   return (
//     <div 
//       ref={mountRef} 
//       style={{ 
//         position: 'fixed', 
//         top: 0, 
//         left: 0, 
//         width: '100%', 
//         height: '100%', 
//         zIndex: 0,
//         pointerEvents: 'none'
//       }} 
//     />
//   );
// };

// export default SolarSystemBackground;

// // src/components/SolarSystemBackground.jsx
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const SolarSystemBackground = () => {
//   const mountRef = useRef(null);
  
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true, 
//       antialias: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }
    
//     // White stars only
//     const starsCount = 3000;
//     const positions = new Float32Array(starsCount * 3);
//     const sizes = new Float32Array(starsCount);
    
//     for(let i = 0; i < starsCount; i++) {
//       const radius = 5 + Math.random() * 100;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta) * 0.3;
//       const z = radius * Math.cos(phi);
      
//       positions[i * 3] = x;
//       positions[i * 3 + 1] = y;
//       positions[i * 3 + 2] = z;
      
//       sizes[i] = 0.01 + Math.random() * 0.2;
//     }
    
//     const starsGeometry = new THREE.BufferGeometry();
//     starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
//     const starsMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       color: 0xFFFFFF,
//       transparent: true,
//       opacity: 1,
//       sizeAttenuation: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);
    
//     camera.position.z = 5;
    
//     let animationId;
    
//     const animate = () => {
//       animationId = requestAnimationFrame(animate);
      
//       stars.rotation.y += 0.0002;
//       stars.rotation.x += 0.0001;
      
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//       if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       starsGeometry.dispose();
//       starsMaterial.dispose();
//     };
//   }, []);
  
//   return (
//     <div 
//       ref={mountRef} 
//       style={{ 
//         position: 'fixed', 
//         top: 0, 
//         left: 0, 
//         width: '100%', 
//         height: '100%', 
//         zIndex: 0,
//         pointerEvents: 'none'
//       }} 
//     />
//   );
// };

// export default SolarSystemBackground;


// src/components/SolarSystemBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SolarSystemBackground = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // White stars only
    const starsCount = 3000;
    const positions = new Float32Array(starsCount * 3);
    const sizes = new Float32Array(starsCount);
    
    for(let i = 0; i < starsCount; i++) {
      const radius = 5 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.3;
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      sizes[i] = 0.01 + Math.random() * 0.2;
    }
    
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xFFFFFF,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    camera.position.z = 5;
    
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default SolarSystemBackground;