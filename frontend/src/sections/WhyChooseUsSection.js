// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const WhyChooseUsSection = () => {
//   const [content] = useState({
//     why_title: 'Why Choose Our AI Solutions',
//     why_points: [
//       {
//         title: 'Enterprise-Grade Security',
//         description: 'Bank-level security protocols and compliance standards for all solutions.',
//       },
//       {
//         title: 'Scalable Architecture',
//         description: 'Designed to grow with your business from day one.',
//       },
//       {
//         title: 'Transparent Pricing',
//         description: 'Clear, predictable pricing with no hidden fees.',
//       },
//       {
//         title: '24/7 Expert Support',
//         description: 'Round-the-clock support from AI specialists.',
//       },
//       {
//         title: 'Proven Track Record',
//         description: 'Successfully delivered solutions for Fortune 500 companies.',
//       },
//       {
//         title: 'Continuous Innovation',
//         description: 'Stay ahead with cutting-edge AI research and development.',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//               }}
//             >
//               {content.why_title}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.why_points.map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'background.default',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                       }}
//                     >
//                       <Box
//                         component="span"
//                         sx={{
//                           color: '#00FF88',
//                           fontSize: '1.5rem',
//                         }}
//                       >
//                         ✓
//                       </Box>
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;


// // src/sections/WhyChooseUsSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [content] = useState({
//     why_title: 'Why Choose Our AI Solutions',
//     why_subtitle: 'Experience the difference with our cutting-edge AI technology and expert implementation',
//     why_points: [
//       {
//         title: 'Enterprise-Grade Security',
//         description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//         icon: <SecurityIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #00FF88 0%, #0066FF 100%)',
//         mainColor: '#00FF88',
//       },
//       {
//         title: 'Scalable AI Architecture',
//         description: 'AI systems designed to grow intelligently with your business needs.',
//         icon: <ScaleIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #0066FF 0%, #8A2BE2 100%)',
//         mainColor: '#0066FF',
//       },
//       {
//         title: 'Transparent AI Pricing',
//         description: 'Clear, predictable pricing with performance-based ROI metrics.',
//         icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #8A2BE2 0%, #FF0080 100%)',
//         mainColor: '#8A2BE2',
//       },
//       {
//         title: '24/7 AI Expert Support',
//         description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//         icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #FF0080 0%, #00FF88 100%)',
//         mainColor: '#FF0080',
//       },
//       {
//         title: 'Proven AI Track Record',
//         description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//         icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//         mainColor: '#00FF88',
//       },
//       {
//         title: 'Continuous AI Innovation',
//         description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//         icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
//         gradient: 'linear-gradient(135deg, #8A2BE2 0%, #0066FF 100%)',
//         mainColor: '#8A2BE2',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Neural Network Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 0,
//           opacity: 0.05,
//           backgroundImage: `
//             radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
//             linear-gradient(45deg, transparent 48%, rgba(0, 255, 136, 0.02) 50%, transparent 52%),
//             linear-gradient(-45deg, transparent 48%, rgba(138, 43, 226, 0.02) 50%, transparent 52%)
//           `,
//           backgroundSize: '100px 100px',
//         }}
//       />

//       {/* Floating AI Particles */}
//       <Box sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 0,
//       }}>
//         {[...Array(20)].map((_, i) => (
//           <Box
//             key={i}
//             sx={{
//               position: 'absolute',
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               borderRadius: '50%',
//               background: i % 3 === 0 ? '#00FF88' : i % 3 === 1 ? '#8A2BE2' : '#0066FF',
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `floatParticle ${Math.random() * 10 + 10}s infinite ${Math.random() * 5}s`,
//               opacity: Math.random() * 0.3 + 0.1,
//               '@keyframes floatParticle': {
//                 '0%, 100%': { 
//                   transform: 'translate(0, 0)',
//                   opacity: Math.random() * 0.2 + 0.1
//                 },
//                 '50%': { 
//                   transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`,
//                   opacity: Math.random() * 0.4 + 0.2
//                 }
//               }
//             }}
//           />
//         ))}
//       </Box>

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 70%, #0066FF 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 800,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
//               }}
//             >
//               {content.why_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '1rem', md: '1.25rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               {content.why_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.why_points.map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 whileHover={{ y: -10 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(18, 18, 24, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     border: '2px solid',
//                     borderColor: hoveredIndex === index ? point.mainColor : 'rgba(255,255,255,0.1)',
//                     height: '100%',
//                     transition: 'all 0.4s ease',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     borderRadius: 3,
//                     '&:hover': {
//                       boxShadow: `0 30px 60px ${alpha(point.mainColor, 0.3)}`,
//                       transform: 'translateY(-15px)',
//                       '& .point-icon': {
//                         transform: 'scale(1.2) rotate(5deg)',
//                         filter: `drop-shadow(0 0 20px ${point.mainColor})`
//                       },
//                       '& .point-title': {
//                         background: point.gradient,
//                         backgroundClip: 'text',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                       }
//                     },
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       height: '5px',
//                       background: point.gradient,
//                       opacity: hoveredIndex === index ? 1 : 0.6,
//                       transition: 'opacity 0.3s ease'
//                     }
//                   }}
//                 >
//                   {/* Animated Grid Pattern */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
//                       opacity: 0.3,
//                       zIndex: 0
//                     }}
//                   />

//                   <CardContent sx={{ 
//                     p: 4, 
//                     position: 'relative', 
//                     zIndex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     {/* Icon Container */}
//                     <Box
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         borderRadius: '50%',
//                         background: point.gradient,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         boxShadow: `0 10px 30px ${alpha(point.mainColor, 0.4)}`,
//                         '&::after': {
//                           content: '""',
//                           position: 'absolute',
//                           width: 70,
//                           height: 70,
//                           borderRadius: '50%',
//                           background: '#121218',
//                           zIndex: 1
//                         }
//                       }}
//                     >
//                       <Box
//                         className="point-icon"
//                         sx={{
//                           color: '#FFFFFF',
//                           zIndex: 2,
//                           position: 'relative',
//                           transition: 'all 0.3s ease',
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       className="point-title"
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 700,
//                         color: '#FFFFFF',
//                         transition: 'all 0.3s ease',
//                         fontSize: '1.3rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.7,
//                         color: '#A0A0A0',
//                         fontSize: '0.95rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>

//                     {/* Animated Checkmark */}
//                     <Box
//                       sx={{
//                         mt: 3,
//                         width: 40,
//                         height: 40,
//                         borderRadius: '50%',
//                         background: point.gradient,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         opacity: hoveredIndex === index ? 1 : 0,
//                         transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.5)',
//                         transition: 'all 0.3s ease',
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           color: '#FFFFFF',
//                           fontWeight: 'bold',
//                           fontSize: '1.2rem',
//                         }}
//                       >
//                         ✓
//                       </Typography>
//                     </Box>
//                   </CardContent>

//                   {/* Corner Decoration */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: 0,
//                       right: 0,
//                       width: 40,
//                       height: 40,
//                       borderBottom: '2px solid',
//                       borderRight: '2px solid',
//                       borderColor: alpha(point.mainColor, 0.3),
//                       borderBottomRightRadius: 3,
//                       opacity: 0.5
//                     }}
//                   />
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Bottom Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8 }}
//         >
//           <Box
//             sx={{
//               mt: 10,
//               p: 4,
//               borderRadius: 3,
//               background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//               backdropFilter: 'blur(10px)',
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: '#FFFFFF',
//                 mb: 2,
//                 fontWeight: 600,
//               }}
//             >
//               Powered by Advanced AI Technology
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: '#A0A0A0',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               Our solutions leverage state-of-the-art machine learning algorithms, neural networks, and 
//               natural language processing to deliver exceptional results.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#FFFFFF',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Why Choose Our AI Solutions
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
//               Experience the difference with our cutting-edge AI technology and expert implementation
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'Enterprise-Grade Security',
//               description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//               icon: <SecurityIcon sx={{ fontSize: 32 }} />,
//               color: '#8A2BE2',
//             },
//             {
//               title: 'Scalable AI Architecture',
//               description: 'AI systems designed to grow intelligently with your business needs.',
//               icon: <ScaleIcon sx={{ fontSize: 32 }} />,
//               color: '#FF2D55',
//             },
//             {
//               title: 'Transparent AI Pricing',
//               description: 'Clear, predictable pricing with performance-based ROI metrics.',
//               icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
//               color: '#9370DB',
//             },
//             {
//               title: '24/7 AI Expert Support',
//               description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//               icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
//               color: '#8A2BE2',
//             },
//             {
//               title: 'Proven AI Track Record',
//               description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//               icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
//               color: '#FF2D55',
//             },
//             {
//               title: 'Continuous AI Innovation',
//               description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//               icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
//               color: '#9370DB',
//             },
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(255, 255, 255, 0.05)',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: point.color,
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '50%',
//                         bgcolor: point.color,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           color: '#FFFFFF',
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#A0A0A0',
//                         fontSize: '0.9rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#000000',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#FFFFFF',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Why Choose Our AI Solutions
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
//               Experience the difference with our cutting-edge AI technology and expert implementation
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'Enterprise-Grade Security',
//               description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//               icon: <SecurityIcon sx={{ fontSize: 32 }} />,
//               color: '#0A84FF', // Blue
//             },
//             {
//               title: 'Scalable AI Architecture',
//               description: 'AI systems designed to grow intelligently with your business needs.',
//               icon: <ScaleIcon sx={{ fontSize: 32 }} />,
//               color: '#30D158', // Green
//             },
//             {
//               title: 'Transparent AI Pricing',
//               description: 'Clear, predictable pricing with performance-based ROI metrics.',
//               icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
//               color: '#FF9F0A', // Peach/Orange
//             },
//             {
//               title: '24/7 AI Expert Support',
//               description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//               icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
//               color: '#5E5CE6', // Indigo
//             },
//             {
//               title: 'Proven AI Track Record',
//               description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//               icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
//               color: '#FF375F', // Pink/Red
//             },
//             {
//               title: 'Continuous AI Innovation',
//               description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//               icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
//               color: '#64D2FF', // Light Blue
//             },
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(255, 255, 255, 0.03)',
//                     border: '1px solid rgba(255, 255, 255, 0.08)',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: point.color,
//                       transform: 'translateY(-4px)',
//                       boxShadow: `0 10px 20px rgba(0, 0, 0, 0.3)`,
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '50%',
//                         bgcolor: 'rgba(255, 255, 255, 0.05)',
//                         border: `2px solid ${point.color}`,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           bgcolor: point.color,
//                           transform: 'scale(1.05)',
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           color: point.color,
//                           transition: 'all 0.3s ease',
//                           '.MuiCard-root:hover &': {
//                             color: '#000000',
//                           },
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#A0A0A0',
//                         fontSize: '0.9rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;



// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       background: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#FFFFFF',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 textShadow: '0 2px 10px rgba(0,0,0,0.5)',
//               }}
//             >
//               Why Choose Our AI Solutions
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#FFFFFF',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Experience the difference with our cutting-edge AI technology and expert implementation
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'Enterprise-Grade Security',
//               description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//               icon: <SecurityIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Scalable AI Architecture',
//               description: 'AI systems designed to grow intelligently with your business needs.',
//               icon: <ScaleIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Transparent AI Pricing',
//               description: 'Clear, predictable pricing with performance-based ROI metrics.',
//               icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: '24/7 AI Expert Support',
//               description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//               icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Proven AI Track Record',
//               description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//               icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Continuous AI Innovation',
//               description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//               icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
//             },
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(0, 0, 0, 0.7)',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     backdropFilter: 'blur(10px)',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '50%',
//                         bgcolor: '#fa8072',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           bgcolor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           color: '#FFFFFF',
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#FFFFFF',
//                         opacity: 0.8,
//                         fontSize: '0.9rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: '#000000',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#ffffff',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Why Choose Our AI Solutions
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
//               Experience the difference with our cutting-edge AI technology and expert implementation
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'Enterprise-Grade Security',
//               description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//               icon: <SecurityIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Scalable AI Architecture',
//               description: 'AI systems designed to grow intelligently with your business needs.',
//               icon: <ScaleIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Transparent AI Pricing',
//               description: 'Clear, predictable pricing with performance-based ROI metrics.',
//               icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: '24/7 AI Expert Support',
//               description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//               icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Proven AI Track Record',
//               description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//               icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Continuous AI Innovation',
//               description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//               icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
//             },
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: '1px solid #333333',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '50%',
//                         backgroundColor: '#fa8072',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           color: '#ffffff',
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#ffffff',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#ffffff',
//                         opacity: 0.9,
//                         fontSize: '0.9rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SecurityIcon from '@mui/icons-material/Security';
// import ScaleIcon from '@mui/icons-material/Scale';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// const WhyChooseUsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#ffffff',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               Why Choose Our AI Solutions
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
//               Experience the difference with our cutting-edge AI technology and expert implementation
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'Enterprise-Grade Security',
//               description: 'Bank-level security protocols and compliance standards for all AI solutions.',
//               icon: <SecurityIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Scalable AI Architecture',
//               description: 'AI systems designed to grow intelligently with your business needs.',
//               icon: <ScaleIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Transparent AI Pricing',
//               description: 'Clear, predictable pricing with performance-based ROI metrics.',
//               icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: '24/7 AI Expert Support',
//               description: 'Round-the-clock support from specialized AI engineers and data scientists.',
//               icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Proven AI Track Record',
//               description: 'Successfully implemented AI solutions for Fortune 500 companies.',
//               icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
//             },
//             {
//               title: 'Continuous AI Innovation',
//               description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
//               icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
//             },
//           ].map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: '1px solid #333333',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     height: '100%'
//                   }}>
//                     <Box
//                       sx={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: '50%',
//                         backgroundColor: '#fa8072',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           color: '#ffffff',
//                         }}
//                       >
//                         {point.icon}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#ffffff',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {point.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#ffffff',
//                         opacity: 0.9,
//                         fontSize: '0.9rem',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {point.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;


import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SecurityIcon from '@mui/icons-material/Security';
import ScaleIcon from '@mui/icons-material/Scale';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Color palette
  const primaryColor = '#fa8072'; // Telemagenta
  const secondaryColor = '#fa8072'; // Salmon
  const accentColors = [primaryColor, secondaryColor];

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 8, md: 12 }, 
      backgroundColor: 'transparent',
    }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#ffffff',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Why Choose Our AI Solutions
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
              Experience the difference with our cutting-edge AI technology and expert implementation
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              title: 'Enterprise-Grade Security',
              description: 'Bank-level security protocols and compliance standards for all AI solutions.',
              icon: <SecurityIcon sx={{ fontSize: 32 }} />,
            },
            {
              title: 'Scalable AI Architecture',
              description: 'AI systems designed to grow intelligently with your business needs.',
              icon: <ScaleIcon sx={{ fontSize: 32 }} />,
            },
            {
              title: 'Transparent AI Pricing',
              description: 'Clear, predictable pricing with performance-based ROI metrics.',
              icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
            },
            {
              title: '24/7 AI Expert Support',
              description: 'Round-the-clock support from specialized AI engineers and data scientists.',
              icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
            },
            {
              title: 'Proven AI Track Record',
              description: 'Successfully implemented AI solutions for Fortune 500 companies.',
              icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
            },
            {
              title: 'Continuous AI Innovation',
              description: 'Stay ahead with cutting-edge AI research and proprietary algorithms.',
              icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
            },
          ].map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={point.title}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
              >
                <Card
                  sx={{
                    backgroundColor: '#111111',
                    border: '1px solid #333333',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: accentColors[index % 2],
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px ${accentColors[index % 2]}33`,
                    },
                  }}
                >
                  <CardContent sx={{ 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%'
                  }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: accentColors[index % 2],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: index % 2 === 0 ? '#d94b8a' : '#fb9488',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#ffffff',
                        }}
                      >
                        {point.icon}
                      </Box>
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: accentColors[index % 2],
                        fontSize: '1.1rem',
                      }}
                    >
                      {point.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        color: '#ffffff',
                        opacity: 0.9,
                        fontSize: '0.9rem',
                        flexGrow: 1,
                      }}
                    >
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;