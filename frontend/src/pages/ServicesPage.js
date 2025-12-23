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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceCategories = [
    {
      title: 'AI Strategy',
      description: 'Develop comprehensive AI roadmaps aligned with business objectives',
      icon: '🎯',
      color: '#00FF88',
    },
    {
      title: 'ML Development',
      description: 'Custom machine learning models for specific use cases',
      icon: '🤖',
      color: '#8A2BE2',
    },
    {
      title: 'NLP Solutions',
      description: 'Advanced natural language processing for text analysis',
      icon: '💬',
      color: '#FF6B6B',
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automation and insights',
      icon: '👁️',
      color: '#4ECDC4',
    },
  ];

  const detailedServices = [
    {
      title: 'AI Strategy & Consulting',
      category: 'AI Strategy',
      description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
      features: [
        'AI Readiness Assessment',
        'Strategy Development',
        'Roadmap Planning',
        'Implementation Guidance',
        'ROI Analysis',
      ],
      process: [
        'Discovery & Assessment',
        'Strategy Development',
        'Implementation Planning',
        'Execution Support',
        'Optimization',
      ],
      deliverables: ['AI Strategy Document', 'Implementation Roadmap', 'ROI Analysis Report'],
    },
    {
      title: 'Machine Learning Development',
      category: 'ML Development',
      description: 'Custom ML models built and deployed for your specific use cases.',
      features: [
        'Custom Model Development',
        'Data Preparation',
        'Model Training & Validation',
        'Deployment & Integration',
        'Monitoring & Maintenance',
      ],
      process: [
        'Requirement Analysis',
        'Data Collection & Preparation',
        'Model Development',
        'Testing & Validation',
        'Deployment',
      ],
      deliverables: ['Trained ML Models', 'API Endpoints', 'Documentation', 'Monitoring Dashboard'],
    },
    {
      title: 'Natural Language Processing',
      category: 'NLP Solutions',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Chatbot Development',
        'Document Analysis',
      ],
      process: [
        'Use Case Analysis',
        'Data Annotation',
        'Model Selection',
        'Training & Fine-tuning',
        'Integration',
      ],
      deliverables: ['NLP Models', 'Chatbot System', 'API Documentation', 'Analytics Dashboard'],
    },
    {
      title: 'Computer Vision Solutions',
      category: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and insights.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'Quality Inspection',
      ],
      process: [
        'Problem Definition',
        'Data Collection',
        'Model Architecture',
        'Training & Validation',
        'Deployment',
      ],
      deliverables: ['CV Models', 'Processing Pipeline', 'Integration API', 'Analysis Reports'],
    },
    {
      title: 'AI Integration Services',
      category: 'AI Strategy',
      description: 'Seamlessly integrate AI capabilities into your existing systems.',
      features: [
        'API Development',
        'System Integration',
        'Data Pipeline Setup',
        'Cloud Deployment',
        'Legacy System Modernization',
      ],
      process: [
        'System Analysis',
        'Integration Planning',
        'API Development',
        'Testing',
        'Deployment & Monitoring',
      ],
      deliverables: ['Integrated System', 'API Documentation', 'Data Pipelines', 'Monitoring Tools'],
    },
    {
      title: 'AI Training & Support',
      category: 'AI Strategy',
      description: 'Comprehensive training and ongoing support for your teams.',
      features: [
        'Custom Training Programs',
        'Technical Workshops',
        'Documentation',
        '24/7 Support',
        'Performance Monitoring',
      ],
      process: [
        'Needs Assessment',
        'Program Development',
        'Training Delivery',
        'Knowledge Transfer',
        'Ongoing Support',
      ],
      deliverables: ['Training Materials', 'Workshop Sessions', 'Support Portal', 'Knowledge Base'],
    },
  ];

  const filteredServices = detailedServices.filter(
    (service) => tabValue === 0 || service.category === serviceCategories[tabValue - 1]?.title
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="Our Services"
                sx={{
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                  color: '#00FF88',
                  mb: 3,
                  px: 2,
                  py: 1,
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
                }}
              >
                Advanced AI Solutions
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                Comprehensive AI services designed to drive measurable results,
                efficiency, and growth for your business. From strategy to
                implementation, we deliver end-to-end AI capabilities.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#services-list"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Explore Services
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Service Categories */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#121218' }}>
        <Container maxWidth="xl">
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 6,
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 600,
                minHeight: 60,
              },
            }}
          >
            <Tab label="All Services" />
            {serviceCategories.map((category) => (
              <Tab
                key={category.title}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                    {category.title}
                  </Box>
                }
              />
            ))}
          </Tabs>

          <Grid container spacing={4} id="services-list" ref={ref}>
            {filteredServices.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${serviceCategories.find(c => c.title === service.category)?.color || '#00FF88'} 0%, transparent 100%)`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                        <Chip
                          label={service.category}
                          size="small"
                          sx={{
                            bgcolor: alpha(
                              serviceCategories.find(c => c.title === service.category)?.color || '#00FF88',
                              0.1
                            ),
                            color: serviceCategories.find(c => c.title === service.category)?.color || '#00FF88',
                          }}
                        />
                      </Box>
                      
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                        }}
                      >
                        {service.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
                          Key Features
                        </Typography>
                        <List dense>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircleIcon color="primary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
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
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Detailed Services */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 700,
              }}
            >
              Service Details
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              In-depth look at how we deliver each service
            </Typography>
          </Box>

          {detailedServices.slice(0, 4).map((service, index) => (
            <Accordion
              key={service.title}
              sx={{
                bgcolor: '#121218',
                border: '1px solid',
                borderColor: 'divider',
                mb: 3,
                borderRadius: 2,
                overflow: 'hidden',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  py: 3,
                  px: 4,
                  bgcolor: 'rgba(18, 18, 24, 0.5)' ,
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    gap: 3,
                  },
                }}
              >
                <Chip
                  label={`0${index + 1}`}
                  sx={{
                    bgcolor: '#00FF88',
                    color: 'background.default',
                    fontWeight: 700,
                    width: 40,
                    height: 40,
                    fontSize: '1.1rem',
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
                        Key Features
                      </Typography>
                      <List>
                        {service.features.map((feature, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ mb: 2, color: '#00FF88' }}>
                        Our Process
                      </Typography>
                      <List>
                        {service.process.map((step, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <Chip
                                label={idx + 1}
                                size="small"
                                sx={{
                                  bgcolor: '#00FF88',
                                  color: 'background.default',
                                  minWidth: 28,
                                  height: 28,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={step} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: 'background.default',
              border: '2px solid',
              borderColor: '#00FF88',
              borderRadius: 4,
              p: { xs: 4, md: 8 },
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
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: '#00FF88',
                fontWeight: 700,
              }}
            >
              Ready to Transform with AI?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Let's discuss how our AI services can drive growth and efficiency
              in your organization.
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
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default ServicesPage;