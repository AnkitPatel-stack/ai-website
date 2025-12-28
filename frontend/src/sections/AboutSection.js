// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Link } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Leading in Practical AI Solutions',
//     about_description: 'We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Button
//                 component={Link}
//                 to="/about"
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderWidth: 2,
//                   '&:hover': {
//                     borderWidth: 2,
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={3}>
//               {content.about_stats.map((stat, index) => (
//                 <Grid item xs={6} key={stat.label}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         bgcolor: '#121218',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         height: '100%',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           borderColor: '#00FF88',
//                           boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 3 }}>
//                         <Typography
//                           variant="h2"
//                           sx={{
//                             color: '#00FF88',
//                             fontWeight: 700,
//                             mb: 1,
//                           }}
//                         >
//                           {stat.value}
//                           <Box
//                             component="span"
//                             sx={{ color: 'text.primary', fontSize: '1.5rem' }}
//                           >
//                             {stat.suffix}
//                           </Box>
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           color="text.secondary"
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;



// // src/sections/AboutSection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Link, useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Leading in Practical AI Solutions',
//     about_description: 'We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderWidth: 2,
//                   borderColor: '#00FF88',
//                   color: '#00FF88',
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderWidth: 2,
//                     borderColor: '#00FF88',
//                     backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                     transform: 'translateY(-2px)',
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={3}>
//               {content.about_stats.map((stat, index) => (
//                 <Grid item xs={6} key={stat.label}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         bgcolor: '#1a1a1a',
//                         border: '1px solid',
//                         borderColor: '#333',
//                         height: '100%',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           borderColor: '#00FF88',
//                           boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 3 }}>
//                         <Typography
//                           variant="h2"
//                           sx={{
//                             color: '#00FF88',
//                             fontWeight: 700,
//                             mb: 1,
//                           }}
//                         >
//                           {stat.value}
//                           <Box
//                             component="span"
//                             sx={{ color: '#FFFFFF', fontSize: '1.5rem' }}
//                           >
//                             {stat.suffix}
//                           </Box>
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           sx={{ color: '#A0A0A0' }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;


// // src/sections/AboutSection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import CloudIcon from '@mui/icons-material/Cloud';
// import SecurityIcon from '@mui/icons-material/Security';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Pioneering Intelligent Solutions for Tomorrow',
//     about_description: 'We combine cutting-edge AI technology with deep industry expertise to create solutions that drive innovation, efficiency, and sustainable growth for businesses worldwide.',
//     about_stats: [
//       { label: 'AI Projects', value: '200', suffix: '+', icon: <PrecisionManufacturingIcon /> },
//       { label: 'Data Processed', value: '15', suffix: 'TB+', icon: <AnalyticsIcon /> },
//       { label: 'Cloud Deployments', value: '500', suffix: '+', icon: <CloudIcon /> },
//       { label: 'Security Certified', value: '100', suffix: '%', icon: <SecurityIcon /> },
//     ],
//     features: [
//       'Machine Learning & Deep Learning',
//       'Natural Language Processing',
//       'Computer Vision Solutions',
//       'Predictive Analytics',
//       'AI-powered Automation',
//       'Real-time Data Processing'
//     ]
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Background Animation */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)',
//           zIndex: 0,
//         }}
//       />
      
//       {/* AI Grid Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px),
//             linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   lineHeight: 1.8,
//                   fontSize: '1.2rem',
//                 }}
//               >
//                 {content.about_description}
//               </Typography>

//               {/* AI Features List */}
//               <Grid container spacing={2} sx={{ mb: 4 }}>
//                 {content.features.map((feature, index) => (
//                   <Grid item xs={6} key={index}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                       <Box
//                         sx={{
//                           width: 8,
//                           height: 8,
//                           bgcolor: '#00FF88',
//                           borderRadius: '50%',
//                           mr: 2,
//                         }}
//                       />
//                       <Typography
//                         variant="body1"
//                         sx={{ color: '#B0B0B0' }}
//                       >
//                         {feature}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   onClick={handleLearnMore}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     bgcolor: '#00FF88',
//                     color: '#121218',
//                     fontWeight: 700,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       bgcolor: '#00CC6D',
//                       transform: 'translateY(-2px)',
//                       boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
//                     },
//                   }}
//                 >
//                   Discover Our AI Solutions
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             {/* AI Visualization Container */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
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
//                   borderColor: 'rgba(0, 255, 136, 0.3)',
//                   boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
//                 }}
//               >
//                 {/* AI Brain Network Visualization */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     background: 'linear-gradient(135deg, #121218 0%, #1a1a2e 100%)',
//                   }}
//                 >
//                   {/* Neural Network Animation */}
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       width: '80%',
//                       height: '80%',
//                     }}
//                   >
//                     {/* Neural Network Nodes */}
//                     {[1, 2, 3, 4, 5].map((row, rowIndex) => (
//                       <Box
//                         key={rowIndex}
//                         sx={{
//                           position: 'absolute',
//                           top: `${row * 15}%`,
//                           left: 0,
//                           right: 0,
//                           display: 'flex',
//                           justifyContent: 'space-around',
//                         }}
//                       >
//                         {[1, 2, 3, 4, 5, 6].map((col) => (
//                           <Box
//                             key={col}
//                             sx={{
//                               width: 12,
//                               height: 12,
//                               borderRadius: '50%',
//                               bgcolor: rowIndex % 2 === 0 ? '#00FF88' : '#8A2BE2',
//                               animation: `pulse ${2 + Math.random() * 2}s infinite`,
//                               '@keyframes pulse': {
//                                 '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//                                 '50%': { opacity: 1, transform: 'scale(1.5)' },
//                               },
//                             }}
//                           />
//                         ))}
//                       </Box>
//                     ))}

//                     {/* Data Flow Lines */}
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                       }}
//                     >
//                       {Array.from({ length: 20 }).map((_, i) => (
//                         <Box
//                           key={i}
//                           sx={{
//                             position: 'absolute',
//                             top: `${Math.random() * 100}%`,
//                             left: `${Math.random() * 100}%`,
//                             width: 2,
//                             height: 2,
//                             bgcolor: '#00FF88',
//                             animation: `flow ${3 + Math.random() * 4}s infinite`,
//                             '@keyframes flow': {
//                               '0%': {
//                                 transform: 'translateY(-100px)',
//                                 opacity: 0,
//                               },
//                               '50%': {
//                                 opacity: 0.8,
//                               },
//                               '100%': {
//                                 transform: 'translateY(100px)',
//                                 opacity: 0,
//                               },
//                             },
//                           }}
//                         />
//                       ))}
//                     </Box>

//                     {/* Central AI Core */}
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         width: 80,
//                         height: 80,
//                         borderRadius: '50%',
//                         border: '3px solid',
//                         borderColor: 'rgba(0, 255, 136, 0.5)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
//                         animation: 'rotate 20s infinite linear',
//                         '@keyframes rotate': {
//                           '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
//                           '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
//                         },
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           color: '#00FF88',
//                           fontWeight: 800,
//                           textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
//                         }}
//                       >
//                         AI
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Box>

//                 {/* Stats Overlay */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     bottom: 20,
//                     left: 20,
//                     right: 20,
//                     background: 'rgba(0, 0, 0, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     borderRadius: 2,
//                     p: 2,
//                     border: '1px solid rgba(0, 255, 136, 0.2)',
//                   }}
//                 >
//                   <Grid container spacing={1}>
//                     {content.about_stats.map((stat, index) => (
//                       <Grid item xs={3} key={index}>
//                         <Box sx={{ textAlign: 'center' }}>
//                           <Box sx={{ color: '#00FF88', mb: 0.5 }}>
//                             {stat.icon}
//                           </Box>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               color: '#FFFFFF',
//                               fontWeight: 700,
//                               fontSize: '1.2rem',
//                             }}
//                           >
//                             {stat.value}
//                             <Box component="span" sx={{ fontSize: '0.8rem' }}>
//                               {stat.suffix}
//                             </Box>
//                           </Typography>
//                           <Typography
//                             variant="caption"
//                             sx={{
//                               color: '#A0A0A0',
//                               fontSize: '0.7rem',
//                               display: 'block',
//                             }}
//                           >
//                             {stat.label}
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

// // src/sections/AboutSection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Paper,
//   Fade,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import CloudIcon from '@mui/icons-material/Cloud';
// import StorageIcon from '@mui/icons-material/Storage';
// import SecurityIcon from '@mui/icons-material/Security';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Innovating with Cutting-Edge AI Technology',
//     about_description: 'We transform businesses with practical AI solutions that deliver measurable results. Our expertise spans machine learning, computer vision, natural language processing, and predictive analytics to solve real-world challenges.',
//     about_stats: [
//       { label: 'AI Projects Delivered', value: '200', suffix: '+', icon: <AutoAwesomeIcon /> },
//       { label: 'Cloud Deployments', value: '500', suffix: '+', icon: <CloudIcon /> },
//       { label: 'Data Processed', value: '10', suffix: 'PB', icon: <StorageIcon /> },
//       { label: 'Security Certified', value: '100', suffix: '%', icon: <SecurityIcon /> },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background Effects */}
//       <Box sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)',
//       }} />
      
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#00FF88',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   lineHeight: 1.1,
//                   textShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   lineHeight: 1.8,
//                   fontSize: '1.2rem',
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderWidth: 2,
//                   borderColor: '#00FF88',
//                   color: '#00FF88',
//                   fontWeight: 700,
//                   fontSize: '1.1rem',
//                   borderRadius: 2,
//                   '&:hover': {
//                     borderWidth: 2,
//                     borderColor: '#00FF88',
//                     backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                     transform: 'translateY(-3px)',
//                     boxShadow: '0 10px 25px rgba(0, 255, 136, 0.2)',
//                   },
//                 }}
//               >
//                 Explore Our AI Journey
//               </Button>
//             </motion.div>
//           </Grid>
          
//           {/* AI Showcase Section */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box sx={{
//                 position: 'relative',
//                 height: { xs: 400, md: 500 },
//                 borderRadius: 4,
//                 overflow: 'hidden',
//                 boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 136, 0.1)',
//                 border: '2px solid rgba(255, 255, 255, 0.1)',
//               }}>
//                 {/* Animated AI Visualization */}
//                 <Box sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
                  
//                   {/* Neural Network Animation */}
//                   <Box sx={{ position: 'relative', width: 300, height: 300 }}>
//                     {/* Outer Circle */}
//                     <Box sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 250,
//                       height: 250,
//                       border: '3px dashed rgba(0, 255, 136, 0.4)',
//                       borderRadius: '50%',
//                       animation: 'rotate 20s linear infinite',
//                       '@keyframes rotate': {
//                         '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
//                         '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
//                       }
//                     }} />
                    
//                     {/* Inner Network */}
//                     <Box sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: 200,
//                       height: 200,
//                     }}>
//                       {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
//                         <Box key={i} sx={{
//                           position: 'absolute',
//                           top: '50%',
//                           left: '50%',
//                           width: 100,
//                           height: 2,
//                           background: `linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.6), transparent)`,
//                           transformOrigin: 'left center',
//                           transform: `rotate(${angle}deg) translateX(0)`,
//                           animation: `pulse 2s infinite ${i * 0.2}s`,
//                           '@keyframes pulse': {
//                             '0%, 100%': { opacity: 0.3 },
//                             '50%': { opacity: 1 }
//                           }
//                         }} />
//                       ))}
//                     </Box>
                    
//                     {/* Floating AI Nodes */}
//                     {[
//                       { size: 40, color: '#00FF88', delay: 0 },
//                       { size: 30, color: '#8A2BE2', delay: 0.5 },
//                       { size: 35, color: '#00FF88', delay: 1 },
//                       { size: 25, color: '#8A2BE2', delay: 1.5 },
//                     ].map((node, i) => (
//                       <motion.div
//                         key={i}
//                         animate={{
//                           y: [0, -20, 0],
//                           x: [0, 10, 0],
//                         }}
//                         transition={{
//                           duration: 3,
//                           delay: node.delay,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                         style={{
//                           position: 'absolute',
//                           top: `${40 + (i * 30)}%`,
//                           left: `${30 + (i * 15)}%`,
//                           width: node.size,
//                           height: node.size,
//                           borderRadius: '50%',
//                           background: `radial-gradient(circle, ${node.color} 0%, transparent 70%)`,
//                           boxShadow: `0 0 20px ${node.color}`,
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <Box sx={{
//                           width: node.size / 2,
//                           height: node.size / 2,
//                           borderRadius: '50%',
//                           background: '#fff',
//                           boxShadow: `0 0 10px ${node.color}`,
//                         }} />
//                       </motion.div>
//                     ))}
                    
//                     {/* Center AI Text */}
//                     {/* <Typography
//                       variant="h2"
//                       sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         color: '#fff',
//                         fontWeight: 900,
//                         fontSize: '3rem',
//                         textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         backgroundClip: 'text',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                       }}
//                     >
//                       AI
//                     </Typography> */}
//                   </Box>
                  
//                   {/* Floating Tech Icons */}
//                   <Box sx={{
//                     position: 'absolute',
//                     top: 30,
//                     right: 30,
//                     display: 'flex',
//                     gap: 2,
//                   }}>
//                     {['🤖', '🧠', '⚡', '🔮'].map((icon, i) => (
//                       <motion.div
//                         key={i}
//                         animate={{
//                           y: [0, -10, 0],
//                         }}
//                         transition={{
//                           duration: 2,
//                           delay: i * 0.3,
//                           repeat: Infinity,
//                         }}
//                         style={{
//                           fontSize: '1.5rem',
//                           opacity: 0.8,
//                         }}
//                       >
//                         {icon}
//                       </motion.div>
//                     ))}
//                   </Box>
                  
//                   {/* Bottom Stats Overlay */}
//                   <Paper sx={{
//                     position: 'absolute',
//                     bottom: 20,
//                     left: 20,
//                     right: 20,
//                     bgcolor: 'rgba(0, 0, 0, 0.7)',
//                     backdropFilter: 'blur(10px)',
//                     p: 2,
//                     borderRadius: 2,
//                     border: '1px solid rgba(0, 255, 136, 0.2)',
//                   }}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={6}>
//                         <Typography variant="body2" sx={{ color: '#00FF88', fontWeight: 600 }}>
//                           Real-time Processing
//                         </Typography>
//                         <Typography variant="caption" sx={{ color: '#aaa' }}>
//                           <motion.span
//                             animate={{ opacity: [0.5, 1, 0.5] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                           >
//                             ▸ Live
//                           </motion.span>
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Typography variant="body2" sx={{ color: '#8A2BE2', fontWeight: 600 }}>
//                           Accuracy Rate
//                         </Typography>
//                         <Typography variant="caption" sx={{ color: '#aaa' }}>
//                           99.7%
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Paper>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
        
//         {/* Stats Cards */}
//         <Box sx={{ mt: 8 }}>
//           <Grid container spacing={3}>
//             {content.about_stats.map((stat, index) => (
//               <Grid item xs={6} sm={3} key={stat.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'rgba(255, 255, 255, 0.05)',
//                       border: '1px solid',
//                       borderColor: 'rgba(255, 255, 255, 0.1)',
//                       height: '100%',
//                       transition: 'all 0.3s ease',
//                       backdropFilter: 'blur(10px)',
//                       '&:hover': {
//                         transform: 'translateY(-8px)',
//                         borderColor: '#00FF88',
//                         bgcolor: 'rgba(0, 255, 136, 0.05)',
//                         boxShadow: '0 15px 35px rgba(0, 255, 136, 0.15)',
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ textAlign: 'center', p: 3 }}>
//                       <Box sx={{ 
//                         mb: 2,
//                         color: '#00FF88',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         fontSize: '2rem',
//                       }}>
//                         {stat.icon}
//                       </Box>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           color: '#00FF88',
//                           fontWeight: 800,
//                           mb: 1,
//                           fontSize: { xs: '2rem', sm: '2.5rem' },
//                         }}
//                       >
//                         {stat.value}
//                         <Box
//                           component="span"
//                           sx={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 600 }}
//                         >
//                           {stat.suffix}
//                         </Box>
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{ 
//                           color: '#A0A0A0',
//                           fontWeight: 500,
//                           fontSize: '0.9rem',
//                         }}
//                       >
//                         {stat.label}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;


// // src/sections/AboutSection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import { Link, useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Pioneering Generative AI Solutions',
//     about_subtitle: 'Where Innovation Meets Implementation',
//     about_description: 'We specialize in transforming cutting-edge AI research into practical, scalable solutions that drive business growth and operational excellence.',
//     about_stats: [
//       { label: 'AI Projects', value: '250', suffix: '+', icon: <AutoAwesomeIcon /> },
//       { label: 'Models Trained', value: '1.2K', suffix: '+', icon: <TimelineIcon /> },
//       { label: 'Client Success', value: '98', suffix: '%', icon: <VerifiedIcon /> },
//       { label: 'Data Processed', value: '10', suffix: 'PB', icon: <AnalyticsIcon /> },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   const handlePlayDemo = () => {
//     // Open demo video or modal
//     window.open('https://www.youtube.com/watch?v=demo', '_blank');
//   };

//   return (
//     <Box 
//       ref={ref} 
//       sx={{ 
//         py: { xs: 8, md: 12 }, 
//         bgcolor: '#121218',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Animated Background Elements */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)',
//           animation: 'pulse 8s infinite alternate',
//           '@keyframes pulse': {
//             '0%': { opacity: 0.3 },
//             '100%': { opacity: 0.7 }
//           }
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           {/* Left Column - Content */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="overline"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 600,
//                   letterSpacing: 2,
//                   display: 'block',
//                 }}
//               >
//                 ABOUT OUR VISION
//               </Typography>
              
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#FFFFFF',
//                   fontWeight: 800,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   lineHeight: 1.1,
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 3,
//                   color: '#00FF88',
//                   fontWeight: 600,
//                   fontStyle: 'italic',
//                 }}
//               >
//                 {content.about_subtitle}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     onClick={handleLearnMore}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       bgcolor: '#00FF88',
//                       color: '#121218',
//                       fontWeight: 700,
//                       '&:hover': {
//                         bgcolor: '#00CC6D',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       },
//                     }}
//                   >
//                     Learn More
//                   </Button>
//                 </motion.div>
                
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     startIcon={<PlayArrowIcon />}
//                     onClick={handlePlayDemo}
//                     sx={{
//                       px: 4,
//                       py: 1.5,
//                       borderWidth: 2,
//                       borderColor: '#FFFFFF',
//                       color: '#FFFFFF',
//                       fontWeight: 600,
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                         transform: 'translateY(-2px)',
//                       },
//                     }}
//                   >
//                     Watch Demo
//                   </Button>
//                 </motion.div>
//               </Box>

//               {/* Stats Grid */}
//               <Grid container spacing={2}>
//                 {content.about_stats.map((stat, index) => (
//                   <Grid item xs={6} key={stat.label}>
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={inView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 0.2 + index * 0.1 }}
//                     >
//                       <Box
//                         sx={{
//                           p: 2,
//                           borderRadius: 2,
//                           bgcolor: 'rgba(255, 255, 255, 0.03)',
//                           border: '1px solid rgba(255, 255, 255, 0.1)',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.05)',
//                             borderColor: 'rgba(0, 255, 136, 0.3)',
//                             transform: 'translateY(-3px)',
//                           },
//                         }}
//                       >
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                           <Box
//                             sx={{
//                               color: '#00FF88',
//                               mr: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                             }}
//                           >
//                             {stat.icon}
//                           </Box>
//                           <Typography
//                             variant="h3"
//                             sx={{
//                               color: '#FFFFFF',
//                               fontWeight: 700,
//                               fontSize: '2rem',
//                             }}
//                           >
//                             {stat.value}
//                             <Box
//                               component="span"
//                               sx={{ 
//                                 color: '#00FF88', 
//                                 fontSize: '1rem',
//                                 ml: 0.5 
//                               }}
//                             >
//                               {stat.suffix}
//                             </Box>
//                           </Typography>
//                         </Box>
//                         <Typography
//                           variant="body2"
//                           sx={{ 
//                             color: '#A0A0A0',
//                             fontSize: '0.9rem',
//                           }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </Box>
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </Grid>
//             </motion.div>
//           </Grid>
          
//           {/* Right Column - AI Showcase */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   position: 'relative',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                 }}
//               >
//                 {/* Main AI Showcase Video/Image */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     height: { xs: 300, md: 500 },
//                     overflow: 'hidden',
//                   }}
//                 >
//                   {/* Video Background */}
//                   <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       filter: 'brightness(0.9) contrast(1.1)',
//                     }}
//                   >
//                     <source src="/videos/ai-showcase.mp4" type="video/mp4" />
//                     <source src="/videos/ai-showcase.webm" type="video/webm" />
//                     {/* Fallback Image */}
//                     <img 
//                       src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
//                       alt="AI Showcase" 
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     />
//                     Your browser does not support the video tag.
//                   </video>
                  
//                   {/* Overlay Gradient */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'linear-gradient(45deg, rgba(0, 255, 136, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%)',
//                       mixBlendMode: 'overlay',
//                     }}
//                   />
                  
//                   {/* Floating AI Elements */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '20%',
//                       left: '10%',
//                       animation: 'float 6s ease-in-out infinite',
//                       '@keyframes float': {
//                         '0%, 100%': { transform: 'translateY(0px)' },
//                         '50%': { transform: 'translateY(-20px)' }
//                       }
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         borderRadius: '50%',
//                         bgcolor: 'rgba(0, 255, 136, 0.2)',
//                         border: '2px solid rgba(0, 255, 136, 0.5)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backdropFilter: 'blur(10px)',
//                       }}
//                     >
//                       <AutoAwesomeIcon sx={{ fontSize: 40, color: '#00FF88' }} />
//                     </Box>
//                   </Box>
                  
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: '30%',
//                       right: '15%',
//                       animation: 'float 7s ease-in-out infinite 1s',
//                       '@keyframes float': {
//                         '0%, 100%': { transform: 'translateY(0px)' },
//                         '50%': { transform: 'translateY(-15px)' }
//                       }
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '20%',
//                         bgcolor: 'rgba(138, 43, 226, 0.2)',
//                         border: '2px solid rgba(138, 43, 226, 0.5)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backdropFilter: 'blur(10px)',
//                       }}
//                     >
//                       <TimelineIcon sx={{ fontSize: 30, color: '#8A2BE2' }} />
//                     </Box>
//                   </Box>
                  
//                   {/* AI Text Overlay */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: 20,
//                       left: 20,
//                       right: 20,
//                       background: 'rgba(0, 0, 0, 0.7)',
//                       backdropFilter: 'blur(10px)',
//                       borderRadius: 2,
//                       p: 3,
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         mb: 1,
//                       }}
//                     >
//                       Generative AI in Action
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: '#A0A0A0',
//                       }}
//                     >
//                       Real-time AI model generating creative solutions for business challenges
//                     </Typography>
//                   </Box>
//                 </Box>
                
//                 {/* Technology Stack */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     bgcolor: 'rgba(18, 18, 24, 0.9)',
//                     borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       color: '#FFFFFF',
//                       fontWeight: 600,
//                       mb: 2,
//                       textAlign: 'center',
//                     }}
//                   >
//                     Technologies We Master
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: 1,
//                       justifyContent: 'center',
//                     }}
//                   >
//                     {['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'GPT-4', 'DALL-E', 'Stable Diffusion'].map((tech) => (
//                       <Box
//                         key={tech}
//                         sx={{
//                           px: 2,
//                           py: 1,
//                           borderRadius: 20,
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           border: '1px solid rgba(0, 255, 136, 0.2)',
//                         }}
//                       >
//                         <Typography
//                           variant="caption"
//                           sx={{
//                             color: '#00FF88',
//                             fontWeight: 600,
//                           }}
//                         >
//                           {tech}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>
//               </Box>
              
//               {/* Additional Info Cards */}
//               <Grid container spacing={2} sx={{ mt: 3 }}>
//                 <Grid item xs={6}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <Box
//                       sx={{
//                         p: 2,
//                         borderRadius: 2,
//                         bgcolor: 'rgba(0, 255, 136, 0.05)',
//                         border: '1px solid rgba(0, 255, 136, 0.1)',
//                         textAlign: 'center',
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           color: '#00FF88',
//                           fontWeight: 700,
//                           mb: 0.5,
//                         }}
//                       >
//                         24/7
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{ color: '#A0A0A0' }}
//                       >
//                         AI Monitoring
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <Box
//                       sx={{
//                         p: 2,
//                         borderRadius: 2,
//                         bgcolor: 'rgba(138, 43, 226, 0.05)',
//                         border: '1px solid rgba(138, 43, 226, 0.1)',
//                         textAlign: 'center',
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           color: '#8A2BE2',
//                           fontWeight: 700,
//                           mb: 0.5,
//                         }}
//                       >
//                         99.9%
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{ color: '#A0A0A0' }}
//                       >
//                         Uptime SLA
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               </Grid>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;


// // src/sections/AboutSection.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Leading in Practical AI Solutions',
//     about_description: 'We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+', icon: <RocketLaunchIcon /> },
//       { label: 'AI Models Deployed', value: '500', suffix: '+', icon: <AutoAwesomeIcon /> },
//       { label: 'Client Satisfaction', value: '98', suffix: '%', icon: <TimelineIcon /> },
//       { label: 'Team Members', value: '50', suffix: '+', icon: <GroupsIcon /> },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Background AI Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.5,
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#E0E0E0',
//                   lineHeight: 1.8,
//                   fontSize: { xs: '1rem', md: '1.25rem' },
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderWidth: 2,
//                   borderColor: '#00FF88',
//                   color: '#00FF88',
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderWidth: 2,
//                     borderColor: '#00FF88',
//                     backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 10px 20px rgba(0, 255, 136, 0.2)',
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {/* AI Showcase Container */}
//               <Box
//                 sx={{
//                   position: 'relative',
//                   bgcolor: '#1a1a1a',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   border: '1px solid',
//                   borderColor: '#333',
//                   boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
//                   height: { xs: 400, md: 500 },
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {/* Animated AI Visualization */}
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     p: 4,
//                   }}
//                 >
//                   {/* Neural Network Animation */}
//                   <Box sx={{ 
//                     position: 'relative', 
//                     width: 300, 
//                     height: 200,
//                     mb: 4
//                   }}>
//                     {/* Main Network Lines */}
//                     <Box sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: '100%',
//                       height: '100%',
//                     }}>
//                       {/* Horizontal Lines */}
//                       {[0, 1, 2, 3].map((i) => (
//                         <Box
//                           key={`h-${i}`}
//                           sx={{
//                             position: 'absolute',
//                             top: `${25 * i}%`,
//                             left: 0,
//                             width: '100%',
//                             height: '2px',
//                             background: `linear-gradient(90deg, transparent, #00FF88, transparent)`,
//                             animation: `pulseLine 3s infinite ${i * 0.5}s`,
//                             '@keyframes pulseLine': {
//                               '0%, 100%': { opacity: 0.3 },
//                               '50%': { opacity: 1 }
//                             }
//                           }}
//                         />
//                       ))}
                      
//                       {/* Vertical Connections */}
//                       {[0, 1, 2, 3, 4].map((i) => (
//                         <Box
//                           key={`v-${i}`}
//                           sx={{
//                             position: 'absolute',
//                             top: 0,
//                             left: `${25 * i}%`,
//                             width: '2px',
//                             height: '100%',
//                             background: `linear-gradient(180deg, transparent, #8A2BE2, transparent)`,
//                             animation: `pulseLine 2s infinite ${i * 0.3}s`,
//                           }}
//                         />
//                       ))}
                      
//                       {/* Animated Nodes */}
//                       {[0, 1, 2, 3].map((row) => (
//                         [0, 1, 2, 3, 4].map((col) => (
//                           <Box
//                             key={`node-${row}-${col}`}
//                             sx={{
//                               position: 'absolute',
//                               top: `${25 * row}%`,
//                               left: `${25 * col}%`,
//                               width: 12,
//                               height: 12,
//                               borderRadius: '50%',
//                               bgcolor: row % 2 === 0 ? '#00FF88' : '#8A2BE2',
//                               transform: 'translate(-50%, -50%)',
//                               boxShadow: `0 0 20px ${row % 2 === 0 ? '#00FF88' : '#8A2BE2'}`,
//                               animation: `pulse 2s infinite ${(row + col) * 0.2}s`,
//                               '@keyframes pulse': {
//                                 '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
//                                 '50%': { transform: 'translate(-50%, -50%) scale(1.5)' }
//                               }
//                             }}
//                           />
//                         ))
//                       ))}
//                     </Box>
//                   </Box>
                  
//                   {/* Stats Grid */}
//                   <Grid container spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
//                     {content.about_stats.map((stat, index) => (
//                       <Grid item xs={6} key={stat.label}>
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={inView ? { opacity: 1, y: 0 } : {}}
//                           transition={{ delay: 0.5 + index * 0.1 }}
//                         >
//                           <Card
//                             sx={{
//                               bgcolor: 'rgba(26, 26, 26, 0.8)',
//                               border: '1px solid',
//                               borderColor: 'rgba(0, 255, 136, 0.2)',
//                               backdropFilter: 'blur(10px)',
//                               transition: 'all 0.3s ease',
//                               height: '100%',
//                               '&:hover': {
//                                 transform: 'translateY(-5px)',
//                                 borderColor: '#00FF88',
//                                 boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)',
//                               },
//                             }}
//                           >
//                             <CardContent sx={{ textAlign: 'center', p: 2 }}>
//                               <Box sx={{ 
//                                 color: '#00FF88', 
//                                 mb: 1,
//                                 display: 'flex',
//                                 justifyContent: 'center'
//                               }}>
//                                 {stat.icon}
//                               </Box>
//                               <Typography
//                                 variant="h3"
//                                 sx={{
//                                   color: '#00FF88',
//                                   fontWeight: 700,
//                                   fontSize: '2rem',
//                                   mb: 0.5,
//                                 }}
//                               >
//                                 {stat.value}
//                                 <Box
//                                   component="span"
//                                   sx={{ color: '#FFFFFF', fontSize: '1.2rem' }}
//                                 >
//                                   {stat.suffix}
//                                 </Box>
//                               </Typography>
//                               <Typography
//                                 variant="body2"
//                                 sx={{ 
//                                   color: '#A0A0A0',
//                                   fontSize: '0.9rem',
//                                   fontWeight: 500
//                                 }}
//                               >
//                                 {stat.label}
//                               </Typography>
//                             </CardContent>
//                           </Card>
//                         </motion.div>
//                       </Grid>
//                     ))}
//                   </Grid>
                  
//                   {/* Floating AI Elements */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: '20%',
//                       left: '10%',
//                       width: 40,
//                       height: 40,
//                       borderRadius: '50%',
//                       background: 'radial-gradient(circle, #00FF88, transparent)',
//                       opacity: 0.6,
//                       filter: 'blur(5px)',
//                       animation: 'float 8s infinite ease-in-out',
//                       '@keyframes float': {
//                         '0%, 100%': { transform: 'translateY(0px)' },
//                         '50%': { transform: 'translateY(-20px)' }
//                       }
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: '30%',
//                       right: '15%',
//                       width: 30,
//                       height: 30,
//                       borderRadius: '50%',
//                       background: 'radial-gradient(circle, #8A2BE2, transparent)',
//                       opacity: 0.6,
//                       filter: 'blur(5px)',
//                       animation: 'float 6s infinite ease-in-out reverse',
//                     }}
//                   />
//                 </Box>
                
//                 {/* Glow Effect */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     borderRadius: 4,
//                     boxShadow: 'inset 0 0 100px rgba(0, 255, 136, 0.1)',
//                     pointerEvents: 'none',
//                   }}
//                 />
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#0A0A0F',
//     }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#fa8072',
//                   fontWeight: 700,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Leading in Practical AI Solutions
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#A0A0A0',
//                   lineHeight: 1.8,
//                   fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 }}
//               >
//                 We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderColor: '#fa8072',
//                   color: '#fa8072',
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderColor: '#7A1BD2',
//                     color: '#fa8072',
//                     bgcolor: 'rgba(138, 43, 226, 0.1)',
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {[
//                 { label: 'Projects Delivered', value: '150+', icon: <RocketLaunchIcon />, color: '#ff1dce' },
//                 { label: 'AI Models Deployed', value: '500+', icon: <AutoAwesomeIcon />, color: '#ff1dce' },
//                 { label: 'Client Satisfaction', value: '98%', icon: <TimelineIcon />, color: '#ff1dce' },
//                 { label: 'Team Members', value: '50+', icon: <GroupsIcon />, color: '#8A2BE2' },
//               ].map((stat, index) => (
//                 <Grid item xs={6} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         bgcolor: 'rgba(255, 255, 255, 0.05)',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         transition: 'all 0.3s ease',
//                         height: '100%',
//                         '&:hover': {
//                           borderColor: stat.color,
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 2 }}>
//                         <Box sx={{ 
//                           color: stat.color, 
//                           mb: 1,
//                           display: 'flex',
//                           justifyContent: 'center'
//                         }}>
//                           {stat.icon}
//                         </Box>
//                         <Typography
//                           variant="h3"
//                           sx={{
//                             color: stat.color,
//                             fontWeight: 700,
//                             fontSize: '1.8rem',
//                             mb: 0.5,
//                           }}
//                         >
//                           {stat.value}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{ 
//                             color: '#A0A0A0',
//                             fontSize: '0.85rem',
//                             fontWeight: 500
//                           }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: '#000000',
//     }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#fa8072',
//                   fontWeight: 700,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Leading in Practical AI Solutions
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#ffffff',
//                   lineHeight: 1.8,
//                   fontSize: { xs: '0.9rem', md: '1.1rem' },
//                   opacity: 0.9,
//                 }}
//               >
//                 We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderColor: '#fa8072',
//                   color: '#fa8072',
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderColor: '#ff1dce',
//                     color: '#ff1dce',
//                     backgroundColor: 'rgba(255, 0, 144, 0.1)',
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {[
//                 { label: 'Projects Delivered', value: '150+', icon: <RocketLaunchIcon /> },
//                 { label: 'AI Models Deployed', value: '500+', icon: <AutoAwesomeIcon /> },
//                 { label: 'Client Satisfaction', value: '98%', icon: <TimelineIcon /> },
//                 { label: 'Team Members', value: '50+', icon: <GroupsIcon /> },
//               ].map((stat, index) => (
//                 <Grid item xs={6} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         backgroundColor: '#111111',
//                         border: '1px solid #333333',
//                         transition: 'all 0.3s ease',
//                         height: '100%',
//                         '&:hover': {
//                           borderColor: '#fa8072',
//                           transform: 'translateY(-5px)',
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 2 }}>
//                         <Box sx={{ 
//                           color: '#fa8072', 
//                           mb: 1,
//                           display: 'flex',
//                           justifyContent: 'center'
//                         }}>
//                           {stat.icon}
//                         </Box>
//                         <Typography
//                           variant="h3"
//                           sx={{
//                             color: '#fa8072',
//                             fontWeight: 700,
//                             fontSize: '1.8rem',
//                             mb: 0.5,
//                           }}
//                         >
//                           {stat.value}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{ 
//                             color: '#ffffff',
//                             fontSize: '0.85rem',
//                             fontWeight: 500,
//                             opacity: 0.9,
//                           }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: '#fa8072',
//                   fontWeight: 700,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Leading in Practical AI Solutions
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#ffffff',
//                   lineHeight: 1.8,
//                   fontSize: { xs: '0.9rem', md: '1.1rem' },
//                   opacity: 0.9,
//                 }}
//               >
//                 We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderColor: '#fa8072',
//                   color: '#fa8072',
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderColor: '#ff1dce',
//                     color: '#ff1dce',
//                     backgroundColor: 'rgba(255, 0, 144, 0.1)',
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {[
//                 { label: 'Projects Delivered', value: '150+', icon: <RocketLaunchIcon /> },
//                 { label: 'AI Models Deployed', value: '500+', icon: <AutoAwesomeIcon /> },
//                 { label: 'Client Satisfaction', value: '98%', icon: <TimelineIcon /> },
//                 { label: 'Team Members', value: '50+', icon: <GroupsIcon /> },
//               ].map((stat, index) => (
//                 <Grid item xs={6} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         backgroundColor: '#111111',
//                         border: '1px solid #333333',
//                         transition: 'all 0.3s ease',
//                         height: '100%',
//                         '&:hover': {
//                           borderColor: '#fa8072',
//                           transform: 'translateY(-5px)',
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 2 }}>
//                         <Box sx={{ 
//                           color: '#fa8072', 
//                           mb: 1,
//                           display: 'flex',
//                           justifyContent: 'center'
//                         }}>
//                           {stat.icon}
//                         </Box>
//                         <Typography
//                           variant="h3"
//                           sx={{
//                             color: '#fa8072',
//                             fontWeight: 700,
//                             fontSize: '1.8rem',
//                             mb: 0.5,
//                           }}
//                         >
//                           {stat.value}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{ 
//                             color: '#ffffff',
//                             fontSize: '0.85rem',
//                             fontWeight: 500,
//                             opacity: 0.9,
//                           }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const AboutSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();
//   const primaryColor = '#fa8072'; // Telemagenta
//   const secondaryColor = '#fa8072'; // Salmon

//   const handleLearnMore = () => {
//     navigate('/about');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: primaryColor,
//                   fontWeight: 700,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Leading in Practical AI Solutions
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#ffffff',
//                   lineHeight: 1.8,
//                   fontSize: { xs: '0.9rem', md: '1.1rem' },
//                   opacity: 0.9,
//                 }}
//               >
//                 We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.
//               </Typography>
              
//               <Button
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 onClick={handleLearnMore}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderColor: secondaryColor,
//                   color: secondaryColor,
//                   fontWeight: 600,
//                   '&:hover': {
//                     borderColor: '#fb9488',
//                     color: '#fb9488',
//                     backgroundColor: 'rgba(250, 128, 114, 0.1)',
//                     transform: 'translateY(-2px)',
//                   },
//                   transition: 'all 0.3s ease',
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {[
//                 { 
//                   label: 'Projects Delivered', 
//                   value: '150+', 
//                   icon: <RocketLaunchIcon />,
//                   color: primaryColor
//                 },
//                 { 
//                   label: 'AI Models Deployed', 
//                   value: '500+', 
//                   icon: <AutoAwesomeIcon />,
//                   color: secondaryColor
//                 },
//                 { 
//                   label: 'Client Satisfaction', 
//                   value: '98%', 
//                   icon: <TimelineIcon />,
//                   color: primaryColor
//                 },
//                 { 
//                   label: 'Team Members', 
//                   value: '50+', 
//                   icon: <GroupsIcon />,
//                   color: secondaryColor
//                 },
//               ].map((stat, index) => (
//                 <Grid item xs={6} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         backgroundColor: '#111111',
//                         border: '1px solid #333333',
//                         transition: 'all 0.3s ease',
//                         height: '100%',
//                         '&:hover': {
//                           borderColor: stat.color,
//                           transform: 'translateY(-5px)',
//                           boxShadow: `0 8px 25px ${stat.color}33`,
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 2 }}>
//                         <Box sx={{ 
//                           color: stat.color, 
//                           mb: 1,
//                           display: 'flex',
//                           justifyContent: 'center',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             transform: 'scale(1.1)',
//                           },
//                         }}>
//                           {stat.icon}
//                         </Box>
//                         <Typography
//                           variant="h3"
//                           sx={{
//                             color: stat.color,
//                             fontWeight: 700,
//                             fontSize: '1.8rem',
//                             mb: 0.5,
//                           }}
//                         >
//                           {stat.value}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{ 
//                             color: '#ffffff',
//                             fontSize: '0.85rem',
//                             fontWeight: 500,
//                             opacity: 0.9,
//                           }}
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  
  // Color scheme
  const primaryColor = '#cf3476'; // Telemagenta
  const secondaryColor = '#fa8072'; // Salmon
  const primaryColorHover = '#d94b8a';
  const secondaryColorHover = '#fb9488';

  const handleLearnMore = () => {
    navigate('/about');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 90 
    },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    })
  };

  const glowAnimation = {
    hidden: { boxShadow: `0 0 0px ${primaryColor}` },
    visible: {
      boxShadow: [
        `0 0 0px ${primaryColor}`,
        `0 0 20px ${primaryColor}`,
        `0 0 0px ${primaryColor}`
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 8, md: 12 }, 
      backgroundColor: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${primaryColor}15 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          },
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${secondaryColor}15 0%, transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    color: primaryColor,
                    fontWeight: 800,
                    fontSize: { 
                      xs: '2rem', 
                      sm: '2.5rem', 
                      md: '3rem' 
                    },
                    lineHeight: 1.2,
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      width: '80px',
                      height: '4px',
                      background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                      borderRadius: '2px',
                    }
                  }}
                >
                  Leading in Practical AI Solutions
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: '#ffffff',
                    lineHeight: 1.8,
                    fontSize: { 
                      xs: '0.9rem', 
                      sm: '1rem', 
                      md: '1.1rem' 
                    },
                    opacity: 0.9,
                  }}
                >
                  We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.
                </Typography>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowForwardIcon />
                    </motion.div>
                  }
                  onClick={handleLearnMore}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: secondaryColor,
                    color: secondaryColor,
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, transparent, ${secondaryColor}20, transparent)`,
                      transition: 'left 0.5s',
                    },
                    '&:hover': {
                      borderColor: secondaryColorHover,
                      color: secondaryColorHover,
                      backgroundColor: `rgba(250, 128, 114, 0.1)`,
                      transform: 'translateY(-2px)',
                      '&::before': {
                        left: '100%',
                      }
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Grid container spacing={2}>
                {[
                  { 
                    label: 'Projects Delivered', 
                    value: '150+', 
                    icon: <RocketLaunchIcon />,
                    color: primaryColor,
                    delay: 0
                  },
                  { 
                    label: 'AI Models Deployed', 
                    value: '500+', 
                    icon: <AutoAwesomeIcon />,
                    color: secondaryColor,
                    delay: 1
                  },
                  { 
                    label: 'Client Satisfaction', 
                    value: '98%', 
                    icon: <TimelineIcon />,
                    color: primaryColor,
                    delay: 2
                  },
                  { 
                    label: 'Team Members', 
                    value: '50+', 
                    icon: <GroupsIcon />,
                    color: secondaryColor,
                    delay: 3
                  },
                ].map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <motion.div
                      custom={stat.delay}
                      variants={statsVariants}
                      whileHover={{ 
                        y: -10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div
                        variants={glowAnimation}
                        animate={inView ? "visible" : "hidden"}
                      >
                        <Card
                          sx={{
                            backgroundColor: '#111111',
                            border: `1px solid ${stat.color}40`,
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '3px',
                              background: `linear-gradient(90deg, ${stat.color}, ${stat.color === primaryColor ? secondaryColor : primaryColor})`,
                              transform: 'translateX(-100%)',
                              transition: 'transform 0.5s ease',
                            },
                            '&:hover': {
                              borderColor: stat.color,
                              transform: 'translateY(-5px)',
                              boxShadow: `0 15px 35px ${stat.color}25`,
                              '&::before': {
                                transform: 'translateX(0)',
                              }
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <CardContent sx={{ 
                            textAlign: 'center', 
                            p: 3,
                            position: 'relative',
                            zIndex: 1
                          }}>
                            <motion.div
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.2,
                                transition: { duration: 0.5 }
                              }}
                            >
                              <Box sx={{ 
                                color: stat.color, 
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                '& .MuiSvgIcon-root': {
                                  fontSize: { xs: 28, md: 32 }
                                }
                              }}>
                                {stat.icon}
                              </Box>
                            </motion.div>
                            
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={inView ? { scale: 1 } : {}}
                              transition={{ 
                                delay: 0.5 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              <Typography
                                variant="h3"
                                sx={{
                                  color: stat.color,
                                  fontWeight: 800,
                                  fontSize: { 
                                    xs: '2rem', 
                                    sm: '2.2rem', 
                                    md: '2.5rem' 
                                  },
                                  mb: 1,
                                  textShadow: `0 0 10px ${stat.color}40`,
                                }}
                              >
                                {stat.value}
                              </Typography>
                            </motion.div>
                            
                            <Typography
                              variant="body2"
                              sx={{ 
                                color: '#ffffff',
                                fontSize: { xs: '0.8rem', md: '0.85rem' },
                                fontWeight: 500,
                                opacity: 0.9,
                              }}
                            >
                              {stat.label}
                            </Typography>
                            
                            {/* Animated counter for numbers */}
                            {stat.value.includes('+') && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                style={{
                                  position: 'absolute',
                                  top: 5,
                                  right: 5,
                                  fontSize: '0.6rem',
                                  color: stat.color,
                                  fontWeight: 'bold'
                                }}
                              >
                                +
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Animated connecting lines */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <motion.path
          d="M20,50 Q100,20 180,50"
          stroke={`url(#gradient-${primaryColor})`}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <defs>
          <linearGradient id={`gradient-${primaryColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default AboutSection;