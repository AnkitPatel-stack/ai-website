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

// // Import your local video file
// import heroVideo from './herosection.mp4';

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
//         backgroundColor: 'transparent',
//       }}
//     >
//       {/* Main Video Background - Using your local video */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
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
//           }}
//         >
//           <source src={heroVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </Box>

//       {/* Dark Overlay for better text readability */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
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
//                   color: '#FFFFFF',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '4.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 2px 10px rgba(0,0,0,0.5)',
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
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.5)',
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
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
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
          
//           {/* Video Preview for Mobile */}
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
//                   border: '3px solid rgba(255,255,255,0.3)',
//                   boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
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
//                   }}
//                 >
//                   <source src={heroVideo} type="video/mp4" />
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
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;

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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';
// import heroVideo from './herosection.mp4';

// const HeroSection = () => {
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
//         bgcolor: '#0A0A0F',
//       }}
//     >
//       {/* Simplified Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           bgcolor: '#0A0A0F',
//           opacity: 0.7,
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
//                   color: '#FFFFFF',
//                   fontWeight: 700,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Transform Your Business with AI Solutions
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#A0A0A0',
//                   fontSize: { xs: '1rem', md: '1.25rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     bgcolor: '#8A2BE2',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       bgcolor: '#7A1BD2',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     borderColor: '#FF2D55',
//                     color: '#FF2D55',
//                     '&:hover': {
//                       borderColor: '#E82D4D',
//                       color: '#E82D4D',
//                       bgcolor: 'rgba(255, 45, 85, 0.1)',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
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
//         background: 'black',
//         contentVisibility: '-moz-initial'
//       }}
//     >
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
//                   fontSize: { xs: '2.8rem', md: '4rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Transform Your Business with <span style={{ color: '#fa8072' }}>AI Solutions</span>
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#CCCCCC',
//                   fontSize: { xs: '1.1rem', md: '1.3rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     bgcolor: '#fa8072',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       bgcolor: '#ff1dce',
//                       transform: 'translateY(-2px)',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     borderColor: '#FFFFFF',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       color: '#fa8072',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;


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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
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
//         background: '#000000',
//       }}
//     >
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
//                   color: '#ffffff',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.8rem', md: '4rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Transform Your Business with <span style={{ color: '#fa8072' }}>AI Solutions</span>
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#cccccc',
//                   fontSize: { xs: '1.1rem', md: '1.3rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     bgcolor: '#fa8072',
//                     color: '#ffffff',
//                     '&:hover': {
//                       bgcolor: '#ff1dce',
//                       transform: 'translateY(-2px)',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     borderColor: '#ffffff',
//                     color: '#ffffff',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       color: '#fa8072',
//                       backgroundColor: 'rgba(255, 0, 144, 0.1)',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
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
//         background: '#000000',
//       }}
//     >
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
//                   color: '#ffffff',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.8rem', md: '4rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Transform Your Business with <span style={{ color: '#fa8072' }}>AI Solutions</span>
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#cccccc',
//                   fontSize: { xs: '1.1rem', md: '1.3rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     bgcolor: '#fa8072',
//                     color: '#ffffff',
//                     '&:hover': {
//                       bgcolor: '#ff1dce',
//                       transform: 'translateY(-2px)',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     borderColor: '#ffffff',
//                     color: '#ffffff',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       color: '#fa8072',
//                       backgroundColor: 'rgba(255, 0, 144, 0.1)',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';
// import SolarSystemBackground from '../components/SolarSystemBackground';

// const HeroSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };
// <SolarSystemBackground/>
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
//     ref={ref}
//     sx={{
//       position: 'relative',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: 'transparent', // Changed to transparent
//     }}
//   >
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
//                   color: '#FFFFFF',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.8rem', md: '4rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Transform Your Business with <span style={{ color: '#fa8072' }}>AI Solutions</span>
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#CCCCCC',
//                   fontSize: { xs: '1.1rem', md: '1.3rem' },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     backgroundColor: '#fa8072', // PINK button
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       backgroundColor: '#ff1dce',
//                       transform: 'translateY(-2px)',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     borderColor: '#FFFFFF',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       color: '#fa8072',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;


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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
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
//         backgroundColor: 'transparent',
//         paddingTop: { xs: '80px', md: '0' }, // Added padding for mobile
//       }}
//     >
//       <Container 
//         maxWidth="xl" 
//         sx={{ 
//           position: 'relative', 
//           zIndex: 2,
//           padding: { xs: '16px', sm: '24px', md: '32px' }
//         }}
//       >
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
//                   fontSize: { 
//                     xs: '2rem', 
//                     sm: '2.5rem', 
//                     md: '3rem', 
//                     lg: '4rem' 
//                   },
//                   lineHeight: { xs: 1.3, md: 1.2 },
//                   textAlign: { xs: 'center', md: 'left' }
//                 }}
//               >
//                 Transform Your Business with <span style={{ color: '#fa8072' }}>AI Solutions</span>
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#CCCCCC',
//                   fontSize: { 
//                     xs: '1rem', 
//                     sm: '1.1rem', 
//                     md: '1.3rem' 
//                   },
//                   lineHeight: 1.6,
//                   fontWeight: 400,
//                   textAlign: { xs: 'center', md: 'left' }
//                 }}
//               >
//                 We deliver practical AI solutions that drive measurable results, efficiency, and growth for forward-thinking companies.
//               </Typography>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 gap: 2, 
//                 flexWrap: 'wrap',
//                 justifyContent: { xs: 'center', md: 'flex-start' }
//               }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleGetStarted}
//                   sx={{
//                     px: { xs: 3, md: 4 },
//                     py: 1.5,
//                     fontSize: { xs: '0.9rem', md: '1rem' },
//                     fontWeight: 600,
//                     minWidth: { xs: '200px', sm: 'auto' },
//                     backgroundColor: '#fa8072',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       backgroundColor: '#ff1dce',
//                       transform: 'translateY(-2px)',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
                
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handleViewWork}
//                   sx={{
//                     px: { xs: 3, md: 4 },
//                     py: 1.5,
//                     fontSize: { xs: '0.9rem', md: '1rem' },
//                     fontWeight: 600,
//                     minWidth: { xs: '200px', sm: 'auto' },
//                     borderColor: '#FFFFFF',
//                     color: '#FFFFFF',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       color: '#fa8072',
//                       backgroundColor: 'rgba(255, 0, 144, 0.1)',
//                     },
//                   }}
//                 >
//                   View Our Work
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ 
//               display: { xs: 'none', md: 'block' },
//               position: 'relative',
//               height: '500px',
//               background: 'radial-gradient(circle at center, rgba(255, 0, 144, 0.2) 0%, transparent 70%)',
//               animation: 'pulse 4s infinite',
//               '@keyframes pulse': {
//                 '0%, 100%': {
//                   opacity: 0.3,
//                 },
//                 '50%': {
//                   opacity: 0.6,
//                 },
//               }
//             }}>
//               {/* Optional: Add an AI illustration or 3D visualization here */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   width: '300px',
//                   height: '300px',
//                   borderRadius: '50%',
//                   background: 'conic-gradient(from 0deg, transparent, #fa8072, transparent)',
//                   animation: 'rotate 20s linear infinite',
//                   '@keyframes rotate': {
//                     '0%': {
//                       transform: 'translate(-50%, -50%) rotate(0deg)',
//                     },
//                     '100%': {
//                       transform: 'translate(-50%, -50%) rotate(360deg)',
//                     },
//                   },
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;


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
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
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
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         paddingTop: { xs: '80px', md: '0' },
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Circle Animation */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: { xs: '300px', sm: '400px', md: '600px', lg: '800px' },
//           height: { xs: '300px', sm: '400px', md: '600px', lg: '800px' },
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(255, 0, 144, 0.15) 0%, transparent 70%)',
//           animation: 'pulse 6s ease-in-out infinite',
//           '@keyframes pulse': {
//             '0%, 100%': {
//               opacity: 0.3,
//               transform: 'translate(-50%, -50%) scale(1)',
//             },
//             '50%': {
//               opacity: 0.6,
//               transform: 'translate(-50%, -50%) scale(1.05)',
//             },
//           },
//           zIndex: 0,
//         }}
//       >
//         {/* Inner Ring */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '80%',
//             height: '80%',
//             borderRadius: '50%',
//             border: '1px solid rgba(255, 0, 144, 0.3)',
//             animation: 'rotate 30s linear infinite',
//             '@keyframes rotate': {
//               '0%': {
//                 transform: 'translate(-50%, -50%) rotate(0deg)',
//               },
//               '100%': {
//                 transform: 'translate(-50%, -50%) rotate(360deg)',
//               },
//             },
//           }}
//         />
        
//         {/* Outer Ring */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '95%',
//             height: '95%',
//             borderRadius: '50%',
//             border: '1px solid rgba(255, 0, 144, 0.2)',
//             animation: 'rotateReverse 25s linear infinite',
//             '@keyframes rotateReverse': {
//               '0%': {
//                 transform: 'translate(-50%, -50%) rotate(360deg)',
//               },
//               '100%': {
//                 transform: 'translate(-50%, -50%) rotate(0deg)',
//               },
//             },
//           }}
//         />
        
//         {/* Dots around the circle */}
//         {[...Array(24)].map((_, i) => (
//           <Box
//             key={i}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               width: '4px',
//               height: '4px',
//               backgroundColor: '#fa8072',
//               borderRadius: '50%',
//               transform: `
//                 translate(-50%, -50%) 
//                 rotate(${i * 15}deg) 
//                 translateY(${-1 * (300)}px)
//               `,
//               animation: `glow 2s ${i * 0.1}s infinite alternate`,
//               '@keyframes glow': {
//                 '0%': {
//                   opacity: 0.3,
//                   boxShadow: '0 0 2px #fa8072',
//                 },
//                 '100%': {
//                   opacity: 1,
//                   boxShadow: '0 0 8px #fa8072, 0 0 12px #fa8072',
//                 },
//               },
//             }}
//           />
//         ))}
//       </Box>

//       <Container 
//         maxWidth="lg" 
//         sx={{ 
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//           padding: { xs: '16px', sm: '24px', md: '32px' }
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Main Heading with Guarantee */}
//           <Typography
//             variant="h1"
//             sx={{
//               mb: 2,
//               color: '#FFFFFF',
//               fontWeight: 800,
//               fontSize: { 
//                 xs: '2.2rem', 
//                 sm: '2.8rem', 
//                 md: '3.5rem', 
//                 lg: '4.5rem' 
//               },
//               lineHeight: { xs: 1.2, md: 1.1 },
//               textTransform: 'uppercase',
//               letterSpacing: { xs: '0.5px', md: '1px' },
//             }}
//           >
//             Guaranteed AI Outcomes.
//           </Typography>
          
//           {/* Sub Heading */}
//           <Typography
//             variant="h2"
//             sx={{
//               mb: 3,
//               color: '#fa8072',
//               fontWeight: 700,
//               fontSize: { 
//                 xs: '1.5rem', 
//                 sm: '2rem', 
//                 md: '2.5rem', 
//                 lg: '3rem' 
//               },
//               lineHeight: 1.2,
//               textTransform: 'uppercase',
//               letterSpacing: '0.5px',
//             }}
//           >
//             Delivered by Our Team, or Yours
//           </Typography>
          
//           {/* Description */}
//           <Typography
//             variant="h6"
//             sx={{
//               mb: 4,
//               color: '#CCCCCC',
//               fontSize: { 
//                 xs: '1rem', 
//                 sm: '1.1rem', 
//                 md: '1.3rem' 
//               },
//               lineHeight: 1.6,
//               fontWeight: 400,
//               maxWidth: '800px',
//               mx: 'auto',
//               opacity: 0.9,
//             }}
//           >
//             Your most ambitious AI goals, executed with certainty. We offer flexible partnership models from turnkey projects to dedicated innovation hubs, designed to deliver the results you need.
//           </Typography>
          
//           {/* Divider Line */}
//           <Box
//             sx={{
//               width: '100px',
//               height: '2px',
//               backgroundColor: '#fa8072',
//               mx: 'auto',
//               mb: 4,
//               borderRadius: '1px',
//             }}
//           />
          
//           {/* CTA Button */}
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleGetStarted}
//             sx={{
//               px: { xs: 4, md: 6 },
//               py: 1.5,
//               fontSize: { xs: '0.95rem', md: '1.1rem' },
//               fontWeight: 600,
//               backgroundColor: '#fa8072',
//               color: '#FFFFFF',
//               mb: 4,
//               minWidth: { xs: '220px', sm: '250px' },
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//                 transform: 'translateY(-3px)',
//                 boxShadow: '0 10px 20px rgba(255, 0, 144, 0.3)',
//               },
//             }}
//           >
//             Explore Solutions
//           </Button>
          
//           {/* Bottom Tagline */}
//           <Typography
//             variant="h5"
//             sx={{
//               color: '#FFFFFF',
//               fontWeight: 600,
//               fontSize: { 
//                 xs: '0.9rem', 
//                 sm: '1rem', 
//                 md: '1.2rem' 
//               },
//               letterSpacing: '2px',
//               textTransform: 'uppercase',
//               opacity: 0.8,
//               position: 'relative',
//               '&::before, &::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '50%',
//                 width: '40px',
//                 height: '1px',
//                 backgroundColor: '#fa8072',
//                 opacity: 0.5,
//               },
//               '&::before': {
//                 left: { xs: '20px', md: '50px' },
//               },
//               '&::after': {
//                 right: { xs: '20px', md: '50px' },
//               },
//             }}
//           >
//             The Outcome Partner for Industry Leaders
//           </Typography>
//         </motion.div>
//       </Container>
      
//       {/* Scroll Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '40px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: { xs: 'none', md: 'flex' },
//           flexDirection: 'column',
//           alignItems: 'center',
//           color: '#fa8072',
//           zIndex: 2,
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             color: '#fa8072',
//             fontSize: '0.75rem',
//             letterSpacing: '2px',
//             textTransform: 'uppercase',
//             mb: 1,
//           }}
//         >
//           Scroll
//         </Typography>
//         <Box
//           sx={{
//             width: '1px',
//             height: '40px',
//             backgroundColor: '#fa8072',
//             animation: 'scrollBounce 2s infinite',
//             '@keyframes scrollBounce': {
//               '0%, 100%': {
//                 transform: 'translateY(0)',
//                 opacity: 0.5,
//               },
//               '50%': {
//                 transform: 'translateY(10px)',
//                 opacity: 1,
//               },
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;



// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/contact');
//   };

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         padding: { xs: '20px', sm: '30px', md: '40px' },
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Circle - Behind everything */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: { 
//             xs: '250vw', 
//             sm: '200vw', 
//             md: '150vw', 
//             lg: '120vw',
//             xl: '100vw'
//           },
//           height: { 
//             xs: '250vw', 
//             sm: '200vw', 
//             md: '150vw', 
//             lg: '120vw',
//             xl: '100vw'
//           },
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(255, 0, 144, 0.08) 0%, transparent 60%)',
//           zIndex: 0,
//           opacity: 0.7,
//         }}
//       />
      
//       {/* Animated Rings */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: { 
//             xs: '180vw', 
//             sm: '150vw', 
//             md: '120vw', 
//             lg: '100vw' 
//           },
//           height: { 
//             xs: '180vw', 
//             sm: '150vw', 
//             md: '120vw', 
//             lg: '100vw' 
//           },
//           borderRadius: '50%',
//           zIndex: 0,
//         }}
//       >
//         {/* Outer Ring */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             border: '1px solid rgba(255, 0, 144, 0.15)',
//             animation: 'rotateOuter 25s linear infinite',
//             '@keyframes rotateOuter': {
//               '0%': {
//                 transform: 'translate(-50%, -50%) rotate(0deg)',
//               },
//               '100%': {
//                 transform: 'translate(-50%, -50%) rotate(360deg)',
//               },
//             },
//           }}
//         />
        
//         {/* Middle Ring */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '80%',
//             height: '80%',
//             borderRadius: '50%',
//             border: '1px solid rgba(255, 0, 144, 0.2)',
//             animation: 'rotateMiddle 20s linear infinite reverse',
//             '@keyframes rotateMiddle': {
//               '0%': {
//                 transform: 'translate(-50%, -50%) rotate(360deg)',
//               },
//               '100%': {
//                 transform: 'translate(-50%, -50%) rotate(0deg)',
//               },
//             },
//           }}
//         />
        
//         {/* Inner Ring */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '60%',
//             height: '60%',
//             borderRadius: '50%',
//             border: '1px solid rgba(255, 0, 144, 0.25)',
//             animation: 'rotateInner 15s linear infinite',
//             '@keyframes rotateInner': {
//               '0%': {
//                 transform: 'translate(-50%, -50%) rotate(0deg)',
//               },
//               '100%': {
//                 transform: 'translate(-50%, -50%) rotate(360deg)',
//               },
//             },
//           }}
//         />
        
//         {/* Floating Dots */}
//         {[...Array(36)].map((_, i) => (
//           <Box
//             key={i}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               width: { xs: '3px', md: '4px' },
//               height: { xs: '3px', md: '4px' },
//               backgroundColor: '#fa8072',
//               borderRadius: '50%',
//               transform: `
//                 translate(-50%, -50%) 
//                 rotate(${i * 10}deg) 
//                 translateX(${-1 * (45)}vw)
//               `,
//               animation: `pulseDot 3s ${i * 0.08}s infinite alternate ease-in-out`,
//               '@keyframes pulseDot': {
//                 '0%': {
//                   opacity: 0.1,
//                   transform: `
//                     translate(-50%, -50%) 
//                     rotate(${i * 10}deg) 
//                     translateX(${-1 * (45)}vw)
//                     scale(0.8)
//                   `,
//                 },
//                 '100%': {
//                   opacity: 0.8,
//                   transform: `
//                     translate(-50%, -50%) 
//                     rotate(${i * 10}deg) 
//                     translateX(${-1 * (45)}vw)
//                     scale(1.2)
//                   `,
//                 },
//               },
//             }}
//           />
//         ))}
//       </Box>

//       {/* Main Content Container */}
//       <Container 
//         maxWidth="md" 
//         sx={{ 
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           style={{
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           {/* Main Heading */}
//           <Typography
//             component="h1"
//             sx={{
//               mb: { xs: 1, sm: 1.5, md: 2 },
//               color: '#FFFFFF',
//               fontWeight: 900,
//               fontSize: { 
//                 xs: '1.75rem', 
//                 sm: '2.5rem', 
//                 md: '3.5rem', 
//                 lg: '4rem' 
//               },
//               lineHeight: { xs: 1.2, sm: 1.15, md: 1.1 },
//               textTransform: 'uppercase',
//               letterSpacing: { xs: '0.5px', sm: '1px', md: '1.5px' },
//               maxWidth: '100%',
//               wordWrap: 'break-word',
//             }}
//           >
//             GUARANTEED AI OUTCOMES.
//           </Typography>
          
//           {/* Sub Heading */}
//           <Typography
//             component="h2"
//             sx={{
//               mb: { xs: 2, sm: 2.5, md: 3 },
//               color: '#fa8072',
//               fontWeight: 800,
//               fontSize: { 
//                 xs: '1.25rem', 
//                 sm: '1.75rem', 
//                 md: '2.25rem', 
//                 lg: '2.75rem' 
//               },
//               lineHeight: { xs: 1.3, sm: 1.25, md: 1.2 },
//               textTransform: 'uppercase',
//               letterSpacing: { xs: '0.3px', sm: '0.5px', md: '0.8px' },
//               maxWidth: '100%',
//             }}
//           >
//             DELIVERED BY OUR TEAM, OR YOURS
//           </Typography>
          
//           {/* Description */}
//           <Typography
//             variant="h6"
//             sx={{
//               mb: { xs: 3, sm: 3.5, md: 4 },
//               color: '#CCCCCC',
//               fontSize: { 
//                 xs: '0.875rem', 
//                 sm: '1rem', 
//                 md: '1.125rem' 
//               },
//               lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
//               fontWeight: 400,
//               maxWidth: { xs: '100%', sm: '90%', md: '800px' },
//               mx: 'auto',
//               opacity: 0.9,
//             }}
//           >
//             Your most ambitious AI goals, executed with certainty. We offer flexible partnership models from turnkey projects to dedicated innovation hubs, designed to deliver the results you need.
//           </Typography>
          
//           {/* Divider Line */}
//           <Box
//             sx={{
//               width: { xs: '80px', sm: '100px' },
//               height: '2px',
//               backgroundColor: '#fa8072',
//               mb: { xs: 3, sm: 3.5, md: 4 },
//               borderRadius: '1px',
//             }}
//           />
          
//           {/* CTA Button with Arrow */}
//           <Button
//             variant="contained"
//             size="large"
//             onClick={handleGetStarted}
//             sx={{
//               px: { xs: 3, sm: 4, md: 5 },
//               py: { xs: 1.25, sm: 1.5 },
//               fontSize: { 
//                 xs: '0.875rem', 
//                 sm: '0.95rem', 
//                 md: '1.1rem' 
//               },
//               fontWeight: 700,
//               backgroundColor: '#fa8072',
//               color: '#FFFFFF',
//               mb: { xs: 4, sm: 5, md: 6 },
//               minWidth: { xs: '200px', sm: '240px', md: '280px' },
//               textTransform: 'uppercase',
//               letterSpacing: '0.5px',
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//                 transform: 'translateY(-2px)',
//                 boxShadow: '0 8px 25px rgba(255, 0, 144, 0.4)',
//               },
//               transition: 'all 0.3s ease',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 1,
//             }}
//           >
//             Explore Solutions
//             <ArrowForwardIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />
//           </Button>
          
//           {/* Bottom Tagline */}
//           <Typography
//             component="h3"
//             sx={{
//               color: '#FFFFFF',
//               fontWeight: 700,
//               fontSize: { 
//                 xs: '0.75rem', 
//                 sm: '0.875rem', 
//                 md: '1rem' 
//               },
//               letterSpacing: { xs: '1.5px', sm: '2px', md: '2.5px' },
//               textTransform: 'uppercase',
//               opacity: 0.8,
//               position: 'relative',
//               padding: { xs: '0 40px', sm: '0 60px', md: '0 80px' },
//               '&::before, &::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '50%',
//                 width: { xs: '30px', sm: '40px', md: '50px' },
//                 height: '1px',
//                 backgroundColor: '#fa8072',
//                 opacity: 0.6,
//               },
//               '&::before': {
//                 left: 0,
//               },
//               '&::after': {
//                 right: 0,
//               },
//             }}
//           >
//             THE OUTCOME PARTNER FOR INDUSTRY LEADERS
//           </Typography>
//         </motion.div>
//       </Container>
      
//       {/* Scroll Indicator - Bottom Right */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: { xs: '20px', sm: '30px', md: '40px' },
//           right: { xs: '20px', sm: '30px', md: '40px' },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           color: '#fa8072',
//           zIndex: 2,
//           opacity: 0.7,
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             color: '#fa8072',
//             fontSize: { xs: '0.625rem', sm: '0.75rem' },
//             letterSpacing: '1.5px',
//             textTransform: 'uppercase',
//             mb: 1,
//             writingMode: 'vertical-rl',
//             transform: 'rotate(180deg)',
//           }}
//         >
//           SCROLL
//         </Typography>
//         <Box
//           sx={{
//             width: '1px',
//             height: { xs: '30px', sm: '40px' },
//             backgroundColor: '#fa8072',
//             animation: 'scrollBounce 2s infinite',
//             '@keyframes scrollBounce': {
//               '0%, 100%': {
//                 transform: 'translateY(0)',
//                 opacity: 0.5,
//               },
//               '50%': {
//                 transform: 'translateY(8px)',
//                 opacity: 1,
//               },
//             },
//           }}
//         />
//       </Box>
      
//       {/* TIM Indicator - Bottom Left */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: { xs: '20px', sm: '30px', md: '40px' },
//           left: { xs: '20px', sm: '30px', md: '40px' },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           color: '#fa8072',
//           zIndex: 2,
//           opacity: 0.7,
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             color: '#fa8072',
//             fontSize: { xs: '0.625rem', sm: '0.75rem' },
//             letterSpacing: '1.5px',
//             textTransform: 'uppercase',
//             mb: 1,
//             writingMode: 'vertical-rl',
//           }}
//         >
//           TIM
//         </Typography>
//         <Box
//           sx={{
//             width: '1px',
//             height: { xs: '30px', sm: '40px' },
//             backgroundColor: '#fa8072',
//             animation: 'timBounce 2s infinite 0.5s',
//             '@keyframes timBounce': {
//               '0%, 100%': {
//                 transform: 'translateY(0)',
//                 opacity: 0.5,
//               },
//               '50%': {
//                 transform: 'translateY(8px)',
//                 opacity: 1,
//               },
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;


import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: { xs: '20px', sm: '30px', md: '40px' },
        overflow: 'hidden',
      }}
    >
      {/* Background Circle - Behind everything */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { 
            xs: '250vw', 
            sm: '200vw', 
            md: '150vw', 
            lg: '120vw',
            xl: '100vw'
          },
          height: { 
            xs: '250vw', 
            sm: '200vw', 
            md: '150vw', 
            lg: '120vw',
            xl: '100vw'
          },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 52, 118, 0.1) 0%, transparent 60%)',
          zIndex: 0,
          opacity: 0.8,
        }}
      />
      
      {/* Animated Rings */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { 
            xs: '180vw', 
            sm: '150vw', 
            md: '120vw', 
            lg: '100vw' 
          },
          height: { 
            xs: '180vw', 
            sm: '150vw', 
            md: '120vw', 
            lg: '100vw' 
          },
          borderRadius: '50%',
          zIndex: 0,
        }}
      >
        {/* Outer Ring */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid rgba(207, 52, 118, 0.3)',
            animation: 'rotateOuter 25s linear infinite',
            '@keyframes rotateOuter': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(360deg)',
              },
            },
          }}
        />
        
        {/* Middle Ring */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            border: '1px solid rgba(250, 128, 114, 0.4)',
            animation: 'rotateMiddle 20s linear infinite reverse',
            '@keyframes rotateMiddle': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(360deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
            },
          }}
        />
        
        {/* Inner Ring */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            border: '1px solid rgba(207, 52, 118, 0.5)',
            animation: 'rotateInner 15s linear infinite',
            '@keyframes rotateInner': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(360deg)',
              },
            },
          }}
        />
        
        {/* Floating Dots */}
        {[...Array(36)].map((_, i) => {
          // Alternate between the two colors
          const color = i % 2 === 0 ? '#fa8072' : '#fa8072';
          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: { xs: '3px', md: '4px' },
                height: { xs: '3px', md: '4px' },
                backgroundColor: color,
                borderRadius: '50%',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${i * 10}deg) 
                  translateX(${-1 * (45)}vw)
                `,
                animation: `pulseDot 3s ${i * 0.08}s infinite alternate ease-in-out`,
                '@keyframes pulseDot': {
                  '0%': {
                    opacity: 0.1,
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${i * 10}deg) 
                      translateX(${-1 * (45)}vw)
                      scale(0.8)
                    `,
                  },
                  '100%': {
                    opacity: 0.8,
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${i * 10}deg) 
                      translateX(${-1 * (45)}vw)
                      scale(1.2)
                    `,
                  },
                },
              }}
            />
          );
        })}
      </Box>

      {/* Main Content Container */}
      <Container 
        maxWidth="md" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Main Heading */}
          <Typography
            component="h1"
            sx={{
              mb: { xs: 1, sm: 1.5, md: 2 },
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: { 
                xs: '1.75rem', 
                sm: '2.5rem', 
                md: '3.5rem', 
                lg: '4rem' 
              },
              lineHeight: { xs: 1.2, sm: 1.15, md: 1.1 },
              textTransform: 'uppercase',
              letterSpacing: { xs: '0.5px', sm: '1px', md: '1.5px' },
              maxWidth: '100%',
              wordWrap: 'break-word',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            GUARANTEED AI OUTCOMES.
          </Typography>
          
          {/* Sub Heading */}
          <Typography
            component="h2"
            sx={{
              mb: { xs: 2, sm: 2.5, md: 3 },
              color: '#fa8072', // Using #fa8072 for subheading
              fontWeight: 800,
              fontSize: { 
                xs: '1.25rem', 
                sm: '1.75rem', 
                md: '2.25rem', 
                lg: '2.75rem' 
              },
              lineHeight: { xs: 1.3, sm: 1.25, md: 1.2 },
              textTransform: 'uppercase',
              letterSpacing: { xs: '0.3px', sm: '0.5px', md: '0.8px' },
              maxWidth: '100%',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            DELIVERED BY OUR TEAM, OR YOURS
          </Typography>
          
          {/* Description */}
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 3, sm: 3.5, md: 4 },
              color: '#E0E0E0',
              fontSize: { 
                xs: '0.875rem', 
                sm: '1rem', 
                md: '1.125rem' 
              },
              lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
              fontWeight: 400,
              maxWidth: { xs: '100%', sm: '90%', md: '800px' },
              mx: 'auto',
              opacity: 0.9,
            }}
          >
            Your most ambitious AI goals, executed with certainty. We offer flexible partnership models from turnkey projects to dedicated innovation hubs, designed to deliver the results you need.
          </Typography>
          
          {/* Divider Line */}
          <Box
            sx={{
              width: { xs: '80px', sm: '100px' },
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #fa8072, #fa8072, transparent)',
              mb: { xs: 3, sm: 3.5, md: 4 },
              borderRadius: '1px',
            }}
          />
          
          {/* CTA Button with Arrow */}
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { 
                xs: '0.875rem', 
                sm: '0.95rem', 
                md: '1.1rem' 
              },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #fa8072, #fa8072)',
              color: '#FFFFFF',
              mb: { xs: 4, sm: 5, md: 6 },
              minWidth: { xs: '200px', sm: '240px', md: '280px' },
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              border: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #fa8072, #fa8072)',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 25px rgba(207, 52, 118, 0.5)',
              },
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Explore Solutions
            <ArrowForwardIcon sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem' },
              transition: 'transform 0.3s ease',
            }} />
          </Button>
          
          {/* Bottom Tagline */}
          <Typography
            component="h3"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { 
                xs: '0.75rem', 
                sm: '0.875rem', 
                md: '1rem' 
              },
              letterSpacing: { xs: '1.5px', sm: '2px', md: '2.5px' },
              textTransform: 'uppercase',
              opacity: 0.8,
              position: 'relative',
              padding: { xs: '0 40px', sm: '0 60px', md: '0 80px' },
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                width: { xs: '30px', sm: '40px', md: '50px' },
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #fa8072, #fa8072, transparent)',
                opacity: 0.8,
              },
              '&::before': {
                left: 0,
              },
              '&::after': {
                right: 0,
              },
            }}
          >
            THE OUTCOME PARTNER FOR INDUSTRY LEADERS
          </Typography>
        </motion.div>
      </Container>
      
      {/* Scroll Indicator - Bottom Right */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '20px', sm: '30px', md: '40px' },
          right: { xs: '20px', sm: '30px', md: '40px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#fa8072', // Using salmon color for SCROLL
            fontSize: { xs: '0.625rem', sm: '0.75rem' },
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            mb: 1,
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontWeight: 600,
          }}
        >
          SCROLL
        </Typography>
        <Box
          sx={{
            width: '1px',
            height: { xs: '30px', sm: '40px' },
            background: 'linear-gradient(to bottom, #fa8072, #fa8072)',
            animation: 'scrollBounce 2s infinite',
            '@keyframes scrollBounce': {
              '0%, 100%': {
                transform: 'translateY(0)',
                opacity: 0.5,
              },
              '50%': {
                transform: 'translateY(10px)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>
      
      {/* TIM Indicator - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '20px', sm: '30px', md: '40px' },
          left: { xs: '20px', sm: '30px', md: '40px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#fa8072', // Using #fa8072 for TIM
            fontSize: { xs: '0.625rem', sm: '0.75rem' },
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            mb: 1,
            writingMode: 'vertical-rl',
            fontWeight: 600,
          }}
        >
          TIM
        </Typography>
        <Box
          sx={{
            width: '1px',
            height: { xs: '30px', sm: '40px' },
            background: 'linear-gradient(to bottom, #fa8072, #fa8072)',
            animation: 'timBounce 2s infinite 0.5s',
            '@keyframes timBounce': {
              '0%, 100%': {
                transform: 'translateY(0)',
                opacity: 0.5,
              },
              '50%': {
                transform: 'translateY(10px)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>
      
      {/* Additional subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(250, 128, 114, 0.1) 0%, transparent 70%)',
          animation: 'float 20s infinite ease-in-out',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translate(0, 0)',
            },
            '50%': {
              transform: 'translate(50px, -50px)',
            },
          },
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 52, 118, 0.1) 0%, transparent 70%)',
          animation: 'floatReverse 25s infinite ease-in-out',
          '@keyframes floatReverse': {
            '0%, 100%': {
              transform: 'translate(0, 0)',
            },
            '50%': {
              transform: 'translate(-50px, 50px)',
            },
          },
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default HeroSection;