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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// const HeroSection = () => {
//   const [content] = useState({
//     hero_title: 'Transform Your Business with AI Solutions',
//     hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Case Studies',
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         bgcolor: 'background.default',
//         pt: { xs: 4, md: 0 },
//       }}
//     >
//       {/* Animated Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
//           },
//         }}
//       />

//       {/* Animated Grid Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.5,
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                 }}
//               >
//                 {content.hero_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   lineHeight: 1.6,
//                 }}
//               >
//                 {content.hero_subtitle}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     href="#contact"
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                     }}
//                   >
//                     {content.hero_cta_primary}
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     href="#services"
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       '&:hover': {
//                         borderWidth: 2,
//                       },
//                     }}
//                   >
//                     {content.hero_cta_secondary}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: { xs: 300, md: 500 },
//                   width: '100%',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   border: '2px solid',
//                   borderColor: alpha('#00FF88', 0.3),
//                   background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {/* Animated AI Visualization */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: 200,
//                     height: 200,
//                   }}
//                 >
//                   {/* Neural Network Animation */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 150,
//                       height: 150,
//                       border: '2px solid',
//                       borderColor: '#00FF88',
//                       borderRadius: '50%',
//                       animation: 'pulse 3s infinite',
//                       '@keyframes pulse': {
//                         '0%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1)' },
//                         '50%': { opacity: 0.6, transform: 'translate(-50%, -50%) scale(1.1)' },
//                         '100%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1)' },
//                       },
//                     }}
//                   />
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       color: '#00FF88',
//                       fontWeight: 700,
//                     }}
//                   >
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 1,
//           }}
//         >
//           <Typography variant="caption" color="text.secondary">
//             Scroll to explore
//           </Typography>
//           <Box
//             sx={{
//               width: 24,
//               height: 40,
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 12,
//               display: 'flex',
//               justifyContent: 'center',
//               paddingTop: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 width: 4,
//                 height: 8,
//                 bgcolor: '#00FF88',
//                 borderRadius: 2,
//                 animation: 'scroll 2s infinite',
//                 '@keyframes scroll': {
//                   '0%': { transform: 'translateY(0)', opacity: 1 },
//                   '50%': { transform: 'translateY(8px)', opacity: 0.5 },
//                   '100%': { transform: 'translateY(0)', opacity: 1 },
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;


// // src/sections/HeroSection.js
// import React, { useState, useEffect } from 'react';
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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//   const [content] = useState({
//     hero_title: 'Transform Your Business with AI Solutions',
//     hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Our Work',
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };

//   const handleViewWork = () => {
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       const yOffset = -80;
//       const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         pt: { xs: 4, md: 0 },
//       }}
//     >
//       {/* Video Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: -2,
//           overflow: 'hidden',
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             filter: 'brightness(0.3)',
//           }}
//         >
//           <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-ai-shapes-background-154116-large.mp4" type="video/mp4" />
//           <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-ai-shapes-background-154116-large.mp4" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Fallback gradient background */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.3) 0%, rgba(138, 43, 226, 0.3) 100%)',
//             zIndex: -1,
//           }}
//         />
//       </Box>

//       {/* Overlay */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.2) 0%, transparent 50%)',
//           zIndex: -1,
//         }}
//       />

//       {/* Animated Grid Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           zIndex: -1,
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   color: '#FFFFFF',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
//                 }}
//               >
//                 {content.hero_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 300,
//                   textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
//                 }}
//               >
//                 {content.hero_subtitle}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={handleGetStarted}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       bgcolor: '#00FF88',
//                       color: '#121218',
//                       '&:hover': {
//                         bgcolor: '#00CC6D',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_primary}
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     onClick={handleViewWork}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       borderColor: '#FFFFFF',
//                       color: '#FFFFFF',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                         borderWidth: 2,
//                         transform: 'translateY(-2px)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_secondary}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: { xs: 300, md: 500 },
//                   width: '100%',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   border: '2px solid',
//                   borderColor: 'rgba(0, 255, 136, 0.5)',
//                   background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backdropFilter: 'blur(10px)',
//                   boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
//                 }}
//               >
//                 {/* Animated AI Visualization */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: 200,
//                     height: 200,
//                   }}
//                 >
//                   {/* Neural Network Animation */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 150,
//                       height: 150,
//                       border: '3px solid',
//                       borderColor: 'rgba(0, 255, 136, 0.8)',
//                       borderRadius: '50%',
//                       animation: 'pulse 3s infinite',
//                       boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
//                       '@keyframes pulse': {
//                         '0%': { 
//                           opacity: 0.3, 
//                           transform: 'translate(-50%, -50%) scale(1)',
//                           boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                         },
//                         '50%': { 
//                           opacity: 0.8, 
//                           transform: 'translate(-50%, -50%) scale(1.1)',
//                           boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)',
//                         },
//                         '100%': { 
//                           opacity: 0.3, 
//                           transform: 'translate(-50%, -50%) scale(1)',
//                           boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                         },
//                       },
//                     }}
//                   />
                  
//                   {/* Inner circle */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 80,
//                       height: 80,
//                       border: '2px solid',
//                       borderColor: 'rgba(138, 43, 226, 0.8)',
//                       borderRadius: '50%',
//                       animation: 'pulse2 2s infinite',
//                       '@keyframes pulse2': {
//                         '0%': { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
//                         '50%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1.2)' },
//                         '100%': { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
//                       },
//                     }}
//                   />
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       color: '#FFFFFF',
//                       fontWeight: 700,
//                       fontSize: '3rem',
//                       textShadow: '0 2px 10px rgba(0, 255, 136, 0.5)',
//                     }}
//                   >
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 1,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 1,
//           }}
//         >
//           <Typography variant="caption" sx={{ color: '#FFFFFF', opacity: 0.8 }}>
//             Scroll to explore
//           </Typography>
//           <Box
//             sx={{
//               width: 24,
//               height: 40,
//               border: '2px solid',
//               borderColor: '#FFFFFF',
//               borderRadius: 12,
//               display: 'flex',
//               justifyContent: 'center',
//               paddingTop: 1,
//               backdropFilter: 'blur(5px)',
//               backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             }}
//           >
//             <Box
//               sx={{
//                 width: 4,
//                 height: 8,
//                 bgcolor: '#FFFFFF',
//                 borderRadius: 2,
//                 animation: 'scroll 2s infinite',
//                 '@keyframes scroll': {
//                   '0%': { transform: 'translateY(0)', opacity: 1 },
//                   '50%': { transform: 'translateY(8px)', opacity: 0.5 },
//                   '100%': { transform: 'translateY(0)', opacity: 1 },
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;


// // src/sections/HeroSection.js
// import React, { useState } from 'react';
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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//   const [content] = useState({
//     hero_title: 'Transform Your Business with AI Solutions',
//     hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Our Work',
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };

//   const handleViewWork = () => {
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       const yOffset = -80;
//       const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         pt: { xs: 4, md: 0 },
//         backgroundColor: '#FFFFFF', // White background as requested
//       }}
//     >
//       {/* Video Background - Now uses local video file */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           overflow: 'hidden',
//           backgroundColor: '#FFFFFF', // White fallback
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             opacity: 0.2, // Reduced opacity for subtle background
//             filter: 'grayscale(20%) brightness(1.1)', // Lightened video
//           }}
//         >
//           {/* Use your generated AI video here */}
//           <source src="/videos/ai-background.mp4" type="video/mp4" />
//           <source src="/videos/ai-background.webm" type="video/webm" />
//           {/* Fallback image if video doesn't load */}
//           <img 
//             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" 
//             alt="AI Background" 
//             style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
//           />
//           Your browser does not support the video tag.
//         </video>
//       </Box>

//       {/* Subtle gradient overlay for better text readability */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
//           zIndex: 1,
//         }}
//       />

//       {/* Animated Grid Pattern - Lighter version */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Text color changed to black as requested */}
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   color: '#121218', // Dark color for readability on white
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 1px 2px rgba(255,255,255,0.8)',
//                 }}
//               >
//                 {content.hero_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: '#424242', // Dark gray for subtitle
//                   fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 {content.hero_subtitle}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={handleGetStarted}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       bgcolor: '#00FF88',
//                       color: '#121218',
//                       '&:hover': {
//                         bgcolor: '#00CC6D',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_primary}
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     onClick={handleViewWork}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       borderColor: '#121218', // Dark border
//                       color: '#121218', // Dark text
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.05)',
//                         borderWidth: 2,
//                         transform: 'translateY(-2px)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_secondary}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: { xs: 300, md: 500 },
//                   width: '100%',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {/* Animated AI Visualization */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: 200,
//                     height: 200,
//                   }}
//                 >
//                   {/* Neural Network Animation */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 150,
//                       height: 150,
//                       border: '3px solid',
//                       borderColor: 'rgba(0, 255, 136, 0.6)', // Lighter border for white background
//                       borderRadius: '50%',
//                       animation: 'pulse 3s infinite',
//                       '@keyframes pulse': {
//                         '0%': { 
//                           opacity: 0.3, 
//                           transform: 'translate(-50%, -50%) scale(1)',
//                         },
//                         '50%': { 
//                           opacity: 0.7, 
//                           transform: 'translate(-50%, -50%) scale(1.1)',
//                         },
//                         '100%': { 
//                           opacity: 0.3, 
//                           transform: 'translate(-50%, -50%) scale(1)',
//                         },
//                       },
//                     }}
//                   />
                  
//                   {/* Inner circle */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 80,
//                       height: 80,
//                       border: '2px solid',
//                       borderColor: 'rgba(138, 43, 226, 0.6)', // Lighter border
//                       borderRadius: '50%',
//                       animation: 'pulse2 2s infinite',
//                       '@keyframes pulse2': {
//                         '0%': { opacity: 0.4, transform: 'translate(-50%, -50%) scale(1)' },
//                         '50%': { opacity: 0.9, transform: 'translate(-50%, -50%) scale(1.2)' },
//                         '100%': { opacity: 0.4, transform: 'translate(-50%, -50%) scale(1)' },
//                       },
//                     }}
//                   />
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       color: '#121218', // Changed to dark color for white background
//                       fontWeight: 700,
//                       fontSize: '3rem',
//                     }}
//                   >
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll Indicator - Updated for white background */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 1,
//           }}
//         >
//           <Typography variant="caption" sx={{ color: '#424242', opacity: 0.8 }}>
//             Scroll to explore
//           </Typography>
//           <Box
//             sx={{
//               width: 24,
//               height: 40,
//               border: '2px solid',
//               borderColor: '#424242',
//               borderRadius: 12,
//               display: 'flex',
//               justifyContent: 'center',
//               paddingTop: 1,
//               backgroundColor: 'rgba(255, 255, 255, 0.7)',
//               backdropFilter: 'blur(5px)',
//             }}
//           >
//             <Box
//               sx={{
//                 width: 4,
//                 height: 8,
//                 bgcolor: '#424242',
//                 borderRadius: 2,
//                 animation: 'scroll 2s infinite',
//                 '@keyframes scroll': {
//                   '0%': { transform: 'translateY(0)', opacity: 1 },
//                   '50%': { transform: 'translateY(8px)', opacity: 0.5 },
//                   '100%': { transform: 'translateY(0)', opacity: 1 },
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;


// // src/sections/HeroSection.js
// import React, { useState } from 'react';
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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//   const [content] = useState({
//     hero_title: 'Transform Your Business with AI Solutions',
//     hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Our Work',
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };

//   const handleViewWork = () => {
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       const yOffset = -80;
//       const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         pt: { xs: 4, md: 0 },
//         backgroundColor: '#FFFFFF',
//       }}
//     >
//       {/* Primary Video Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           overflow: 'hidden',
//           backgroundColor: '#FFFFFF',
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             opacity: 0.2,
//             filter: 'grayscale(20%) brightness(1.1)',
//           }}
//         >
//           <source src="/videos/ai-background.mp4" type="video/mp4" />
//           <source src="/videos/ai-background.webm" type="video/webm" />
//           <img 
//             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" 
//             alt="AI Background" 
//             style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
//           />
//           Your browser does not support the video tag.
//         </video>
//       </Box>

//       {/* Secondary Video Section - Replaces the AI circle */}
//       <Box
//         sx={{
//           position: 'absolute',
//           right: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           width: '45%',
//           height: '70%',
//           zIndex: 1,
//           display: { xs: 'none', md: 'block' },
//           overflow: 'hidden',
//           borderRadius: 4,
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: '16px',
//             boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
//             filter: 'contrast(1.1) saturate(1.2)',
//           }}
//         >
//           <source src="/videos/ai-background.mp4" type="video/mp4" />
//           <source src="/videos/ai-background.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Video Glow Effect */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: 4,
//             boxShadow: 'inset 0 0 60px rgba(0, 255, 136, 0.2)',
//             pointerEvents: 'none',
//           }}
//         />
//       </Box>

//       {/* Gradient Overlay */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.3) 100%)',
//           zIndex: 1,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   color: '#121218',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 1px 2px rgba(255,255,255,0.8)',
//                 }}
//               >
//                 {content.hero_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: '#424242',
//                   fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 {content.hero_subtitle}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={handleGetStarted}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       bgcolor: '#00FF88',
//                       color: '#121218',
//                       '&:hover': {
//                         bgcolor: '#00CC6D',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_primary}
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     onClick={handleViewWork}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       borderColor: '#121218',
//                       color: '#121218',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.05)',
//                         borderWidth: 2,
//                         transform: 'translateY(-2px)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_secondary}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
          
//           {/* Mobile Video Display */}
//           <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: 300,
//                   width: '100%',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   mt: 4,
//                 }}
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     borderRadius: '16px',
//                   }}
//                 >
//                   <source src="/videos/ai-background.mp4" type="video/mp4" />
//                   <source src="/videos/ai-background.webm" type="video/webm" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 1,
//           }}
//         >
//           <Typography variant="caption" sx={{ color: '#424242', opacity: 0.8 }}>
//             Scroll to explore
//           </Typography>
//           <Box
//             sx={{
//               width: 24,
//               height: 40,
//               border: '2px solid',
//               borderColor: '#424242',
//               borderRadius: 12,
//               display: 'flex',
//               justifyContent: 'center',
//               paddingTop: 1,
//               backgroundColor: 'rgba(255, 255, 255, 0.7)',
//               backdropFilter: 'blur(5px)',
//             }}
//           >
//             <Box
//               sx={{
//                 width: 4,
//                 height: 8,
//                 bgcolor: '#424242',
//                 borderRadius: 2,
//                 animation: 'scroll 2s infinite',
//                 '@keyframes scroll': {
//                   '0%': { transform: 'translateY(0)', opacity: 1 },
//                   '50%': { transform: 'translateY(8px)', opacity: 0.5 },
//                   '100%': { transform: 'translateY(0)', opacity: 1 },
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;


// // src/sections/HeroSection.js
// import React, { useState } from 'react';
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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//   const [content] = useState({
//     hero_title: 'Transform Your Business with AI Solutions',
//     hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Our Work',
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };

//   const handleViewWork = () => {
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       const yOffset = -80;
//       const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         pt: { xs: 4, md: 0 },
//         backgroundColor: 'transparent', // ✅ Changed to transparent
//       }}
//     >
//       {/* Primary Video Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           overflow: 'hidden',
//           backgroundColor: 'transparent', // ✅ Changed to transparent
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             opacity: 0.2,
//             filter: 'grayscale(20%) brightness(1.1)',
//           }}
//         >
//           <source src="/videos/ai-background.mp4" type="video/mp4" />
//           <source src="/videos/ai-background.webm" type="video/webm" />
//           <img 
//             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" 
//             alt="AI Background" 
//             style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
//           />
//           Your browser does not support the video tag.
//         </video>
//       </Box>

//       {/* Secondary Video Section - Replaces the AI circle */}
//       <Box
//         sx={{
//           position: 'absolute',
//           right: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           width: '45%',
//           height: '70%',
//           zIndex: 1,
//           display: { xs: 'none', md: 'block' },
//           overflow: 'hidden',
//           borderRadius: 4,
//         }}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: '16px',
//             boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
//             filter: 'contrast(1.1) saturate(1.2)',
//           }}
//         >
//           <source src="/videos/ai-background.mp4" type="video/mp4" />
//           <source src="/videos/ai-background.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Video Glow Effect */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: 4,
//             boxShadow: 'inset 0 0 60px rgba(0, 255, 136, 0.2)',
//             pointerEvents: 'none',
//           }}
//         />
//       </Box>

//       {/* Gradient Overlay - Made lighter for transparent background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)',
//           zIndex: 1,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   color: '#121218',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 1px 2px rgba(255,255,255,0.8)',
//                 }}
//               >
//                 {content.hero_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: '#424242',
//                   fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 {content.hero_subtitle}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={handleGetStarted}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       bgcolor: '#00FF88',
//                       color: '#121218',
//                       '&:hover': {
//                         bgcolor: '#00CC6D',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_primary}
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     onClick={handleViewWork}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1.1rem',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       borderColor: '#121218',
//                       color: '#121218',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.05)',
//                         borderWidth: 2,
//                         transform: 'translateY(-2px)',
//                       },
//                     }}
//                   >
//                     {content.hero_cta_secondary}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
          
//           {/* Mobile Video Display */}
//           <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: 300,
//                   width: '100%',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   mt: 4,
//                 }}
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     borderRadius: '16px',
//                   }}
//                 >
//                   <source src="/videos/ai-background.mp4" type="video/mp4" />
//                   <source src="/videos/ai-background.webm" type="video/webm" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 1,
//           }}
//         >
//           <Typography variant="caption" sx={{ color: '#424242', opacity: 0.8 }}>
//             Scroll to explore
//           </Typography>
//           <Box
//             sx={{
//               width: 24,
//               height: 40,
//               border: '2px solid',
//               borderColor: '#424242',
//               borderRadius: 12,
//               display: 'flex',
//               justifyContent: 'center',
//               paddingTop: 1,
//               backgroundColor: 'rgba(255, 255, 255, 0.7)',
//               backdropFilter: 'blur(5px)',
//             }}
//           >
//             <Box
//               sx={{
//                 width: 4,
//                 height: 8,
//                 bgcolor: '#424242',
//                 borderRadius: 2,
//                 animation: 'scroll 2s infinite',
//                 '@keyframes scroll': {
//                   '0%': { transform: 'translateY(0)', opacity: 1 },
//                   '50%': { transform: 'translateY(8px)', opacity: 0.5 },
//                   '100%': { transform: 'translateY(0)', opacity: 1 },
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;


// src/sections/HeroSection.js
import React, { useState } from 'react';
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

// Import your local video file
import heroVideo from './herosection.mp4';

const HeroSection = () => {
  const [content] = useState({
    hero_title: 'Transform Your Business with AI Solutions',
    hero_subtitle: 'We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.',
    hero_cta_primary: 'Start Your AI Journey',
    hero_cta_secondary: 'View Our Work',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const yOffset = -80;
      const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 4, md: 0 },
        backgroundColor: 'transparent',
      }}
    >
      {/* Main Video Background - Using your local video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Dark Overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {content.hero_title}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#E0E0E0',
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {content.hero_subtitle}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleGetStarted}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      bgcolor: '#00FF88',
                      color: '#121218',
                      '&:hover': {
                        bgcolor: '#00CC6D',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px rgba(0, 255, 136, 0.5)',
                      },
                    }}
                  >
                    {content.hero_cta_primary}
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    onClick={handleViewWork}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderWidth: 2,
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF',
                      '&:hover': {
                        borderColor: '#00FF88',
                        color: '#00FF88',
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {content.hero_cta_secondary}
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          
          {/* Video Preview for Mobile */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  mt: 4,
                  border: '3px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src={heroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 24,
              height: 40,
              border: '2px solid',
              borderColor: '#FFFFFF',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                bgcolor: '#FFFFFF',
                borderRadius: 2,
                animation: 'scroll 2s infinite',
                '@keyframes scroll': {
                  '0%': { transform: 'translateY(0)', opacity: 1 },
                  '50%': { transform: 'translateY(8px)', opacity: 0.5 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                },
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;