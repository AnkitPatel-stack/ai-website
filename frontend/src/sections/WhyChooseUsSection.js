import React, { useState } from 'react';
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

const WhyChooseUsSection = () => {
  const [content] = useState({
    why_title: 'Why Choose Our AI Solutions',
    why_points: [
      {
        title: 'Enterprise-Grade Security',
        description: 'Bank-level security protocols and compliance standards for all solutions.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Designed to grow with your business from day one.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear, predictable pricing with no hidden fees.',
      },
      {
        title: '24/7 Expert Support',
        description: 'Round-the-clock support from AI specialists.',
      },
      {
        title: 'Proven Track Record',
        description: 'Successfully delivered solutions for Fortune 500 companies.',
      },
      {
        title: 'Continuous Innovation',
        description: 'Stay ahead with cutting-edge AI research and development.',
      },
    ],
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              {content.why_title}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {content.why_points.map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={point.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#00FF88',
                      boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: '#00FF88',
                          fontSize: '1.5rem',
                        }}
                      >
                        ✓
                      </Box>
                      {point.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
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