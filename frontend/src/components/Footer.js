import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
    Services: [
      { label: 'AI Strategy', href: '/services#strategy' },
      { label: 'ML Development', href: '/services#ml' },
      { label: 'NLP Solutions', href: '/services#nlp' },
      { label: 'Computer Vision', href: '/services#vision' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
            >
              AI SOLUTIONS
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Leading the AI revolution with enterprise-grade solutions that
              transform businesses through innovation, efficiency, and growth.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                {category}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      underline="hover"
                      sx={{
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  123 AI Street, San Francisco, CA 94107
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  info@aisolutions.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} AI Solutions. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
            Built with ❤️ for the AI revolution
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;