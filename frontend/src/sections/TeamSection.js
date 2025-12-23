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


// src/sections/TeamSection.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [content] = useState({
    team_title: 'Meet Our Leadership',
    team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
    team_members: [
      {
        id: 1,
        name: 'Mansi Dixit',
        role: 'Founder and CEO',
        bio: `Mansi Dixit brings over 8 years of extensive finance experience with a background spanning JP Morgan Chase, Ernst & Young, and sustainable finance initiatives.`,
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        social: {
          linkedin: 'https://linkedin.com/in/mansi-dixit',
          twitter: 'https://x.com/mansi-dixit',
          email: 'mansi@nexusai.com',
        },
      },
      {
        id: 2,
        name: 'Sahil Khan',
        role: 'Co-Founder and CTO',
        bio: `Sahil brings strong expertise in artificial intelligence, machine learning, and cloud-native architectures, with a proven ability to translate advanced technical capabilities into dependable, production-grade solutions. He leads product engineering, platform architecture, and technology strategy.`,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        social: {
          linkedin: 'https://linkedin.com/in/gurijesh-jain',
          twitter: 'https://x.com/gurijesh-jain',
          email: 'gurijesh@nexusai.com',
        },
      },
    ],
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleViewTeam = () => {
    navigate('/team');
  };

  return (
    <Box ref={ref} sx={{ 
      py: { xs: 8, md: 12 }, 
      bgcolor: '#121218',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Floating Particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
                color: '#00FF88',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 0 30px rgba(0, 255, 136, 0.5)',
              }}
            >
              {content.team_title}
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                color: '#A0A0A0',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.8,
              }}
            >
              {content.team_subtitle}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {content.team_members.map((member, index) => (
            <Grid item xs={12} md={6} key={member.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  sx={{
                    bgcolor: 'rgba(26, 26, 32, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid',
                    borderColor: hoveredCard === member.id ? '#00FF88' : 'rgba(255,255,255,0.1)',
                    height: '100%',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    '&:hover': {
                      boxShadow: '0 40px 80px rgba(0, 255, 136, 0.2)',
                      transform: 'translateY(-15px)',
                      '& .member-image': {
                        transform: 'scale(1.05)',
                        filter: 'grayscale(0%) contrast(1.1)'
                      },
                      '& .member-glow': {
                        opacity: 1,
                        transform: 'scale(1.1)'
                      }
                    },
                  }}
                >
                  {/* Member Glow Effect */}
                  <Box
                    className="member-glow"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
                      opacity: 0,
                      transition: 'all 0.5s ease',
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
                    {/* Image Section */}
                    <Box sx={{ 
                      width: { xs: '100%', md: '40%' },
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <CardMedia
                        className="member-image"
                        component="img"
                        height="100%"
                        image={member.image}
                        alt={member.name}
                        sx={{
                          objectFit: 'cover',
                          filter: 'grayscale(30%) contrast(1.1)',
                          transition: 'all 0.5s ease',
                          height: { xs: 300, md: '100%' },
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)',
                        }}
                      />
                    </Box>

                    {/* Content Section */}
                    <CardContent sx={{ 
                      width: { xs: '100%', md: '60%' },
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1,
                          fontWeight: 800,
                          color: '#FFFFFF',
                          fontSize: { xs: '1.8rem', md: '2.2rem' },
                        }}
                      >
                        {member.name}
                      </Typography>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          color: '#00FF88',
                          fontWeight: 600,
                          fontSize: '1rem',
                          background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {member.role}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 4,
                          lineHeight: 1.7,
                          color: '#A0A0A0',
                          fontSize: '0.95rem',
                          flexGrow: 1,
                        }}
                      >
                        {member.bio}
                      </Typography>
                      
                      {/* Social Links */}
                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                        <IconButton
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(10, 102, 194, 0.1)',
                            color: '#0A66C2',
                            '&:hover': {
                              backgroundColor: 'rgba(10, 102, 194, 0.2)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                        
                        <IconButton
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            color: '#000000',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.2)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <TwitterIcon />
                        </IconButton>
                        
                        <IconButton
                          href={`mailto:${member.social.email}`}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(234, 67, 53, 0.1)',
                            color: '#EA4335',
                            '&:hover': {
                              backgroundColor: 'rgba(234, 67, 53, 0.2)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleViewTeam}
              sx={{
                px: 6,
                py: 1.8,
                fontSize: '1.1rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                color: '#121218',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0, 255, 136, 0.4)',
                  background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                },
              }}
            >
              Meet Full Team
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;