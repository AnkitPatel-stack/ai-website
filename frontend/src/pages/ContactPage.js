// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress,
//   IconButton,
// } from '@mui/material';
// import {
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   LocationOn as LocationIcon,
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { contactApi } from '../services/api';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);

//     try {
//       await contactApi.submitContact(formData);
//       setSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         subject: '',
//         message: '',
//       });
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to submit form. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <PhoneIcon />,
//       title: 'Phone',
//       content: '+1 (555) 123-4567',
//       subcontent: 'Mon-Fri 9am-6pm EST',
//     },
//     {
//       icon: <EmailIcon />,
//       title: 'Email',
//       content: 'info@aisolutions.com',
//       subcontent: 'Response within 24 hours',
//     },
//     {
//       icon: <LocationIcon />,
//       title: 'Location',
//       content: '123 AI Street',
//       subcontent: 'San Francisco, CA 94107',
//     },
//   ];

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
//     { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
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
//                 Get in Touch
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 Have questions about our AI solutions? Ready to start your AI journey?
//                 Our team is here to help you transform your business with artificial intelligence.
//               </Typography>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Contact Form & Info */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6}>
//             {/* Contact Form */}
//             <Grid item xs={12} md={7}>
//               <Paper
//                 sx={{
//                   p: { xs: 3, md: 6 },
//                   bgcolor: 'background.default',
//                   border: '1px solid',
//                   borderColor: 'divider',
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     mb: 4,
//                     color: '#00FF88',
//                     fontWeight: 600,
//                   }}
//                 >
//                   Send us a Message
//                 </Typography>

//                 {success && (
//                   <Alert severity="success" sx={{ mb: 3 }}>
//                     Thank you for your message! We'll get back to you within 24 hours.
//                   </Alert>
//                 )}

//                 {error && (
//                   <Alert severity="error" sx={{ mb: 3 }}>
//                     {error}
//                   </Alert>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   <Grid container spacing={3}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Your Name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Phone Number"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         multiline
//                         rows={6}
//                         label="Your Message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         disabled={loading}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Button
//                         fullWidth
//                         type="submit"
//                         variant="contained"
//                         size="large"
//                         disabled={loading}
//                         sx={{
//                           py: 1.5,
//                           bgcolor: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'primary.dark',
//                           },
//                         }}
//                       >
//                         {loading ? <CircularProgress size={24} /> : 'Send Message'}
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </form>
//               </Paper>
//             </Grid>

//             {/* Contact Info */}
//             <Grid item xs={12} md={5}>
//               <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={info.title}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Paper
//                       sx={{
//                         p: 4,
//                         bgcolor: 'background.default',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           borderColor: '#00FF88',
//                           transform: 'translateY(-5px)',
//                         },
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
//                         <Box
//                           sx={{
//                             bgcolor: '#00FF88',
//                             color: 'background.default',
//                             borderRadius: '50%',
//                             p: 2,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                           }}
//                         >
//                           {info.icon}
//                         </Box>
//                         <Box>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               mb: 1,
//                               fontWeight: 600,
//                             }}
//                           >
//                             {info.title}
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{
//                               mb: 0.5,
//                               fontWeight: 500,
//                             }}
//                           >
//                             {info.content}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {info.subcontent}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Paper>
//                   </motion.div>
//                 ))}

//                 {/* Social Links */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   <Paper
//                     sx={{
//                       p: 4,
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 3,
//                         fontWeight: 600,
//                       }}
//                     >
//                       Connect With Us
//                     </Typography>
//                     <Box sx={{ display: 'flex', gap: 2 }}>
//                       {socialLinks.map((social) => (
//                         <IconButton
//                           key={social.label}
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           sx={{
//                             bgcolor: '#121218',
//                             border: '1px solid',
//                             borderColor: 'divider',
//                             '&:hover': {
//                               bgcolor: '#00FF88',
//                               color: 'background.default',
//                             },
//                           }}
//                         >
//                           {social.icon}
//                         </IconButton>
//                       ))}
//                     </Box>
//                   </Paper>
//                 </motion.div>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Map Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h2"
//             sx={{
//               mb: 6,
//               textAlign: 'center',
//               color: '#00FF88',
//               fontWeight: 700,
//             }}
//           >
//             Visit Our Office
//           </Typography>
//           <Paper
//             sx={{
//               height: 400,
//               borderRadius: 2,
//               overflow: 'hidden',
//               border: '1px solid',
//               borderColor: 'divider',
//             }}
//           >
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '100%',
//                 bgcolor: '#121218',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 flexDirection: 'column',
//                 gap: 2,
//               }}
//             >
//               <LocationIcon sx={{ fontSize: 80, color: '#00FF88' }} />
//               <Typography variant="h5" align="center">
//                 123 AI Street
//               </Typography>
//               <Typography variant="body1" color="text.secondary" align="center">
//                 San Francisco, CA 94107
//               </Typography>
//               <Typography variant="body2" color="text.secondary" align="center">
//                 (Map integration available with Google Maps API key)
//               </Typography>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default ContactPage;


// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress,
//   IconButton,
//   alpha,
// } from '@mui/material';
// import {
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   LocationOn as LocationIcon,
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
//   Send as SendIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { contactApi } from '../services/api';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);

//     // Simulate API call
//     setTimeout(() => {
//       try {
//         // In production: await contactApi.submitContact(formData);
//         console.log('Form submitted:', formData);
//         setSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           company: '',
//           subject: '',
//           message: '',
//         });
//       } catch (err) {
//         setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }, 1500);
//   };

//   const contactInfo = [
//     {
//       icon: <PhoneIcon />,
//       title: 'Phone',
//       content: '+1 (555) 123-4567',
//       subcontent: 'Mon-Fri 9am-6pm EST',
//       color: '#00FF88',
//     },
//     {
//       icon: <EmailIcon />,
//       title: 'Email',
//       content: 'contact@aivision.com',
//       subcontent: 'Response within 24 hours',
//       color: '#8A2BE2',
//     },
//     {
//       icon: <LocationIcon />,
//       title: 'Location',
//       content: 'San Francisco, CA',
//       subcontent: 'Remote teams worldwide',
//       color: '#FF6B6B',
//     },
//   ];

//   const socialLinks = [
//     { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
//     { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
//     { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
//   ];

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
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   // WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 Get in Touch
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 Have questions about our AI solutions? Ready to start your AI journey?
//                 Our team is here to help you transform your business with artificial intelligence.
//               </Typography>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Contact Form & Info */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6} alignItems="stretch">
//             {/* Contact Info */}
//             <Grid item xs={12} md={4}>
//               <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={info.title}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                   >
//                     <Paper
//                       sx={{
//                         p: 4,
//                         bgcolor: 'background.default',
//                         border: '2px solid',
//                         borderColor: alpha(info.color, 0.3),
//                         height: '100%',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           borderColor: info.color,
//                           transform: 'translateY(-5px)',
//                           boxShadow: `0 10px 30px ${alpha(info.color, 0.2)}`,
//                         },
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
//                         <Box
//                           sx={{
//                             bgcolor: alpha(info.color, 0.1),
//                             color: info.color,
//                             borderRadius: '50%',
//                             p: 2,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             flexShrink: 0,
//                           }}
//                         >
//                           {info.icon}
//                         </Box>
//                         <Box>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               mb: 1,
//                               fontWeight: 600,
//                             }}
//                           >
//                             {info.title}
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{
//                               mb: 0.5,
//                               fontWeight: 500,
//                             }}
//                           >
//                             {info.content}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {info.subcontent}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Paper>
//                   </motion.div>
//                 ))}

//                 {/* Social Links */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   <Paper
//                     sx={{
//                       p: 4,
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 3,
//                         fontWeight: 600,
//                       }}
//                     >
//                       Connect With Us
//                     </Typography>
//                     <Box sx={{ display: 'flex', gap: 2 }}>
//                       {socialLinks.map((social) => (
//                         <motion.div
//                           key={social.label}
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <IconButton
//                             href={social.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{
//                               bgcolor: '#121218',
//                               border: '1px solid',
//                               borderColor: 'divider',
//                               '&:hover': {
//                                 bgcolor: '#00FF88',
//                                 color: 'background.default',
//                               },
//                             }}
//                           >
//                             {social.icon}
//                           </IconButton>
//                         </motion.div>
//                       ))}
//                     </Box>
//                   </Paper>
//                 </motion.div>
//               </Box>
//             </Grid>

//             {/* Contact Form */}
//             <Grid item xs={12} md={8}>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Paper
//                   sx={{
//                     p: { xs: 3, md: 6 },
//                     bgcolor: 'background.default',
//                     border: '2px solid',
//                     borderColor: '#00FF88',
//                     height: '100%',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
//                     <SendIcon sx={{ color: '#00FF88', fontSize: 32 }} />
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: '#00FF88',
//                         fontWeight: 700,
//                       }}
//                     >
//                       Send us a Message
//                     </Typography>
//                   </Box>

//                   {success && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                     >
//                       <Alert severity="success" sx={{ mb: 3 }}>
//                         Thank you for your message! We'll get back to you within 24 hours.
//                       </Alert>
//                     </motion.div>
//                   )}

//                   {error && (
//                     <Alert severity="error" sx={{ mb: 3 }}>
//                       {error}
//                     </Alert>
//                   )}

//                   <form onSubmit={handleSubmit}>
//                     <Grid container spacing={3}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Your Name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Email Address"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Phone Number"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Company"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleChange}
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Subject"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           required
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           multiline
//                           rows={6}
//                           label="Your Message"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                           disabled={loading}
//                           sx={{
//                             '& .MuiOutlinedInput-root': {
//                               bgcolor: alpha('#121218', 0.5),
//                             },
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                           <Button
//                             fullWidth
//                             type="submit"
//                             variant="contained"
//                             size="large"
//                             disabled={loading}
//                             sx={{
//                               py: 2,
//                               bgcolor: '#00FF88',
//                               fontSize: '1.1rem',
//                               fontWeight: 700,
//                               '&:hover': {
//                                 bgcolor: 'primary.dark',
//                               },
//                             }}
//                           >
//                             {loading ? (
//                               <CircularProgress size={24} color="inherit" />
//                             ) : (
//                               'Send Message'
//                             )}
//                           </Button>
//                         </motion.div>
//                       </Grid>
//                     </Grid>
//                   </form>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Map/Location Section */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h2"
//             sx={{
//               mb: 6,
//               textAlign: 'center',
//               color: '#00FF88',
//               fontWeight: 700,
//             }}
//           >
//             Global Presence
//           </Typography>
          
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Paper
//                   sx={{
//                     height: 400,
//                     borderRadius: 4,
//                     overflow: 'hidden',
//                     border: '2px solid',
//                     borderColor: '#00FF88',
//                     position: 'relative',
//                     background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexDirection: 'column',
//                       gap: 3,
//                       p: 4,
//                     }}
//                   >
//                     <LocationIcon sx={{ fontSize: 80, color: '#00FF88' }} />
//                     <Typography variant="h4" align="center" fontWeight={700}>
//                       San Francisco HQ
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" align="center">
//                       123 AI Innovation Drive
//                       <br />
//                       San Francisco, CA 94107
//                       <br />
//                       United States
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Paper
//                   sx={{
//                     height: 400,
//                     borderRadius: 4,
//                     overflow: 'hidden',
//                     border: '2px solid',
//                     borderColor: 'secondary.main',
//                     position: 'relative',
//                     background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexDirection: 'column',
//                       gap: 3,
//                       p: 4,
//                     }}
//                   >
//                     <LocationIcon sx={{ fontSize: 80, color: 'secondary.main' }} />
//                     <Typography variant="h4" align="center" fontWeight={700} color="secondary.main">
//                       Remote Teams Worldwide
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" align="center">
//                       Our team works remotely across
//                       <br />
//                       25+ countries, providing
//                       <br />
//                       24/7 support and coverage
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default ContactPage;


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
  alpha,
  Card,
  CardContent,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Chat as ChatIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  Message as MessageIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

    setTimeout(() => {
      try {
        console.log('Form submitted:', formData);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } catch (err) {
        setError('Failed to submit form. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  const contactOptions = [
    {
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      action: 'Start Chat',
      color: '#00FF88',
      href: '#',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      description: 'contact@zenturatech.com',
      action: 'Send Email',
      color: '#8A2BE2',
      href: 'mailto:contact@zenturatech.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Call Now',
      color: '#00D4FF',
      href: 'tel:+15551234567',
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com' },
  ];

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

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
              radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.2rem' },
                }}
              >
                Let's Build AI Together
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#A0A0A0',
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Ready to transform your business with AI? Get in touch with our team 
                of experts for a free consultation.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Contact Options */}
      <Box sx={{ 
        py: { xs: 6, md: 8 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {contactOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={option.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: '#121218',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: option.color,
                        transform: 'translateY(-10px)',
                        boxShadow: `0 20px 40px ${alpha(option.color, 0.2)}`,
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: alpha(option.color, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        border: `2px solid ${alpha(option.color, 0.3)}`,
                      }}
                    >
                      {option.icon}
                    </Box>
                    
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        color: option.color,
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      {option.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: '#A0A0A0',
                        fontSize: '1rem',
                        minHeight: 40,
                      }}
                    >
                      {option.description}
                    </Typography>
                    
                    <Button
                      href={option.href}
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: alpha(option.color, 0.3),
                        color: option.color,
                        fontWeight: 600,
                        py: 1.2,
                        '&:hover': {
                          borderColor: option.color,
                          backgroundColor: alpha(option.color, 0.1),
                        }
                      }}
                    >
                      {option.action}
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form - Simple Version */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#121218',
      }}>
        <Container maxWidth="lg">
          <Paper
            sx={{
              bgcolor: '#0F172A',
              backdropFilter: 'blur(10px)',
              border: '2px solid',
              borderColor: '#00FF88',
              borderRadius: 4,
              overflow: 'hidden',
              p: { xs: 3, md: 5 },
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: alpha('#00FF88', 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  border: `2px solid ${alpha('#00FF88', 0.3)}`,
                }}
              >
                <MessageIcon sx={{ fontSize: 32, color: '#00FF88' }} />
              </Box>
              
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  color: '#00FF88',
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                Send us a Message
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#A0A0A0',
                  maxWidth: 500,
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Fill out the form below and our AI experts will get back to you within 24 hours.
              </Typography>
            </Box>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Alert 
                  severity="success" 
                  sx={{ 
                    mb: 3,
                    bgcolor: alpha('#00FF88', 0.1),
                    border: `1px solid ${alpha('#00FF88', 0.3)}`,
                    color: '#00FF88',
                  }}
                >
                  Thank you! We'll contact you soon.
                </Alert>
              </motion.div>
            )}

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#121218',
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00FF88',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00FF88',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#A0A0A0',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00FF88',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#121218',
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00FF88',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00FF88',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#A0A0A0',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00FF88',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="How can we help you?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#121218',
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00FF88',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00FF88',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#A0A0A0',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00FF88',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      startIcon={loading ? null : <SendIcon />}
                      sx={{
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                        color: '#121218',
                        borderRadius: 3,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
                        },
                        '&.Mui-disabled': {
                          background: 'rgba(0, 255, 136, 0.2)',
                          color: 'rgba(18, 18, 24, 0.5)',
                        }
                      }}
                    >
                      {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* Company Info */}
      <Box sx={{ 
        py: { xs: 6, md: 8 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    bgcolor: '#121218',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: 4,
                    p: 4,
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: alpha('#00FF88', 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${alpha('#00FF88', 0.3)}`,
                      }}
                    >
                      <BusinessIcon sx={{ fontSize: 32, color: '#00FF88' }} />
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#00FF88', fontWeight: 700 }}>
                        Zenturatech
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
                        Generative AI Solutions
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LocationIcon sx={{ color: '#00FF88' }} />
                      <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                        San Francisco, California
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <EmailIcon sx={{ color: '#00FF88' }} />
                      <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                        contact@zenturatech.com
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <PhoneIcon sx={{ color: '#00FF88' }} />
                      <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                        +1 (555) 123-4567
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box>
                    <Typography variant="h6" sx={{ color: '#00FF88', mb: 2 }}>
                      Follow Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {socialLinks.map((social) => (
                        <motion.div
                          key={social.label}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              bgcolor: 'rgba(0, 255, 136, 0.1)',
                              border: '1px solid rgba(0, 255, 136, 0.3)',
                              color: '#00FF88',
                              '&:hover': {
                                bgcolor: 'rgba(0, 255, 136, 0.2)',
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: '#121218',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(138, 43, 226, 0.3)',
                    borderRadius: 4,
                    p: 4,
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      color: '#8A2BE2',
                      fontWeight: 700,
                      fontSize: '1.8rem',
                    }}
                  >
                    Why Choose Zenturatech?
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {[
                      'Expert AI Consultants',
                      'Custom AI Solutions',
                      '24/7 Support',
                      'Proven Results',
                      'Flexible Engagement',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#00FF88',
                            boxShadow: '0 0 10px #00FF88',
                          }}
                        />
                        <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Box sx={{ mt: 4, p: 3, bgcolor: alpha('#8A2BE2', 0.1), borderRadius: 3 }}>
                    <Typography variant="body2" sx={{ color: '#A0A0A0', fontStyle: 'italic' }}>
                      "Our AI solutions have helped 150+ businesses transform their operations and achieve measurable results."
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Simple CTA */}
      <Box sx={{ 
        py: { xs: 6, md: 8 }, 
        bgcolor: '#121218',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: '#00FF88',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              Start Your AI Journey Today
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: '#A0A0A0',
                maxWidth: 500,
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Book a free consultation with our AI experts to discuss your project.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/services')}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                  color: '#121218',
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
                  }
                }}
              >
                View Services
              </Button>
              
              {/* <Button
                variant="outlined"
                size="large"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderColor: 'rgba(0, 255, 136, 0.3)',
                  color: '#00FF88',
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: '#00FF88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                Contact Form
              </Button> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default ContactPage;