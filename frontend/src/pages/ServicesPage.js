import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contentApi } from '../services/api';

const ServicesPage = () => {
  const [content, setContent] = useState({
    services_list: [],
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await contentApi.getPageContent('home', 'services');
        setContent(data);
      } catch (error) {
        console.error('Failed to load services content:', error);
      }
    };
    loadContent();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceDetails = [
    {
      title: 'AI Strategy & Consulting',
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
    },
    {
      title: 'Machine Learning Development',
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
    },
    {
      title: 'Natural Language Processing',
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
    },
    {
      title: 'Computer Vision',
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
    },
    {
      title: 'AI Integration',
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
    },
    {
      title: 'AI Training & Support',
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
    },
  ];

  return (
    <Box>
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
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 800,
                }}
              >
                AI Services
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                Comprehensive AI solutions tailored to drive innovation, efficiency,
                and growth for your business. From strategy to implementation,
                we deliver end-to-end AI capabilities.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#services-list"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'background.default',
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Explore Our Services
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box id="services-list" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: 'primary.main',
                fontWeight: 700,
              }}
            >
              Our AI Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              End-to-end AI solutions for every business need
            </Typography>
          </Box>

          <Grid container spacing={4} ref={ref}>
            {content.services_list?.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          minHeight: 64,
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
                          minHeight: 80,
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.light',
                            bgcolor: 'rgba(0, 255, 136, 0.1)',
                          },
                        }}
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

      {/* Service Details */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: 'primary.main',
                fontWeight: 700,
              }}
            >
              Detailed Service Overview
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

          {serviceDetails.map((service, index) => (
            <Accordion
              key={service.title}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                mb: 2,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  py: 3,
                  px: 4,
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    gap: 2,
                  },
                }}
              >
                <Chip
                  label={`0${index + 1}`}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'background.default',
                    fontWeight: 600,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
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
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
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
                                bgcolor: 'primary.main',
                                color: 'background.default',
                                minWidth: 24,
                                height: 24,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={step} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: 'background.default',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: 'primary.main',
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
              href="/contact"
              sx={{
                bgcolor: 'primary.main',
                color: 'background.default',
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;