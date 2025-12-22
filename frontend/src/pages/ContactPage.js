import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  IconButton,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { contactApi } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await contactApi.submitContact(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subcontent: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'info@aisolutions.com',
      subcontent: 'Response within 24 hours',
    },
    {
      icon: <LocationIcon />,
      title: 'Location',
      content: '123 AI Street',
      subcontent: 'San Francisco, CA 94107',
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
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
                Get in Touch
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                Have questions about our AI solutions? Ready to start your AI journey?
                Our team is here to help you transform your business with artificial intelligence.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Contact Form & Info */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                sx={{
                  p: { xs: 3, md: 6 },
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  Send us a Message
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      >
                        {loading ? <CircularProgress size={24} /> : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'background.default',
                            borderRadius: '50%',
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 1,
                              fontWeight: 600,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 0.5,
                              fontWeight: 500,
                            }}
                          >
                            {info.content}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.subcontent}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                      }}
                    >
                      Connect With Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {socialLinks.map((social) => (
                        <IconButton
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            '&:hover': {
                              bgcolor: 'primary.main',
                              color: 'background.default',
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Visit Our Office
          </Typography>
          <Paper
            sx={{
              height: 400,
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <LocationIcon sx={{ fontSize: 80, color: 'primary.main' }} />
              <Typography variant="h5" align="center">
                123 AI Street
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                San Francisco, CA 94107
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                (Map integration available with Google Maps API key)
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;