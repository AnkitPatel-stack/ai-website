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

// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Divider,
// } from '@mui/material'; // Remove alpha import
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
//         bgcolor: '#121218', // Use hex color directly
//         borderTop: '1px solid',
//         borderColor: '#333333', // Use hex color for divider
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
//               <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#A0A0A0' }}>
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
//                         bgcolor: '#1a1a1a', // Dark background
//                         border: '1px solid',
//                         borderColor: '#333333',
//                         '&:hover': {
//                           bgcolor: '#00FF88',
//                           color: '#121218', // Dark text on hover
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
//                     color: '#FFFFFF',
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
//                           color: '#A0A0A0',
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
//                   color: '#FFFFFF',
//                 }}
//               >
//                 Stay Updated
//               </Typography>
//               <Typography variant="body2" sx={{ mb: 2, color: '#A0A0A0' }}>
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
//                     border: '1px solid #333333',
//                     background: '#1a1a1a',
//                     color: '#FFFFFF',
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
//                     color: '#121218',
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

//         <Divider sx={{ my: 6, borderColor: '#333333' }} />

//         {/* Copyright */}
//         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//             © {currentYear} AIVISION. All rights reserved.
//           </Typography>
//           <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 }, color: '#A0A0A0' }}>
//             Made with ❤️ for the AI community
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
//   Button,
//   TextField,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   YouTube as YouTubeIcon,
//   Email as EmailIcon,
//   SmartToy as SmartToyIcon,
//   Bolt as BoltIcon,
//   Timeline as TimelineIcon,
//   Security as SecurityIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     'AI Solutions': [
//       { label: 'AI Strategy', href: '/services#ai-strategy' },
//       { label: 'Machine Learning', href: '/services#ml-development' },
//       { label: 'Natural Language Processing', href: '/services#nlp-solutions' },
//       { label: 'Computer Vision', href: '/services#computer-vision' },
//     ],
//     'AI Resources': [
//       { label: 'AI Research', href: '/research' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'AI Documentation', href: '/docs' },
//       { label: 'AI Tools', href: '/tools' },
//     ],
//     'Company': [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'AI Ethics', href: '/ethics' },
//     ],
//     'Legal': [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'AI Security', href: '/security' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2' },
//     { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com', color: '#333333' },
//     { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com', color: '#FF0000' },
//     { icon: <EmailIcon />, label: 'Email', href: 'mailto:contact@aivision.com', color: '#EA4335' },
//   ];

//   const aiFeatures = [
//     { icon: <SmartToyIcon />, label: 'Advanced AI Models', value: '500+' },
//     { icon: <BoltIcon />, label: 'AI Processing Speed', value: '99.9%' },
//     { icon: <TimelineIcon />, label: 'Neural Networks', value: '200+' },
//     { icon: <SecurityIcon />, label: 'AI Security', value: '100%' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#0A0A0F',
//         position: 'relative',
//         overflow: 'hidden',
//         pt: 8,
//         pb: 4,
//         borderTop: '2px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//       }}
//     >
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.02) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.02) 50%, transparent 51%)
//           `,
//           backgroundSize: '60px 60px',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* Floating AI Particles */}
//       {[...Array(15)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: 'absolute',
//             width: Math.random() * 6 + 2,
//             height: Math.random() * 6 + 2,
//             borderRadius: '50%',
//             background: i % 3 === 0 ? '#00FF88' : i % 3 === 1 ? '#8A2BE2' : '#0066FF',
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             opacity: Math.random() * 0.2 + 0.1,
//             animation: `particleFloat ${Math.random() * 15 + 10}s infinite ${Math.random() * 5}s`,
//             '@keyframes particleFloat': {
//               '0%, 100%': { transform: 'translate(0, 0)' },
//               '33%': { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)` },
//               '66%': { transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)` }
//             }
//           }}
//         />
//       ))}

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* AI Features Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Grid container spacing={3} sx={{ mb: 6 }}>
//             {aiFeatures.map((feature, index) => (
//               <Grid item xs={6} sm={3} key={feature.label}>
//                 <Box
//                   sx={{
//                     textAlign: 'center',
//                     p: 3,
//                     bgcolor: 'rgba(18, 18, 24, 0.7)',
//                     borderRadius: 2,
//                     border: '1px solid',
//                     borderColor: 'rgba(0, 255, 136, 0.2)',
//                     backdropFilter: 'blur(10px)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                       borderColor: '#00FF88',
//                       transform: 'translateY(-5px)',
//                     }
//                   }}
//                 >
//                   <Box sx={{ color: '#00FF88', mb: 1 }}>
//                     {feature.icon}
//                   </Box>
//                   <Typography variant="h4" sx={{ color: '#00FF88', fontWeight: 700, mb: 0.5 }}>
//                     {feature.value}
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                     {feature.label}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>

//         <Grid container spacing={6}>
//           {/* Logo and Description */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                 <SmartToyIcon sx={{ color: '#00FF88', fontSize: 32, mr: 2 }} />
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: 900,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 50%, #0066FF 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     fontSize: '2rem',
//                     letterSpacing: '1px',
//                   }}
//                 >
//                   AIVISION
//                 </Typography>
//               </Box>
//               <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#A0A0A0' }}>
//                 Pioneering the future of artificial intelligence. We build intelligent solutions 
//                 that transform businesses through cutting-edge AI technology and innovative algorithms.
//               </Typography>
              
//               {/* Social Links */}
//               <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
//                 {socialLinks.map((social, index) => (
//                   <motion.div
//                     key={social.label}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <IconButton
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         bgcolor: 'rgba(26, 26, 32, 0.8)',
//                         border: '2px solid',
//                         borderColor: social.color,
//                         color: '#FFFFFF',
//                         '&:hover': {
//                           bgcolor: social.color,
//                           transform: 'translateY(-3px)',
//                           boxShadow: `0 5px 15px ${social.color}40`,
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
//                     fontWeight: 700,
//                     color: '#00FF88',
//                     fontSize: '1rem',
//                     textTransform: 'uppercase',
//                     letterSpacing: '1px',
//                     position: 'relative',
//                     display: 'inline-block',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: -8,
//                       left: 0,
//                       width: '30px',
//                       height: '2px',
//                       background: 'linear-gradient(90deg, #00FF88, transparent)',
//                       borderRadius: 1,
//                     }
//                   }}
//                 >
//                   {category}
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                   {links.map((link) => (
//                     <motion.li
//                       key={link.label}
//                       whileHover={{ x: 5 }}
//                       style={{ marginBottom: '12px' }}
//                     >
//                       <Link
//                         href={link.href}
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1,
//                           color: '#A0A0A0',
//                           textDecoration: 'none',
//                           transition: 'all 0.3s ease',
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             color: '#00FF88',
//                           },
//                           '&::before': {
//                             content: '"▸"',
//                             color: '#00FF88',
//                             fontSize: '12px',
//                             transition: 'all 0.3s ease',
//                           }
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}

//           {/* AI Newsletter */}
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
//                   fontWeight: 700,
//                   color: '#00FF88',
//                   fontSize: '1rem',
//                   textTransform: 'uppercase',
//                   letterSpacing: '1px',
//                 }}
//               >
//                 AI Insights
//               </Typography>
//               <Typography variant="body2" sx={{ mb: 3, color: '#A0A0A0', fontSize: '0.9rem' }}>
//                 Get the latest AI research, trends, and breakthroughs delivered to your inbox.
//               </Typography>
//               <Box component="form" sx={{ mb: 3 }}>
//                 <TextField
//                   fullWidth
//                   placeholder="Your email address"
//                   variant="outlined"
//                   size="small"
//                   sx={{
//                     mb: 2,
//                     '& .MuiOutlinedInput-root': {
//                       bgcolor: 'rgba(26, 26, 32, 0.8)',
//                       borderColor: 'rgba(255,255,255,0.1)',
//                       color: '#FFFFFF',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                       },
//                       '&.Mui-focused': {
//                         borderColor: '#00FF88',
//                       }
//                     },
//                     '& .MuiOutlinedInput-input': {
//                       color: '#FFFFFF',
//                       fontSize: '0.9rem',
//                     }
//                   }}
//                 />
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     endIcon={<BoltIcon />}
//                     sx={{
//                       bgcolor: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       color: '#121218',
//                       fontWeight: 700,
//                       py: 1,
//                       '&:hover': {
//                         background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       }
//                     }}
//                   >
//                     Subscribe
//                   </Button>
//                 </motion.div>
//               </Box>

//               {/* AI Chatbot Indicator */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 4 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box
//                     sx={{
//                       width: 10,
//                       height: 10,
//                       borderRadius: '50%',
//                       bgcolor: '#00FF88',
//                       mr: 1,
//                       animation: 'aiPulse 2s infinite',
//                       '@keyframes aiPulse': {
//                         '0%, 100%': { 
//                           opacity: 0.3,
//                           boxShadow: '0 0 5px #00FF88'
//                         },
//                         '50%': { 
//                           opacity: 1,
//                           boxShadow: '0 0 15px #00FF88'
//                         }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//                     AI Assistant Online
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

//         <Divider sx={{ 
//           my: 6, 
//           borderColor: 'rgba(0, 255, 136, 0.2)',
//           borderWidth: '1px',
//         }} />

//         {/* Copyright & AI Badge */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: { xs: 'column', md: 'row' }, 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           gap: 3,
//         }}>
//           <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//             © {currentYear} AIVISION AI Technologies. All rights reserved.
//           </Typography>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Box
//                 sx={{
//                   width: 8,
//                   height: 8,
//                   borderRadius: '50%',
//                   bgcolor: '#00FF88',
//                   animation: 'aiPulse 1.5s infinite'
//                 }}
//               />
//               <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                 Powered by Advanced AI
//               </Typography>
//             </Box>
            
//             <Typography variant="caption" sx={{ 
//               color: '#A0A0A0',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//             }}>
//               <span style={{ color: '#00FF88' }}>⚡</span>
//               AI Processing
//             </Typography>
//           </Box>
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
//   Button,
//   TextField,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   YouTube as YouTubeIcon,
//   Email as EmailIcon,
//   SmartToy as SmartToyIcon,
//   Bolt as BoltIcon,
//   Timeline as TimelineIcon,
//   Security as SecurityIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import logo from '../assets/log.png'; 

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     'AI Solutions': [
//       { label: 'AI Strategy', href: '/services#ai-strategy' },
//       { label: 'Machine Learning', href: '/services#ml-development' },
//       { label: 'Natural Language Processing', href: '/services#nlp-solutions' },
//       { label: 'Computer Vision', href: '/services#computer-vision' },
//     ],
//     'AI Resources': [
//       { label: 'AI Research', href: '/research' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'AI Documentation', href: '/docs' },
//       { label: 'AI Tools', href: '/tools' },
//     ],
//     'Company': [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'AI Ethics', href: '/ethics' },
//     ],
//     'Legal': [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'AI Security', href: '/security' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2' },
//     { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com', color: '#333333' },
//     { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com', color: '#FF0000' },
//     { icon: <EmailIcon />, label: 'Email', href: 'mailto:contact@aivision.com', color: '#EA4335' },
//   ];

//   const aiFeatures = [
//     { icon: <SmartToyIcon />, label: 'Advanced AI Models', value: '500+' },
//     { icon: <BoltIcon />, label: 'AI Processing Speed', value: '99.9%' },
//     { icon: <TimelineIcon />, label: 'Neural Networks', value: '200+' },
//     { icon: <SecurityIcon />, label: 'AI Security', value: '100%' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#0A0A0F',
//         position: 'relative',
//         overflow: 'hidden',
//         pt: 8,
//         pb: 4,
//         borderTop: '2px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//       }}
//     >
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.02) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.02) 50%, transparent 51%)
//           `,
//           backgroundSize: '60px 60px',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* Floating AI Particles */}
//       {[...Array(15)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: 'absolute',
//             width: Math.random() * 6 + 2,
//             height: Math.random() * 6 + 2,
//             borderRadius: '50%',
//             background: i % 3 === 0 ? '#00FF88' : i % 3 === 1 ? '#8A2BE2' : '#0066FF',
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             opacity: Math.random() * 0.2 + 0.1,
//             animation: `particleFloat ${Math.random() * 15 + 10}s infinite ${Math.random() * 5}s`,
//             '@keyframes particleFloat': {
//               '0%, 100%': { transform: 'translate(0, 0)' },
//               '33%': { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)` },
//               '66%': { transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)` }
//             }
//           }}
//         />
//       ))}

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* AI Features Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Grid container spacing={3} sx={{ mb: 6 }}>
//             {aiFeatures.map((feature, index) => (
//               <Grid item xs={6} sm={3} key={feature.label}>
//                 <Box
//                   sx={{
//                     textAlign: 'center',
//                     p: 3,
//                     bgcolor: 'rgba(18, 18, 24, 0.7)',
//                     borderRadius: 2,
//                     border: '1px solid',
//                     borderColor: 'rgba(0, 255, 136, 0.2)',
//                     backdropFilter: 'blur(10px)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       bgcolor: 'rgba(0, 255, 136, 0.1)',
//                       borderColor: '#00FF88',
//                       transform: 'translateY(-5px)',
//                     }
//                   }}
//                 >
//                   <Box sx={{ color: '#00FF88', mb: 1 }}>
//                     {feature.icon}
//                   </Box>
//                   <Typography variant="h4" sx={{ color: '#00FF88', fontWeight: 700, mb: 0.5 }}>
//                     {feature.value}
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                     {feature.label}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>

//         <Grid container spacing={6}>
//           {/* Logo and Description */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                
//                 <Box
//                   component="img"
//                   src={logo} 
//                   alt="Logo"
//                   sx={{
//                     height: 120,
//                     width: 'auto',
//                     mr: 2,
//                   }}
//                 />
//               </Box>
//               <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#A0A0A0' }}>
//                 Pioneering the future of artificial intelligence. We build intelligent solutions 
//                 that transform businesses through cutting-edge AI technology and innovative algorithms.
//               </Typography>
              
//               {/* Social Links */}
//               <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
//                 {socialLinks.map((social, index) => (
//                   <motion.div
//                     key={social.label}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <IconButton
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         bgcolor: 'rgba(26, 26, 32, 0.8)',
//                         border: '2px solid',
//                         borderColor: social.color,
//                         color: '#FFFFFF',
//                         '&:hover': {
//                           bgcolor: social.color,
//                           transform: 'translateY(-3px)',
//                           boxShadow: `0 5px 15px ${social.color}40`,
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
//                     fontWeight: 700,
//                     color: '#00FF88',
//                     fontSize: '1rem',
//                     textTransform: 'uppercase',
//                     letterSpacing: '1px',
//                     position: 'relative',
//                     display: 'inline-block',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: -8,
//                       left: 0,
//                       width: '30px',
//                       height: '2px',
//                       background: 'linear-gradient(90deg, #00FF88, transparent)',
//                       borderRadius: 1,
//                     }
//                   }}
//                 >
//                   {category}
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                   {links.map((link) => (
//                     <motion.li
//                       key={link.label}
//                       whileHover={{ x: 5 }}
//                       style={{ marginBottom: '12px' }}
//                     >
//                       <Link
//                         href={link.href}
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1,
//                           color: '#A0A0A0',
//                           textDecoration: 'none',
//                           transition: 'all 0.3s ease',
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             color: '#00FF88',
//                           },
//                           '&::before': {
//                             content: '"▸"',
//                             color: '#00FF88',
//                             fontSize: '12px',
//                             transition: 'all 0.3s ease',
//                           }
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}

//           {/* AI Newsletter */}
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
//                   fontWeight: 700,
//                   color: '#00FF88',
//                   fontSize: '1rem',
//                   textTransform: 'uppercase',
//                   letterSpacing: '1px',
//                 }}
//               >
//                 AI Insights
//               </Typography>
//               <Typography variant="body2" sx={{ mb: 3, color: '#A0A0A0', fontSize: '0.9rem' }}>
//                 Get the latest AI research, trends, and breakthroughs delivered to your inbox.
//               </Typography>
//               <Box component="form" sx={{ mb: 3 }}>
//                 <TextField
//                   fullWidth
//                   placeholder="Your email address"
//                   variant="outlined"
//                   size="small"
//                   sx={{
//                     mb: 2,
//                     '& .MuiOutlinedInput-root': {
//                       bgcolor: 'rgba(26, 26, 32, 0.8)',
//                       borderColor: 'rgba(255,255,255,0.1)',
//                       color: '#FFFFFF',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                       },
//                       '&.Mui-focused': {
//                         borderColor: '#00FF88',
//                       }
//                     },
//                     '& .MuiOutlinedInput-input': {
//                       color: '#FFFFFF',
//                       fontSize: '0.9rem',
//                     }
//                   }}
//                 />
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     endIcon={<BoltIcon />}
//                     sx={{
//                       bgcolor: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       color: '#121218',
//                       fontWeight: 700,
//                       py: 1,
//                       '&:hover': {
//                         background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//                       }
//                     }}
//                   >
//                     Subscribe
//                   </Button>
//                 </motion.div>
//               </Box>

//               {/* AI Chatbot Indicator */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 4 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box
//                     sx={{
//                       width: 10,
//                       height: 10,
//                       borderRadius: '50%',
//                       bgcolor: '#00FF88',
//                       mr: 1,
//                       animation: 'aiPulse 2s infinite',
//                       '@keyframes aiPulse': {
//                         '0%, 100%': { 
//                           opacity: 0.3,
//                           boxShadow: '0 0 5px #00FF88'
//                         },
//                         '50%': { 
//                           opacity: 1,
//                           boxShadow: '0 0 15px #00FF88'
//                         }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//                     AI Assistant Online
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

//         <Divider sx={{ 
//           my: 6, 
//           borderColor: 'rgba(0, 255, 136, 0.2)',
//           borderWidth: '1px',
//         }} />

//         {/* Copyright & AI Badge */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: { xs: 'column', md: 'row' }, 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           gap: 3,
//         }}>
//           <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//             © {currentYear} AIVISION AI Technologies. All rights reserved.
//           </Typography>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Box
//                 sx={{
//                   width: 8,
//                   height: 8,
//                   borderRadius: '50%',
//                   bgcolor: '#00FF88',
//                   animation: 'aiPulse 1.5s infinite'
//                 }}
//               />
//               <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                 Powered by Advanced AI
//               </Typography>
//             </Box>
            
//             <Typography variant="caption" sx={{ 
//               color: '#A0A0A0',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//             }}>
//               <span style={{ color: '#00FF88' }}>⚡</span>
//               AI Processing
//             </Typography>
//           </Box>
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
//   Button,
//   TextField,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   Email as EmailIcon,
//   SmartToy as SmartToyIcon,
//   Bolt as BoltIcon,
//   Timeline as TimelineIcon,
//   Security as SecurityIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import Logo from './Logo';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     'Solutions': [
//       { label: 'AI Strategy', href: '/services#ai-strategy' },
//       { label: 'Machine Learning', href: '/services#ml-development' },
//       { label: 'NLP Solutions', href: '/services#nlp-solutions' },
//       { label: 'Computer Vision', href: '/services#computer-vision' },
//     ],
//     'Resources': [
//       { label: 'AI Research', href: '/research' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'Documentation', href: '/docs' },
//       { label: 'AI Tools', href: '/tools' },
//     ],
//     'Company': [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'Contact', href: '/contact' },
//     ],
//     'Legal': [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'Security', href: '/security' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#8A2BE2' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com', color: '#FF2D55' },
//     { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com', color: '#9370DB' },
//     { icon: <EmailIcon />, label: 'Email', href: 'mailto:contact@zenturatech.com', color: '#8A2BE2' },
//   ];

//   const aiFeatures = [
//     { icon: <SmartToyIcon />, label: 'AI Models', value: '500+' },
//     { icon: <BoltIcon />, label: 'Processing', value: '99.9%' },
//     { icon: <TimelineIcon />, label: 'Networks', value: '200+' },
//     { icon: <SecurityIcon />, label: 'Security', value: '100%' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#0A0A0F',
//         position: 'relative',
//         pt: 8,
//         pb: 6,
//         borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Logo and Company Info Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 6 }}>
//             {/* Logo - Use ImageExact variant for consistency */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
//               <Logo variant="ImageClean" size="large" />
//             </Box>
            
//             <Typography variant="body1" sx={{ 
//               mb: 4, 
//               lineHeight: 1.8, 
//               color: '#A0A0A0',
//               maxWidth: '600px',
//               mx: 'auto',
//               fontSize: '1rem',
//             }}>
//               Pioneering the future of artificial intelligence. We build intelligent solutions 
//               that transform businesses through cutting-edge AI technology.
//             </Typography>
            
//             {/* Social Links */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
//               {socialLinks.map((social, index) => (
//                 <motion.div
//                   key={social.label}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <IconButton
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     sx={{
//                       bgcolor: 'rgba(255, 255, 255, 0.05)',
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       color: '#FFFFFF',
//                       '&:hover': {
//                         bgcolor: social.color,
//                         borderColor: social.color,
//                       },
//                     }}
//                   >
//                     {social.icon}
//                   </IconButton>
//                 </motion.div>
//               ))}
//             </Box>
//           </Box>
//         </motion.div>

//         {/* Main Footer Content */}
//         <Grid container spacing={4}>
//           {/* Contact Info */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 600,
//                   color: '#FFFFFF',
//                   fontSize: '1.1rem',
//                   letterSpacing: '0.5px',
//                 }}
//               >
//                 Contact Information
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <EmailIcon sx={{ color: '#FF2D55', fontSize: 20 }} />
//                   <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//                     contact@zenturatech.com
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <SmartToyIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                   <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//                     San Francisco, California
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Newsletter Subscription */}
//               <Box sx={{ mt: 4 }}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 2,
//                     fontWeight: 600,
//                     color: '#FFFFFF',
//                     fontSize: '1.1rem',
//                     letterSpacing: '0.5px',
//                   }}
//                 >
//                   AI Insights Newsletter
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 3, color: '#A0A0A0', fontSize: '0.9rem' }}>
//                   Get the latest AI research and trends.
//                 </Typography>
//                 <Box component="form">
//                   <TextField
//                     fullWidth
//                     placeholder="Your email address"
//                     variant="outlined"
//                     size="small"
//                     sx={{
//                       mb: 2,
//                       '& .MuiOutlinedInput-root': {
//                         bgcolor: 'rgba(255, 255, 255, 0.05)',
//                         borderColor: 'rgba(255,255,255,0.1)',
//                         color: '#FFFFFF',
//                         '&:hover': {
//                           borderColor: '#8A2BE2',
//                         },
//                         '&.Mui-focused': {
//                           borderColor: '#8A2BE2',
//                         }
//                       },
//                       '& .MuiOutlinedInput-input': {
//                         color: '#FFFFFF',
//                         fontSize: '0.9rem',
//                         padding: '10px 14px',
//                       }
//                     }}
//                   />
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       sx={{
//                         bgcolor: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
//                         background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         py: 1,
//                         fontSize: '0.9rem',
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #7A1BD2 0%, #E82D4D 100%)',
//                         }
//                       }}
//                     >
//                       Subscribe
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Footer Links Sections */}
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
//                     color: '#FFFFFF',
//                     fontSize: '1rem',
//                     letterSpacing: '0.5px',
//                   }}
//                 >
//                   {category}
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                   {links.map((link) => (
//                     <motion.li
//                       key={link.label}
//                       whileHover={{ x: 5 }}
//                       style={{ marginBottom: '12px' }}
//                     >
//                       <Link
//                         href={link.href}
//                         sx={{
//                           color: '#A0A0A0',
//                           textDecoration: 'none',
//                           transition: 'all 0.3s ease',
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             color: '#FF2D55',
//                           },
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Divider sx={{ 
//           my: 6, 
//           borderColor: 'rgba(255, 255, 255, 0.1)',
//           borderWidth: '1px',
//         }} />

//         {/* Copyright Section */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: { xs: 'column', md: 'row' }, 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           gap: 3,
//         }}>
//           <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//             © {currentYear} ZenturaTech AI Solutions. All rights reserved.
//           </Typography>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//             <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//               Privacy Policy
//             </Typography>
//             <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//               Terms of Service
//             </Typography>
//             <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//               Cookie Policy
//             </Typography>
//           </Box>
//         </Box>

//         {/* AI Badge - Minimal */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           mt: 4,
//           alignItems: 'center',
//           gap: 1,
//         }}>
//           <Box
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: '50%',
//               bgcolor: '#FF2D55',
//               animation: 'pulse 2s infinite',
//               '@keyframes pulse': {
//                 '0%, 100%': { opacity: 0.5 },
//                 '50%': { opacity: 1 }
//               }
//             }}
//           />
//           <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//             Powered by Advanced AI
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
//   Button,
//   TextField,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   Email as EmailIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import Logo from './Logo';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     'Solutions': [
//       { label: 'AI Strategy', href: '/services#ai-strategy' },
//       { label: 'Machine Learning', href: '/services#ml-development' },
//       { label: 'NLP Solutions', href: '/services#nlp-solutions' },
//       { label: 'Computer Vision', href: '/services#computer-vision' },
//     ],
//     'Resources': [
//       { label: 'AI Research', href: '/research' },
//       { label: 'Case Studies', href: '/case-studies' },
//       { label: 'Documentation', href: '/docs' },
//       { label: 'AI Tools', href: '/tools' },
//     ],
//     'Company': [
//       { label: 'About Us', href: '/about' },
//       { label: 'Our Team', href: '/team' },
//       { label: 'Careers', href: '/careers' },
//       { label: 'Contact', href: '/contact' },
//     ],
//     'Legal': [
//       { label: 'Privacy Policy', href: '/privacy' },
//       { label: 'Terms of Service', href: '/terms' },
//       { label: 'Cookie Policy', href: '/cookies' },
//       { label: 'Security', href: '/security' },
//     ],
//   };

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#8A2BE2' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com', color: '#8A2BE2' },
//     { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com', color: '#8A2BE2' },
//     { icon: <EmailIcon />, label: 'Email', href: 'mailto:contact@zenturatech.com', color: '#8A2BE2' },
//   ];

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: '#0A0A0F',
//         position: 'relative',
//         pt: 8,
//         pb: 6,
//         borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Logo and Company Info Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 6 }}>
//             {/* Logo */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
//               <Logo variant="Classic" size="large" />
//             </Box>
            
//             <Typography variant="body1" sx={{ 
//               mb: 4, 
//               lineHeight: 1.8, 
//               color: '#A0A0A0',
//               maxWidth: '600px',
//               mx: 'auto',
//               fontSize: '1rem',
//             }}>
//               Pioneering the future of artificial intelligence. We build intelligent solutions 
//               that transform businesses through cutting-edge AI technology.
//             </Typography>
            
//             {/* Social Links */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
//               {socialLinks.map((social, index) => (
//                 <motion.div
//                   key={social.label}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <IconButton
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     sx={{
//                       bgcolor: 'rgba(255, 255, 255, 0.05)',
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       color: '#FFFFFF',
//                       '&:hover': {
//                         bgcolor: '#8A2BE2',
//                         borderColor: '#8A2BE2',
//                       },
//                     }}
//                   >
//                     {social.icon}
//                   </IconButton>
//                 </motion.div>
//               ))}
//             </Box>
//           </Box>
//         </motion.div>

//         {/* Main Footer Content */}
//         <Grid container spacing={4}>
//           {/* Contact Info */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 600,
//                   color: '#FFFFFF',
//                   fontSize: '1.1rem',
//                   letterSpacing: '0.5px',
//                 }}
//               >
//                 Contact Information
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <EmailIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                   <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//                     contact@zenturatech.com
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//                     San Francisco, California
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Newsletter Subscription */}
//               <Box sx={{ mt: 4 }}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 2,
//                     fontWeight: 600,
//                     color: '#FFFFFF',
//                     fontSize: '1.1rem',
//                     letterSpacing: '0.5px',
//                   }}
//                 >
//                   AI Insights Newsletter
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 3, color: '#A0A0A0', fontSize: '0.9rem' }}>
//                   Get the latest AI research and trends.
//                 </Typography>
//                 <Box component="form">
//                   <TextField
//                     fullWidth
//                     placeholder="Your email address"
//                     variant="outlined"
//                     size="small"
//                     sx={{
//                       mb: 2,
//                       '& .MuiOutlinedInput-root': {
//                         bgcolor: 'rgba(255, 255, 255, 0.05)',
//                         borderColor: 'rgba(255,255,255,0.1)',
//                         color: '#FFFFFF',
//                         '&:hover': {
//                           borderColor: '#8A2BE2',
//                         },
//                         '&.Mui-focused': {
//                           borderColor: '#8A2BE2',
//                         }
//                       },
//                       '& .MuiOutlinedInput-input': {
//                         color: '#FFFFFF',
//                         fontSize: '0.9rem',
//                         padding: '10px 14px',
//                       }
//                     }}
//                   />
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       sx={{
//                         bgcolor: '#8A2BE2',
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         py: 1,
//                         fontSize: '0.9rem',
//                         '&:hover': {
//                           bgcolor: '#7A1BD2',
//                         }
//                       }}
//                     >
//                       Subscribe
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Footer Links Sections */}
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
//                     color: '#FFFFFF',
//                     fontSize: '1rem',
//                     letterSpacing: '0.5px',
//                   }}
//                 >
//                   {category}
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
//                   {links.map((link) => (
//                     <motion.li
//                       key={link.label}
//                       whileHover={{ x: 5 }}
//                       style={{ marginBottom: '12px' }}
//                     >
//                       <Link
//                         href={link.href}
//                         sx={{
//                           color: '#A0A0A0',
//                           textDecoration: 'none',
//                           transition: 'all 0.3s ease',
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             color: '#8A2BE2',
//                           },
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Divider sx={{ 
//           my: 6, 
//           borderColor: 'rgba(255, 255, 255, 0.1)',
//           borderWidth: '1px',
//         }} />

//         {/* Copyright Section */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: { xs: 'column', md: 'row' }, 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           gap: 3,
//         }}>
//           <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
//             © {currentYear} ZenturaTech AI Solutions. All rights reserved.
//           </Typography>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//             <Link href="/privacy" sx={{ textDecoration: 'none' }}>
//               <Typography variant="caption" sx={{ color: '#A0A0A0', '&:hover': { color: '#8A2BE2' } }}>
//                 Privacy Policy
//               </Typography>
//             </Link>
//             <Link href="/terms" sx={{ textDecoration: 'none' }}>
//               <Typography variant="caption" sx={{ color: '#A0A0A0', '&:hover': { color: '#8A2BE2' } }}>
//                 Terms of Service
//               </Typography>
//             </Link>
//             <Link href="/cookies" sx={{ textDecoration: 'none' }}>
//               <Typography variant="caption" sx={{ color: '#A0A0A0', '&:hover': { color: '#8A2BE2' } }}>
//                 Cookie Policy
//               </Typography>
//             </Link>
//           </Box>
//         </Box>

//         {/* AI Badge - Minimal */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           mt: 4,
//           alignItems: 'center',
//           gap: 1,
//         }}>
//           <Box
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: '50%',
//               bgcolor: '#8A2BE2',
//               animation: 'pulse 2s infinite',
//               '@keyframes pulse': {
//                 '0%, 100%': { opacity: 0.5 },
//                 '50%': { opacity: 1 }
//               }
//             }}
//           />
//           <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//             Powered by Advanced AI
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
  Button,
  TextField,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Solutions': [
      { label: 'AI Strategy', href: '/services#ai-strategy' },
      { label: 'Machine Learning', href: '/services#ml-development' },
      { label: 'NLP Solutions', href: '/services#nlp-solutions' },
      { label: 'Computer Vision', href: '/services#computer-vision' },
    ],
    'Resources': [
      { label: 'AI Research', href: '/research' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'AI Tools', href: '/tools' },
    ],
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    'Legal': [
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
    { icon: <EmailIcon />, label: 'Email', href: 'mailto:contact@zenturatech.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        position: 'relative',
        pt: 8,
        pb: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        {/* Logo and Company Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Logo variant="Classic" size="large" />
            </Box>
            
            <Typography variant="body1" sx={{ 
              mb: 4, 
              lineHeight: 1.8, 
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1rem',
            }}>
              Pioneering the future of artificial intelligence. We build intelligent solutions 
              that transform businesses through cutting-edge AI technology.
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <IconButton
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                }}
              >
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#FFFFFF', fontSize: 20, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    contact@zenturatech.com
                  </Typography>
                </Box>
                
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  San Francisco, California
                </Typography>
              </Box>

              {/* Newsletter Subscription */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#FFFFFF',
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  AI Insights Newsletter
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  Get the latest AI research and trends.
                </Typography>
                <Box component="form">
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    variant="outlined"
                    size="small"
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: '#FFFFFF',
                        '&:hover': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&.Mui-focused': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        }
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        padding: '10px 14px',
                      }
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: '#FFFFFF',
                        color: '#000000',
                        fontWeight: 600,
                        py: 1,
                        fontSize: '0.9rem',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.9)',
                        }
                      }}
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links Sections */}
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
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  {category}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {links.map((link) => (
                    <motion.li
                      key={link.label}
                      whileHover={{ x: 5 }}
                      style={{ marginBottom: '12px' }}
                    >
                      <Link
                        href={link.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem',
                          '&:hover': {
                            color: '#FFFFFF',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ 
          my: 6, 
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: '1px',
        }} />

        {/* Copyright Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 3,
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {currentYear} ZenturaTech AI Solutions. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link href="/privacy" sx={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#FFFFFF' } }}>
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/terms" sx={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#FFFFFF' } }}>
                Terms of Service
              </Typography>
            </Link>
            <Link href="/cookies" sx={{ textDecoration: 'none' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#FFFFFF' } }}>
                Cookie Policy
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* AI Badge - Minimal */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4,
          alignItems: 'center',
          gap: 1,
        }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Powered by Advanced AI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;