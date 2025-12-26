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
//                       borderColor: '#ff0090',
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
//                         bgcolor: '#ff0090',
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
//               bgcolor: '#ff0090',
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
//                       borderColor: '#ff0090',
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
//                         backgroundColor: '#ff0090',
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
//               backgroundColor: '#ff0090',
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

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
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

  const handleLearnMore = () => {
    navigate('/services');
  };

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
                lineHeight: 1.2,
              }}
            >
              Our AI-Powered Services
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
                lineHeight: 1.7,
              }}
            >
              Transform your business with cutting-edge artificial intelligence solutions tailored to your needs
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              title: 'AI Strategy & Consulting',
              description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
              icon: <StrategyIcon />,
            },
            {
              title: 'Machine Learning Development',
              description: 'Custom ML models built and deployed for specific use cases.',
              icon: <MLIcon />,
            },
            {
              title: 'Natural Language Processing',
              description: 'Advanced NLP solutions for text analysis and language understanding.',
              icon: <NLPIcon />,
            },
            {
              title: 'Computer Vision',
              description: 'Image and video analysis for automation and insights.',
              icon: <VisionIcon />,
            },
            {
              title: 'AI Integration',
              description: 'Seamlessly integrate AI capabilities into existing systems.',
              icon: <IntegrationIcon />,
            },
            {
              title: 'AI Training & Support',
              description: 'Comprehensive training and ongoing support for teams.',
              icon: <SupportIcon />,
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  sx={{
                    backgroundColor: '#111111',
                    border: '1px solid #333333',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#ff0090',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '15%',
                        backgroundColor: '#ff0090',
                        mb: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#ff1dce',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        sx: {
                          fontSize: 28,
                          color: '#ffffff',
                        }
                      })}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: '#ffffff',
                        fontSize: '1.2rem',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        color: '#ffffff',
                        opacity: 0.9,
                        fontSize: '0.9rem',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleLearnMore}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: '#ff0090',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#ff1dce',
              },
            }}
          >
            Discover All AI Solutions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;