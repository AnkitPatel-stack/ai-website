import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companyHistory = [
    { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses' },
    { year: '2019', title: 'First Major Client', description: 'Secured partnership with Fortune 500 company' },
    { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary AI platform' },
    { year: '2021', title: 'International Expansion', description: 'Opened offices in Europe and Asia' },
    { year: '2022', title: 'Team Growth', description: 'Expanded team to 50+ AI experts' },
    { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation' },
  ];

  const values = [
    { title: 'Innovation', description: 'Constantly pushing boundaries of what AI can achieve' },
    { title: 'Excellence', description: 'Delivering the highest quality solutions' },
    { title: 'Integrity', description: 'Transparent and ethical AI practices' },
    { title: 'Collaboration', description: 'Working closely with clients as partners' },
    { title: 'Impact', description: 'Driving meaningful business transformation' },
    { title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
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
                  About Our AI Company
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.8,
                  }}
                >
                  We are pioneers in artificial intelligence, transforming how businesses
                  operate through innovative AI solutions. Our mission is to make advanced
                  AI accessible and impactful for organizations worldwide.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    borderRadius: 2,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    To empower businesses with cutting-edge AI solutions that drive innovation,
                    efficiency, and growth. We believe that artificial intelligence should be
                    accessible, understandable, and beneficial for all organizations, regardless
                    of size or industry.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    To be the world's most trusted AI partner, leading the digital transformation
                    of industries through ethical, innovative, and impactful artificial intelligence.
                    We envision a future where AI enhances human potential and creates unprecedented
                    opportunities for growth and discovery.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Company History Timeline */}
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
              Our Journey
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              From humble beginnings to industry leadership
            </Typography>
          </Box>

          <Box ref={ref}>
            {companyHistory.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      textAlign: { xs: 'center', md: index % 2 === 0 ? 'right' : 'left' },
                      p: 2,
                    }}
                  >
                    <Chip
                      label={item.year}
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'background.default',
                        fontSize: '1.2rem',
                        px: 2,
                        py: 1,
                        mb: 1,
                      }}
                    />
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      position: 'relative',
                      flexShrink: 0,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        bgcolor: 'background.default',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
                      p: 2,
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
              Our Values
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: 'primary.main',
                        boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: 'primary.main',
                          color: 'background.default',
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          mb: 2,
                          mx: 'auto',
                        }}
                      >
                        {value.title.charAt(0)}
                      </Avatar>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;