// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     Company: [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/about#team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'Press', href: '/press' },
//     ],
//     Services: [
//       { label: 'AI Strategy', href: '/services#strategy' },
//       { label: 'ML Development', href: '/services#ml' },
//       { label: 'NLP Solutions', href: '/services#nlp' },
//       { label: 'Computer Vision', href: '/services#vision' },
//     ],
//     Resources: [
//       { label: 'Blog', href: '/blog' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'Documentation', href: '/docs' },
//       { label: 'API Reference', href: '/api' },
//     ],
//     Legal: [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'GDPR', href: '/gdpr' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
//     { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
//     { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
//     { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#121218',
//         borderTop: '1px solid',
//         borderColor: 'divider',
//         pt: 6,
//         pb: 3,
//       }}
//     >
//       <Container maxWidth="xl">
//         <Grid container spacing={4}>
//           {/* Company Info */}
//           <Grid item xs={12} md={4}>
//             <Typography
//               variant="h6"
//               sx={{ mb: 2, color: '#00FF88', fontWeight: 700 }}
//             >
//               AI SOLUTIONS
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//               Leading the AI revolution with enterprise-grade solutions that
//               transform businesses through innovation, efficiency, and growth.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
//               {socialLinks.map((social) => (
//                 <IconButton
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     color: 'text.secondary',
//                     '&:hover': {
//                       color: '#00FF88',
//                       transform: 'translateY(-2px)',
//                     },
//                     transition: 'all 0.3s ease',
//                   }}
//                 >
//                   {social.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Grid>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <Grid item xs={6} sm={3} md={2} key={category}>
//               <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//                 {category}
//               </Typography>
//               <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                 {links.map((link) => (
//                   <Box component="li" key={link.label} sx={{ mb: 1 }}>
//                     <Link
//                       href={link.href}
//                       color="text.secondary"
//                       underline="hover"
//                       sx={{
//                         '&:hover': {
//                           color: '#00FF88',
//                         },
//                       }}
//                     >
//                       {link.label}
//                     </Link>
//                   </Box>
//                 ))}
//               </Box>
//             </Grid>
//           ))}

//           {/* Contact Info */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//               Contact Us
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <LocationOnIcon fontSize="small" color="primary" />
//                 <Typography variant="body2" color="text.secondary">
//                   123 AI Street, San Francisco, CA 94107
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <PhoneIcon fontSize="small" color="primary" />
//                 <Typography variant="body2" color="text.secondary">
//                   +1 (555) 123-4567
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <EmailIcon fontSize="small" color="primary" />
//                 <Typography variant="body2" color="text.secondary">
//                   info@aisolutions.com
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 4 }} />

//         {/* Copyright */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', sm: 'row' },
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <Typography variant="body2" color="text.secondary">
//             © {currentYear} AI Solutions. All rights reserved.
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
//             Built with ❤️ for the AI revolution
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Divider,
//   alpha,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   YouTube as YouTubeIcon,
//   Facebook as FacebookIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     Company: [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'Press', href: '/press' },
//     ],
//     Services: [
//       { label: 'AI Strategy', href: '/services#ai-strategy' },
//       { label: 'ML Development', href: '/services#ml-development' },
//       { label: 'NLP Solutions', href: '/services#nlp-solutions' },
//       { label: 'Computer Vision', href: '/services#computer-vision' },
//     ],
//     Resources: [
//       { label: 'Blog', href: '/blog' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'Documentation', href: '/docs' },
//       { label: 'Support', href: '/support' },
//     ],
//     Legal: [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'Security', href: '/security' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
//     { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com' },
//     { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com' },
//     { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#121218',
//         borderTop: '1px solid',
//         borderColor: 'divider',
//         pt: 8,
//         pb: 4,
//       }}
//     >
//       <Container maxWidth="xl">
//         <Grid container spacing={6}>
//           {/* Logo and Description */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 800,
//                   background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 AIVISION
//               </Typography>
//               <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
//                 Transforming businesses with cutting-edge AI solutions. We deliver practical,
//                 measurable results through innovative artificial intelligence technologies.
//               </Typography>
              
//               {/* Social Links */}
//               <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
//                 {socialLinks.map((social, index) => (
//                   <motion.div
//                     key={social.label}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <IconButton
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         bgcolor: 'rgba(18, 18, 24, 0.5)' ,
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           bgcolor: '#00FF88',
//                           color: 'background.default',
//                         },
//                       }}
//                     >
//                       {social.icon}
//                     </IconButton>
//                   </motion.div>
//                 ))}
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links], index) => (
//             <Grid item xs={6} sm={3} md={2} key={category}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 3,
//                     fontWeight: 600,
//                     color: 'text.primary',
//                   }}
//                 >
//                   {category}
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                   {links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         sx={{
//                           display: 'block',
//                           mb: 1.5,
//                           color: 'text.secondary',
//                           textDecoration: 'none',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             color: '#00FF88',
//                             transform: 'translateX(4px)',
//                           },
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}

//           {/* Newsletter */}
//           <Grid item xs={12} md={3}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 600,
//                   color: 'text.primary',
//                 }}
//               >
//                 Stay Updated
//               </Typography>
//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 Subscribe to our newsletter for the latest AI insights and updates.
//               </Typography>
//               <Box
//                 component="form"
//                 sx={{
//                   display: 'flex',
//                   gap: 1,
//                   mb: 3,
//                 }}
//               >
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   style={{
//                     flex: 1,
//                     padding: '12px 16px',
//                     borderRadius: '8px',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     background: alpha('#000', 0.2),
//                     color: '#fff',
//                     fontSize: '14px',
//                     outline: 'none',
//                   }}
//                 />
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   style={{
//                     padding: '12px 24px',
//                     borderRadius: '8px',
//                     background: 'linear-gradient(135deg, #00FF88 0%, #00CC6D 100%)',
//                     color: '#000',
//                     border: 'none',
//                     fontWeight: 600,
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Subscribe
//                 </motion.button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 6, borderColor: 'divider' }} />

//         {/* Copyright */}
//         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="body2" color="text.secondary">
//             © {currentYear} AIVISION. All rights reserved.
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 2, md: 0 } }}>
//             Made with ❤️ for the AI community
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material'; // Remove alpha import
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
    Services: [
      { label: 'AI Strategy', href: '/services#ai-strategy' },
      { label: 'ML Development', href: '/services#ml-development' },
      { label: 'NLP Solutions', href: '/services#nlp-solutions' },
      { label: 'Computer Vision', href: '/services#computer-vision' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com' },
    { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com' },
    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#121218', // Use hex color directly
        borderTop: '1px solid',
        borderColor: '#333333', // Use hex color for divider
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AIVISION
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#A0A0A0' }}>
                Transforming businesses with cutting-edge AI solutions. We deliver practical,
                measurable results through innovative artificial intelligence technologies.
              </Typography>
              
              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: '#1a1a1a', // Dark background
                        border: '1px solid',
                        borderColor: '#333333',
                        '&:hover': {
                          bgcolor: '#00FF88',
                          color: '#121218', // Dark text on hover
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  {category}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        sx={{
                          display: 'block',
                          mb: 1.5,
                          color: '#A0A0A0',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#00FF88',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: '#FFFFFF',
                }}
              >
                Stay Updated
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#A0A0A0' }}>
                Subscribe to our newsletter for the latest AI insights and updates.
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  gap: 1,
                  mb: 3,
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #333333',
                    background: '#1a1a1a',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #00FF88 0%, #00CC6D 100%)',
                    color: '#121218',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Subscribe
                </motion.button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: '#333333' }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
            © {currentYear} AIVISION. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 }, color: '#A0A0A0' }}>
            Made with ❤️ for the AI community
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;