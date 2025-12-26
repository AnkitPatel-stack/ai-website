// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar,
//   Chip,
//   IconButton,
//   Fade,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { contentApi } from '../services/api';

// // Hero Section Component
// const HeroSection = () => {
//   const [content, setContent] = useState({
//     hero_title: 'Transform Your Business with AI-Powered Solutions',
//     hero_subtitle: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Case Studies',
//     hero_background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'hero');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load hero content:', error);
//       }
//     };
//     loadContent();
//   }, []);

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
//       }}
//     >
//       {/* Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${content.hero_background})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.7) 100%)',
//           },
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 800,
//                     fontSize: { xs: '2.5rem', md: '4rem' },
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {content.hero_title}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   }}
//                 >
//                   {content.hero_subtitle}
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           bgcolor: 'primary.dark',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_primary}
//                     </Button>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       size="large"
//                       startIcon={<PlayArrowIcon />}
//                       sx={{
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           borderColor: 'primary.light',
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_secondary}
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </Fade>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Typography variant="caption" color="text.secondary">
//           Scroll to explore
//         </Typography>
//         <Box
//           sx={{
//             width: 20,
//             height: 30,
//             border: '2px solid',
//             borderColor: '#00FF88',
//             borderRadius: 10,
//             display: 'flex',
//             justifyContent: 'center',
//             paddingTop: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 2,
//               height: 8,
//               bgcolor: '#00FF88',
//               borderRadius: 1,
//               animation: 'scroll 2s infinite',
//               '@keyframes scroll': {
//                 '0%': { transform: 'translateY(0)' },
//                 '50%': { transform: 'translateY(5px)' },
//                 '100%': { transform: 'translateY(0)' },
//               },
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// // About Section Component
// const AboutSection = () => {
//   const [content, setContent] = useState({
//     about_title: 'Leading the AI Revolution',
//     about_description: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'about');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load about content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 700,
//                   }}
//                 >
//                   {content.about_title}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   {content.about_description}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 4,
//                     py: 1.5,
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   Learn More About Us
//                 </Button>
//               </Box>
//             </Fade>
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

// // Services Section Component
// const ServicesSection = () => {
//   const [content, setContent] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions tailored to your business needs',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
//         icon: 'strategy',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for your specific use cases.',
//         icon: 'ml',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
//         icon: 'nlp',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis solutions for automation and insights.',
//         icon: 'vision',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into your existing systems.',
//         icon: 'integration',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for your teams.',
//         icon: 'support',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'services');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load services content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const iconComponents = {
//     strategy: '⚡',
//     ml: '🤖',
//     nlp: '💬',
//     vision: '👁️',
//     integration: '🔗',
//     support: '🎓',
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.services_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.services_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
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
//                       {iconComponents[service.icon]}
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
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: '#00FF88',
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

// // Team Section Component
// const TeamSection = () => {
//   const [content, setContent] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines decades of experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         name: 'Dr. Sarah Chen',
//         position: 'CEO & Founder',
//         bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Michael Rodriguez',
//         position: 'CTO',
//         bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Jessica Williams',
//         position: 'Head of Product',
//         bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
//         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'David Kim',
//         position: 'Lead ML Engineer',
//         bio: 'PhD in AI from MIT, published researcher in neural networks',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'team');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load team content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.team_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.team_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {content.team_members.map((member, index) => (
//             <Grid item xs={12} sm={6} md={3} key={member.name}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
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
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={member.image}
//                     alt={member.name}
//                     sx={{
//                       objectFit: 'cover',
//                       filter: 'grayscale(20%)',
//                       '&:hover': {
//                         filter: 'grayscale(0%)',
//                       },
//                     }}
//                   />
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 0.5,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {member.name}
//                     </Typography>
//                     <Chip
//                       label={member.position}
//                       size="small"
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         mb: 2,
//                       }}
//                     />
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.6,
//                         minHeight: 60,
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <IconButton
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         sx={{
//                           color: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         <LinkedInIcon />
//                       </IconButton>
//                     </Box>
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

// // Why Choose Us Section Component
// const WhyChooseUsSection = () => {
//   const [content, setContent] = useState({
//     why_title: 'Why Choose Our AI Solutions',
//     why_points: [
//       {
//         title: 'Enterprise-Grade Security',
//         description: 'Bank-level security protocols and compliance standards for all our solutions.',
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
//         description: 'Round-the-clock support from our AI specialists.',
//       },
//       {
//         title: 'Proven Track Record',
//         description: 'Successfully delivered AI solutions for Fortune 500 companies.',
//       },
//       {
//         title: 'Continuous Innovation',
//         description: 'We stay ahead of the curve with cutting-edge AI research.',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'why_choose_us');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load why choose us content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.why_title}
//               </Typography>
//             </Box>
//           </Fade>
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

// // Contact CTA Section Component
// const ContactCTASection = () => {
//   const [content, setContent] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'contact');
//         setContent(data);
//       } catch (error) {
//         console.error('Failed to load contact content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Fade in={inView} timeout={1000}>
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '1px solid',
//               borderColor: '#00FF88',
//               borderRadius: 2,
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
//                   variant="contained"
//                   size="large"
//                   href="/contact"
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       bgcolor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="/services"
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   View Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </Fade>
//       </Container>
//     </Box>
//   );
// };

// // Main HomePage Component
// const HomePage = () => {
//   return (
//     <Box>
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <TeamSection />
//       <WhyChooseUsSection />
//       <ContactCTASection />
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar,
//   Chip,
//   IconButton,
//   Fade,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { contentApi } from '../services/api';

// // Hero Section Component
// const HeroSection = () => {
//   const [content, setContent] = useState({
//     hero_title: 'Transform Your Business with AI-Powered Solutions',
//     hero_subtitle: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Case Studies',
//     hero_background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'hero');
//         // API returns { hero: {...} }, so extract the hero object
//         if (data.hero) {
//           setContent(data.hero);
//         }
//       } catch (error) {
//         console.error('Failed to load hero content:', error);
//       }
//     };
//     loadContent();
//   }, []);

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
//       }}
//     >
//       {/* Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${content.hero_background})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.7) 100%)',
//           },
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 800,
//                     fontSize: { xs: '2.5rem', md: '4rem' },
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {content.hero_title}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   }}
//                 >
//                   {content.hero_subtitle}
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           bgcolor: 'primary.dark',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_primary}
//                     </Button>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       size="large"
//                       startIcon={<PlayArrowIcon />}
//                       sx={{
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           borderColor: 'primary.light',
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_secondary}
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </Fade>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Typography variant="caption" color="text.secondary">
//           Scroll to explore
//         </Typography>
//         <Box
//           sx={{
//             width: 20,
//             height: 30,
//             border: '2px solid',
//             borderColor: '#00FF88',
//             borderRadius: 10,
//             display: 'flex',
//             justifyContent: 'center',
//             paddingTop: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 2,
//               height: 8,
//               bgcolor: '#00FF88',
//               borderRadius: 1,
//               animation: 'scroll 2s infinite',
//               '@keyframes scroll': {
//                 '0%': { transform: 'translateY(0)' },
//                 '50%': { transform: 'translateY(5px)' },
//                 '100%': { transform: 'translateY(0)' },
//               },
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// // About Section Component
// const AboutSection = () => {
//   const [content, setContent] = useState({
//     about_title: 'Leading the AI Revolution',
//     about_description: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'about');
//         // API returns { about: {...} }, so extract the about object
//         if (data.about) {
//           setContent(data.about);
//         }
//       } catch (error) {
//         console.error('Failed to load about content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 700,
//                   }}
//                 >
//                   {content.about_title}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   {content.about_description}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 4,
//                     py: 1.5,
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   Learn More About Us
//                 </Button>
//               </Box>
//             </Fade>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={3}>
//               {(content.about_stats || []).map((stat, index) => (
//                 <Grid item xs={6} key={stat?.label || index}>
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
//                           {stat?.value || '0'}
//                           <Box
//                             component="span"
//                             sx={{ color: 'text.primary', fontSize: '1.5rem' }}
//                           >
//                             {stat?.suffix || ''}
//                           </Box>
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           color="text.secondary"
//                         >
//                           {stat?.label || 'Statistic'}
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

// // Services Section Component
// const ServicesSection = () => {
//   const [content, setContent] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions tailored to your business needs',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
//         icon: 'strategy',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for your specific use cases.',
//         icon: 'ml',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
//         icon: 'nlp',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis solutions for automation and insights.',
//         icon: 'vision',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into your existing systems.',
//         icon: 'integration',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for your teams.',
//         icon: 'support',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'services');
//         // API returns { services: {...} }, so extract the services object
//         if (data.services) {
//           setContent(data.services);
//         }
//       } catch (error) {
//         console.error('Failed to load services content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const iconComponents = {
//     strategy: '⚡',
//     ml: '🤖',
//     nlp: '💬',
//     vision: '👁️',
//     integration: '🔗',
//     support: '🎓',
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.services_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.services_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4}>
//           {(content.services_list || []).map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={service?.title || index}>
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
//                       {iconComponents[service?.icon] || '⚡'}
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {service?.title || 'AI Service'}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {service?.description || 'AI service description'}
//                     </Typography>
//                     <Button
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: '#00FF88',
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

// // Team Section Component
// const TeamSection = () => {
//   const [content, setContent] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines decades of experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         name: 'Dr. Sarah Chen',
//         position: 'CEO & Founder',
//         bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Michael Rodriguez',
//         position: 'CTO',
//         bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Jessica Williams',
//         position: 'Head of Product',
//         bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
//         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'David Kim',
//         position: 'Lead ML Engineer',
//         bio: 'PhD in AI from MIT, published researcher in neural networks',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'team');
//         // API returns { team: {...} }, so extract the team object
//         if (data.team) {
//           setContent(data.team);
//         }
//       } catch (error) {
//         console.error('Failed to load team content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.team_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.team_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {(content.team_members || []).map((member, index) => (
//             <Grid item xs={12} sm={6} md={3} key={member?.name || index}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
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
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={member?.image || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
//                     alt={member?.name || 'Team Member'}
//                     sx={{
//                       objectFit: 'cover',
//                       filter: 'grayscale(20%)',
//                       '&:hover': {
//                         filter: 'grayscale(0%)',
//                       },
//                     }}
//                   />
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 0.5,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {member?.name || 'Team Member'}
//                     </Typography>
//                     <Chip
//                       label={member?.position || 'Position'}
//                       size="small"
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         mb: 2,
//                       }}
//                     />
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.6,
//                         minHeight: 60,
//                       }}
//                     >
//                       {member?.bio || 'Team member bio'}
//                     </Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <IconButton
//                         href={member?.linkedin || '#'}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         sx={{
//                           color: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         <LinkedInIcon />
//                       </IconButton>
//                     </Box>
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

// // Why Choose Us Section Component
// const WhyChooseUsSection = () => {
//   const [content, setContent] = useState({
//     why_title: 'Why Choose Our AI Solutions',
//     why_points: [
//       {
//         title: 'Enterprise-Grade Security',
//         description: 'Bank-level security protocols and compliance standards for all our solutions.',
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
//         description: 'Round-the-clock support from our AI specialists.',
//       },
//       {
//         title: 'Proven Track Record',
//         description: 'Successfully delivered AI solutions for Fortune 500 companies.',
//       },
//       {
//         title: 'Continuous Innovation',
//         description: 'We stay ahead of the curve with cutting-edge AI research.',
//       },
//     ],
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'why_choose_us');
//         // API returns { why_choose_us: {...} }, so extract the why_choose_us object
//         if (data.why_choose_us) {
//           setContent(data.why_choose_us);
//         }
//       } catch (error) {
//         console.error('Failed to load why choose us content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.why_title}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4}>
//           {(content.why_points || []).map((point, index) => (
//             <Grid item xs={12} sm={6} md={4} key={point?.title || index}>
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
//                       {point?.title || 'Benefit'}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {point?.description || 'Description of benefit'}
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

// // Contact CTA Section Component
// const ContactCTASection = () => {
//   const [content, setContent] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await contentApi.getPageContent('home', 'contact');
//         // API returns { contact: {...} }, so extract the contact object
//         if (data.contact) {
//           setContent(data.contact);
//         }
//       } catch (error) {
//         console.error('Failed to load contact content:', error);
//       }
//     };
//     loadContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Fade in={inView} timeout={1000}>
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '1px solid',
//               borderColor: '#00FF88',
//               borderRadius: 2,
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
//                   variant="contained"
//                   size="large"
//                   href="/contact"
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       bgcolor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="/services"
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   View Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </Fade>
//       </Container>
//     </Box>
//   );
// };

// // Main HomePage Component
// const HomePage = () => {
//   return (
//     <Box>
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <TeamSection />
//       <WhyChooseUsSection />
//       <ContactCTASection />
//     </Box>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar,
//   Chip,
//   IconButton,
//   Fade,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { loadContent } from '../services/contentService'; // CHANGED: Import from contentService

// // Hero Section Component
// const HeroSection = () => {
//   const [content, setContent] = useState({
//     hero_title: 'Transform Your Business with AI-Powered Solutions',
//     hero_subtitle: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
//     hero_cta_primary: 'Start Your AI Journey',
//     hero_cta_secondary: 'View Case Studies',
//     hero_background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed to avoid conflict
//       try {
//         const data = await loadContent('home', 'hero'); // CHANGED: Using loadContent
//         if (data.hero) {
//           setContent(data.hero);
//         }
//       } catch (error) {
//         console.error('Failed to load hero content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

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
//       }}
//     >
//       {/* Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url(${content.hero_background})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.7) 100%)',
//           },
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 800,
//                     fontSize: { xs: '2.5rem', md: '4rem' },
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {content.hero_title}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     fontSize: { xs: '1.1rem', md: '1.5rem' },
//                   }}
//                 >
//                   {content.hero_subtitle}
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           bgcolor: 'primary.dark',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_primary}
//                     </Button>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       size="large"
//                       startIcon={<PlayArrowIcon />}
//                       sx={{
//                         borderColor: '#00FF88',
//                         color: '#00FF88',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1.1rem',
//                         '&:hover': {
//                           borderColor: 'primary.light',
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       {content.hero_cta_secondary}
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </Fade>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Scroll indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 40,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Typography variant="caption" color="text.secondary">
//           Scroll to explore
//         </Typography>
//         <Box
//           sx={{
//             width: 20,
//             height: 30,
//             border: '2px solid',
//             borderColor: '#00FF88',
//             borderRadius: 10,
//             display: 'flex',
//             justifyContent: 'center',
//             paddingTop: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 2,
//               height: 8,
//               bgcolor: '#00FF88',
//               borderRadius: 1,
//               animation: 'scroll 2s infinite',
//               '@keyframes scroll': {
//                 '0%': { transform: 'translateY(0)' },
//                 '50%': { transform: 'translateY(5px)' },
//                 '100%': { transform: 'translateY(0)' },
//               },
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// // About Section Component
// const AboutSection = () => {
//   const [content, setContent] = useState({
//     about_title: 'Leading the AI Revolution',
//     about_description: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed
//       try {
//         const data = await loadContent('home', 'about'); // CHANGED: Using loadContent
//         if (data.about) {
//           setContent(data.about);
//         }
//       } catch (error) {
//         console.error('Failed to load about content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Fade in={inView} timeout={1000}>
//               <Box>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 700,
//                   }}
//                 >
//                   {content.about_title}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   {content.about_description}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   endIcon={<ArrowForwardIcon />}
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 4,
//                     py: 1.5,
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   Learn More About Us
//                 </Button>
//               </Box>
//             </Fade>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={3}>
//               {(content.about_stats || []).map((stat, index) => ( // ADDED: Null check
//                 <Grid item xs={6} key={stat?.label || index}>
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
//                           {stat?.value || '0'}
//                           <Box
//                             component="span"
//                             sx={{ color: 'text.primary', fontSize: '1.5rem' }}
//                           >
//                             {stat?.suffix || ''}
//                           </Box>
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           color="text.secondary"
//                         >
//                           {stat?.label || 'Statistic'}
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

// // Services Section Component
// const ServicesSection = () => {
//   const [content, setContent] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions tailored to your business needs',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
//         icon: 'strategy',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for your specific use cases.',
//         icon: 'ml',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
//         icon: 'nlp',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis solutions for automation and insights.',
//         icon: 'vision',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into your existing systems.',
//         icon: 'integration',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for your teams.',
//         icon: 'support',
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed
//       try {
//         const data = await loadContent('home', 'services'); // CHANGED: Using loadContent
//         if (data.services) {
//           setContent(data.services);
//         }
//       } catch (error) {
//         console.error('Failed to load services content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const iconComponents = {
//     strategy: '⚡',
//     ml: '🤖',
//     nlp: '💬',
//     vision: '👁️',
//     integration: '🔗',
//     support: '🎓',
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.services_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.services_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4}>
//           {(content.services_list || []).map((service, index) => ( // ADDED: Null check
//             <Grid item xs={12} sm={6} md={4} key={service?.title || index}>
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
//                       {iconComponents[service?.icon] || '⚡'}
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {service?.title || 'AI Service'}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {service?.description || 'AI service description'}
//                     </Typography>
//                     <Button
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: '#00FF88',
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

// // Team Section Component
// const TeamSection = () => {
//   const [content, setContent] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines decades of experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         name: 'Dr. Sarah Chen',
//         position: 'CEO & Founder',
//         bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Michael Rodriguez',
//         position: 'CTO',
//         bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Jessica Williams',
//         position: 'Head of Product',
//         bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
//         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'David Kim',
//         position: 'Lead ML Engineer',
//         bio: 'PhD in AI from MIT, published researcher in neural networks',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed
//       try {
//         const data = await loadContent('home', 'team'); // CHANGED: Using loadContent
//         if (data.team) {
//           setContent(data.team);
//         }
//       } catch (error) {
//         console.error('Failed to load team content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.team_title}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 6,
//                   color: 'text.secondary',
//                   maxWidth: 600,
//                   mx: 'auto',
//                 }}
//               >
//                 {content.team_subtitle}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {(content.team_members || []).map((member, index) => ( // ADDED: Null check
//             <Grid item xs={12} sm={6} md={3} key={member?.name || index}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
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
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={member?.image || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
//                     alt={member?.name || 'Team Member'}
//                     sx={{
//                       objectFit: 'cover',
//                       filter: 'grayscale(20%)',
//                       '&:hover': {
//                         filter: 'grayscale(0%)',
//                       },
//                     }}
//                   />
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 0.5,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {member?.name || 'Team Member'}
//                     </Typography>
//                     <Chip
//                       label={member?.position || 'Position'}
//                       size="small"
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         mb: 2,
//                       }}
//                     />
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.6,
//                         minHeight: 60,
//                       }}
//                     >
//                       {member?.bio || 'Team member bio'}
//                     </Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <IconButton
//                         href={member?.linkedin || '#'}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         sx={{
//                           color: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         <LinkedInIcon />
//                       </IconButton>
//                     </Box>
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

// // Why Choose Us Section Component
// const WhyChooseUsSection = () => {
//   const [content, setContent] = useState({
//     why_title: 'Why Choose Our AI Solutions',
//     why_points: [
//       {
//         title: 'Enterprise-Grade Security',
//         description: 'Bank-level security protocols and compliance standards for all our solutions.',
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
//         description: 'Round-the-clock support from our AI specialists.',
//       },
//       {
//         title: 'Proven Track Record',
//         description: 'Successfully delivered AI solutions for Fortune 500 companies.',
//       },
//       {
//         title: 'Continuous Innovation',
//         description: 'We stay ahead of the curve with cutting-edge AI research.',
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed
//       try {
//         const data = await loadContent('home', 'why_choose_us'); // CHANGED: Using loadContent
//         if (data.why_choose_us) {
//           setContent(data.why_choose_us);
//         }
//       } catch (error) {
//         console.error('Failed to load why choose us content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Fade in={inView} timeout={1000}>
//             <Box>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   color: '#00FF88',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.why_title}
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         <Grid container spacing={4}>
//           {(content.why_points || []).map((point, index) => ( // ADDED: Null check
//             <Grid item xs={12} sm={6} md={4} key={point?.title || index}>
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
//                       {point?.title || 'Benefit'}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {point?.description || 'Description of benefit'}
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

// // Contact CTA Section Component
// const ContactCTASection = () => {
//   const [content, setContent] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   useEffect(() => {
//     const fetchContent = async () => { // CHANGED: Renamed
//       try {
//         const data = await loadContent('home', 'contact'); // CHANGED: Using loadContent
//         if (data.contact) {
//           setContent(data.contact);
//         }
//       } catch (error) {
//         console.error('Failed to load contact content:', error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Fade in={inView} timeout={1000}>
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '1px solid',
//               borderColor: '#00FF88',
//               borderRadius: 2,
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
//                   variant="contained"
//                   size="large"
//                   href="/contact"
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       bgcolor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="/services"
//                   sx={{
//                     borderColor: '#00FF88',
//                     color: '#00FF88',
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     '&:hover': {
//                       borderColor: 'primary.light',
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   View Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </Fade>
//       </Container>
//     </Box>
//   );
// };

// // Main HomePage Component
// const HomePage = () => {
//   return (
//     <Box>
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <TeamSection />
//       <WhyChooseUsSection />
//       <ContactCTASection />
//     </Box>
//   );
// };

// export default HomePage;


// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';

// const HomePage = () => {
//   useEffect(() => {
//     // Scroll to section if hash exists in URL
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -100;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Box>
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </motion.div>
//   );
// };

// export default HomePage;



// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';

// const HomePage = () => {
//   useEffect(() => {
//     // Scroll to section if hash exists in URL
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70; // ✅ Adjusted for fixed navbar
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Box sx={{ mt: 0 }}> {/* ✅ No margin top - navbar is fixed */}
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </motion.div>
//   );
// };

// export default HomePage;

// // src/pages/HomePage.js - Keep as is
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';

// const HomePage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Box sx={{ mt: 0 }}>
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </motion.div>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';
// import SolarSystemBackground from '../components/SolarSystemBackground'; // Correct import path

// const HomePage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <Box sx={{ position: 'relative' }}>
//       <SolarSystemBackground />
//       <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div id="hero">
//             <HeroSection />
//           </div>
//           <div id="about">
//             <AboutSection />
//           </div>
//           <div id="services">
//             <ServicesSection />
//           </div>
//           <div id="team">
//             <TeamSection />
//           </div>
//           <div id="why-choose-us">
//             <WhyChooseUsSection />
//           </div>
//           <div id="contact">
//             <ContactCTASection />
//           </div>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';
// import SolarSystemBackground from '../components/SolarSystemBackground';

// const HomePage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <Box sx={{ 
//       position: 'relative',
//       minHeight: '100vh',
//       background: 'transparent'
//     }}>
//       <SolarSystemBackground />
//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1, 
//         background: 'transparent'
//       }}>
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';
// import SolarSystemBackground from '../components/SolarSystemBackground';

// const HomePage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <Box sx={{ 
//       position: 'relative',
//       minHeight: '100vh',
//       background: 'transparent'
//     }}>
//       <SolarSystemBackground />
//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1, 
//         background: 'transparent'
//       }}>
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { Box } from '@mui/material';
// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import ServicesSection from '../sections/ServicesSection';
// import TeamSection from '../sections/TeamSection';
// import WhyChooseUsSection from '../sections/WhyChooseUsSection';
// import ContactCTASection from '../sections/ContactCTASection';
// import SolarSystemBackground from '../components/SolarSystemBackground';

// const HomePage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         setTimeout(() => {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, []);

//   return (
//     <Box sx={{ 
//       position: 'relative',
//       minHeight: '100vh',
//       background: 'black'
//     }}>
//       <SolarSystemBackground />
//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1, 
//         background: 'black'
//       }}>
//         <div id="hero">
//           <HeroSection />
//         </div>
//         <div id="about">
//           <AboutSection />
//         </div>
//         <div id="services">
//           <ServicesSection />
//         </div>
//         <div id="team">
//           <TeamSection />
//         </div>
//         <div id="why-choose-us">
//           <WhyChooseUsSection />
//         </div>
//         <div id="contact">
//           <ContactCTASection />
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import TeamSection from '../sections/TeamSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import ContactCTASection from '../sections/ContactCTASection';
import StarsBackground from '../components/StarsBackground';

const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000000, #0a0a0a)'
    }}>
      <StarsBackground />
      <Box sx={{ 
        position: 'relative', 
        zIndex: 1,
        backgroundColor: 'transparent'
      }}>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="why-choose-us">
          <WhyChooseUsSection />
        </div>
        <div id="contact">
          <ContactCTASection />
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;