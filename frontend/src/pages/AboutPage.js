// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Chip,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const AboutPage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const companyHistory = [
//     { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses' },
//     { year: '2019', title: 'First Major Client', description: 'Secured partnership with Fortune 500 company' },
//     { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary AI platform' },
//     { year: '2021', title: 'International Expansion', description: 'Opened offices in Europe and Asia' },
//     { year: '2022', title: 'Team Growth', description: 'Expanded team to 50+ AI experts' },
//     { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation' },
//   ];

//   const values = [
//     { title: 'Innovation', description: 'Constantly pushing boundaries of what AI can achieve' },
//     { title: 'Excellence', description: 'Delivering the highest quality solutions' },
//     { title: 'Integrity', description: 'Transparent and ethical AI practices' },
//     { title: 'Collaboration', description: 'Working closely with clients as partners' },
//     { title: 'Impact', description: 'Driving meaningful business transformation' },
//     { title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
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
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     color: '#00FF88',
//                     fontWeight: 800,
//                   }}
//                 >
//                   About Our AI Company
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   We are pioneers in artificial intelligence, transforming how businesses
//                   operate through innovative AI solutions. Our mission is to make advanced
//                   AI accessible and impactful for organizations worldwide.
//                 </Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: 400,
//                     borderRadius: 2,
//                     backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     border: '2px solid',
//                     borderColor: '#00FF88',
//                   }}
//                 />
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Mission & Vision */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   bgcolor: 'background.default',
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   height: '100%',
//                 }}
//               >
//                 <CardContent sx={{ p: 4 }}>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       mb: 3,
//                       color: '#00FF88',
//                       fontWeight: 600,
//                     }}
//                   >
//                     Our Mission
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: 'text.secondary',
//                       lineHeight: 1.8,
//                       fontSize: '1.1rem',
//                     }}
//                   >
//                     To empower businesses with cutting-edge AI solutions that drive innovation,
//                     efficiency, and growth. We believe that artificial intelligence should be
//                     accessible, understandable, and beneficial for all organizations, regardless
//                     of size or industry.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   bgcolor: 'background.default',
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   height: '100%',
//                 }}
//               >
//                 <CardContent sx={{ p: 4 }}>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       mb: 3,
//                       color: '#00FF88',
//                       fontWeight: 600,
//                     }}
//                   >
//                     Our Vision
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: 'text.secondary',
//                       lineHeight: 1.8,
//                       fontSize: '1.1rem',
//                     }}
//                   >
//                     To be the world's most trusted AI partner, leading the digital transformation
//                     of industries through ethical, innovative, and impactful artificial intelligence.
//                     We envision a future where AI enhances human potential and creates unprecedented
//                     opportunities for growth and discovery.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Company History Timeline */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Journey
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               From humble beginnings to industry leadership
//             </Typography>
//           </Box>

//           <Box ref={ref}>
//             {companyHistory.map((item, index) => (
//               <motion.div
//                 key={item.year}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     mb: 4,
//                     flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: { xs: '100%', md: '40%' },
//                       textAlign: { xs: 'center', md: index % 2 === 0 ? 'right' : 'left' },
//                       p: 2,
//                     }}
//                   >
//                     <Chip
//                       label={item.year}
//                       sx={{
//                         bgcolor: '#00FF88',
//                         color: 'background.default',
//                         fontSize: '1.2rem',
//                         px: 2,
//                         py: 1,
//                         mb: 1,
//                       }}
//                     />
//                     <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
//                       {item.title}
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: '50%',
//                       bgcolor: '#00FF88',
//                       position: 'relative',
//                       flexShrink: 0,
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         width: 20,
//                         height: 20,
//                         borderRadius: '50%',
//                         bgcolor: 'background.default',
//                       },
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       width: { xs: '100%', md: '40%' },
//                       textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
//                       p: 2,
//                     }}
//                   >
//                     <Typography variant="body1" color="text.secondary">
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </motion.div>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Values */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Values
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               The principles that guide everything we do
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={4} key={value.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         transform: 'translateY(-5px)',
//                         borderColor: '#00FF88',
//                         boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                       <Avatar
//                         sx={{
//                           width: 60,
//                           height: 60,
//                           bgcolor: '#00FF88',
//                           color: 'background.default',
//                           fontSize: '1.5rem',
//                           fontWeight: 600,
//                           mb: 2,
//                           mx: 'auto',
//                         }}
//                       >
//                         {value.title.charAt(0)}
//                       </Avatar>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           mb: 2,
//                           fontWeight: 600,
//                         }}
//                       >
//                         {value.title}
//                       </Typography>
//                       <Typography variant="body1" color="text.secondary">
//                         {value.description}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Chip,
//   Paper,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import GroupsIcon from '@mui/icons-material/Groups';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import SecurityIcon from '@mui/icons-material/Security';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import SchoolIcon from '@mui/icons-material/School';

// const AboutPage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const companyHistory = [
//     { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses of all sizes' },
//     { year: '2019', title: 'First Major Client', description: 'Secured partnership with leading Fortune 500 company' },
//     { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary enterprise AI platform' },
//     { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific regions' },
//     { year: '2022', title: 'Team Growth', description: 'Expanded team to 100+ AI specialists and researchers' },
//     { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation and impact' },
//   ];

//   const values = [
//     { icon: <RocketLaunchIcon />, title: 'Innovation', description: 'Pushing the boundaries of what AI can achieve' },
//     { icon: <SecurityIcon />, title: 'Integrity', description: 'Transparent, ethical AI practices you can trust' },
//     { icon: <EmojiObjectsIcon />, title: 'Excellence', description: 'Delivering the highest quality AI solutions' },
//     { icon: <HandshakeIcon />, title: 'Partnership', description: 'Working closely with clients as true partners' },
//     { icon: <GroupsIcon />, title: 'Collaboration', description: 'Fostering teamwork and shared success' },
//     { icon: <SchoolIcon />, title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
//   ];

//   const stats = [
//     { value: '150+', label: 'Projects Delivered' },
//     { value: '98%', label: 'Client Satisfaction' },
//     { value: '40+', label: 'Countries Served' },
//     { value: '24/7', label: 'Support Coverage' },
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
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Chip
//                   label="About Us"
//                   sx={{
//                     bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     color: '#00FF88',
//                     mb: 3,
//                     px: 2,
//                     py: 1,
//                   }}
//                 />
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   Shaping the Future with AI
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   We are pioneers in artificial intelligence, transforming how businesses
//                   operate through innovative and practical AI solutions. Our mission is
//                   to make advanced AI accessible, understandable, and beneficial for
//                   organizations worldwide.
//                 </Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: 400,
//                     borderRadius: 4,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       mixBlendMode: 'multiply',
//                     },
//                   }}
//                 />
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={4}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} md={3} key={stat.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       textAlign: 'center',
//                       p: 4,
//                       height: '100%',
//                     }}
//                   >
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 1,
//                         color: '#00FF88',
//                         fontWeight: 700,
//                       }}
//                     >
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {stat.label}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Mission & Vision */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '2px solid',
//                     borderColor: '#00FF88',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           color: '#00FF88',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <RocketLaunchIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: '#00FF88' }}>
//                         Our Mission
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To empower businesses with practical AI solutions that drive real innovation,
//                       measurable efficiency, and sustainable growth. We believe that artificial
//                       intelligence should be accessible, understandable, and beneficial for all
//                       organizations, regardless of their size or industry.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '2px solid',
//                     borderColor: 'secondary.main',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: alpha('secondary.main', 0.1),
//                           color: 'secondary.main',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <EmojiObjectsIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: 'secondary.main' }}>
//                         Our Vision
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To be the world's most trusted AI partner, leading the digital transformation
//                       of industries through ethical, innovative, and impactful artificial intelligence.
//                       We envision a future where AI enhances human potential and creates unprecedented
//                       opportunities for growth and discovery.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Timeline */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }} ref={ref}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Journey
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               From humble beginnings to industry leadership
//             </Typography>
//           </Box>

//           <Timeline position="alternate">
//             {companyHistory.map((item, index) => (
//               <TimelineItem key={item.year}>
//                 <TimelineOppositeContent
//                   sx={{ m: 'auto 0' }}
//                   align="right"
//                   variant="body2"
//                   color="text.secondary"
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Typography variant="h6" color="#00FF88" fontWeight={700}>
//                       {item.year}
//                     </Typography>
//                   </motion.div>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                   <TimelineDot sx={{ bgcolor: '#00FF88' }}>
//                     <Box sx={{ width: 8, height: 8, bgcolor: 'background.default', borderRadius: '50%' }} />
//                   </TimelineDot>
//                   {index < companyHistory.length - 1 && (
//                     <TimelineConnector sx={{ bgcolor: '#00FF88' }} />
//                   )}
//                 </TimelineSeparator>
//                 <TimelineContent sx={{ py: 3, px: 2 }}>
//                   <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Paper
//                       sx={{
//                         p: 3,
//                         bgcolor: 'background.default',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                       }}
//                     >
//                       <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
//                         {item.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {item.description}
//                       </Typography>
//                     </Paper>
//                   </motion.div>
//                 </TimelineContent>
//               </TimelineItem>
//             ))}
//           </Timeline>
//         </Container>
//       </Box>

//       {/* Values */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Values
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               The principles that guide everything we do
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={4} key={value.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: '#121218',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       p: 4,
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         fontSize: '2rem',
//                         mb: 3,
//                         mx: 'auto',
//                       }}
//                     >
//                       {value.icon}
//                     </Avatar>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {value.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {value.description}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Chip,
//   Paper,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import GroupsIcon from '@mui/icons-material/Groups';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import SecurityIcon from '@mui/icons-material/Security';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import SchoolIcon from '@mui/icons-material/School';

// const AboutPage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const companyHistory = [
//     { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses of all sizes' },
//     { year: '2019', title: 'First Major Client', description: 'Secured partnership with leading Fortune 500 company' },
//     { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary enterprise AI platform' },
//     { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific regions' },
//     { year: '2022', title: 'Team Growth', description: 'Expanded team to 100+ AI specialists and researchers' },
//     { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation and impact' },
//   ];

//   const values = [
//     { icon: <RocketLaunchIcon />, title: 'Innovation', description: 'Pushing the boundaries of what AI can achieve' },
//     { icon: <SecurityIcon />, title: 'Integrity', description: 'Transparent, ethical AI practices you can trust' },
//     { icon: <EmojiObjectsIcon />, title: 'Excellence', description: 'Delivering the highest quality AI solutions' },
//     { icon: <HandshakeIcon />, title: 'Partnership', description: 'Working closely with clients as true partners' },
//     { icon: <GroupsIcon />, title: 'Collaboration', description: 'Fostering teamwork and shared success' },
//     { icon: <SchoolIcon />, title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
//   ];

//   const stats = [
//     { value: '150+', label: 'Projects Delivered' },
//     { value: '98%', label: 'Client Satisfaction' },
//     { value: '40+', label: 'Countries Served' },
//     { value: '24/7', label: 'Support Coverage' },
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
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Chip
//                   label="About Us"
//                   sx={{
//                     bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     color: '#00FF88',
//                     mb: 3,
//                     px: 2,
//                     py: 1,
//                   }}
//                 />
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   Shaping the Future with AI
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   We are pioneers in artificial intelligence, transforming how businesses
//                   operate through innovative and practical AI solutions. Our mission is
//                   to make advanced AI accessible, understandable, and beneficial for
//                   organizations worldwide.
//                 </Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: 400,
//                     borderRadius: 4,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       mixBlendMode: 'multiply',
//                     },
//                   }}
//                 />
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#121218' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={4}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} md={3} key={stat.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       textAlign: 'center',
//                       p: 4,
//                       height: '100%',
//                     }}
//                   >
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 1,
//                         color: '#00FF88',
//                         fontWeight: 700,
//                       }}
//                     >
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {stat.label}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Mission & Vision */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '2px solid',
//                     borderColor: '#00FF88',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           color: '#00FF88',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <RocketLaunchIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: '#00FF88' }}>
//                         Our Mission
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To empower businesses with practical AI solutions that drive real innovation,
//                       measurable efficiency, and sustainable growth. We believe that artificial
//                       intelligence should be accessible, understandable, and beneficial for all
//                       organizations, regardless of their size or industry.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: '#121218',
//                     border: '2px solid',
//                     borderColor: '#8A2BE2',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: alpha('#8A2BE2', 0.1),
//                           color: '#8A2BE2',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <EmojiObjectsIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: '#8A2BE2' }}>
//                         Our Vision
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To be the world's most trusted AI partner, leading the digital transformation
//                       of industries through ethical, innovative, and impactful artificial intelligence.
//                       We envision a future where AI enhances human potential and creates unprecedented
//                       opportunities for growth and discovery.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Timeline - Updated without TimelineOppositeContent */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }} ref={ref}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Journey
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               From humble beginnings to industry leadership
//             </Typography>
//           </Box>

//           <Timeline position="alternate">
//             {companyHistory.map((item, index) => (
//               <TimelineItem key={item.year}>
//                 <TimelineSeparator>
//                   <TimelineDot sx={{ bgcolor: '#00FF88' }}>
//                     <Box sx={{ width: 8, height: 8, bgcolor: 'background.default', borderRadius: '50%' }} />
//                   </TimelineDot>
//                   {index < companyHistory.length - 1 && (
//                     <TimelineConnector sx={{ bgcolor: '#00FF88' }} />
//                   )}
//                 </TimelineSeparator>
//                 <TimelineContent sx={{ py: 3, px: 2 }}>
//                   <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Paper
//                       sx={{
//                         p: 3,
//                         bgcolor: 'background.default',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                       }}
//                     >
//                       <Typography 
//                         variant="h6" 
//                         sx={{ 
//                           mb: 1, 
//                           fontWeight: 600,
//                           color: '#00FF88'
//                         }}
//                       >
//                         {item.year}
//                       </Typography>
//                       <Typography 
//                         variant="h6" 
//                         sx={{ 
//                           mb: 1, 
//                           fontWeight: 600 
//                         }}
//                       >
//                         {item.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {item.description}
//                       </Typography>
//                     </Paper>
//                   </motion.div>
//                 </TimelineContent>
//               </TimelineItem>
//             ))}
//           </Timeline>
//         </Container>
//       </Box>

//       {/* Values */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Our Values
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               The principles that guide everything we do
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={4} key={value.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: '#121218',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       p: 4,
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         fontSize: '2rem',
//                         mb: 3,
//                         mx: 'auto',
//                       }}
//                     >
//                       {value.icon}
//                     </Avatar>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {value.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {value.description}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Chip,
//   Paper,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import GroupsIcon from '@mui/icons-material/Groups';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import SecurityIcon from '@mui/icons-material/Security';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import SchoolIcon from '@mui/icons-material/School';

// const AboutPage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const companyHistory = [
//     { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses of all sizes' },
//     { year: '2019', title: 'First Major Client', description: 'Secured partnership with leading Fortune 500 company' },
//     { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary enterprise AI platform' },
//     { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific regions' },
//     { year: '2022', title: 'Team Growth', description: 'Expanded team to 100+ AI specialists and researchers' },
//     { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation and impact' },
//   ];

//   const values = [
//     { icon: <RocketLaunchIcon />, title: 'Innovation', description: 'Pushing the boundaries of what AI can achieve' },
//     { icon: <SecurityIcon />, title: 'Integrity', description: 'Transparent, ethical AI practices you can trust' },
//     { icon: <EmojiObjectsIcon />, title: 'Excellence', description: 'Delivering the highest quality AI solutions' },
//     { icon: <HandshakeIcon />, title: 'Partnership', description: 'Working closely with clients as true partners' },
//     { icon: <GroupsIcon />, title: 'Collaboration', description: 'Fostering teamwork and shared success' },
//     { icon: <SchoolIcon />, title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
//   ];

//   const stats = [
//     { value: '150+', label: 'Projects Delivered' },
//     { value: '98%', label: 'Client Satisfaction' },
//     { value: '40+', label: 'Countries Served' },
//     { value: '24/7', label: 'Support Coverage' },
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
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Chip
//                   label="About Us"
//                   sx={{
//                     bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
//                     color: 'primary.main',
//                     mb: 3,
//                     px: 2,
//                     py: 1,
//                   }}
//                 />
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     mb: 3,
//                     background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   Shaping the Future with AI
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     mb: 4,
//                     color: 'text.secondary',
//                     lineHeight: 1.8,
//                   }}
//                 >
//                   We are pioneers in artificial intelligence, transforming how businesses
//                   operate through innovative and practical AI solutions. Our mission is
//                   to make advanced AI accessible, understandable, and beneficial for
//                   organizations worldwide.
//                 </Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: 400,
//                     borderRadius: 4,
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       mixBlendMode: 'multiply',
//                     },
//                   }}
//                 />
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={4}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} md={3} key={stat.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       textAlign: 'center',
//                       p: 4,
//                       height: '100%',
//                     }}
//                   >
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 1,
//                         color: 'primary.main',
//                         fontWeight: 700,
//                       }}
//                     >
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {stat.label}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Mission & Vision */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'background.paper',
//                     border: '2px solid',
//                     borderColor: 'primary.main',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
//                           color: 'primary.main',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <RocketLaunchIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: 'primary.main' }}>
//                         Our Mission
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To empower businesses with practical AI solutions that drive real innovation,
//                       measurable efficiency, and sustainable growth. We believe that artificial
//                       intelligence should be accessible, understandable, and beneficial for all
//                       organizations, regardless of their size or industry.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'background.paper',
//                     border: '2px solid',
//                     borderColor: 'secondary.main',
//                     height: '100%',
//                     p: 4,
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                       <Avatar
//                         sx={{
//                           bgcolor: alpha('#8A2BE2', 0.1), // FIXED: Use HEX color
//                           color: 'secondary.main',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         <EmojiObjectsIcon />
//                       </Avatar>
//                       <Typography variant="h3" sx={{ color: 'secondary.main' }}>
//                         Our Vision
//                       </Typography>
//                     </Box>
//                     <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
//                       To be the world's most trusted AI partner, leading the digital transformation
//                       of industries through ethical, innovative, and impactful artificial intelligence.
//                       We envision a future where AI enhances human potential and creates unprecedented
//                       opportunities for growth and discovery.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Timeline - Custom Version (No MUI Lab) */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }} ref={ref}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: 'primary.main',
//                 fontWeight: 700,
//               }}
//             >
//               Our Journey
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               From humble beginnings to industry leadership
//             </Typography>
//           </Box>

//           <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto', px: { xs: 2, md: 0 } }}>
//             {/* Vertical Timeline Line */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: { xs: '30px', md: '50%' },
//                 top: 0,
//                 bottom: 0,
//                 width: '2px',
//                 bgcolor: 'primary.main',
//                 zIndex: 1,
//               }}
//             />

//             {companyHistory.map((item, index) => (
//               <Box
//                 key={item.year}
//                 sx={{
//                   position: 'relative',
//                   mb: 6,
//                   display: 'flex',
//                   flexDirection: { xs: 'row', md: 'row' },
//                   alignItems: 'flex-start',
//                   justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
//                   pl: { xs: '60px', md: index % 2 === 0 ? 0 : '50%' },
//                   pr: { xs: 0, md: index % 2 === 0 ? '50%' : 0 },
//                 }}
//               >
//                 {/* Timeline Dot */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     left: { xs: '22px', md: 'calc(50% - 8px)' },
//                     width: '16px',
//                     height: '16px',
//                     borderRadius: '50%',
//                     bgcolor: 'primary.main',
//                     border: '3px solid',
//                     borderColor: 'background.paper',
//                     zIndex: 3,
//                     top: '8px',
//                   }}
//                 />

//                 {/* Content Card */}
//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   style={{ width: '100%' }}
//                 >
//                   <Paper
//                     sx={{
//                       p: 3,
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       borderRadius: 2,
//                       boxShadow: 3,
//                       position: 'relative',
//                       '&:hover': {
//                         borderColor: 'primary.main',
//                         transform: 'translateY(-4px)',
//                         transition: 'all 0.3s ease',
//                       },
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 1,
//                         fontWeight: 700,
//                         color: 'primary.main',
//                         fontSize: '1.1rem',
//                       }}
//                     >
//                       {item.year}
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 1.5,
//                         fontWeight: 600,
//                         color: 'text.primary',
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//                       {item.description}
//                     </Typography>
//                   </Paper>
//                 </motion.div>
//               </Box>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Values */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 2,
//                 color: 'primary.main',
//                 fontWeight: 700,
//               }}
//             >
//               Our Values
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               The principles that guide everything we do
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={4} key={value.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.paper',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       p: 4,
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
//                         color: 'primary.main',
//                         fontSize: '2rem',
//                         mb: 3,
//                         mx: 'auto',
//                       }}
//                     >
//                       {value.icon}
//                     </Avatar>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {value.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       {value.description}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default AboutPage;

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
  Paper,
  Button,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const companyHistory = [
    { year: '2018', title: 'AI Foundation', description: 'Started with a vision to revolutionize business with AI', color: '#00FF88' },
    { year: '2019', title: 'First Breakthrough', description: 'Developed proprietary neural network architecture', color: '#8A2BE2' },
    { year: '2020', title: 'Platform Launch', description: 'Launched enterprise AI platform for global clients', color: '#00D4FF' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded operations to 20+ countries worldwide', color: '#FF6B6B' },
    { year: '2022', title: 'Team Growth', description: 'Built team of 100+ AI specialists and researchers', color: '#FFD700' },
    { year: '2023', title: 'AI Leadership', description: 'Recognized as industry leader in AI innovation', color: '#00FF88' },
  ];

  const values = [
    { 
      icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />, 
      title: 'Innovation First', 
      description: 'Pushing boundaries of AI technology',
      gradient: 'linear-gradient(135deg, #00FF88, #00D4FF)'
    },
    { 
      icon: <SecurityIcon sx={{ fontSize: 32 }} />, 
      title: 'Ethical AI', 
      description: 'Transparent and responsible AI practices',
      gradient: 'linear-gradient(135deg, #8A2BE2, #FF6B6B)'
    },
    { 
      icon: <EmojiObjectsIcon sx={{ fontSize: 32 }} />, 
      title: 'Excellence', 
      description: 'Delivering exceptional AI solutions',
      gradient: 'linear-gradient(135deg, #00D4FF, #00FF88)'
    },
    { 
      icon: <HandshakeIcon sx={{ fontSize: 32 }} />, 
      title: 'Partnership', 
      description: 'Collaborative approach with clients',
      gradient: 'linear-gradient(135deg, #FF6B6B, #8A2BE2)'
    },
    { 
      icon: <GroupsIcon sx={{ fontSize: 32 }} />, 
      title: 'Collaboration', 
      description: 'Teamwork drives innovation',
      gradient: 'linear-gradient(135deg, #FFD700, #00FF88)'
    },
    { 
      icon: <SchoolIcon sx={{ fontSize: 32 }} />, 
      title: 'Continuous Learning', 
      description: 'Always evolving with AI advancements',
      gradient: 'linear-gradient(135deg, #00FF88, #8A2BE2)'
    },
  ];

  const stats = [
    { value: '150+', label: 'AI Projects', color: '#00FF88' },
    { value: '98%', label: 'Client Satisfaction', color: '#8A2BE2' },
    { value: '40+', label: 'Countries Served', color: '#00D4FF' },
    { value: '50+', label: 'AI Experts', color: '#FF6B6B' },
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

      {/* Hero Section with AI Theme */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#121218',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />

        {/* Circuit Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  icon={<StarIcon />}
                  label="About Zenturatech"
                  sx={{
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    color: '#00FF88',
                    mb: 3,
                    px: 2,
                    py: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                  }}
                />
                
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
                  }}
                >
                  Shaping the Future with AI
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: '#A0A0A0',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  We are pioneers in artificial intelligence, transforming how businesses
                  operate through innovative and practical AI solutions. Our mission is
                  to make advanced AI accessible, understandable, and beneficial for
                  organizations worldwide.
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/services')}
                    sx={{
                      background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                      color: '#121218',
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
                      }
                    }}
                  >
                    Explore Services
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/contact')}
                    sx={{
                      borderColor: 'rgba(0, 255, 136, 0.3)',
                      color: '#00FF88',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: '#00FF88',
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
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
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(138, 43, 226, 0.2))',
                      zIndex: 1,
                    }}
                  />
                  
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Technology"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)',
                    }}
                  />
                  
                  {/* AI Network Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                      opacity: 0.5,
                      mixBlendMode: 'screen',
                      zIndex: 2,
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section - AI Theme */}
      <Box sx={{ 
        py: { xs: 8, md: 10 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      bgcolor: '#121218',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: stat.color,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 20px 40px ${alpha(stat.color, 0.2)}`,
                      }
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 1,
                        color: stat.color,
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        textShadow: `0 0 20px ${alpha(stat.color, 0.5)}`,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#FFFFFF', 
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision - AI Theme */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    bgcolor: '#0F172A',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid',
                    borderColor: '#00FF88',
                    height: '100%',
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 40px 80px rgba(0, 255, 136, 0.2)',
                      transform: 'translateY(-10px)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'rgba(0, 255, 136, 0.1)',
                        color: '#00FF88',
                        width: 60,
                        height: 60,
                        border: '2px solid #00FF88',
                      }}
                    >
                      <RocketLaunchIcon />
                    </Avatar>
                    <Typography variant="h3" sx={{ color: '#00FF88', fontWeight: 700 }}>
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#A0A0A0', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    To empower businesses with practical AI solutions that drive real innovation,
                    measurable efficiency, and sustainable growth. We believe that artificial
                    intelligence should be accessible, understandable, and beneficial for all
                    organizations, regardless of their size or industry.
                  </Typography>
                  
                  {/* Mission Glow Effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at top right, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: '#0F172A',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid',
                    borderColor: '#8A2BE2',
                    height: '100%',
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 40px 80px rgba(138, 43, 226, 0.2)',
                      transform: 'translateY(-10px)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'rgba(138, 43, 226, 0.1)',
                        color: '#8A2BE2',
                        width: 60,
                        height: 60,
                        border: '2px solid #8A2BE2',
                      }}
                    >
                      <EmojiObjectsIcon />
                    </Avatar>
                    <Typography variant="h3" sx={{ color: '#8A2BE2', fontWeight: 700 }}>
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#A0A0A0', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    To be the world's most trusted AI partner, leading the digital transformation
                    of industries through ethical, innovative, and impactful artificial intelligence.
                    We envision a future where AI enhances human potential and creates unprecedented
                    opportunities for growth and discovery.
                  </Typography>
                  
                  {/* Vision Glow Effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at top left, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* AI Journey Timeline */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#0F172A',
        borderTop: '1px solid rgba(0, 255, 136, 0.1)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
      }} ref={ref}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our AI Journey
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#A0A0A0',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              From innovative startup to AI industry leader
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto', px: { xs: 2, md: 0 } }}>
            {/* AI Neural Network Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '30px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '3px',
                background: 'linear-gradient(to bottom, #00FF88, #8A2BE2, #00D4FF, #FF6B6B)',
                zIndex: 1,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: -5,
                  right: -5,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
                  filter: 'blur(10px)',
                  zIndex: -1,
                }
              }}
            />

            {companyHistory.map((item, index) => (
              <Box
                key={item.year}
                sx={{
                  position: 'relative',
                  mb: 6,
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row' },
                  alignItems: 'flex-start',
                  justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                  pl: { xs: '60px', md: index % 2 === 0 ? 0 : '50%' },
                  pr: { xs: 0, md: index % 2 === 0 ? '50%' : 0 },
                }}
              >
                {/* Timeline Node with Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '22px', md: 'calc(50% - 10px)' },
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    bgcolor: item.color,
                    border: '3px solid #121218',
                    zIndex: 3,
                    top: '8px',
                    boxShadow: `0 0 20px ${alpha(item.color, 0.5)}`,
                  }}
                />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: '#121218',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid',
                      borderColor: alpha(item.color, 0.3),
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: item.color,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 30px 60px ${alpha(item.color, 0.3)}`,
                        '&:before': {
                          opacity: 1,
                        }
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(item.color, 0.1)}, transparent)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <TimelineIcon sx={{ color: item.color }} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: item.color,
                            fontSize: '1.1rem',
                          }}
                        >
                          {item.year}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 1.5,
                          fontWeight: 700,
                          color: '#FFFFFF',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        color="#A0A0A0" 
                        sx={{ 
                          lineHeight: 1.7,
                          fontSize: '1rem',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Core Values - AI Theme */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#121218',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our AI Values
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#A0A0A0',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              The principles that guide our AI innovation journey
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: '#0F172A',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      height: '100%',
                      p: 4,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: value.title.includes('Innovation') ? '#00FF88' : 
                                    value.title.includes('Ethical') ? '#8A2BE2' :
                                    value.title.includes('Excellence') ? '#00D4FF' :
                                    value.title.includes('Partnership') ? '#FF6B6B' :
                                    value.title.includes('Collaboration') ? '#FFD700' : '#00FF88',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                        '& .value-glow': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    {/* Value Glow Effect */}
                    <Box
                      className="value-glow"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: value.gradient,
                        opacity: 0.05,
                        transition: 'opacity 0.3s ease',
                        zIndex: 0,
                      }}
                    />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: 'rgba(18, 18, 24, 0.5)',
                          border: '2px solid',
                          borderColor: value.title.includes('Innovation') ? '#00FF88' : 
                                      value.title.includes('Ethical') ? '#8A2BE2' :
                                      value.title.includes('Excellence') ? '#00D4FF' :
                                      value.title.includes('Partnership') ? '#FF6B6B' :
                                      value.title.includes('Collaboration') ? '#FFD700' : '#00FF88',
                          fontSize: '2rem',
                          mb: 3,
                          mx: 'auto',
                          '& svg': {
                            color: value.title.includes('Innovation') ? '#00FF88' : 
                                   value.title.includes('Ethical') ? '#8A2BE2' :
                                   value.title.includes('Excellence') ? '#00D4FF' :
                                   value.title.includes('Partnership') ? '#FF6B6B' :
                                   value.title.includes('Collaboration') ? '#FFD700' : '#00FF88',
                          }
                        }}
                      >
                        {value.icon}
                      </Avatar>
                      
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: value.gradient,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {value.title}
                      </Typography>
                      
                      <Typography variant="body1" color="#A0A0A0" sx={{ lineHeight: 1.6 }}>
                        {value.description}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default AboutPage;