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
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companyHistory = [
    { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI for businesses of all sizes' },
    { year: '2019', title: 'First Major Client', description: 'Secured partnership with leading Fortune 500 company' },
    { year: '2020', title: 'AI Platform Launch', description: 'Launched our proprietary enterprise AI platform' },
    { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific regions' },
    { year: '2022', title: 'Team Growth', description: 'Expanded team to 100+ AI specialists and researchers' },
    { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation and impact' },
  ];

  const values = [
    { icon: <RocketLaunchIcon />, title: 'Innovation', description: 'Pushing the boundaries of what AI can achieve' },
    { icon: <SecurityIcon />, title: 'Integrity', description: 'Transparent, ethical AI practices you can trust' },
    { icon: <EmojiObjectsIcon />, title: 'Excellence', description: 'Delivering the highest quality AI solutions' },
    { icon: <HandshakeIcon />, title: 'Partnership', description: 'Working closely with clients as true partners' },
    { icon: <GroupsIcon />, title: 'Collaboration', description: 'Fostering teamwork and shared success' },
    { icon: <SchoolIcon />, title: 'Learning', description: 'Continuous improvement and knowledge sharing' },
  ];

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '40+', label: 'Countries Served' },
    { value: '24/7', label: 'Support Coverage' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  label="About Us"
                  sx={{
                    bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
                    color: 'primary.main',
                    mb: 3,
                    px: 2,
                    py: 1,
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
                  }}
                >
                  Shaping the Future with AI
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
                  operate through innovative and practical AI solutions. Our mission is
                  to make advanced AI accessible, understandable, and beneficial for
                  organizations worldwide.
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
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mixBlendMode: 'multiply',
                    },
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
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
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 1,
                        color: 'primary.main',
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    height: '100%',
                    p: 4,
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
                          color: 'primary.main',
                          width: 60,
                          height: 60,
                        }}
                      >
                        <RocketLaunchIcon />
                      </Avatar>
                      <Typography variant="h3" sx={{ color: 'primary.main' }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      To empower businesses with practical AI solutions that drive real innovation,
                      measurable efficiency, and sustainable growth. We believe that artificial
                      intelligence should be accessible, understandable, and beneficial for all
                      organizations, regardless of their size or industry.
                    </Typography>
                  </CardContent>
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
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'secondary.main',
                    height: '100%',
                    p: 4,
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: alpha('#8A2BE2', 0.1), // FIXED: Use HEX color
                          color: 'secondary.main',
                          width: 60,
                          height: 60,
                        }}
                      >
                        <EmojiObjectsIcon />
                      </Avatar>
                      <Typography variant="h3" sx={{ color: 'secondary.main' }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      To be the world's most trusted AI partner, leading the digital transformation
                      of industries through ethical, innovative, and impactful artificial intelligence.
                      We envision a future where AI enhances human potential and creates unprecedented
                      opportunities for growth and discovery.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline - Custom Version (No MUI Lab) */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }} ref={ref}>
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

          <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto', px: { xs: 2, md: 0 } }}>
            {/* Vertical Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '30px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                bgcolor: 'primary.main',
                zIndex: 1,
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
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '22px', md: 'calc(50% - 8px)' },
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    border: '3px solid',
                    borderColor: 'background.paper',
                    zIndex: 3,
                    top: '8px',
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
                      p: 3,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      boxShadow: 3,
                      position: 'relative',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: '1.1rem',
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1.5,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Values */}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      p: 4,
                      textAlign: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'rgba(0, 255, 136, 0.1)', // FIXED: Use HEX color
                        color: 'primary.main',
                        fontSize: '2rem',
                        mb: 3,
                        mx: 'auto',
                      }}
                    >
                      {value.icon}
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