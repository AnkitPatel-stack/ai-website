// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Link } from 'react-router-dom';

// const ServicesSection = () => {
//   const [content] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions designed for practical business applications',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//         icon: '🎯',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for specific use cases.',
//         icon: '🤖',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis and language understanding.',
//         icon: '💬',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis for automation and insights.',
//         icon: '👁️',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into existing systems.',
//         icon: '🔗',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for teams.',
//         icon: '🎓',
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
//               {content.services_title}
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
//               {content.services_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.services_list.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={service.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
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
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 2,
//                         fontSize: '3rem',
//                         lineHeight: 1,
//                       }}
//                     >
//                       {service.icon}
//                     </Typography>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {service.description}
//                     </Typography>

//                     <Button
//                       component={Link}
//                       to="/services"
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: '#00FF88',
//                         fontWeight: 600,
//                         '&:hover': {
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       Learn More
//                     </Button>
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

// export default ServicesSection;


// // src/sections/ServicesSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const [content] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions designed for practical business applications',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//         icon: '🎯',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for specific use cases.',
//         icon: '🤖',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis and language understanding.',
//         icon: '💬',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis for automation and insights.',
//         icon: '👁️',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into existing systems.',
//         icon: '🔗',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for teams.',
//         icon: '🎓',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0A0F' }}>
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
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               {content.services_title}
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
//               {content.services_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.services_list.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={service.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '1px solid',
//                     borderColor: '#333',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
//                       transform: 'translateY(-8px)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 2,
//                         fontSize: '3rem',
//                         lineHeight: 1,
//                       }}
//                     >
//                       {service.icon}
//                     </Typography>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                         color: '#A0A0A0',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>

//                     <Button
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       onClick={handleLearnMore}
//                       sx={{
//                         color: '#00FF88',
//                         fontWeight: 600,
//                         '&:hover': {
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 8 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1.1rem',
//               fontWeight: 600,
//               bgcolor: '#00FF88',
//               color: '#121218',
//               '&:hover': {
//                 bgcolor: '#00CC6D',
//                 transform: 'translateY(-2px)',
//                 boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//               },
//             }}
//           >
//             View All Services
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;


// // src/sections/ServicesSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Chip,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const [content] = useState({
//     services_title: 'Our AI-Powered Services',
//     services_subtitle: 'Transform your business with cutting-edge artificial intelligence solutions tailored to your needs',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//         icon: <StrategyIcon />,
//         color: '#00FF88',
//         features: ['AI Roadmapping', 'Business Analysis', 'ROI Assessment'],
//         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for specific use cases.',
//         icon: <MLIcon />,
//         color: '#8A2BE2',
//         features: ['Predictive Models', 'Deep Learning', 'Model Deployment'],
//         image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis and language understanding.',
//         icon: <NLPIcon />,
//         color: '#00BFFF',
//         features: ['Chatbots', 'Sentiment Analysis', 'Text Classification'],
//         image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis for automation and insights.',
//         icon: <VisionIcon />,
//         color: '#FF6B6B',
//         features: ['Object Detection', 'Image Recognition', 'Video Analytics'],
//         image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into existing systems.',
//         icon: <IntegrationIcon />,
//         color: '#FFD166',
//         features: ['API Development', 'System Integration', 'Cloud Deployment'],
//         image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for teams.',
//         icon: <SupportIcon />,
//         color: '#06D6A0',
//         features: ['Team Training', 'Technical Support', 'Knowledge Transfer'],
//         image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

//   return (
//     <Box ref={ref} sx={{
//       py: { xs: 8, md: 12 },
//       bgcolor: '#0A0A0F',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>

//       {/* Animated Background Elements */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '10%',
//           right: '5%',
//           width: 300,
//           height: 300,
//           background: 'radial-gradient(circle, rgba(0, 255, 136, 0.05) 0%, transparent 70%)',
//           animation: 'float 20s infinite ease-in-out',
//           '@keyframes float': {
//             '0%, 100%': { transform: 'translate(0, 0)' },
//             '50%': { transform: 'translate(20px, 20px)' }
//           }
//         }}
//       />

//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '20%',
//           left: '5%',
//           width: 200,
//           height: 200,
//           background: 'radial-gradient(circle, rgba(138, 43, 226, 0.05) 0%, transparent 70%)',
//           animation: 'float 15s infinite ease-in-out reverse',
//         }}
//       />

//       {/* Neural Network Pattern */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M100 0l-50 50H0v100h50l50 50 50-50h50V50h-50L100 0zM50 100l-25-25v50h25l25 25v-50L50 100zm100 0l25-25v50h-25l-25 25v-50l25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ textAlign: 'center', mb: 10 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Chip
//               label="AI Solutions"
//               sx={{
//                 mb: 3,
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//                 color: '#00FF88',
//                 fontWeight: 600,
//                 fontSize: '0.9rem',
//                 px: 2,
//                 py: 1
//               }}
//             />

//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#FFFFFF',
//                 fontWeight: 800,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 lineHeight: 1.2,
//                 background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               {content.services_title}
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '1rem', md: '1.25rem' },
//                 lineHeight: 1.7,
//               }}
//             >
//               {content.services_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.services_list.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={service.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 onHoverStart={() => setHoveredCard(index)}
//                 onHoverEnd={() => setHoveredCard(null)}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '2px solid',
//                     borderColor: '#1E1E2D',
//                     height: '100%',
//                     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     minHeight: 450,
//                     '&:hover': {
//                       borderColor: service.color,
//                       boxShadow: `0 30px 60px ${service.color}40`,
//                       transform: 'translateY(-10px) scale(1.02)',
//                     },
//                   }}
//                 >
//                   {/* Image Background */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       height: 180,
//                       backgroundImage: `url(${service.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       filter: 'brightness(0.5)',
//                       transition: 'filter 0.3s ease',
//                       '&:hover': {
//                         filter: 'brightness(0.7)',
//                       }
//                     }}
//                   />

//                   {/* Gradient Overlay */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       height: 180,
//                       background: `linear-gradient(to bottom, transparent, ${service.color}20, #121218)`,
//                     }}
//                   />

//                   <CardContent sx={{
//                     p: 4,
//                     position: 'relative',
//                     zIndex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: '100%'
//                   }}>
//                     {/* Icon with Animation */}
//                     <motion.div
//                       animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Box
//                         sx={{
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           width: 70,
//                           height: 70,
//                           borderRadius: '20%',
//                           bgcolor: service.color,
//                           mb: 3,
//                           position: 'relative',
//                           '&:after': {
//                             content: '""',
//                             position: 'absolute',
//                             top: -5,
//                             left: -5,
//                             right: -5,
//                             bottom: -5,
//                             borderRadius: '25%',
//                             border: `2px solid ${service.color}`,
//                             opacity: 0.3,
//                             animation: 'pulse 2s infinite',
//                             '@keyframes pulse': {
//                               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//                               '50%': { opacity: 0.6, transform: 'scale(1.1)' }
//                             }
//                           }
//                         }}
//                       >
//                         {React.cloneElement(service.icon, {
//                           sx: {
//                             fontSize: 32,
//                             color: '#121218',
//                             filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
//                           }
//                         })}
//                       </Box>
//                     </motion.div>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 700,
//                         color: '#FFFFFF',
//                         fontSize: '1.5rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                         color: '#A0A0A0',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {service.description}
//                     </Typography>

//                     {/* Features List */}
//                     <Box sx={{ mb: 3 }}>
//                       {service.features.map((feature, idx) => (
//                         <Chip
//                           key={feature}
//                           label={feature}
//                           size="small"
//                           sx={{
//                             mr: 1,
//                             mb: 1,
//                             bgcolor: 'rgba(255, 255, 255, 0.05)',
//                             color: '#FFFFFF',
//                             border: '1px solid',
//                             borderColor: 'rgba(255, 255, 255, 0.1)',
//                             fontSize: '0.75rem',
//                             '&:hover': {
//                               bgcolor: service.color,
//                               color: '#121218',
//                             }
//                           }}
//                         />
//                       ))}
//                     </Box>

//                     <Button
//                       variant="outlined"
//                       endIcon={<ArrowForwardIcon />}
//                       onClick={handleLearnMore}
//                       sx={{
//                         mt: 'auto',
//                         borderWidth: 2,
//                         borderColor: service.color,
//                         color: service.color,
//                         fontWeight: 600,
//                         '&:hover': {
//                           bgcolor: service.color,
//                           color: '#121218',
//                           borderColor: service.color,
//                           transform: 'translateX(5px)',
//                           boxShadow: `0 10px 20px ${service.color}40`,
//                         },
//                       }}
//                     >
//                       Explore Service
//                     </Button>
//                   </CardContent>

//                   {/* Hover Effect Glow */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: `radial-gradient(circle at 50% 0%, ${service.color}20, transparent 70%)`,
//                       opacity: hoveredCard === index ? 1 : 0,
//                       transition: 'opacity 0.3s ease',
//                       pointerEvents: 'none',
//                     }}
//                   />
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 10 }}>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleLearnMore}
//               sx={{
//                 px: 8,
//                 py: 2,
//                 fontSize: '1.1rem',
//                 fontWeight: 700,
//                 bgcolor: '#00FF88',
//                 color: '#121218',
//                 borderRadius: 50,
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: '-100%',
//                   width: '100%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
//                   transition: 'left 0.7s',
//                 },
//                 '&:hover': {
//                   bgcolor: '#00CC6D',
//                   transform: 'translateY(-3px)',
//                   boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
//                   '&:before': {
//                     left: '100%'
//                   }
//                 },
//               }}
//             >
//               Discover All AI Solutions
//             </Button>
//           </motion.div>

//           <Typography
//             variant="body2"
//             sx={{
//               mt: 3,
//               color: '#666',
//               maxWidth: 500,
//               mx: 'auto',
//             }}
//           >
//             Each solution backed by cutting-edge AI technology and expert implementation
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

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
//                 lineHeight: 1.2,
//               }}
//             >
//               Our AI-Powered Services
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'AI Strategy & Consulting',
//               description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//               icon: <StrategyIcon />,
//               color: '#8A2BE2',
//             },
//             {
//               title: 'Machine Learning Development',
//               description: 'Custom ML models built and deployed for specific use cases.',
//               icon: <MLIcon />,
//               color: '#FF2D55',
//             },
//             {
//               title: 'Natural Language Processing',
//               description: 'Advanced NLP solutions for text analysis and language understanding.',
//               icon: <NLPIcon />,
//               color: '#9370DB',
//             },
//             {
//               title: 'Computer Vision',
//               description: 'Image and video analysis for automation and insights.',
//               icon: <VisionIcon />,
//               color: '#8A2BE2',
//             },
//             {
//               title: 'AI Integration',
//               description: 'Seamlessly integrate AI capabilities into existing systems.',
//               icon: <IntegrationIcon />,
//               color: '#FF2D55',
//             },
//             {
//               title: 'AI Training & Support',
//               description: 'Comprehensive training and ongoing support for teams.',
//               icon: <SupportIcon />,
//               color: '#9370DB',
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(255, 255, 255, 0.05)',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: service.color,
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         height: 60,
//                         borderRadius: '15%',
//                         bgcolor: service.color,
//                         mb: 3,
//                       }}
//                     >
//                       {React.cloneElement(service.icon, {
//                         sx: {
//                           fontSize: 28,
//                           color: '#FFFFFF',
//                         }
//                       })}
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                         fontSize: '1.2rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#A0A0A0',
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               bgcolor: '#8A2BE2',
//               color: '#FFFFFF',
//               '&:hover': {
//                 bgcolor: '#7A1BD2',
//               },
//             }}
//           >
//             Discover All AI Solutions
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

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
//                 lineHeight: 1.2,
//                 textShadow: '0 2px 10px rgba(0,0,0,0.5)',
//               }}
//             >
//               Our AI-Powered Services
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
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'AI Strategy & Consulting',
//               description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//               icon: <StrategyIcon />,
//             },
//             {
//               title: 'Machine Learning Development',
//               description: 'Custom ML models built and deployed for specific use cases.',
//               icon: <MLIcon />,
//             },
//             {
//               title: 'Natural Language Processing',
//               description: 'Advanced NLP solutions for text analysis and language understanding.',
//               icon: <NLPIcon />,
//             },
//             {
//               title: 'Computer Vision',
//               description: 'Image and video analysis for automation and insights.',
//               icon: <VisionIcon />,
//             },
//             {
//               title: 'AI Integration',
//               description: 'Seamlessly integrate AI capabilities into existing systems.',
//               icon: <IntegrationIcon />,
//             },
//             {
//               title: 'AI Training & Support',
//               description: 'Comprehensive training and ongoing support for teams.',
//               icon: <SupportIcon />,
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
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
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         height: 60,
//                         borderRadius: '15%',
//                         bgcolor: '#fa8072',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           bgcolor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       {React.cloneElement(service.icon, {
//                         sx: {
//                           fontSize: 28,
//                           color: '#FFFFFF',
//                         }
//                       })}
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                         fontSize: '1.2rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#FFFFFF',
//                         opacity: 0.8,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               bgcolor: '#fa8072',
//               color: '#FFFFFF',
//               '&:hover': {
//                 bgcolor: '#ff1dce',
//                 boxShadow: '0 0 20px rgba(255, 0, 144, 0.4)',
//               },
//             }}
//           >
//             Discover All AI Solutions
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

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
//                 lineHeight: 1.2,
//               }}
//             >
//               Our AI-Powered Services
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
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'AI Strategy & Consulting',
//               description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//               icon: <StrategyIcon />,
//             },
//             {
//               title: 'Machine Learning Development',
//               description: 'Custom ML models built and deployed for specific use cases.',
//               icon: <MLIcon />,
//             },
//             {
//               title: 'Natural Language Processing',
//               description: 'Advanced NLP solutions for text analysis and language understanding.',
//               icon: <NLPIcon />,
//             },
//             {
//               title: 'Computer Vision',
//               description: 'Image and video analysis for automation and insights.',
//               icon: <VisionIcon />,
//             },
//             {
//               title: 'AI Integration',
//               description: 'Seamlessly integrate AI capabilities into existing systems.',
//               icon: <IntegrationIcon />,
//             },
//             {
//               title: 'AI Training & Support',
//               description: 'Comprehensive training and ongoing support for teams.',
//               icon: <SupportIcon />,
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
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
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         height: 60,
//                         borderRadius: '15%',
//                         backgroundColor: '#fa8072',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       {React.cloneElement(service.icon, {
//                         sx: {
//                           fontSize: 28,
//                           color: '#ffffff',
//                         }
//                       })}
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#ffffff',
//                         fontSize: '1.2rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#ffffff',
//                         opacity: 0.9,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               backgroundColor: '#fa8072',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//               },
//             }}
//           >
//             Discover All AI Solutions
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

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
//                 lineHeight: 1.2,
//               }}
//             >
//               Our AI-Powered Services
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
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'AI Strategy & Consulting',
//               description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//               icon: <StrategyIcon />,
//             },
//             {
//               title: 'Machine Learning Development',
//               description: 'Custom ML models built and deployed for specific use cases.',
//               icon: <MLIcon />,
//             },
//             {
//               title: 'Natural Language Processing',
//               description: 'Advanced NLP solutions for text analysis and language understanding.',
//               icon: <NLPIcon />,
//             },
//             {
//               title: 'Computer Vision',
//               description: 'Image and video analysis for automation and insights.',
//               icon: <VisionIcon />,
//             },
//             {
//               title: 'AI Integration',
//               description: 'Seamlessly integrate AI capabilities into existing systems.',
//               icon: <IntegrationIcon />,
//             },
//             {
//               title: 'AI Training & Support',
//               description: 'Comprehensive training and ongoing support for teams.',
//               icon: <SupportIcon />,
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
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
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         height: 60,
//                         borderRadius: '15%',
//                         backgroundColor: '#fa8072',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: '#ff1dce',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       {React.cloneElement(service.icon, {
//                         sx: {
//                           fontSize: 28,
//                           color: '#ffffff',
//                         }
//                       })}
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: '#ffffff',
//                         fontSize: '1.2rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#ffffff',
//                         opacity: 0.9,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               backgroundColor: '#fa8072',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//               },
//             }}
//           >
//             Discover All AI Solutions
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();
//   const primaryColor = '#fa8072'; // Telemagenta
//   const secondaryColor = '#fa8072'; // Salmon

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

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
//                 lineHeight: 1.2,
//               }}
//             >
//               Our AI-Powered Services
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
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={3}>
//           {[
//             {
//               title: 'AI Strategy & Consulting',
//               description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//               icon: <StrategyIcon />,
//               color: primaryColor,
//             },
//             {
//               title: 'Machine Learning Development',
//               description: 'Custom ML models built and deployed for specific use cases.',
//               icon: <MLIcon />,
//               color: secondaryColor,
//             },
//             {
//               title: 'Natural Language Processing',
//               description: 'Advanced NLP solutions for text analysis and language understanding.',
//               icon: <NLPIcon />,
//               color: primaryColor,
//             },
//             {
//               title: 'Computer Vision',
//               description: 'Image and video analysis for automation and insights.',
//               icon: <VisionIcon />,
//               color: secondaryColor,
//             },
//             {
//               title: 'AI Integration',
//               description: 'Seamlessly integrate AI capabilities into existing systems.',
//               icon: <IntegrationIcon />,
//               color: primaryColor,
//             },
//             {
//               title: 'AI Training & Support',
//               description: 'Comprehensive training and ongoing support for teams.',
//               icon: <SupportIcon />,
//               color: secondaryColor,
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: '1px solid #333333',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: service.color,
//                       transform: 'translateY(-5px)',
//                       boxShadow: `0 8px 25px ${service.color}33`,
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: 60,
//                         height: 60,
//                         borderRadius: '15%',
//                         backgroundColor: service.color,
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           backgroundColor: service.color === primaryColor ? '#d94b8a' : '#fb9488',
//                           transform: 'scale(1.1)',
//                         },
//                       }}
//                     >
//                       {React.cloneElement(service.icon, {
//                         sx: {
//                           fontSize: 28,
//                           color: '#ffffff',
//                         }
//                       })}
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: service.color,
//                         fontSize: '1.2rem',
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: '#ffffff',
//                         opacity: 0.9,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleLearnMore}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               backgroundColor: primaryColor,
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#d94b8a',
//                 transform: 'translateY(-2px)',
//                 boxShadow: `0 8px 25px ${primaryColor}33`,
//               },
//               transition: 'all 0.3s ease',
//             }}
//           >
//             Discover All AI Solutions
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();
  
//   // Color scheme
//   const telemagenta = '#cf3476';
//   const salmon = '#fa8072';
//   const telemagentaHover = '#d94b8a';
//   const salmonHover = '#fb9488';

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9,
//       rotateY: 45 
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       rotateY: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//         mass: 0.8
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 10
//       }
//     }
//   };

//   const services = [
//     {
//       title: 'AI Strategy & Consulting',
//       description: 'Develop comprehensive AI roadmaps aligned with your business objectives to drive innovation and competitive advantage.',
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, #8a2387)`,
//       iconNumber: '01'
//     },
//     {
//       title: 'Machine Learning Development',
//       description: 'Build and deploy custom ML models specifically engineered for your unique use cases and business requirements.',
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, #ff7e5f)`,
//       iconNumber: '02'
//     },
//     {
//       title: 'Natural Language Processing',
//       description: 'Implement advanced NLP solutions for intelligent text analysis, sentiment detection, and automated language understanding.',
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, #8a2387)`,
//       iconNumber: '03'
//     },
//     {
//       title: 'Computer Vision',
//       description: 'Leverage image and video analysis for automation, quality control, and actionable business insights.',
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, #ff7e5f)`,
//       iconNumber: '04'
//     },
//     {
//       title: 'AI Integration',
//       description: 'Seamlessly integrate AI capabilities into your existing systems with minimal disruption and maximum efficiency.',
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, #8a2387)`,
//       iconNumber: '05'
//     },
//     {
//       title: 'AI Training & Support',
//       description: 'Provide comprehensive training and ongoing support to empower your teams with AI capabilities.',
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, #ff7e5f)`,
//       iconNumber: '06'
//     },
//   ];

//   return (
//     <Box ref={ref} sx={{
//       py: { xs: 8, md: 12 },
//       backgroundColor: 'transparent',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Background decorative elements */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '10%',
//           width: '300px',
//           height: '300px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${telemagenta}15 0%, transparent 70%)`,
//           filter: 'blur(60px)',
//           zIndex: 0,
//           animation: 'pulse 8s ease-in-out infinite',
//           '@keyframes pulse': {
//             '0%, 100%': {
//               opacity: 0.3,
//               transform: 'translateY(0) scale(1)',
//             },
//             '50%': {
//               opacity: 0.6,
//               transform: 'translateY(-20px) scale(1.1)',
//             },
//           },
//         }}
//       />
      
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '20%',
//           right: '10%',
//           width: '250px',
//           height: '250px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${salmon}15 0%, transparent 70%)`,
//           filter: 'blur(50px)',
//           zIndex: 0,
//           animation: 'pulse 10s ease-in-out infinite reverse',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <motion.div variants={titleVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   color: telemagenta,
//                   fontWeight: 800,
//                   fontSize: { 
//                     xs: '2.2rem', 
//                     sm: '2.8rem', 
//                     md: '3.5rem' 
//                   },
//                   lineHeight: 1.1,
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.5px',
//                   position: 'relative',
//                   display: 'inline-block',
//                   '&::after': {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: '-15px',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     width: '100px',
//                     height: '4px',
//                     background: `linear-gradient(90deg, ${telemagenta}, ${salmon})`,
//                     borderRadius: '2px',
//                   }
//                 }}
//               >
//                 AI-Powered Services
//               </Typography>
//             </motion.div>

//             <motion.div
//               variants={titleVariants}
//               transition={{ delay: 0.1 }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: '#ffffff',
//                   opacity: 0.9,
//                   maxWidth: 700,
//                   mx: 'auto',
//                   fontSize: { 
//                     xs: '1rem', 
//                     sm: '1.1rem', 
//                     md: '1.2rem' 
//                   },
//                   lineHeight: 1.7,
//                   fontWeight: 400,
//                 }}
//               >
//                 Transform your business with cutting-edge artificial intelligence solutions 
//                 specifically designed to meet your unique challenges and objectives
//               </Typography>
//             </motion.div>

//             {/* Animated decorative line */}
//             <motion.div
//               initial={{ width: 0 }}
//               animate={inView ? { width: '150px' } : {}}
//               transition={{ delay: 0.5, duration: 1 }}
//               style={{
//                 height: '2px',
//                 background: `linear-gradient(90deg, ${telemagenta}, ${salmon}, ${telemagenta})`,
//                 margin: '0 auto',
//                 borderRadius: '1px',
//               }}
//             />
//           </Box>

//           <Grid container spacing={4}>
//             {services.map((service, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <motion.div
//                   variants={itemVariants}
//                   whileHover={{ 
//                     y: -15,
//                     transition: { type: "spring", stiffness: 300 }
//                   }}
//                   style={{ height: '100%' }}
//                 >
//                   <Card
//                     sx={{
//                       backgroundColor: '#111111',
//                       background: 'linear-gradient(145deg, #0a0a0a, #111111)',
//                       border: `1px solid ${service.color}20`,
//                       height: '100%',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       cursor: 'pointer',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         height: '100%',
//                         background: service.gradient,
//                         opacity: 0,
//                         transition: 'opacity 0.4s ease',
//                         zIndex: 0,
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
//                         transition: 'left 0.7s ease',
//                       },
//                       '&:hover': {
//                         borderColor: service.color,
//                         boxShadow: `0 20px 40px ${service.color}25, 0 0 30px ${service.color}15`,
//                         transform: 'translateY(-10px)',
//                         '&::before': {
//                           opacity: 0.05,
//                         },
//                         '&::after': {
//                           left: '100%',
//                         },
//                         '& .service-number': {
//                           opacity: 1,
//                           transform: 'scale(1.2)',
//                         },
//                         '& .service-title': {
//                           color: service.color,
//                         }
//                       },
//                       transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//                     }}
//                   >
//                     <CardContent sx={{ 
//                       p: { xs: 3, md: 4 },
//                       position: 'relative',
//                       zIndex: 1,
//                       height: '100%',
//                       display: 'flex',
//                       flexDirection: 'column'
//                     }}>
//                       {/* Service Number */}
//                       <motion.div 
//                         className="service-number"
//                         initial={{ opacity: 0.3, scale: 0.8 }}
//                         animate={inView ? { opacity: 0.3, scale: 1 } : {}}
//                         transition={{ delay: index * 0.1 }}
//                         style={{
//                           position: 'absolute',
//                           top: 20,
//                           right: 20,
//                           fontSize: '4rem',
//                           fontWeight: 900,
//                           color: service.color,
//                           opacity: 0.3,
//                           lineHeight: 1,
//                           transition: 'all 0.3s ease',
//                         }}
//                       >
//                         {service.iconNumber}
//                       </motion.div>

//                       {/* Service Title */}
//                       <motion.div
//                         className="service-title"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: index * 0.1 + 0.2 }}
//                       >
//                         <Typography
//                           variant="h5"
//                           sx={{
//                             mb: 3,
//                             fontWeight: 700,
//                             color: '#ffffff',
//                             fontSize: { xs: '1.3rem', md: '1.5rem' },
//                             minHeight: '72px',
//                             display: 'flex',
//                             alignItems: 'flex-start',
//                             position: 'relative',
//                             '&::before': {
//                               content: '""',
//                               position: 'absolute',
//                               bottom: '-10px',
//                               left: 0,
//                               width: '40px',
//                               height: '3px',
//                               background: service.color,
//                               borderRadius: '1.5px',
//                             }
//                           }}
//                         >
//                           {service.title}
//                         </Typography>
//                       </motion.div>

//                       {/* Service Description */}
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={inView ? { opacity: 1 } : {}}
//                         transition={{ delay: index * 0.1 + 0.3 }}
//                         style={{ flexGrow: 1 }}
//                       >
//                         <Typography
//                           variant="body1"
//                           sx={{
//                             lineHeight: 1.7,
//                             color: '#cccccc',
//                             fontSize: { xs: '0.9rem', md: '1rem' },
//                             mb: 3,
//                             flexGrow: 1,
//                           }}
//                         >
//                           {service.description}
//                         </Typography>
//                       </motion.div>

//                       {/* Learn More Button */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: index * 0.1 + 0.4 }}
//                         style={{ marginTop: 'auto' }}
//                       >
//                         <Button
//                           variant="text"
//                           endIcon={
//                             <motion.div
//                               animate={{ x: [0, 5, 0] }}
//                               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
//                             >
//                               <ArrowForwardIcon />
//                             </motion.div>
//                           }
//                           sx={{
//                             color: service.color,
//                             fontWeight: 600,
//                             fontSize: '0.9rem',
//                             p: 0,
//                             '&:hover': {
//                               color: service.color === telemagenta ? telemagentaHover : salmonHover,
//                               backgroundColor: 'transparent',
//                             }
//                           }}
//                         >
//                           Learn More
//                         </Button>
//                       </motion.div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.8 }}
//             style={{ textAlign: 'center', marginTop: '4rem' }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               onClick={handleLearnMore}
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 fontSize: '1.1rem',
//                 fontWeight: 700,
//                 background: `linear-gradient(135deg, ${telemagenta}, ${salmon})`,
//                 color: '#ffffff',
//                 minWidth: '280px',
//                 borderRadius: '50px',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: '-100%',
//                   width: '100%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
//                   transition: 'left 0.7s ease',
//                 },
//                 '&:hover': {
//                   transform: 'translateY(-3px)',
//                   boxShadow: `0 15px 30px ${telemagenta}40`,
//                   '&::before': {
//                     left: '100%',
//                   }
//                 },
//                 transition: 'all 0.3s ease',
//               }}
//             >
//               Explore All AI Solutions
//               <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.2rem' }} />
//             </Button>
//           </motion.div>
//         </motion.div>
//       </Container>

//       {/* Animated connecting dots */}
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 0
//         }}
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.circle
//             key={i}
//             cx={`${(i * 5 + 10) % 100}%`}
//             cy={`${(i * 7 + 20) % 100}%`}
//             r="2"
//             fill={i % 2 === 0 ? telemagenta : salmon}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={inView ? { opacity: 0.3, scale: 1 } : {}}
//             transition={{ delay: i * 0.05, duration: 0.5 }}
//           />
//         ))}
//       </svg>
//     </Box>
//   );
// };

// export default ServicesSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import StrategyIcon from '@mui/icons-material/BarChart';
// import MLIcon from '@mui/icons-material/DeviceHub';
// import NLPIcon from '@mui/icons-material/Chat';
// import VisionIcon from '@mui/icons-material/Visibility';
// import IntegrationIcon from '@mui/icons-material/Sync';
// import SupportIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();
  
//   // Color scheme
//   const telemagenta = '#cf3476'; // Telemagenta
//   const salmon = '#fa8072'; // Salmon
//   const telemagentaHover = '#d94b8a';
//   const salmonHover = '#fb9488';

//   const handleLearnMore = () => {
//     navigate('/services');
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: -30,
//       scale: 0.9 
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       rotateX: -30,
//       scale: 0.8 
//     },
//     visible: (i) => ({ 
//       opacity: 1, 
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.6
//       }
//     }),
//     hover: {
//       y: -15,
//       scale: 1.05,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 15
//       }
//     }
//   };

//   const iconVariants = {
//     hidden: { 
//       scale: 0,
//       rotate: -180 
//     },
//     visible: { 
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//         delay: 0.3
//       }
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 360,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   const services = [
//     {
//       title: 'AI Strategy & Consulting',
//       description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//       icon: <StrategyIcon />,
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
//     },
//     {
//       title: 'Machine Learning Development',
//       description: 'Custom ML models built and deployed for specific use cases.',
//       icon: <MLIcon />,
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
//     },
//     {
//       title: 'Natural Language Processing',
//       description: 'Advanced NLP solutions for text analysis and language understanding.',
//       icon: <NLPIcon />,
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
//     },
//     {
//       title: 'Computer Vision',
//       description: 'Image and video analysis for automation and insights.',
//       icon: <VisionIcon />,
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
//     },
//     {
//       title: 'AI Integration',
//       description: 'Seamlessly integrate AI capabilities into existing systems.',
//       icon: <IntegrationIcon />,
//       color: telemagenta,
//       gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
//     },
//     {
//       title: 'AI Training & Support',
//       description: 'Comprehensive training and ongoing support for teams.',
//       icon: <SupportIcon />,
//       color: salmon,
//       gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
//     },
//   ];

//   return (
//     <Box ref={ref} sx={{
//       py: { xs: 8, md: 12 },
//       backgroundColor: 'transparent',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Background decorative elements */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '10%',
//           right: '5%',
//           width: '300px',
//           height: '300px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${alpha(telemagenta, 0.1)} 0%, transparent 70%)`,
//           filter: 'blur(60px)',
//           zIndex: 0,
//           animation: 'float 8s ease-in-out infinite',
//           '@keyframes float': {
//             '0%, 100%': {
//               transform: 'translate(0, 0)',
//             },
//             '50%': {
//               transform: 'translate(20px, -20px)',
//             },
//           },
//         }}
//       />
      
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '20%',
//           left: '5%',
//           width: '250px',
//           height: '250px',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${alpha(salmon, 0.1)} 0%, transparent 70%)`,
//           filter: 'blur(50px)',
//           zIndex: 0,
//           animation: 'float 10s ease-in-out infinite reverse',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           style={{ textAlign: 'center', marginBottom: '4rem' }}
//         >
//           <motion.div variants={titleVariants}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: telemagenta,
//                 fontWeight: 800,
//                 fontSize: { 
//                   xs: '2rem', 
//                   sm: '2.5rem', 
//                   md: '3rem' 
//                 },
//                 lineHeight: 1.2,
//                 textShadow: `0 0 20px ${alpha(telemagenta, 0.3)}`,
//                 position: 'relative',
//                 display: 'inline-block',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: '-10px',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   width: '120px',
//                   height: '4px',
//                   background: `linear-gradient(90deg, ${telemagenta}, ${salmon})`,
//                   borderRadius: '2px',
//                 }
//               }}
//             >
//               Our AI-Powered Services
//             </Typography>
//           </motion.div>

//           <motion.div 
//             variants={titleVariants}
//             style={{ maxWidth: '800px', margin: '0 auto' }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 fontSize: { 
//                   xs: '0.9rem', 
//                   sm: '1rem', 
//                   md: '1.1rem' 
//                 },
//                 lineHeight: 1.7,
//               }}
//             >
//               Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
//             </Typography>
//           </motion.div>
//         </motion.div>

//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 custom={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 style={{ height: '100%' }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: `1px solid ${alpha(service.color, 0.2)}`,
//                     height: '100%',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     backdropFilter: 'blur(10px)',
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: service.gradient,
//                       opacity: 0,
//                       transition: 'opacity 0.3s ease',
//                     },
//                     '&:hover': {
//                       borderColor: service.color,
//                       '&::before': {
//                         opacity: 0.05,
//                       },
//                       '& .service-icon': {
//                         background: service.gradient,
//                       },
//                       '& .card-title': {
//                         color: service.color,
//                         textShadow: `0 0 15px ${alpha(service.color, 0.5)}`,
//                       }
//                     },
//                     transition: 'all 0.3s ease',
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     p: { xs: 2.5, sm: 3, md: 4 },
//                     textAlign: 'center',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     position: 'relative',
//                     zIndex: 1
//                   }}>
//                     {/* Icon Container with Background Effect */}
//                     <Box
//                       sx={{
//                         position: 'relative',
//                         mb: 3,
//                         '&::before': {
//                           content: '""',
//                           position: 'absolute',
//                           top: '50%',
//                           left: '50%',
//                           transform: 'translate(-50%, -50%)',
//                           width: '120px',
//                           height: '120px',
//                           borderRadius: '50%',
//                           background: `radial-gradient(circle, ${alpha(service.color, 0.1)} 0%, transparent 70%)`,
//                           filter: 'blur(20px)',
//                           zIndex: 0,
//                         }
//                       }}
//                     >
//                       <motion.div
//                         variants={iconVariants}
//                         initial="hidden"
//                         animate={inView ? "visible" : "hidden"}
//                         whileHover="hover"
//                         className="service-icon"
//                       >
//                         <Box
//                           sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: 80,
//                             height: 80,
//                             borderRadius: '20px',
//                             background: `linear-gradient(145deg, ${alpha(service.color, 0.2)}, ${alpha(service.color, 0.1)})`,
//                             border: `2px solid ${alpha(service.color, 0.3)}`,
//                             position: 'relative',
//                             zIndex: 1,
//                             boxShadow: `0 8px 32px ${alpha(service.color, 0.2)}`,
//                           }}
//                         >
//                           {React.cloneElement(service.icon, {
//                             sx: {
//                               fontSize: 36,
//                               color: service.color,
//                             }
//                           })}
//                         </Box>
//                       </motion.div>
//                     </Box>

//                     {/* Title */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={inView ? { opacity: 1, y: 0 } : {}}
//                       transition={{ delay: 0.5 + index * 0.05 }}
//                     >
//                       <Typography
//                         className="card-title"
//                         variant="h5"
//                         sx={{
//                           mb: 2,
//                           fontWeight: 700,
//                           color: '#ffffff',
//                           fontSize: { 
//                             xs: '1.1rem', 
//                             sm: '1.2rem', 
//                             md: '1.3rem' 
//                           },
//                           transition: 'all 0.3s ease',
//                           minHeight: '3.5rem',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center'
//                         }}
//                       >
//                         {service.title}
//                       </Typography>
//                     </motion.div>

//                     {/* Description */}
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={inView ? { opacity: 1 } : {}}
//                       transition={{ delay: 0.6 + index * 0.05 }}
//                       style={{ flexGrow: 1 }}
//                     >
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           lineHeight: 1.7,
//                           color: '#cccccc',
//                           opacity: 0.9,
//                           fontSize: { 
//                             xs: '0.85rem', 
//                             sm: '0.9rem' 
//                           },
//                           mb: 3,
//                         }}
//                       >
//                         {service.description}
//                       </Typography>
//                     </motion.div>

//                     {/* Hover Indicator */}
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileHover={{ width: '80px' }}
//                       transition={{ duration: 0.3 }}
//                       style={{
//                         height: '3px',
//                         background: `linear-gradient(90deg, ${service.color}, ${service.color === telemagenta ? salmon : telemagenta})`,
//                         borderRadius: '2px',
//                         marginTop: 'auto'
//                       }}
//                     />
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8 }}
//           style={{ textAlign: 'center', marginTop: '4rem' }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               endIcon={
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowForwardIcon />
//                 </motion.div>
//               }
//               onClick={handleLearnMore}
//               sx={{
//                 px: { xs: 4, md: 6 },
//                 py: { xs: 1.25, md: 1.5 },
//                 fontSize: { 
//                   xs: '0.9rem', 
//                   md: '1.1rem' 
//                 },
//                 fontWeight: 700,
//                 background: `linear-gradient(135deg, ${telemagenta}, ${salmon})`,
//                 color: '#ffffff',
//                 borderRadius: '50px',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: '-100%',
//                   width: '100%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
//                   transition: 'left 0.5s',
//                 },
//                 '&:hover': {
//                   background: `linear-gradient(135deg, ${telemagentaHover}, ${salmonHover})`,
//                   transform: 'translateY(-3px)',
//                   boxShadow: `0 15px 30px ${alpha(telemagenta, 0.4)}`,
//                   '&::before': {
//                     left: '100%',
//                   }
//                 },
//                 transition: 'all 0.3s ease',
//               }}
//             >
//               Discover All AI Solutions
//             </Button>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StrategyIcon from '@mui/icons-material/BarChart';
import MLIcon from '@mui/icons-material/DeviceHub';
import NLPIcon from '@mui/icons-material/Chat';
import VisionIcon from '@mui/icons-material/Visibility';
import IntegrationIcon from '@mui/icons-material/Sync';
import SupportIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  
  // Color scheme
  const telemagenta = '#cf3476'; // Telemagenta
  const salmon = '#fa8072'; // Salmon
  const telemagentaHover = '#d94b8a';
  const salmonHover = '#fb9488';

  const handleLearnMore = () => {
    navigate('/services');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.9 
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -30,
      scale: 0.8 
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
      icon: <StrategyIcon />,
      color: telemagenta,
      gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
    },
    {
      title: 'Machine Learning Development',
      description: 'Custom ML models built and deployed for specific use cases.',
      icon: <MLIcon />,
      color: salmon,
      gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding.',
      icon: <NLPIcon />,
      color: telemagenta,
      gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automation and insights.',
      icon: <VisionIcon />,
      color: salmon,
      gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into existing systems.',
      icon: <IntegrationIcon />,
      color: telemagenta,
      gradient: `linear-gradient(135deg, ${telemagenta}, ${alpha(telemagenta, 0.7)})`
    },
    {
      title: 'AI Training & Support',
      description: 'Comprehensive training and ongoing support for teams.',
      icon: <SupportIcon />,
      color: salmon,
      gradient: `linear-gradient(135deg, ${salmon}, ${alpha(salmon, 0.7)})`
    },
  ];

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
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(telemagenta, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translate(0, 0)',
            },
            '50%': {
              transform: 'translate(20px, -20px)',
            },
          },
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(salmon, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          zIndex: 0,
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.div variants={titleVariants}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: telemagenta,
                fontWeight: 800,
                fontSize: { 
                  xs: '2rem', 
                  sm: '2.5rem', 
                  md: '3rem' 
                },
                lineHeight: 1.2,
                textShadow: `0 0 20px ${alpha(telemagenta, 0.3)}`,
                position: 'relative',
                display: 'inline-block',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${telemagenta}, ${salmon})`,
                  borderRadius: '2px',
                }
              }}
            >
              Our AI-Powered Services
            </Typography>
          </motion.div>

          <motion.div 
            variants={titleVariants}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#ffffff',
                opacity: 0.9,
                fontSize: { 
                  xs: '0.9rem', 
                  sm: '1rem', 
                  md: '1.1rem' 
                },
                lineHeight: 1.7,
              }}
            >
              Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
            </Typography>
          </motion.div>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    backgroundColor: '#111111',
                    border: `1px solid ${alpha(service.color, 0.2)}`,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: service.gradient,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      borderColor: service.color,
                      '&::before': {
                        opacity: 0.05,
                      },
                      '& .service-icon': {
                        background: service.gradient,
                      },
                      '& .card-title': {
                        color: service.color,
                        textShadow: `0 0 15px ${alpha(service.color, 0.5)}`,
                      }
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2.5, sm: 3, md: 4 },
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Icon Container with Background Effect */}
                    <Box
                      sx={{
                        position: 'relative',
                        mb: 3,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${alpha(service.color, 0.1)} 0%, transparent 70%)`,
                          filter: 'blur(20px)',
                          zIndex: 0,
                        }
                      }}
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover="hover"
                        className="service-icon"
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            background: `linear-gradient(145deg, ${alpha(service.color, 0.2)}, ${alpha(service.color, 0.1)})`,
                            border: `2px solid ${alpha(service.color, 0.3)}`,
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: `0 8px 32px ${alpha(service.color, 0.2)}`,
                          }}
                        >
                          {React.cloneElement(service.icon, {
                            sx: {
                              fontSize: 36,
                              color: service.color,
                            }
                          })}
                        </Box>
                      </motion.div>
                    </Box>

                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      <Typography
                        className="card-title"
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: { 
                            xs: '1.1rem', 
                            sm: '1.2rem', 
                            md: '1.3rem' 
                          },
                          transition: 'all 0.3s ease',
                          minHeight: '3.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {service.title}
                      </Typography>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      style={{ flexGrow: 1 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.7,
                          color: '#cccccc',
                          opacity: 0.9,
                          fontSize: { 
                            xs: '0.85rem', 
                            sm: '0.9rem' 
                          },
                          mb: 3,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </motion.div>

                    {/* Hover Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '80px' }}
                      transition={{ duration: 0.3 }}
                      style={{
                        height: '3px',
                        background: `linear-gradient(90deg, ${service.color}, ${service.color === telemagenta ? salmon : telemagenta})`,
                        borderRadius: '2px',
                        marginTop: 'auto'
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
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
                px: { xs: 4, md: 6 },
                py: { xs: 1.25, md: 1.5 },
                fontSize: { 
                  xs: '0.9rem', 
                  md: '1.1rem' 
                },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${telemagenta}, ${salmon})`,
                color: '#ffffff',
                borderRadius: '50px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover': {
                  background: `linear-gradient(135deg, ${telemagentaHover}, ${salmonHover})`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 15px 30px ${alpha(telemagenta, 0.4)}`,
                  '&::before': {
                    left: '100%',
                  }
                },
                transition: 'all 0.3s ease',
              }}
            >
              Discover All AI Solutions
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;