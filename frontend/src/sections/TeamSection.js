// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   IconButton,
//   Button, // <-- Add this import
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Link } from 'react-router-dom';

// const TeamSection = () => {
//   const [content] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         name: 'Dr. Sarah Chen',
//         position: 'CEO & Founder',
//         bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Michael Rodriguez',
//         position: 'CTO',
//         bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Jessica Williams',
//         position: 'Head of Product',
//         bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
//         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'David Kim',
//         position: 'Lead ML Engineer',
//         bio: 'PhD in AI from MIT, published researcher in neural networks',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//               }}
//             >
//               {content.team_title}
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
//               {content.team_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {content.team_members.map((member, index) => (
//             <Grid item xs={12} sm={6} md={3} key={member.name}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={member.image}
//                     alt={member.name}
//                     sx={{
//                       objectFit: 'cover',
//                       filter: 'grayscale(20%)',
//                       '&:hover': {
//                         filter: 'grayscale(0%)',
//                       },
//                     }}
//                   />
                  
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 0.5,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {member.name}
//                     </Typography>
                    
//                     <Chip
//                       label={member.position}
//                       size="small"
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         mb: 2,
//                       }}
//                     />
                    
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.6,
//                         minHeight: 60,
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <Button
//                         component={Link}
//                         to="/team"
//                         variant="text"
//                         size="small"
//                         sx={{
//                           color: '#00FF88',
//                         }}
//                       >
//                         View Profile
//                       </Button>
                      
//                       <IconButton
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         size="small"
//                         sx={{
//                           color: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         <LinkedInIcon />
//                       </IconButton>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;


// // src/sections/TeamSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   IconButton,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const [content] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         name: 'Dr. Sarah Chen',
//         position: 'CEO & Founder',
//         bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Michael Rodriguez',
//         position: 'CTO',
//         bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'Jessica Williams',
//         position: 'Head of Product',
//         bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
//         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//       {
//         name: 'David Kim',
//         position: 'Lead ML Engineer',
//         bio: 'PhD in AI from MIT, published researcher in neural networks',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         linkedin: '#',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               {content.team_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               {content.team_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {content.team_members.map((member, index) => (
//             <Grid item xs={12} sm={6} md={3} key={member.name}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#1a1a1a',
//                     border: '1px solid',
//                     borderColor: '#333',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
//                       transform: 'translateY(-10px)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={member.image}
//                     alt={member.name}
//                     sx={{
//                       objectFit: 'cover',
//                       filter: 'grayscale(20%)',
//                       '&:hover': {
//                         filter: 'grayscale(0%)',
//                       },
//                     }}
//                   />
                  
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 0.5,
//                         fontWeight: 600,
//                         color: '#FFFFFF',
//                       }}
//                     >
//                       {member.name}
//                     </Typography>
                    
//                     <Chip
//                       label={member.position}
//                       size="small"
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: '#121218',
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     />
                    
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.6,
//                         minHeight: 60,
//                         color: '#A0A0A0',
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <IconButton
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         size="small"
//                         sx={{
//                           color: '#00FF88',
//                           '&:hover': {
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           },
//                         }}
//                       >
//                         <LinkedInIcon />
//                       </IconButton>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 8 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleViewTeam}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1.1rem',
//               fontWeight: 600,
//               bgcolor: '#00FF88',
//               color: '#121218',
//               '&:hover': {
//                 bgcolor: '#00CC6D',
//                 transform: 'translateY(-2px)',
//                 boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
//               },
//             }}
//           >
//             Meet Full Team
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;

// // src/sections/TeamSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   IconButton,
//   Button,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import EmailIcon from '@mui/icons-material/Email';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import BusinessIcon from '@mui/icons-material/Business';
// import SchoolIcon from '@mui/icons-material/School';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [content] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         id: 1,
//         name: 'Mansi Dixit',
//         role: 'Founder and CEO',
//         bio: `Mansi Dixit is the founder and CEO, bringing over 8 years of extensive finance experience to the team. With a background spanning JP Morgan Chase in Corporate Finance, Ernst & Young in Mergers and Acquisitions, and Bankers without Boundaries in Sustainable Finance, Mansi has a proven track record of success in diverse financial environments.`,
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         experience: '8+ years in Finance',
//         education: 'Chartered Accountant',
//         skills: ['Finance Strategy', 'Leadership', 'M&A', 'Sustainable Finance'],
//         social: {
//           linkedin: 'https://linkedin.com/in/mansi-dixit',
//           twitter: 'https://x.com/mansi-dixit',
//           email: 'mansi@nexusai.com',
//         },
//       },
//       {
//         id: 2,
//         name: 'Sahil Khan',
//         role: 'Co-Founder and Chief Technology Officer',
//         bio: `Sahil brings strong expertise in artificial intelligence, machine learning, and cloud-native architectures, with a proven ability to translate advanced technical capabilities into dependable, production-grade solutions. He leads product engineering, platform architecture, and technology strategy.`,
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         experience: '10+ years in AI/ML',
//         education: 'Tech Leadership',
//         skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Cloud Architecture'],
//         social: {
//           linkedin: 'https://linkedin.com/in/gurijesh-jain',
//           twitter: 'https://x.com/gurijesh-jain',
//           email: 'gurijesh@nexusai.com',
//         },
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* Floating Particles */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.5,
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 800,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 textShadow: '0 0 30px rgba(0, 255, 136, 0.5)',
//               }}
//             >
//               {content.team_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 600,
//                 mx: 'auto',
//                 fontSize: { xs: '1rem', md: '1.25rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               {content.team_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={6} justifyContent="center">
//           {content.team_members.map((member, index) => (
//             <Grid item xs={12} md={6} key={member.id}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 whileHover={{ y: -10 }}
//                 onMouseEnter={() => setHoveredCard(member.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(26, 26, 32, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     border: '2px solid',
//                     borderColor: hoveredCard === member.id ? '#00FF88' : 'rgba(255,255,255,0.1)',
//                     height: '100%',
//                     transition: 'all 0.4s ease',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:hover': {
//                       boxShadow: '0 40px 80px rgba(0, 255, 136, 0.2)',
//                       transform: 'translateY(-15px)',
//                       '& .member-image': {
//                         transform: 'scale(1.05)',
//                         filter: 'grayscale(0%) contrast(1.1)'
//                       },
//                       '& .member-glow': {
//                         opacity: 1,
//                         transform: 'scale(1.1)'
//                       }
//                     },
//                   }}
//                 >
//                   {/* Member Glow Effect */}
//                   <Box
//                     className="member-glow"
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                       opacity: 0,
//                       transition: 'all 0.5s ease',
//                       zIndex: 0,
//                     }}
//                   />

//                   <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
//                     {/* Image Section */}
//                     <Box sx={{ 
//                       width: { xs: '100%', md: '40%' },
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}>
//                       <CardMedia
//                         className="member-image"
//                         component="img"
//                         height="100%"
//                         image={member.image}
//                         alt={member.name}
//                         sx={{
//                           objectFit: 'cover',
//                           filter: 'grayscale(30%) contrast(1.1)',
//                           transition: 'all 0.5s ease',
//                           height: { xs: 300, md: '100%' },
//                         }}
//                       />
                      
//                       {/* Gradient Overlay */}
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)',
//                         }}
//                       />
                      
//                       {/* Role Badge */}
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           bottom: 16,
//                           left: 16,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           px: 3,
//                           py: 1,
//                           borderRadius: 2,
//                         }}
//                       >
//                         <Typography
//                           variant="subtitle1"
//                           sx={{
//                             color: '#121218',
//                             fontWeight: 700,
//                             fontSize: '0.9rem',
//                           }}
//                         >
//                           {member.role}
//                         </Typography>
//                       </Box>
//                     </Box>

//                     {/* Content Section */}
//                     <CardContent sx={{ 
//                       width: { xs: '100%', md: '60%' },
//                       p: 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       position: 'relative',
//                       zIndex: 1
//                     }}>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           mb: 2,
//                           fontWeight: 800,
//                           color: '#FFFFFF',
//                           fontSize: { xs: '1.8rem', md: '2.2rem' },
//                         }}
//                       >
//                         {member.name}
//                       </Typography>
                      
//                       {/* Quick Info */}
//                       <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <BusinessIcon sx={{ color: '#00FF88', fontSize: 20 }} />
//                           <Typography sx={{ color: '#A0A0A0', fontWeight: 500, fontSize: '0.9rem' }}>
//                             {member.experience}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <SchoolIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                           <Typography sx={{ color: '#A0A0A0', fontWeight: 500, fontSize: '0.9rem' }}>
//                             {member.education}
//                           </Typography>
//                         </Box>
//                       </Box>
                      
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           mb: 3,
//                           lineHeight: 1.7,
//                           color: '#A0A0A0',
//                           fontSize: '0.95rem',
//                           flexGrow: 1,
//                         }}
//                       >
//                         {member.bio}
//                       </Typography>
                      
//                       {/* Skills */}
//                       <Box sx={{ mb: 4 }}>
//                         {/* <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 2, fontSize: '1rem' }}>
//                           Expertise
//                         </Typography> */}
//                         <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                           {member.skills.map((skill, idx) => (
//                             <Chip
//                               key={idx}
//                               label={skill}
//                               size="small"
//                               sx={{
//                                 backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                                 color: '#00FF88',
//                                 fontWeight: 500,
//                                 borderRadius: 1,
//                                 border: '1px solid rgba(0, 255, 136, 0.3)',
//                                 fontSize: '0.75rem',
//                               }}
//                             />
//                           ))}
//                         </Box>
//                       </Box>
                      
//                       {/* Social Links */}
//                       <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
//                         <IconButton
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(10, 102, 194, 0.1)',
//                             color: '#0A66C2',
//                             '&:hover': {
//                               backgroundColor: 'rgba(10, 102, 194, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <LinkedInIcon />
//                         </IconButton>
                        
//                         <IconButton
//                           href={member.social.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                             color: '#000000',
//                             '&:hover': {
//                               backgroundColor: 'rgba(0, 0, 0, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <TwitterIcon />
//                         </IconButton>
                        
//                         <IconButton
//                           href={`mailto:${member.social.email}`}
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(234, 67, 53, 0.1)',
//                             color: '#EA4335',
//                             '&:hover': {
//                               backgroundColor: 'rgba(234, 67, 53, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <EmailIcon />
//                         </IconButton>
//                       </Box>
//                     </CardContent>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.6 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleViewTeam}
//               sx={{
//                 px: 6,
//                 py: 1.8,
//                 fontSize: '1.1rem',
//                 fontWeight: 700,
//                 background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                 color: '#121218',
//                 borderRadius: 3,
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
//                   background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                 },
//               }}
//             >
//               Meet Full Team
//             </Button>
            
//             <Typography
//               variant="body2"
//               sx={{
//                 mt: 3,
//                 color: 'rgba(255,255,255,0.5)',
//                 maxWidth: 500,
//                 mx: 'auto',
//               }}
//             >
//               Interested in joining our team? Check out our careers page for opportunities.
//             </Typography>
//           </motion.div>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;


// // src/sections/TeamSection.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Button,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import EmailIcon from '@mui/icons-material/Email';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [content] = useState({
//     team_title: 'Meet Our Leadership',
//     team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
//     team_members: [
//       {
//         id: 1,
//         name: 'Mansi Dixit',
//         role: 'Founder and CEO',
//         bio: `Mansi Dixit brings over 8 years of extensive finance experience with a background spanning JP Morgan Chase, Ernst & Young, and sustainable finance initiatives.`,
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         social: {
//           linkedin: 'https://linkedin.com/in/mansi-dixit',
//           twitter: 'https://x.com/mansi-dixit',
//           email: 'mansi@nexusai.com',
//         },
//       },
//       {
//         id: 2,
//         name: 'Sahil Khan',
//         role: 'Co-Founder and CTO',
//         bio: `Sahil brings strong expertise in artificial intelligence, machine learning, and cloud-native architectures, with a proven ability to translate advanced technical capabilities into dependable, production-grade solutions. He leads product engineering, platform architecture, and technology strategy.`,
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
//         social: {
//           linkedin: 'https://linkedin.com/in/gurijesh-jain',
//           twitter: 'https://x.com/gurijesh-jain',
//           email: 'gurijesh@nexusai.com',
//         },
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* Floating Particles */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.5,
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 800,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 textShadow: '0 0 30px rgba(0, 255, 136, 0.5)',
//               }}
//             >
//               {content.team_title}
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 600,
//                 mx: 'auto',
//                 fontSize: { xs: '1rem', md: '1.25rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               {content.team_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={6} justifyContent="center">
//           {content.team_members.map((member, index) => (
//             <Grid item xs={12} md={6} key={member.id}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 whileHover={{ y: -10 }}
//                 onMouseEnter={() => setHoveredCard(member.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(26, 26, 32, 0.8)',
//                     backdropFilter: 'blur(10px)',
//                     border: '2px solid',
//                     borderColor: hoveredCard === member.id ? '#00FF88' : 'rgba(255,255,255,0.1)',
//                     height: '100%',
//                     transition: 'all 0.4s ease',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     borderRadius: 4,
//                     '&:hover': {
//                       boxShadow: '0 40px 80px rgba(0, 255, 136, 0.2)',
//                       transform: 'translateY(-15px)',
//                       '& .member-image': {
//                         transform: 'scale(1.05)',
//                         filter: 'grayscale(0%) contrast(1.1)'
//                       },
//                       '& .member-glow': {
//                         opacity: 1,
//                         transform: 'scale(1.1)'
//                       }
//                     },
//                   }}
//                 >
//                   {/* Member Glow Effect */}
//                   <Box
//                     className="member-glow"
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                       opacity: 0,
//                       transition: 'all 0.5s ease',
//                       zIndex: 0,
//                     }}
//                   />

//                   <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
//                     {/* Image Section */}
//                     <Box sx={{ 
//                       width: { xs: '100%', md: '40%' },
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}>
//                       <CardMedia
//                         className="member-image"
//                         component="img"
//                         height="100%"
//                         image={member.image}
//                         alt={member.name}
//                         sx={{
//                           objectFit: 'cover',
//                           filter: 'grayscale(30%) contrast(1.1)',
//                           transition: 'all 0.5s ease',
//                           height: { xs: 300, md: '100%' },
//                         }}
//                       />
                      
//                       {/* Gradient Overlay */}
//                       <Box
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)',
//                         }}
//                       />
//                     </Box>

//                     {/* Content Section */}
//                     <CardContent sx={{ 
//                       width: { xs: '100%', md: '60%' },
//                       p: 4,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       position: 'relative',
//                       zIndex: 1
//                     }}>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           mb: 1,
//                           fontWeight: 800,
//                           color: '#FFFFFF',
//                           fontSize: { xs: '1.8rem', md: '2.2rem' },
//                         }}
//                       >
//                         {member.name}
//                       </Typography>
                      
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           mb: 3,
//                           color: '#00FF88',
//                           fontWeight: 600,
//                           fontSize: '1rem',
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           backgroundClip: 'text',
//                           WebkitBackgroundClip: 'text',
//                           WebkitTextFillColor: 'transparent',
//                         }}
//                       >
//                         {member.role}
//                       </Typography>
                      
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           mb: 4,
//                           lineHeight: 1.7,
//                           color: '#A0A0A0',
//                           fontSize: '0.95rem',
//                           flexGrow: 1,
//                         }}
//                       >
//                         {member.bio}
//                       </Typography>
                      
//                       {/* Social Links */}
//                       <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
//                         <IconButton
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(10, 102, 194, 0.1)',
//                             color: '#0A66C2',
//                             '&:hover': {
//                               backgroundColor: 'rgba(10, 102, 194, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <LinkedInIcon />
//                         </IconButton>
                        
//                         <IconButton
//                           href={member.social.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                             color: '#000000',
//                             '&:hover': {
//                               backgroundColor: 'rgba(0, 0, 0, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <TwitterIcon />
//                         </IconButton>
                        
//                         <IconButton
//                           href={`mailto:${member.social.email}`}
//                           size="small"
//                           sx={{
//                             backgroundColor: 'rgba(234, 67, 53, 0.1)',
//                             color: '#EA4335',
//                             '&:hover': {
//                               backgroundColor: 'rgba(234, 67, 53, 0.2)',
//                               transform: 'translateY(-2px)',
//                             },
//                           }}
//                         >
//                           <EmailIcon />
//                         </IconButton>
//                       </Box>
//                     </CardContent>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.6 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleViewTeam}
//               sx={{
//                 px: 6,
//                 py: 1.8,
//                 fontSize: '1.1rem',
//                 fontWeight: 700,
//                 background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                 color: '#121218',
//                 borderRadius: 3,
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
//                   background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                 },
//               }}
//             >
//               Meet Full Team
//             </Button>
//           </motion.div>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;


// // src/sections/TeamSection.js
// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   const teamStats = [
//     {
//       icon: <GroupsIcon sx={{ fontSize: 40, color: '#00FF88' }} />,
//       value: '50+',
//       label: 'AI Experts',
//       description: 'World-class talent driving innovation',
//     },
//     {
//       icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#8A2BE2' }} />,
//       value: '200+',
//       label: 'Projects',
//       description: 'Successful AI implementations',
//     },
//     {
//       icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#00D4FF' }} />,
//       value: '15+',
//       label: 'Patents',
//       description: 'Proprietary AI technologies',
//     },
//     {
//       icon: <Diversity3Icon sx={{ fontSize: 40, color: '#FF6B6B' }} />,
//       value: '100%',
//       label: 'Client Satisfaction',
//       description: 'Exceptional delivery rate',
//     },
//   ];

//   const teamFeatures = [
//     {
//       title: 'Multidisciplinary Expertise',
//       description: 'Combining AI research, engineering, and business strategy',
//       gradient: 'linear-gradient(135deg, #00FF88, #00D4FF)',
//     },
//     {
//       title: 'Cutting-Edge Research',
//       description: 'Continuous innovation in machine learning and neural networks',
//       gradient: 'linear-gradient(135deg, #8A2BE2, #FF6B6B)',
//     },
//     {
//       title: 'Global Impact',
//       description: 'Transforming businesses across 20+ countries worldwide',
//       gradient: 'linear-gradient(135deg, #00D4FF, #00FF88)',
//     },
//     {
//       title: 'Agile Collaboration',
//       description: 'Seamless teamwork delivering exceptional AI solutions',
//       gradient: 'linear-gradient(135deg, #FF6B6B, #8A2BE2)',
//     },
//   ];

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#121218',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
//           opacity: 0.3,
//           zIndex: 0,
//         }}
//       />

//       {/* AI Neural Network Animation */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.5,
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* Section Header */}
//         <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 800,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 textShadow: '0 0 30px rgba(0, 255, 136, 0.5)',
//               }}
//             >
//               World-Class AI Team
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 6,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '1rem', md: '1.25rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Meet the brilliant minds behind our AI revolution. Our team combines deep technical 
//               expertise with visionary thinking to deliver exceptional results.
//             </Typography>
//           </motion.div>
//         </Box>

//         {/* Team Stats */}
//         <Grid container spacing={4} sx={{ mb: 10 }}>
//           {teamStats.map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(18, 18, 24, 0.6)',
//                     backdropFilter: 'blur(10px)',
//                     border: '2px solid',
//                     borderColor: 'rgba(255,255,255,0.1)',
//                     borderRadius: 4,
//                     p: 4,
//                     textAlign: 'center',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       transform: 'translateY(-10px)',
//                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.2)',
//                     }
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>
//                     {stat.icon}
//                   </Box>
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 800,
//                       background: stat.label.includes('AI') 
//                         ? 'linear-gradient(135deg, #00FF88, #00D4FF)' 
//                         : stat.label.includes('Projects')
//                         ? 'linear-gradient(135deg, #8A2BE2, #FF6B6B)'
//                         : stat.label.includes('Patents')
//                         ? 'linear-gradient(135deg, #00D4FF, #00FF88)'
//                         : 'linear-gradient(135deg, #FF6B6B, #8A2BE2)',
//                       backgroundClip: 'text',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       fontSize: { xs: '2.5rem', md: '3rem' },
//                     }}
//                   >
//                     {stat.value}
//                   </Typography>
                  
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 700,
//                       color: '#FFFFFF',
//                     }}
//                   >
//                     {stat.label}
//                   </Typography>
                  
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#A0A0A0',
//                       fontSize: '0.9rem',
//                     }}
//                   >
//                     {stat.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Team Features */}
//         <Box sx={{ mb: 8 }}>
//           <Typography
//             variant="h3"
//             sx={{
//               mb: 6,
//               textAlign: 'center',
//               color: '#FFFFFF',
//               fontWeight: 700,
//               fontSize: { xs: '2rem', md: '2.5rem' },
//             }}
//           >
//             Why Our Team Stands Out
//           </Typography>
          
//           <Grid container spacing={4}>
//             {teamFeatures.map((feature, index) => (
//               <Grid item xs={12} sm={6} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'rgba(26, 26, 32, 0.8)',
//                       backdropFilter: 'blur(10px)',
//                       border: '2px solid',
//                       borderColor: 'rgba(255,255,255,0.1)',
//                       borderRadius: 4,
//                       p: 4,
//                       height: '100%',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         transform: 'translateY(-5px)',
//                         boxShadow: '0 20px 40px rgba(0, 255, 136, 0.2)',
//                         '& .feature-glow': {
//                           opacity: 1,
//                         }
//                       }
//                     }}
//                   >
//                     {/* Gradient Glow */}
//                     <Box
//                       className="feature-glow"
//                       sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: feature.gradient,
//                         opacity: 0.1,
//                         transition: 'opacity 0.3s ease',
//                         zIndex: 0,
//                       }}
//                     />
                    
//                     <Box sx={{ position: 'relative', zIndex: 1 }}>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           mb: 2,
//                           background: feature.gradient,
//                           backgroundClip: 'text',
//                           WebkitBackgroundClip: 'text',
//                           WebkitTextFillColor: 'transparent',
//                           fontWeight: 700,
//                           fontSize: { xs: '1.5rem', md: '1.8rem' },
//                         }}
//                       >
//                         {feature.title}
//                       </Typography>
                      
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: '#A0A0A0',
//                           fontSize: '1rem',
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         {feature.description}
//                       </Typography>
//                     </Box>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* CTA Section */}
//         <Box sx={{ textAlign: 'center', mt: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.6 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 mb: 4,
//                 color: '#FFFFFF',
//                 fontWeight: 700,
//                 fontSize: { xs: '1.8rem', md: '2.2rem' },
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               Ready to meet the minds behind the AI magic?
//             </Typography>
            
//             <Button
//               variant="contained"
//               size="large"
//               endIcon={<ArrowForwardIcon />}
//               onClick={handleViewTeam}
//               sx={{
//                 px: 6,
//                 py: 2,
//                 fontSize: '1.1rem',
//                 fontWeight: 700,
//                 background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                 color: '#121218',
//                 borderRadius: 3,
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
//                   background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                 },
//               }}
//             >
//               Meet Our Expert Team
//             </Button>
            
//             <Typography
//               variant="caption"
//               sx={{
//                 display: 'block',
//                 mt: 3,
//                 color: '#666666',
//                 fontSize: '0.9rem',
//               }}
//             >
//               Explore profiles, expertise, and achievements
//             </Typography>
//           </motion.div>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       bgcolor: '#0A0A0F',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#8A2BE2',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               World-Class AI Team
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#A0A0A0',
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Meet the brilliant minds behind our AI revolution. Our team combines deep technical expertise with visionary thinking to deliver exceptional results.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           {[
//             { icon: <GroupsIcon sx={{ fontSize: 32, color: '#8A2BE2' }} />, value: '50+', label: 'AI Experts', description: 'World-class talent driving innovation' },
//             { icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#FF2D55' }} />, value: '200+', label: 'Projects', description: 'Successful AI implementations' },
//             { icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: '#9370DB' }} />, value: '15+', label: 'Patents', description: 'Proprietary AI technologies' },
//             { icon: <Diversity3Icon sx={{ fontSize: 32, color: '#8A2BE2' }} />, value: '100%', label: 'Client Satisfaction', description: 'Exceptional delivery rate' },
//           ].map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(255, 255, 255, 0.05)',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     p: 3,
//                     textAlign: 'center',
//                     height: '100%',
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>
//                     {stat.icon}
//                   </Box>
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 700,
//                       color: stat.label.includes('AI') ? '#8A2BE2' : 
//                              stat.label.includes('Projects') ? '#FF2D55' :
//                              stat.label.includes('Patents') ? '#9370DB' : '#8A2BE2',
//                       fontSize: { xs: '2rem', md: '2.5rem' },
//                     }}
//                   >
//                     {stat.value}
//                   </Typography>
                  
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 600,
//                       color: '#FFFFFF',
//                     }}
//                   >
//                     {stat.label}
//                   </Typography>
                  
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#A0A0A0',
//                       fontSize: '0.85rem',
//                     }}
//                   >
//                     {stat.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleViewTeam}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               bgcolor: '#8A2BE2',
//               color: '#FFFFFF',
//               '&:hover': {
//                 bgcolor: '#7A1BD2',
//               },
//             }}
//           >
//             Meet Our Expert Team
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       background: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#fa8072',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 textShadow: '0 2px 10px rgba(0,0,0,0.5)',
//               }}
//             >
//               World-Class AI Team
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#FFFFFF',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Meet the brilliant minds behind our AI revolution. Our team combines deep technical expertise with visionary thinking to deliver exceptional results.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           {[
//             { icon: <GroupsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '50+', label: 'AI Experts', description: 'World-class talent driving innovation' },
//             { icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '200+', label: 'Projects', description: 'Successful AI implementations' },
//             { icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '15+', label: 'Patents', description: 'Proprietary AI technologies' },
//             { icon: <Diversity3Icon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '100%', label: 'Client Satisfaction', description: 'Exceptional delivery rate' },
//           ].map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'rgba(0, 0, 0, 0.7)',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     p: 3,
//                     textAlign: 'center',
//                     height: '100%',
//                     backdropFilter: 'blur(10px)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>
//                     {stat.icon}
//                   </Box>
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 700,
//                       color: '#fa8072',
//                       fontSize: { xs: '2rem', md: '2.5rem' },
//                     }}
//                   >
//                     {stat.value}
//                   </Typography>
                  
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 600,
//                       color: '#FFFFFF',
//                     }}
//                   >
//                     {stat.label}
//                   </Typography>
                  
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#FFFFFF',
//                       opacity: 0.8,
//                       fontSize: '0.85rem',
//                     }}
//                   >
//                     {stat.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleViewTeam}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               bgcolor: '#fa8072',
//               color: '#FFFFFF',
//               '&:hover': {
//                 bgcolor: '#ff1dce',
//                 boxShadow: '0 0 20px rgba(255, 0, 144, 0.4)',
//               },
//             }}
//           >
//             Meet Our Expert Team
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: '#000000',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#fa8072',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               World-Class AI Team
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Meet the brilliant minds behind our AI revolution. Our team combines deep technical expertise with visionary thinking to deliver exceptional results.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           {[
//             { icon: <GroupsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '50+', label: 'AI Experts', description: 'World-class talent driving innovation' },
//             { icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '200+', label: 'Projects', description: 'Successful AI implementations' },
//             { icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '15+', label: 'Patents', description: 'Proprietary AI technologies' },
//             { icon: <Diversity3Icon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '100%', label: 'Client Satisfaction', description: 'Exceptional delivery rate' },
//           ].map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: '1px solid #333333',
//                     p: 3,
//                     textAlign: 'center',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>
//                     {stat.icon}
//                   </Box>
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 700,
//                       color: '#fa8072',
//                       fontSize: { xs: '2rem', md: '2.5rem' },
//                     }}
//                   >
//                     {stat.value}
//                   </Typography>
                  
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 600,
//                       color: '#ffffff',
//                     }}
//                   >
//                     {stat.label}
//                   </Typography>
                  
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#ffffff',
//                       opacity: 0.9,
//                       fontSize: '0.85rem',
//                     }}
//                   >
//                     {stat.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleViewTeam}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               backgroundColor: '#fa8072',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//               },
//             }}
//           >
//             Meet Our Expert Team
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;

// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';

// const TeamSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();

//   const handleViewTeam = () => {
//     navigate('/team');
//   };

//   return (
//     <Box ref={ref} sx={{ 
//       py: { xs: 8, md: 12 }, 
//       backgroundColor: 'transparent',
//     }}>
//       <Container maxWidth="xl">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#fa8072',
//                 fontWeight: 700,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//               }}
//             >
//               World-Class AI Team
//             </Typography>
            
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 4,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 maxWidth: 700,
//                 mx: 'auto',
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.8,
//               }}
//             >
//               Meet the brilliant minds behind our AI revolution. Our team combines deep technical expertise with visionary thinking to deliver exceptional results.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           {[
//             { icon: <GroupsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '50+', label: 'AI Experts', description: 'World-class talent driving innovation' },
//             { icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '200+', label: 'Projects', description: 'Successful AI implementations' },
//             { icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '15+', label: 'Patents', description: 'Proprietary AI technologies' },
//             { icon: <Diversity3Icon sx={{ fontSize: 32, color: '#fa8072' }} />, value: '100%', label: 'Client Satisfaction', description: 'Exceptional delivery rate' },
//           ].map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     backgroundColor: '#111111',
//                     border: '1px solid #333333',
//                     p: 3,
//                     textAlign: 'center',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#fa8072',
//                       transform: 'translateY(-5px)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>
//                     {stat.icon}
//                   </Box>
                  
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 700,
//                       color: '#fa8072',
//                       fontSize: { xs: '2rem', md: '2.5rem' },
//                     }}
//                   >
//                     {stat.value}
//                   </Typography>
                  
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       mb: 1,
//                       fontWeight: 600,
//                       color: '#ffffff',
//                     }}
//                   >
//                     {stat.label}
//                   </Typography>
                  
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: '#ffffff',
//                       opacity: 0.9,
//                       fontSize: '0.85rem',
//                     }}
//                   >
//                     {stat.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             endIcon={<ArrowForwardIcon />}
//             onClick={handleViewTeam}
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               backgroundColor: '#fa8072',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#ff1dce',
//               },
//             }}
//           >
//             Meet Our Expert Team
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TeamSection;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  const primaryColor = '#fa8072'; // Telemagenta
  const secondaryColor = '#fa8072'; // Salmon

  const handleViewTeam = () => {
    navigate('/team');
  };

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 8, md: 12 }, 
      backgroundColor: 'transparent',
    }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: primaryColor,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              World-Class AI Team
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#ffffff',
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              Meet the brilliant minds behind our AI revolution. Our team combines deep technical expertise with visionary thinking to deliver exceptional results.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            { 
              icon: <GroupsIcon sx={{ fontSize: 32 }} />, 
              value: '50+', 
              label: 'AI Experts', 
              description: 'World-class talent driving innovation',
              color: primaryColor
            },
            { 
              icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />, 
              value: '200+', 
              label: 'Projects', 
              description: 'Successful AI implementations',
              color: secondaryColor
            },
            { 
              icon: <EmojiObjectsIcon sx={{ fontSize: 32 }} />, 
              value: '15+', 
              label: 'Patents', 
              description: 'Proprietary AI technologies',
              color: primaryColor
            },
            { 
              icon: <Diversity3Icon sx={{ fontSize: 32 }} />, 
              value: '100%', 
              label: 'Client Satisfaction', 
              description: 'Exceptional delivery rate',
              color: secondaryColor
            },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    backgroundColor: '#111111',
                    border: '1px solid #333333',
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: stat.color,
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px ${stat.color}33`,
                    },
                  }}
                >
                  <Box sx={{ 
                    mb: 2,
                    color: stat.color,
                  }}>
                    {stat.icon}
                  </Box>
                  
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: stat.color,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: stat.color,
                      fontSize: '1.1rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#ffffff',
                      opacity: 0.9,
                      fontSize: '0.85rem',
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleViewTeam}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: primaryColor,
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#d94b8a',
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 25px ${primaryColor}33`,
              },
              transition: 'all 0.3s ease',
            }}
          >
            Meet Our Expert Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;