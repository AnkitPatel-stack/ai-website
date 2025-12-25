// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { contentApi } from '../services/api';

// const ServicesPage = () => {
//   const [content, setContent] = useState({
//     services_list: [],
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

//   const serviceDetails = [
//     {
//       title: 'AI Strategy & Consulting',
//       description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
//       features: [
//         'AI Readiness Assessment',
//         'Strategy Development',
//         'Roadmap Planning',
//         'Implementation Guidance',
//         'ROI Analysis',
//       ],
//       process: [
//         'Discovery & Assessment',
//         'Strategy Development',
//         'Implementation Planning',
//         'Execution Support',
//         'Optimization',
//       ],
//     },
//     {
//       title: 'Machine Learning Development',
//       description: 'Custom ML models built and deployed for your specific use cases.',
//       features: [
//         'Custom Model Development',
//         'Data Preparation',
//         'Model Training & Validation',
//         'Deployment & Integration',
//         'Monitoring & Maintenance',
//       ],
//       process: [
//         'Requirement Analysis',
//         'Data Collection & Preparation',
//         'Model Development',
//         'Testing & Validation',
//         'Deployment',
//       ],
//     },
//     {
//       title: 'Natural Language Processing',
//       description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
//       features: [
//         'Text Classification',
//         'Sentiment Analysis',
//         'Named Entity Recognition',
//         'Chatbot Development',
//         'Document Analysis',
//       ],
//       process: [
//         'Use Case Analysis',
//         'Data Annotation',
//         'Model Selection',
//         'Training & Fine-tuning',
//         'Integration',
//       ],
//     },
//     {
//       title: 'Computer Vision',
//       description: 'Image and video analysis solutions for automation and insights.',
//       features: [
//         'Object Detection',
//         'Image Classification',
//         'Facial Recognition',
//         'Video Analysis',
//         'Quality Inspection',
//       ],
//       process: [
//         'Problem Definition',
//         'Data Collection',
//         'Model Architecture',
//         'Training & Validation',
//         'Deployment',
//       ],
//     },
//     {
//       title: 'AI Integration',
//       description: 'Seamlessly integrate AI capabilities into your existing systems.',
//       features: [
//         'API Development',
//         'System Integration',
//         'Data Pipeline Setup',
//         'Cloud Deployment',
//         'Legacy System Modernization',
//       ],
//       process: [
//         'System Analysis',
//         'Integration Planning',
//         'API Development',
//         'Testing',
//         'Deployment & Monitoring',
//       ],
//     },
//     {
//       title: 'AI Training & Support',
//       description: 'Comprehensive training and ongoing support for your teams.',
//       features: [
//         'Custom Training Programs',
//         'Technical Workshops',
//         'Documentation',
//         '24/7 Support',
//         'Performance Monitoring',
//       ],
//       process: [
//         'Needs Assessment',
//         'Program Development',
//         'Training Delivery',
//         'Knowledge Transfer',
//         'Ongoing Support',
//       ],
//     },
//   ];

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           py: { xs: 8, md: 12 },
//           bgcolor: 'background.default',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   color: '#00FF88',
//                   fontWeight: 800,
//                 }}
//               >
//                 AI Services
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 Comprehensive AI solutions tailored to drive innovation, efficiency,
//                 and growth for your business. From strategy to implementation,
//                 we deliver end-to-end AI capabilities.
//               </Typography>
//               <Button
//                 variant="contained"
//                 size="large"
//                 href="#services-list"
//                 sx={{
//                   bgcolor: '#00FF88',
//                   color: 'background.default',
//                   px: 6,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                   '&:hover': {
//                     bgcolor: 'primary.dark',
//                   },
//                 }}
//               >
//                 Explore Our Services
//               </Button>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Services Grid */}
//       <Box id="services-list" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our AI Services
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               End-to-end AI solutions for every business need
//             </Typography>
//           </Box>

//           <Grid container spacing={4} ref={ref}>
//             {content.services_list?.map((service, index) => (
//               <Grid item xs={12} sm={6} md={4} key={service.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ p: 4 }}>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           mb: 2,
//                           fontWeight: 600,
//                           minHeight: 64,
//                         }}
//                       >
//                         {service.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="text.secondary"
//                         sx={{
//                           mb: 3,
//                           lineHeight: 1.7,
//                           minHeight: 80,
//                         }}
//                       >
//                         {service.description}
//                       </Typography>
//                       <Button
//                         variant="outlined"
//                         endIcon={<ArrowForwardIcon />}
//                         fullWidth
//                         sx={{
//                           borderColor: '#00FF88',
//                           color: '#00FF88',
//                           '&:hover': {
//                             borderColor: 'primary.light',
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         Learn More
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Service Details */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Detailed Service Overview
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               In-depth look at how we deliver each service
//             </Typography>
//           </Box>

//           {serviceDetails.map((service, index) => (
//             <Accordion
//               key={service.title}
//               sx={{
//                 bgcolor: '#121218',
//                 border: '1px solid',
//                 borderColor: 'divider',
//                 mb: 2,
//                 '&:before': { display: 'none' },
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 sx={{
//                   py: 3,
//                   px: 4,
//                   '& .MuiAccordionSummary-content': {
//                     alignItems: 'center',
//                     gap: 2,
//                   },
//                 }}
//               >
//                 <Chip
//                   label={`0${index + 1}`}
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     fontWeight: 600,
//                   }}
//                 />
//                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                   {service.title}
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails sx={{ p: 4 }}>
//                 <Grid container spacing={4}>
//                   <Grid item xs={12} md={6}>
//                     <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
//                       Key Features
//                     </Typography>
//                     <List>
//                       {service.features.map((feature, idx) => (
//                         <ListItem key={idx} sx={{ px: 0 }}>
//                           <ListItemIcon sx={{ minWidth: 36 }}>
//                             <CheckCircleIcon color="primary" />
//                           </ListItemIcon>
//                           <ListItemText primary={feature} />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
//                       Our Process
//                     </Typography>
//                     <List>
//                       {service.process.map((step, idx) => (
//                         <ListItem key={idx} sx={{ px: 0 }}>
//                           <ListItemIcon sx={{ minWidth: 36 }}>
//                             <Chip
//                               label={idx + 1}
//                               size="small"
//                               sx={{
//                                 bgcolor: '#00FF88',
//                                 color: 'background.default',
//                                 minWidth: 24,
//                                 height: 24,
//                               }}
//                             />
//                           </ListItemIcon>
//                           <ListItemText primary={step} />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </Grid>
//                 </Grid>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               bgcolor: 'background.default',
//               border: '1px solid',
//               borderColor: '#00FF88',
//               borderRadius: 2,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
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
//               Ready to Transform with AI?
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
//               Let's discuss how our AI services can drive growth and efficiency
//               in your organization.
//             </Typography>
//             <Button
//               variant="contained"
//               size="large"
//               href="/contact"
//               sx={{
//                 bgcolor: '#00FF88',
//                 color: 'background.default',
//                 px: 6,
//                 py: 1.5,
//                 fontSize: '1.1rem',
//                 '&:hover': {
//                   bgcolor: 'primary.dark',
//                 },
//               }}
//             >
//               Get Started Today
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ServicesPage;


// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Tabs,
//   Tab,
//   alpha,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';

// const ServicesPage = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const serviceCategories = [
//     {
//       title: 'AI Strategy',
//       description: 'Develop comprehensive AI roadmaps aligned with business objectives',
//       icon: '🎯',
//       color: '#00FF88',
//     },
//     {
//       title: 'ML Development',
//       description: 'Custom machine learning models for specific use cases',
//       icon: '🤖',
//       color: '#8A2BE2',
//     },
//     {
//       title: 'NLP Solutions',
//       description: 'Advanced natural language processing for text analysis',
//       icon: '💬',
//       color: '#FF6B6B',
//     },
//     {
//       title: 'Computer Vision',
//       description: 'Image and video analysis for automation and insights',
//       icon: '👁️',
//       color: '#4ECDC4',
//     },
//   ];

//   const detailedServices = [
//     {
//       title: 'AI Strategy & Consulting',
//       category: 'AI Strategy',
//       description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
//       features: [
//         'AI Readiness Assessment',
//         'Strategy Development',
//         'Roadmap Planning',
//         'Implementation Guidance',
//         'ROI Analysis',
//       ],
//       process: [
//         'Discovery & Assessment',
//         'Strategy Development',
//         'Implementation Planning',
//         'Execution Support',
//         'Optimization',
//       ],
//       deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'ROI Analysis Report'],
//     },
//     {
//       title: 'Machine Learning Development',
//       category: 'ML Development',
//       description: 'Custom ML models built and deployed for your specific use cases.',
//       features: [
//         'Custom Model Development',
//         'Data Preparation',
//         'Model Training & Validation',
//         'Deployment & Integration',
//         'Monitoring & Maintenance',
//       ],
//       process: [
//         'Requirement Analysis',
//         'Data Collection & Preparation',
//         'Model Development',
//         'Testing & Validation',
//         'Deployment',
//       ],
//       deliverables: ['Trained ML Models', 'API Endpoints', 'Documentation', 'Monitoring Dashboard'],
//     },
//     {
//       title: 'Natural Language Processing',
//       category: 'NLP Solutions',
//       description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
//       features: [
//         'Text Classification',
//         'Sentiment Analysis',
//         'Named Entity Recognition',
//         'Chatbot Development',
//         'Document Analysis',
//       ],
//       process: [
//         'Use Case Analysis',
//         'Data Annotation',
//         'Model Selection',
//         'Training & Fine-tuning',
//         'Integration',
//       ],
//       deliverables: ['NLP Models', 'Chatbot System', 'API Documentation', 'Analytics Dashboard'],
//     },
//     {
//       title: 'Computer Vision Solutions',
//       category: 'Computer Vision',
//       description: 'Image and video analysis solutions for automation and insights.',
//       features: [
//         'Object Detection',
//         'Image Classification',
//         'Facial Recognition',
//         'Video Analysis',
//         'Quality Inspection',
//       ],
//       process: [
//         'Problem Definition',
//         'Data Collection',
//         'Model Architecture',
//         'Training & Validation',
//         'Deployment',
//       ],
//       deliverables: ['CV Models', 'Processing Pipeline', 'Integration API', 'Analysis Reports'],
//     },
//     {
//       title: 'AI Integration Services',
//       category: 'AI Strategy',
//       description: 'Seamlessly integrate AI capabilities into your existing systems.',
//       features: [
//         'API Development',
//         'System Integration',
//         'Data Pipeline Setup',
//         'Cloud Deployment',
//         'Legacy System Modernization',
//       ],
//       process: [
//         'System Analysis',
//         'Integration Planning',
//         'API Development',
//         'Testing',
//         'Deployment & Monitoring',
//       ],
//       deliverables: ['Integrated System', 'API Documentation', 'Data Pipelines', 'Monitoring Tools'],
//     },
//     {
//       title: 'AI Training & Support',
//       category: 'AI Strategy',
//       description: 'Comprehensive training and ongoing support for your teams.',
//       features: [
//         'Custom Training Programs',
//         'Technical Workshops',
//         'Documentation',
//         '24/7 Support',
//         'Performance Monitoring',
//       ],
//       process: [
//         'Needs Assessment',
//         'Program Development',
//         'Training Delivery',
//         'Knowledge Transfer',
//         'Ongoing Support',
//       ],
//       deliverables: ['Training Materials', 'Workshop Sessions', 'Support Portal', 'Knowledge Base'],
//     },
//   ];

//   const filteredServices = detailedServices.filter(
//     (service) => tabValue === 0 || service.category === serviceCategories[tabValue - 1]?.title
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <Box
//         sx={{
//           py: { xs: 8, md: 12 },
//           bgcolor: 'background.default',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Chip
//                 label="Our Services"
//                 sx={{
//                   bgcolor: 'rgba(0, 255, 136, 0.1)',
//                   color: '#00FF88',
//                   mb: 3,
//                   px: 2,
//                   py: 1,
//                 }}
//               />
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 Advanced AI Solutions
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 Comprehensive AI services designed to drive measurable results,
//                 efficiency, and growth for your business. From strategy to
//                 implementation, we deliver end-to-end AI capabilities.
//               </Typography>
//               <Button
//                 variant="contained"
//                 size="large"
//                 href="#services-list"
//                 sx={{
//                   px: 6,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                 }}
//               >
//                 Explore Services
//               </Button>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Service Categories */}
//       <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Tabs
//             value={tabValue}
//             onChange={(e, newValue) => setTabValue(newValue)}
//             variant="scrollable"
//             scrollButtons="auto"
//             sx={{
//               mb: 6,
//               '& .MuiTab-root': {
//                 fontSize: '1.1rem',
//                 fontWeight: 600,
//                 minHeight: 60,
//               },
//             }}
//           >
//             <Tab label="All Services" />
//             {serviceCategories.map((category) => (
//               <Tab
//                 key={category.title}
//                 label={
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
//                     {category.title}
//                   </Box>
//                 }
//               />
//             ))}
//           </Tabs>

//           <Grid container spacing={4} id="services-list" ref={ref}>
//             {filteredServices.map((service, index) => (
//               <Grid item xs={12} md={6} key={service.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -8 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       '&:before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         height: 4,
//                         background: `linear-gradient(90deg, ${serviceCategories.find(c => c.title === service.category)?.color || '#00FF88'} 0%, transparent 100%)`,
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ p: 4 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
//                         <Chip
//                           label={service.category}
//                           size="small"
//                           sx={{
//                             bgcolor: alpha(
//                               serviceCategories.find(c => c.title === service.category)?.color || '#00FF88',
//                               0.1
//                             ),
//                             color: serviceCategories.find(c => c.title === service.category)?.color || '#00FF88',
//                           }}
//                         />
//                       </Box>
                      
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           mb: 2,
//                           fontWeight: 700,
//                         }}
//                       >
//                         {service.title}
//                       </Typography>
                      
//                       <Typography
//                         variant="body1"
//                         color="text.secondary"
//                         sx={{
//                           mb: 3,
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         {service.description}
//                       </Typography>

//                       <Box sx={{ mb: 3 }}>
//                         <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
//                           Key Features
//                         </Typography>
//                         <List dense>
//                           {service.features.slice(0, 3).map((feature, idx) => (
//                             <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
//                               <ListItemIcon sx={{ minWidth: 32 }}>
//                                 <CheckCircleIcon color="primary" fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText primary={feature} />
//                             </ListItem>
//                           ))}
//                         </List>
//                       </Box>

//                       <Button
//                         component={Link}
//                         to="/contact"
//                         variant="outlined"
//                         endIcon={<ArrowForwardIcon />}
//                         fullWidth
//                       >
//                         Learn More
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Detailed Services */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Service Details
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               In-depth look at how we deliver each service
//             </Typography>
//           </Box>

//           {detailedServices.slice(0, 4).map((service, index) => (
//             <Accordion
//               key={service.title}
//               sx={{
//                 bgcolor: '#121218',
//                 border: '1px solid',
//                 borderColor: 'divider',
//                 mb: 3,
//                 borderRadius: 2,
//                 overflow: 'hidden',
//                 '&:before': { display: 'none' },
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 sx={{
//                   py: 3,
//                   px: 4,
//                   bgcolor: 'rgba(18, 18, 24, 0.5)' ,
//                   '& .MuiAccordionSummary-content': {
//                     alignItems: 'center',
//                     gap: 3,
//                   },
//                 }}
//               >
//                 <Chip
//                   label={`0${index + 1}`}
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     fontWeight: 700,
//                     width: 40,
//                     height: 40,
//                     fontSize: '1.1rem',
//                   }}
//                 />
//                 <Box>
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {service.description}
//                   </Typography>
//                 </Box>
//               </AccordionSummary>
//               <AccordionDetails sx={{ p: 0 }}>
//                 <Box sx={{ p: 4 }}>
//                   <Grid container spacing={4}>
//                     <Grid item xs={12} md={6}>
//                       <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
//                         Key Features
//                       </Typography>
//                       <List>
//                         {service.features.map((feature, idx) => (
//                           <ListItem key={idx} sx={{ px: 0 }}>
//                             <ListItemIcon sx={{ minWidth: 36 }}>
//                               <CheckCircleIcon color="primary" />
//                             </ListItemIcon>
//                             <ListItemText primary={feature} />
//                           </ListItem>
//                         ))}
//                       </List>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
//                         Our Process
//                       </Typography>
//                       <List>
//                         {service.process.map((step, idx) => (
//                           <ListItem key={idx} sx={{ px: 0 }}>
//                             <ListItemIcon sx={{ minWidth: 36 }}>
//                               <Chip
//                                 label={idx + 1}
//                                 size="small"
//                                 sx={{
//                                   bgcolor: '#00FF88',
//                                   color: 'background.default',
//                                   minWidth: 28,
//                                   height: 28,
//                                 }}
//                               />
//                             </ListItemIcon>
//                             <ListItemText primary={step} />
//                           </ListItem>
//                         ))}
//                       </List>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               bgcolor: 'background.default',
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               '&:before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: 'radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
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
//               Ready to Transform with AI?
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
//               Let's discuss how our AI services can drive growth and efficiency
//               in your organization.
//             </Typography>
//             <Button
//               variant="contained"
//               size="large"
//               component={Link}
//               to="/contact"
//               sx={{
//                 px: 6,
//                 py: 2,
//                 fontSize: '1.1rem',
//               }}
//             >
//               Get Started Today
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default ServicesPage;


import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  alpha,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatIcon from '@mui/icons-material/Chat';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: 'AI Strategy',
      description: 'Develop comprehensive AI roadmaps aligned with business objectives',
      icon: <PsychologyIcon sx={{ fontSize: 32, color: '#00FF88' }} />,
      color: '#00FF88',
      gradient: 'linear-gradient(135deg, #00FF88, #00D4FF)',
    },
    {
      title: 'ML Development',
      description: 'Custom machine learning models for specific use cases',
      icon: <TerminalIcon sx={{ fontSize: 32, color: '#8A2BE2' }} />,
      color: '#8A2BE2',
      gradient: 'linear-gradient(135deg, #8A2BE2, #FF6B6B)',
    },
    {
      title: 'NLP Solutions',
      description: 'Advanced natural language processing for text analysis',
      icon: <ChatIcon sx={{ fontSize: 32, color: '#FF6B6B' }} />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FFD700)',
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automation and insights',
      icon: <VisibilityIcon sx={{ fontSize: 32, color: '#00D4FF' }} />,
      color: '#00D4FF',
      gradient: 'linear-gradient(135deg, #00D4FF, #00FF88)',
    },
    {
      title: 'AI Infrastructure',
      description: 'Scalable AI infrastructure and deployment solutions',
      icon: <StorageIcon sx={{ fontSize: 32, color: '#FFD700' }} />,
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #FFD700, #FF6B6B)',
    },
    {
      title: 'AI Training',
      description: 'Comprehensive AI training and knowledge transfer',
      icon: <SchoolIcon sx={{ fontSize: 32, color: '#4ECDC4' }} />,
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #00FF88)',
    },
  ];

  const detailedServices = [
    {
      title: 'AI Strategy & Consulting',
      category: 'AI Strategy',
      description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
      icon: '🎯',
      features: [
        'AI Readiness Assessment',
        'Strategy Development',
        'Roadmap Planning',
        'Implementation Guidance',
        'ROI Analysis',
        'Risk Assessment',
      ],
      process: [
        { step: 'Discovery', description: 'Understand business goals and challenges' },
        { step: 'Assessment', description: 'Evaluate current capabilities and data' },
        { step: 'Strategy', description: 'Develop tailored AI strategy' },
        { step: 'Roadmap', description: 'Create implementation timeline' },
        { step: 'Execution', description: 'Support deployment and adoption' },
      ],
      deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'ROI Analysis Report', 'Risk Assessment'],
      color: '#00FF88',
    },
    {
      title: 'Machine Learning Development',
      category: 'ML Development',
      description: 'Custom ML models built and deployed for your specific use cases.',
      icon: '🤖',
      features: [
        'Custom Model Development',
        'Data Preparation & Cleaning',
        'Model Training & Validation',
        'Deployment & Integration',
        'Monitoring & Maintenance',
        'Performance Optimization',
      ],
      process: [
        { step: 'Analysis', description: 'Define requirements and objectives' },
        { step: 'Data Prep', description: 'Collect and prepare training data' },
        { step: 'Development', description: 'Build and train ML models' },
        { step: 'Testing', description: 'Validate and optimize performance' },
        { step: 'Deployment', description: 'Deploy to production environment' },
      ],
      deliverables: ['Trained ML Models', 'API Endpoints', 'Documentation', 'Monitoring Dashboard', 'Training Dataset'],
      color: '#8A2BE2',
    },
    {
      title: 'Natural Language Processing',
      category: 'NLP Solutions',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      icon: '💬',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Chatbot Development',
        'Document Analysis',
        'Language Translation',
      ],
      process: [
        { step: 'Use Case', description: 'Define NLP application requirements' },
        { step: 'Data', description: 'Collect and annotate text data' },
        { step: 'Modeling', description: 'Select and fine-tune NLP models' },
        { step: 'Training', description: 'Train models on annotated data' },
        { step: 'Integration', description: 'Deploy into existing systems' },
      ],
      deliverables: ['NLP Models', 'Chatbot System', 'API Documentation', 'Analytics Dashboard', 'Training Corpus'],
      color: '#FF6B6B',
    },
    {
      title: 'Computer Vision Solutions',
      category: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and insights.',
      icon: '👁️',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'Quality Inspection',
        'Medical Imaging',
      ],
      process: [
        { step: 'Definition', description: 'Define vision requirements' },
        { step: 'Collection', description: 'Gather and label image data' },
        { step: 'Architecture', description: 'Design CV model architecture' },
        { step: 'Training', description: 'Train models on labeled data' },
        { step: 'Deployment', description: 'Deploy vision models' },
      ],
      deliverables: ['CV Models', 'Processing Pipeline', 'Integration API', 'Analysis Reports', 'Labeled Dataset'],
      color: '#00D4FF',
    },
    {
      title: 'AI Integration Services',
      category: 'AI Infrastructure',
      description: 'Seamlessly integrate AI capabilities into your existing systems.',
      icon: '🔗',
      features: [
        'API Development',
        'System Integration',
        'Data Pipeline Setup',
        'Cloud Deployment',
        'Legacy System Modernization',
        'Microservices Architecture',
      ],
      process: [
        { step: 'Analysis', description: 'Assess current systems and needs' },
        { step: 'Planning', description: 'Design integration architecture' },
        { step: 'Development', description: 'Build APIs and interfaces' },
        { step: 'Testing', description: 'Test integration thoroughly' },
        { step: 'Deployment', description: 'Deploy and monitor integration' },
      ],
      deliverables: ['Integrated System', 'API Documentation', 'Data Pipelines', 'Monitoring Tools', 'Migration Plan'],
      color: '#FFD700',
    },
    {
      title: 'AI Training & Support',
      category: 'AI Training',
      description: 'Comprehensive training and ongoing support for your teams.',
      icon: '🎓',
      features: [
        'Custom Training Programs',
        'Technical Workshops',
        'Documentation',
        '24/7 Support',
        'Performance Monitoring',
        'Knowledge Transfer',
      ],
      process: [
        { step: 'Assessment', description: 'Evaluate team skills and needs' },
        { step: 'Development', description: 'Create custom training program' },
        { step: 'Delivery', description: 'Conduct workshops and training' },
        { step: 'Transfer', description: 'Transfer knowledge and skills' },
        { step: 'Support', description: 'Provide ongoing assistance' },
      ],
      deliverables: ['Training Materials', 'Workshop Sessions', 'Support Portal', 'Knowledge Base', 'Certifications'],
      color: '#4ECDC4',
    },
  ];

  const filteredServices = tabValue === 0 
    ? detailedServices 
    : detailedServices.filter(service => service.category === serviceCategories[tabValue - 1]?.title);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back to Home */}
      <Box sx={{ bgcolor: '#121218', py: 2, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
        <Container maxWidth="xl">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: '#00FF88',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
              }
            }}
          >
            Back to Home
          </Button>
        </Container>
      </Box>

      {/* Hero Section with AI Theme */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#121218',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 10% 90%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 10%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />

        {/* AI Circuit Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="AI Services"
                sx={{
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                  color: '#00FF88',
                  mb: 4,
                  px: 3,
                  py: 1.5,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                }}
              />
              
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
                }}
              >
                Advanced AI Solutions
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  color: '#A0A0A0',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                Comprehensive AI services designed to drive measurable results,
                efficiency, and growth for your business. From strategy to
                implementation, we deliver end-to-end AI capabilities.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#services-list"
                  sx={{
                    px: 5,
                    py: 1.8,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                    color: '#121218',
                    fontWeight: 700,
                    borderRadius: 3,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(0, 255, 136, 0.3)',
                    }
                  }}
                >
                  Explore Services
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{
                    px: 5,
                    py: 1.8,
                    fontSize: '1.1rem',
                    borderColor: 'rgba(0, 255, 136, 0.3)',
                    color: '#00FF88',
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: '#00FF88',
                      backgroundColor: 'rgba(0, 255, 136, 0.1)',
                      transform: 'translateY(-3px)',
                    }
                  }}
                >
                  Contact Experts
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Service Categories Tabs */}
      <Box sx={{ 
        py: { xs: 6, md: 8 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            AI Service Categories
          </Typography>
          
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 6,
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
                height: 3,
              },
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 600,
                minHeight: 70,
                color: '#A0A0A0',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#FFFFFF',
                },
                '&:hover': {
                  color: '#00FF88',
                }
              },
            }}
          >
            <Tab label="All Services" />
            {serviceCategories.map((category) => (
              <Tab
                key={category.title}
                label={
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: 1,
                    px: 2,
                  }}>
                    {category.icon}
                    <span>{category.title}</span>
                  </Box>
                }
              />
            ))}
          </Tabs>

          <Grid container spacing={4} id="services-list" ref={ref}>
            {filteredServices.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: '#121218',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: service.color,
                        transform: 'translateY(-10px)',
                        boxShadow: `0 30px 60px ${alpha(service.color, 0.2)}`,
                        '& .service-glow': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    {/* Service Glow Effect */}
                    <Box
                      className="service-glow"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(service.color, 0.1)} 0%, transparent 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 0,
                      }}
                    />

                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 3,
                            background: alpha(service.color, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${alpha(service.color, 0.3)}`,
                          }}
                        >
                          <Typography variant="h4">{service.icon}</Typography>
                        </Box>
                        
                        <Box sx={{ flex: 1 }}>
                          <Chip
                            label={service.category}
                            size="small"
                            sx={{
                              bgcolor: alpha(service.color, 0.1),
                              color: service.color,
                              fontWeight: 600,
                              mb: 1,
                            }}
                          />
                          
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              color: '#FFFFFF',
                              fontSize: '1.5rem',
                              lineHeight: 1.3,
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: '#A0A0A0',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          minHeight: 60,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ mb: 4 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 2, 
                            color: '#00FF88',
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}
                        >
                          Key Features
                        </Typography>
                        <List dense sx={{ mb: 0 }}>
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckCircleIcon sx={{ fontSize: 16, color: service.color }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={feature} 
                                primaryTypographyProps={{
                                  fontSize: '0.85rem',
                                  color: '#CCCCCC',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{
                          borderColor: alpha(service.color, 0.3),
                          color: service.color,
                          fontWeight: 600,
                          py: 1.2,
                          '&:hover': {
                            borderColor: service.color,
                            backgroundColor: alpha(service.color, 0.1),
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        Get This Service
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Detailed Services Accordion */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#121218',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Service Details
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#A0A0A0',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              In-depth look at how we deliver each service
            </Typography>
          </Box>

          {detailedServices.slice(0, 3).map((service, index) => (
            <Accordion
              key={service.title}
              sx={{
                bgcolor: '#0F172A',
                backdropFilter: 'blur(10px)',
                border: '2px solid',
                borderColor: alpha(service.color, 0.3),
                mb: 3,
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: service.color,
                  boxShadow: `0 20px 40px ${alpha(service.color, 0.2)}`,
                },
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: service.color }} />}
                sx={{
                  py: 3,
                  px: 4,
                  bgcolor: alpha(service.color, 0.05),
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    gap: 3,
                  },
                  '&:hover': {
                    bgcolor: alpha(service.color, 0.1),
                  }
                }}
              >
                <Chip
                  label={`0${index + 1}`}
                  sx={{
                    bgcolor: service.color,
                    color: '#121218',
                    fontWeight: 800,
                    width: 45,
                    height: 45,
                    fontSize: '1.2rem',
                    boxShadow: `0 0 20px ${alpha(service.color, 0.5)}`,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFFFFF', mb: 0.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="#A0A0A0">
                    {service.description}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: 3, 
                        bgcolor: alpha(service.color, 0.05),
                        borderRadius: 3,
                        border: `1px solid ${alpha(service.color, 0.1)}`,
                      }}>
                        <Typography variant="h6" sx={{ mb: 2, color: service.color, fontWeight: 600 }}>
                          Key Features
                        </Typography>
                        <List>
                          {service.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircleIcon sx={{ color: service.color }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={feature} 
                                primaryTypographyProps={{ color: '#CCCCCC' }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: 3, 
                        bgcolor: alpha(service.color, 0.05),
                        borderRadius: 3,
                        border: `1px solid ${alpha(service.color, 0.1)}`,
                      }}>
                        <Typography variant="h6" sx={{ mb: 2, color: service.color, fontWeight: 600 }}>
                          Our Process
                        </Typography>
                        <List>
                          {service.process.map((item, idx) => (
                            <ListItem key={idx} sx={{ px: 0, alignItems: 'flex-start', mb: 2 }}>
                              <ListItemIcon sx={{ minWidth: 40, pt: 0.5 }}>
                                <Chip
                                  label={idx + 1}
                                  size="small"
                                  sx={{
                                    bgcolor: service.color,
                                    color: '#121218',
                                    fontWeight: 700,
                                    minWidth: 30,
                                    height: 30,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText 
                                primary={
                                  <Box>
                                    <Typography variant="subtitle1" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                                      {item.step}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#A0A0A0', mt: 0.5 }}>
                                      {item.description}
                                    </Typography>
                                  </Box>
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="xl">
          <Paper
            sx={{
              p: { xs: 4, md: 8 },
              bgcolor: '#121218',
              backdropFilter: 'blur(10px)',
              border: '2px solid',
              borderColor: '#00FF88',
              borderRadius: 4,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
                zIndex: 0,
              }
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: '#00FF88',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Ready to Transform with AI?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  color: '#A0A0A0',
                  maxWidth: 600,
                  mx: 'auto',
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                }}
              >
                Let's discuss how our AI services can drive growth and efficiency
                in your organization. Schedule a consultation with our AI experts.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                  color: '#121218',
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
                  }
                }}
              >
                Schedule Consultation
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </motion.div>
  );
};

export default ServicesPage;