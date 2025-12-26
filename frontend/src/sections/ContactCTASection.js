// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';

// const ContactCTASection = () => {
//   const [content] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 4,
//                 bgcolor: '#00FF88',
//               },
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//               }}
//             >
//               {content.contact_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               {content.contact_subtitle}
//             </Typography>
            
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   component={Link}
//                   to="/contact"
//                   variant="contained"
//                   size="large"
//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   component={Link}
//                   to="/services"
//                   variant="outlined"
//                   size="large"
//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                     borderWidth: 2,
//                     '&:hover': {
//                       borderWidth: 2,
//                     },
//                   }}
//                 >
//                   View Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;



// // src/sections/ContactCTASection.js
// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const [content] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0A0F' }}>
//       <Container maxWidth="xl">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 4,
//                 bgcolor: '#00FF88',
//               },
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               {content.contact_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               {content.contact_subtitle}
//             </Typography>
            
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetInTouch}
//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                     bgcolor: '#00FF88',
//                     color: '#121218',
//                     '&:hover': {
//                       bgcolor: '#00CC6D',
//                       transform: 'translateY(-2px)',
//                       boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                     },
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;


// // src/sections/ContactCTASection.js
// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const [content] = useState({
//     contact_title: 'Ready to Transform Your Business with AI?',
//     contact_subtitle: "Let's discuss how our cutting-edge AI solutions can drive unprecedented growth and efficiency in your organization.",
//     stats: [
//       { value: '40%', label: 'Average Efficiency Gain' },
//       { value: '3x', label: 'Faster Decision Making' },
//       { value: '95%', label: 'Client Satisfaction' },
//     ]
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
//           `,
//           zIndex: 0,
//         }}
//       />

//       {/* Floating AI Elements */}
//       {[...Array(8)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: 'absolute',
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             background: i % 2 === 0 ? '#00FF88' : '#8A2BE2',
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `floatAI ${Math.random() * 15 + 10}s infinite ${Math.random() * 5}s`,
//             opacity: 0.6,
//             filter: 'blur(1px)',
//             '@keyframes floatAI': {
//               '0%, 100%': { 
//                 transform: 'translate(0, 0) scale(1)',
//                 opacity: 0.3
//               },
//               '33%': { 
//                 transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.2)`,
//                 opacity: 0.8
//               },
//               '66%': { 
//                 transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0.8)`,
//                 opacity: 0.5
//               }
//             }
//           }}
//         />
//       ))}

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: 'rgba(26, 26, 32, 0.8)',
//               backdropFilter: 'blur(10px)',
//               border: '2px solid',
//               borderColor: 'rgba(0, 255, 136, 0.3)',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 4,
//                 background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #00FF88)',
//                 backgroundSize: '200% 100%',
//                 animation: 'shimmer 3s infinite linear',
//                 '@keyframes shimmer': {
//                   '0%': { backgroundPosition: '-200% 0' },
//                   '100%': { backgroundPosition: '200% 0' }
//                 }
//               },
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 inset: 0,
//                 borderRadius: 4,
//                 padding: 2,
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2, #0066FF)',
//                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 pointerEvents: 'none',
//                 opacity: 0.5,
//               }
//             }}
//           >
//             {/* Neural Network Pattern Overlay */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                 opacity: 0.5,
//                 zIndex: 0,
//               }}
//             />

//             <Box sx={{ position: 'relative', zIndex: 1 }}>
//               {/* AI Icon Animation */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={inView ? { scale: 1 } : {}}
//                 transition={{ duration: 0.5, type: "spring" }}
//                 style={{ display: 'inline-block' }}
//               >
//                 <Box
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     borderRadius: '50%',
//                     background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mb: 4,
//                     mx: 'auto',
//                     boxShadow: '0 0 40px rgba(0, 255, 136, 0.4)',
//                     position: 'relative',
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       inset: -4,
//                       borderRadius: '50%',
//                       background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                       filter: 'blur(10px)',
//                       opacity: 0.5,
//                       zIndex: -1,
//                     }
//                   }}
//                 >
//                   <RocketLaunchIcon sx={{ fontSize: 40, color: '#121218' }} />
//                 </Box>
//               </motion.div>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 70%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   textShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                 }}
//               >
//                 {content.contact_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: '#E0E0E0',
//                   maxWidth: 800,
//                   mx: 'auto',
//                   fontSize: { xs: '1rem', md: '1.25rem' },
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {content.contact_subtitle}
//               </Typography>

//               {/* Stats Grid */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 gap: 4, 
//                 mb: 6,
//                 flexWrap: 'wrap'
//               }}>
//                 {content.stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <Box sx={{ textAlign: 'center' }}>
//                       <Typography
//                         variant="h1"
//                         sx={{
//                           color: '#00FF88',
//                           fontWeight: 800,
//                           fontSize: { xs: '2.5rem', md: '3rem' },
//                           lineHeight: 1,
//                           mb: 1,
//                         }}
//                       >
//                         {stat.value}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           color: '#A0A0A0',
//                           fontWeight: 500,
//                           fontSize: '0.9rem',
//                           textTransform: 'uppercase',
//                           letterSpacing: '1px',
//                         }}
//                       >
//                         {stat.label}
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 ))}
//               </Box>
              
//               <motion.div 
//                 whileHover={{ scale: 1.05 }} 
//                 whileTap={{ scale: 0.95 }}
//                 style={{ display: 'inline-block' }}
//               >
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetInTouch}
//                   sx={{
//                     px: 6,
//                     py: 1.8,
//                     fontSize: '1.1rem',
//                     fontWeight: 700,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                     color: '#121218',
//                     borderRadius: 3,
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: -100,
//                       width: 100,
//                       height: '100%',
//                       background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
//                       transition: 'left 0.7s',
//                     },
//                     '&:hover': {
//                       background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                       transform: 'translateY(-5px)',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
//                       '&::before': {
//                         left: '100%',
//                       }
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
//               </motion.div>

//               {/* Additional Text */}
//               <Typography
//                 variant="body2"
//                 sx={{
//                   mt: 4,
//                   color: 'rgba(255,255,255,0.5)',
//                   fontSize: '0.9rem',
//                 }}
//               >
//                 Schedule a free AI consultation with our experts • No commitment required
//               </Typography>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;


// // src/sections/ContactCTASection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import InsightsIcon from '@mui/icons-material/Insights';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const [aiActive, setAiActive] = useState(false);
//   const [content] = useState({
//     contact_title: 'Ready to Transform Your Business with AI?',
//     contact_subtitle: "Let's discuss how advanced AI solutions can drive unprecedented growth, efficiency, and innovation in your organization.",
//     features: [
//       { icon: <AutoAwesomeIcon />, text: 'Custom AI Solutions' },
//       { icon: <RocketLaunchIcon />, text: 'Rapid Implementation' },
//       { icon: <TrendingUpIcon />, text: 'Measurable ROI' },
//       { icon: <InsightsIcon />, text: 'AI-Powered Insights' },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (inView) {
//       const timer = setTimeout(() => {
//         setAiActive(true);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [inView]);

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#0A0A0F',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '50px 50px',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* Animated AI Nodes */}
//       {[...Array(8)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: 'absolute',
//             width: Math.random() * 60 + 30,
//             height: Math.random() * 60 + 30,
//             background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0, 255, 136, 0.1)' : 'rgba(138, 43, 226, 0.1)'}, transparent 70%)`,
//             borderRadius: '50%',
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             filter: 'blur(20px)',
//             animation: `nodeFloat ${Math.random() * 20 + 20}s infinite ${Math.random() * 5}s`,
//             '@keyframes nodeFloat': {
//               '0%, 100%': { transform: 'translate(0, 0)' },
//               '33%': { transform: `translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px)` },
//               '66%': { transform: `translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px)` }
//             }
//           }}
//         />
//       ))}

//       {/* AI Data Stream Animation */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           overflow: 'hidden',
//           zIndex: 0,
//         }}
//       >
//         {[...Array(3)].map((_, streamIndex) => (
//           <Box
//             key={streamIndex}
//             sx={{
//               position: 'absolute',
//               top: `${streamIndex * 30 + 10}%`,
//               left: '-100px',
//               width: '120%',
//               height: 2,
//               background: `linear-gradient(90deg, transparent, ${
//                 streamIndex === 0 ? '#00FF88' : 
//                 streamIndex === 1 ? '#8A2BE2' : '#0066FF'
//               }, transparent)`,
//               animation: `dataStream ${streamIndex * 2 + 15}s linear infinite`,
//               opacity: 0.6,
//               '@keyframes dataStream': {
//                 '0%': { transform: 'translateX(-100%)' },
//                 '100%': { transform: 'translateX(100%)' }
//               }
//             }}
//           />
//         ))}
//       </Box>

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: 'rgba(10, 10, 20, 0.85)',
//               backdropFilter: 'blur(20px)',
//               border: '2px solid',
//               borderColor: 'rgba(0, 255, 136, 0.3)',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               boxShadow: '0 40px 80px rgba(0, 255, 136, 0.15)',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 4,
//                 background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//                 backgroundSize: '300% 100%',
//                 animation: 'shimmer 4s infinite linear',
//                 '@keyframes shimmer': {
//                   '0%': { backgroundPosition: '-300% 0' },
//                   '100%': { backgroundPosition: '300% 0' }
//                 }
//               },
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: `
//                   radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
//                   radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.05) 0%, transparent 50%)
//                 `,
//                 zIndex: 0,
//               }
//             }}
//           >
//             {/* AI Brain Animation */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '150%',
//                 height: '150%',
//                 opacity: 0.05,
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.2'%3E%3Cpath d='M100 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50-22.386-50-50-50zm0 10c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40zM50 100c0-27.614 22.386-50 50-50s50 22.386 50 50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                 animation: 'rotate 120s linear infinite',
//                 '@keyframes rotate': {
//                   '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
//                   '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
//                 }
//               }}
//             />

//             <Box sx={{ position: 'relative', zIndex: 2 }}>
//               {/* AI Title Animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     mb: 3,
//                     background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 50%, #0066FF 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     fontWeight: 800,
//                     fontSize: { xs: '2.5rem', md: '3.5rem' },
//                     textShadow: '0 0 40px rgba(0, 255, 136, 0.3)',
//                     position: 'relative',
//                     display: 'inline-block',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: -10,
//                       left: '10%',
//                       width: '80%',
//                       height: 3,
//                       background: 'linear-gradient(90deg, transparent, #00FF88, transparent)',
//                       borderRadius: 2,
//                       opacity: aiActive ? 1 : 0,
//                       transition: 'opacity 1s ease'
//                     }
//                   }}
//                 >
//                   {content.contact_title}
//                 </Typography>
//               </motion.div>

//               {/* Animated Subtitle */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 6,
//                     color: '#A0A0A0',
//                     maxWidth: 700,
//                     mx: 'auto',
//                     fontSize: { xs: '1rem', md: '1.25rem' },
//                     lineHeight: 1.8,
//                     position: 'relative',
//                   }}
//                 >
//                   {content.contact_subtitle}
//                   {/* AI Pulse Animation */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       right: 0,
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       width: 8,
//                       height: 8,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 20px #00FF88' : 'none',
//                       animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                       '@keyframes aiPulse': {
//                         '0%, 100%': { transform: 'translateY(-50%) scale(1)' },
//                         '50%': { transform: 'translateY(-50%) scale(1.5)' }
//                       }
//                     }}
//                   />
//                 </Typography>
//               </motion.div>

//               {/* Animated AI Features Grid */}
//               <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
//                 {content.features.map((feature, index) => (
//                   <Grid item xs={12} sm={6} md={3} key={feature.text}>
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8, y: 30 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       transition={{ delay: 0.5 + index * 0.1 }}
//                       whileHover={{ 
//                         scale: 1.1,
//                         transition: { type: "spring", stiffness: 300 }
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                           p: 3,
//                           bgcolor: 'rgba(18, 18, 24, 0.7)',
//                           borderRadius: 3,
//                           border: '2px solid',
//                           borderColor: index % 2 === 0 ? 'rgba(0, 255, 136, 0.3)' : 'rgba(138, 43, 226, 0.3)',
//                           transition: 'all 0.4s ease',
//                           position: 'relative',
//                           overflow: 'hidden',
//                           backdropFilter: 'blur(10px)',
//                           '&:hover': {
//                             bgcolor: 'rgba(18, 18, 24, 0.9)',
//                             borderColor: index % 2 === 0 ? '#00FF88' : '#8A2BE2',
//                             transform: 'translateY(-8px)',
//                             boxShadow: `0 20px 40px ${index % 2 === 0 ? 'rgba(0, 255, 136, 0.3)' : 'rgba(138, 43, 226, 0.3)'}`,
//                             '& .feature-icon': {
//                               transform: 'scale(1.2) rotate(10deg)',
//                               filter: `drop-shadow(0 0 15px ${index % 2 === 0 ? '#00FF88' : '#8A2BE2'})`
//                             }
//                           },
//                           '&::before': {
//                             content: '""',
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             right: 0,
//                             height: '4px',
//                             background: index % 2 === 0 ? 'linear-gradient(90deg, #00FF88, transparent)' : 'linear-gradient(90deg, #8A2BE2, transparent)',
//                             opacity: 0.7
//                           }
//                         }}
//                       >
//                         {/* AI Glow Effect */}
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             top: '50%',
//                             left: '50%',
//                             transform: 'translate(-50%, -50%)',
//                             width: '80%',
//                             height: '80%',
//                             borderRadius: '50%',
//                             background: index % 2 === 0 ? 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)' : 
//                                         'radial-gradient(circle, rgba(138,43,226,0.1) 0%, transparent 70%)',
//                             filter: 'blur(20px)',
//                             zIndex: 0,
//                           }}
//                         />

//                         <Box
//                           className="feature-icon"
//                           sx={{
//                             color: index % 2 === 0 ? '#00FF88' : '#8A2BE2',
//                             mb: 2,
//                             zIndex: 1,
//                             position: 'relative',
//                             transition: 'all 0.3s ease',
//                             '& .MuiSvgIcon-root': {
//                               fontSize: 48,
//                               filter: `drop-shadow(0 0 8px ${index % 2 === 0 ? 'rgba(0, 255, 136, 0.5)' : 'rgba(138, 43, 226, 0.5)'})`
//                             }
//                           }}
//                         >
//                           {feature.icon}
//                         </Box>
//                         <Typography
//                           variant="h6"
//                           sx={{
//                             color: '#FFFFFF',
//                             fontWeight: 600,
//                             fontSize: '1rem',
//                             zIndex: 1,
//                             position: 'relative',
//                           }}
//                         >
//                           {feature.text}
//                         </Typography>

//                         {/* AI Active Indicator */}
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             top: 8,
//                             right: 8,
//                             width: 8,
//                             height: 8,
//                             borderRadius: '50%',
//                             bgcolor: aiActive ? (index % 2 === 0 ? '#00FF88' : '#8A2BE2') : 'transparent',
//                             boxShadow: aiActive ? `0 0 10px ${index % 2 === 0 ? '#00FF88' : '#8A2BE2'}` : 'none',
//                             animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                             '@keyframes aiBlink': {
//                               '0%, 100%': { opacity: 1 },
//                               '50%': { opacity: 0.3 }
//                             }
//                           }}
//                         />
//                       </Box>
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </Grid>

//               {/* AI-Powered CTA Button */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 }}
//               >
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetInTouch}
//                   sx={{
//                     px: 8,
//                     py: 2,
//                     fontSize: '1.2rem',
//                     fontWeight: 700,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 50%, #0066FF 100%)',
//                     backgroundSize: '200% 100%',
//                     color: '#121218',
//                     borderRadius: 3,
//                     position: 'relative',
//                     overflow: 'hidden',
//                     border: 'none',
//                     animation: 'buttonGlow 3s infinite',
//                     '@keyframes buttonGlow': {
//                       '0%, 100%': { backgroundPosition: '0% 50%' },
//                       '50%': { backgroundPosition: '100% 50%' }
//                     },
//                     '&:hover': {
//                       animation: 'buttonGlow 1s infinite',
//                       transform: 'translateY(-5px)',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4), 0 0 60px rgba(138, 43, 226, 0.3)',
//                     },
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: -2,
//                       left: -2,
//                       right: -2,
//                       bottom: -2,
//                       background: 'linear-gradient(135deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//                       backgroundSize: '300% 300%',
//                       borderRadius: 4,
//                       zIndex: -1,
//                       animation: 'borderRotate 3s linear infinite',
//                       '@keyframes borderRotate': {
//                         '0%': { backgroundPosition: '0% 50%' },
//                         '100%': { backgroundPosition: '300% 50%' }
//                       }
//                     }
//                   }}
//                 >
//                   <Box component="span" sx={{ position: 'relative', zIndex: 1 }}>
//                     Start Your AI Journey
//                   </Box>
//                 </Button>
//               </motion.div>

//               {/* AI Processing Animation */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//               >
//                 <Box
//                   sx={{
//                     mt: 4,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: 2,
//                   }}
//                 >
//                   {/* Processing Dots */}
//                   {[...Array(3)].map((_, i) => (
//                     <Box
//                       key={i}
//                       sx={{
//                         width: 10,
//                         height: 10,
//                         borderRadius: '50%',
//                         bgcolor: '#00FF88',
//                         animation: `processingDot 1.5s infinite ${i * 0.2}s`,
//                         '@keyframes processingDot': {
//                           '0%, 100%': { 
//                             opacity: 0.3, 
//                             transform: 'scale(1)' 
//                           },
//                           '50%': { 
//                             opacity: 1, 
//                             transform: 'scale(1.5)',
//                             boxShadow: '0 0 15px #00FF88'
//                           }
//                         }
//                       }}
//                     />
//                   ))}
                  
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: 'rgba(255,255,255,0.7)',
//                       fontSize: '0.9rem',
//                       ml: 1,
//                       fontWeight: 500,
//                     }}
//                   >
//                     AI Processing Ready • 24/7 Consultation
//                   </Typography>
//                 </Box>
//               </motion.div>

//               {/* AI Stats */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.5 }}
//               >
//                 <Box
//                   sx={{
//                     mt: 6,
//                     pt: 4,
//                     borderTop: '1px solid rgba(255,255,255,0.1)',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     gap: 4,
//                     flexWrap: 'wrap',
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Typography variant="h4" sx={{ color: '#00FF88', fontWeight: 700, fontSize: '2rem' }}>
//                       99.9%
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                       AI Accuracy
//                     </Typography>
//                   </Box>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Typography variant="h4" sx={{ color: '#8A2BE2', fontWeight: 700, fontSize: '2rem' }}>
//                       24/7
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                       AI Support
//                     </Typography>
//                   </Box>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Typography variant="h4" sx={{ color: '#0066FF', fontWeight: 700, fontSize: '2rem' }}>
//                       500+
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                       AI Models
//                     </Typography>
//                   </Box>
//                 </Box>
//               </motion.div>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import InsightsIcon from '@mui/icons-material/Insights';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#0A0A0F',
//     }}>
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: 'rgba(255, 255, 255, 0.05)',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//               borderRadius: 2,
//               p: { xs: 3, md: 6 },
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#8A2BE2',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Ready to Transform Your Business with AI?
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Let's discuss how advanced AI solutions can drive unprecedented growth, efficiency, and innovation in your organization.
//             </Typography>

//             <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
//               {[
//                 { icon: <AutoAwesomeIcon />, text: 'Custom AI Solutions' },
//                 { icon: <RocketLaunchIcon />, text: 'Rapid Implementation' },
//                 { icon: <TrendingUpIcon />, text: 'Measurable ROI' },
//                 { icon: <InsightsIcon />, text: 'AI-Powered Insights' },
//               ].map((feature, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={feature.text}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       p: 2,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         color: index % 2 === 0 ? '#8A2BE2' : '#FF2D55',
//                         mb: 1,
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 32,
//                         }
//                       }}
//                     >
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {feature.text}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleGetInTouch}
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 bgcolor: '#8A2BE2',
//                 color: '#FFFFFF',
//                 '&:hover': {
//                   bgcolor: '#7A1BD2',
//                 },
//               }}
//             >
//               Start Your AI Journey
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import InsightsIcon from '@mui/icons-material/Insights';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: '#000000',
//     }}>
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               backgroundColor: '#111111',
//               border: '1px solid #333333',
//               borderRadius: 2,
//               p: { xs: 3, md: 6 },
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#fa8072',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Ready to Transform Your Business with AI?
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Let's discuss how advanced AI solutions can drive unprecedented growth, efficiency, and innovation in your organization.
//             </Typography>

//             <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
//               {[
//                 { icon: <AutoAwesomeIcon />, text: 'Custom AI Solutions' },
//                 { icon: <RocketLaunchIcon />, text: 'Rapid Implementation' },
//                 { icon: <TrendingUpIcon />, text: 'Measurable ROI' },
//                 { icon: <InsightsIcon />, text: 'AI-Powered Insights' },
//               ].map((feature, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={feature.text}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       p: 2,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         color: '#fa8072',
//                         mb: 1,
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 32,
//                         }
//                       }}
//                     >
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: '#ffffff',
//                         fontWeight: 600,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {feature.text}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleGetInTouch}
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 backgroundColor: '#fa8072',
//                 color: '#ffffff',
//                 '&:hover': {
//                   backgroundColor: '#ff1dce',
//                 },
//               }}
//             >
//               Start Your AI Journey
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import InsightsIcon from '@mui/icons-material/Insights';
// import { useNavigate } from 'react-router-dom';

// const ContactCTASection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetInTouch = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: 'transparent',
//     }}>
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               backgroundColor: '#111111',
//               border: '1px solid #333333',
//               borderRadius: 2,
//               p: { xs: 3, md: 6 },
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#fa8072',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Ready to Transform Your Business with AI?
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Let's discuss how advanced AI solutions can drive unprecedented growth, efficiency, and innovation in your organization.
//             </Typography>

//             <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
//               {[
//                 { icon: <AutoAwesomeIcon />, text: 'Custom AI Solutions' },
//                 { icon: <RocketLaunchIcon />, text: 'Rapid Implementation' },
//                 { icon: <TrendingUpIcon />, text: 'Measurable ROI' },
//                 { icon: <InsightsIcon />, text: 'AI-Powered Insights' },
//               ].map((feature, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={feature.text}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       p: 2,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         color: '#fa8072',
//                         mb: 1,
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 32,
//                         }
//                       }}
//                     >
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: '#ffffff',
//                         fontWeight: 600,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {feature.text}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleGetInTouch}
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 backgroundColor: '#fa8072',
//                 color: '#ffffff',
//                 '&:hover': {
//                   backgroundColor: '#ff1dce',
//                 },
//               }}
//             >
//               Start Your AI Journey
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import { useNavigate } from 'react-router-dom';

const ContactCTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  const primaryColor = '#fa8072'; // Telemagenta
  const secondaryColor = '#fa8072'; // Salmon

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 8, md: 12 }, 
      backgroundColor: 'transparent',
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              backgroundColor: '#111111',
              border: `1px solid ${primaryColor}33`,
              borderRadius: 2,
              p: { xs: 3, md: 6 },
              textAlign: 'center',
              background: 'linear-gradient(145deg, #0a0a0a, #111111)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: primaryColor,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Ready to Transform Your Business with AI?
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#ffffff',
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              Let's discuss how advanced AI solutions can drive unprecedented growth, efficiency, and innovation in your organization.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
              {[
                { icon: <AutoAwesomeIcon />, text: 'Custom AI Solutions', color: primaryColor },
                { icon: <RocketLaunchIcon />, text: 'Rapid Implementation', color: secondaryColor },
                { icon: <TrendingUpIcon />, text: 'Measurable ROI', color: primaryColor },
                { icon: <InsightsIcon />, text: 'AI-Powered Insights', color: secondaryColor },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={feature.text}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: feature.color,
                        mb: 1,
                        '& .MuiSvgIcon-root': {
                          fontSize: 32,
                        },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      {feature.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleGetInTouch}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: primaryColor,
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#d94b8a',
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 25px ${primaryColor}33`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Your AI Journey
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactCTASection;