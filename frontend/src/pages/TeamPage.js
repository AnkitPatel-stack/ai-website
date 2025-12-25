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
//   IconButton,
//   Paper,
//   alpha,
// } from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const TeamPage = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const leadershipTeam = [
//     {
//       name: 'Dr. Sarah Chen',
//       position: 'CEO & Founder',
//       bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford. 15+ years in AI research and development.',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//       linkedin: '#',
//       twitter: '#',
//       expertise: ['AI Research', 'Strategy', 'Leadership'],
//     },
//     {
//       name: 'Michael Rodriguez',
//       position: 'Chief Technology Officer',
//       bio: 'Ex-Microsoft AI Architect, 18+ years in machine learning systems and scalable AI infrastructure.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//       linkedin: '#',
//       twitter: '#',
//       expertise: ['Machine Learning', 'Architecture', 'DevOps'],
//     },
//     {
//       name: 'Jessica Williams',
//       position: 'Head of Product',
//       bio: 'Former Product Director at OpenAI, specializes in AI product strategy and user experience.',
//       image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
//       linkedin: '#',
//       twitter: '#',
//       expertise: ['Product Strategy', 'UX Design', 'Agile'],
//     },
//     {
//       name: 'David Kim',
//       position: 'Lead ML Engineer',
//       bio: 'PhD in AI from MIT, published researcher in neural networks and deep learning architectures.',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//       linkedin: '#',
//       twitter: '#',
//       expertise: ['Deep Learning', 'Neural Networks', 'Research'],
//     },
//   ];

//   const engineeringTeam = [
//     {
//       name: 'Alex Thompson',
//       position: 'Senior ML Engineer',
//       bio: 'Specializes in computer vision and real-time AI systems. Previously at NVIDIA.',
//       image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128',
//       expertise: ['Computer Vision', 'Real-time Systems', 'CUDA'],
//     },
//     {
//       name: 'Maria Garcia',
//       position: 'NLP Specialist',
//       bio: 'Expert in natural language processing and large language models. PhD in Computational Linguistics.',
//       image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
//       expertise: ['NLP', 'LLMs', 'Linguistics'],
//     },
//     {
//       name: 'James Wilson',
//       position: 'Data Scientist',
//       bio: 'Focuses on predictive analytics and data-driven decision making. Masters in Statistics from Harvard.',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
//       expertise: ['Predictive Analytics', 'Statistics', 'Data Mining'],
//     },
//     {
//       name: 'Sophie Martin',
//       position: 'AI Research Scientist',
//       bio: 'Research focus on reinforcement learning and autonomous systems. Published in top AI conferences.',
//       image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
//       expertise: ['Reinforcement Learning', 'Autonomous Systems', 'Research'],
//     },
//   ];

//   const values = [
//     {
//       title: 'Collaboration',
//       description: 'We believe the best solutions come from working together',
//       icon: '🤝',
//     },
//     {
//       title: 'Innovation',
//       description: 'Constantly exploring new approaches and technologies',
//       icon: '💡',
//     },
//     {
//       title: 'Excellence',
//       description: 'Committed to delivering the highest quality work',
//       icon: '⭐',
//     },
//     {
//       title: 'Growth',
//       description: 'Continuous learning and professional development',
//       icon: '📈',
//     },
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
//               <Chip
//                 label="Our Team"
//                 sx={{
//                   bgcolor: 'rgba(0, 255, 136, 0.1)',
//                   color: '#00FF88',
//                   mb: 3,
//                   px: 2,
//                   py: 1,
//                 }}
//               />
//               <Typography
//                 variant="h1"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 Meet Our Experts
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 A diverse team of AI specialists, researchers, and engineers
//                 dedicated to pushing the boundaries of artificial intelligence
//                 and delivering exceptional results for our clients.
//               </Typography>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Leadership Team */}
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
//               Leadership Team
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               Experienced leaders guiding our vision and strategy
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {leadershipTeam.map((member, index) => (
//               <Grid item xs={12} sm={6} md={3} key={member.name}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card
//                     sx={{
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         height: 200,
//                         bgcolor: '#00FF88',
//                         position: 'relative',
//                         '&:before': {
//                           content: '""',
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: `url(${member.image})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center',
//                           mixBlendMode: 'luminosity',
//                         },
//                       }}
//                     />
                    
//                     <CardContent sx={{ p: 3 }}>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           mb: 1,
//                           fontWeight: 700,
//                         }}
//                       >
//                         {member.name}
//                       </Typography>
                      
//                       <Chip
//                         label={member.position}
//                         size="small"
//                         sx={{
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                           color: '#00FF88',
//                           mb: 2,
//                         }}
//                       />
                      
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{
//                           mb: 3,
//                           lineHeight: 1.6,
//                           minHeight: 80,
//                         }}
//                       >
//                         {member.bio}
//                       </Typography>
                      
//                       <Box sx={{ mb: 2 }}>
//                         {member.expertise.map((skill, idx) => (
//                           <Chip
//                             key={idx}
//                             label={skill}
//                             size="small"
//                             sx={{
//                               mr: 1,
//                               mb: 1,
//                               bgcolor: alpha('#121218', 0.5),
//                               border: '1px solid',
//                               borderColor: 'divider',
//                             }}
//                           />
//                         ))}
//                       </Box>
                      
//                       <Box sx={{ display: 'flex', gap: 1 }}>
//                         <IconButton
//                           href={member.linkedin}
//                           target="_blank"
//                           size="small"
//                           sx={{
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                             '&:hover': {
//                               bgcolor: '#00FF88',
//                               color: 'background.default',
//                             },
//                           }}
//                         >
//                           <LinkedInIcon />
//                         </IconButton>
//                         <IconButton
//                           href={member.twitter}
//                           target="_blank"
//                           size="small"
//                           sx={{
//                             bgcolor: 'rgba(0, 255, 136, 0.1)',
//                             '&:hover': {
//                               bgcolor: '#00FF88',
//                               color: 'background.default',
//                             },
//                           }}
//                         >
//                           <TwitterIcon />
//                         </IconButton>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Engineering Team */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} ref={ref}>
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
//               Engineering Team
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               Talented engineers and researchers building our AI solutions
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {engineeringTeam.map((member, index) => (
//               <Grid item xs={12} sm={6} md={3} key={member.name}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Paper
//                     sx={{
//                       p: 3,
//                       bgcolor: '#121218',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 120,
//                         height: 120,
//                         mx: 'auto',
//                         mb: 3,
//                         bgcolor: '#00FF88',
//                         fontSize: '3rem',
//                       }}
//                     >
//                       {member.name.split(' ').map(n => n[0]).join('')}
//                     </Avatar>
                    
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 1,
//                         fontWeight: 700,
//                       }}
//                     >
//                       {member.name}
//                     </Typography>
                    
//                     <Chip
//                       label={member.position}
//                       size="small"
//                       sx={{
//                         bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         mb: 2,
//                       }}
//                     />
                    
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>
                    
//                     <Box>
//                       {member.expertise.map((skill, idx) => (
//                         <Chip
//                           key={idx}
//                           label={skill}
//                           size="small"
//                           sx={{
//                             mr: 0.5,
//                             mb: 0.5,
//                             bgcolor: 'rgba(18, 18, 24, 0.5)' ,
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Paper>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Team Values */}
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
//               Team Culture
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               The principles that define how we work together
//             </Typography>
//           </Box>

//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={3} key={value.title}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Paper
//                     sx={{
//                       p: 4,
//                       bgcolor: 'background.default',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       height: '100%',
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 2,
//                         fontSize: '3rem',
//                         lineHeight: 1,
//                       }}
//                     >
//                       {value.icon}
//                     </Typography>
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
//                   </Paper>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Join Team CTA */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Paper
//             sx={{
//               p: { xs: 4, md: 8 },
//               bgcolor: '#121218',
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 4,
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 color: '#00FF88',
//                 fontWeight: 700,
//               }}
//             >
//               Join Our Team
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
//               We're always looking for talented individuals passionate about
//               AI and technology. Check our careers page for current openings.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <IconButton
//                   href="#"
//                   size="large"
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     width: 56,
//                     height: 56,
//                     '&:hover': {
//                       bgcolor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   <LinkedInIcon />
//                 </IconButton>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <IconButton
//                   href="#"
//                   size="large"
//                   sx={{
//                     bgcolor: '#00FF88',
//                     color: 'background.default',
//                     width: 56,
//                     height: 56,
//                     '&:hover': {
//                       bgcolor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   <GitHubIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </motion.div>
//   );
// };

// export default TeamPage;


// src/pages/TeamPage.js
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
  IconButton,
  Paper,
  alpha,
  Button,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const navigate = useNavigate();

  const leadershipTeam = [
    {
      name: 'Mansi Dixit',
      position: 'Founder and CEO',
      bio: 'Mansi Dixit brings over 8 years of extensive finance experience with a background spanning JP Morgan Chase, Ernst & Young, and sustainable finance initiatives.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      linkedin: 'https://linkedin.com/in/mansi-dixit',
      twitter: 'https://x.com/mansi-dixit',
      email: 'mansi@zenturatech.com',
      expertise: ['AI Strategy', 'Business Development', 'Finance'],
    },
    {
      name: 'Sahil Khan',
      position: 'Co-Founder and CTO',
      bio: 'Sahil brings strong expertise in artificial intelligence, machine learning, and cloud-native architectures, with a proven ability to translate advanced technical capabilities into dependable, production-grade solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      linkedin: 'https://linkedin.com/in/sahil-khan',
      twitter: 'https://x.com/sahil-khan',
      email: 'sahil@zenturatech.com',
      expertise: ['Machine Learning', 'Cloud Architecture', 'DevOps'],
    },
  ];

  const engineeringTeam = [
    {
      name: 'Priya Sharma',
      position: 'Lead ML Engineer',
      bio: 'Specializes in computer vision and real-time AI systems. Previously worked on autonomous vehicle projects at Tesla.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      linkedin: '#',
      github: '#',
      expertise: ['Computer Vision', 'Real-time Systems', 'Deep Learning'],
    },
    {
      name: 'Raj Patel',
      position: 'NLP Specialist',
      bio: 'Expert in natural language processing and large language models. PhD in Computational Linguistics from Stanford.',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128',
      linkedin: '#',
      github: '#',
      expertise: ['NLP', 'LLMs', 'Linguistics'],
    },
    {
      name: 'Ananya Singh',
      position: 'Data Scientist',
      bio: 'Focuses on predictive analytics and data-driven decision making. Masters in Statistics from Harvard.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      linkedin: '#',
      github: '#',
      expertise: ['Predictive Analytics', 'Statistics', 'Data Mining'],
    },
    {
      name: 'Arjun Mehta',
      position: 'AI Research Scientist',
      bio: 'Research focus on reinforcement learning and autonomous systems. Published in top AI conferences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      linkedin: '#',
      github: '#',
      expertise: ['Reinforcement Learning', 'Autonomous Systems', 'Research'],
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what AI can achieve',
      icon: '🚀',
      color: '#00FF88',
    },
    {
      title: 'Collaboration',
      description: 'Great ideas come from working together across disciplines',
      icon: '🤝',
      color: '#8A2BE2',
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality AI solutions',
      icon: '⭐',
      color: '#00D4FF',
    },
    {
      title: 'Impact Driven',
      description: 'Building AI that makes a real difference in the world',
      icon: '🌍',
      color: '#FF6B6B',
    },
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
          py: { xs: 6, md: 10 },
          bgcolor: '#121218',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '2px solid rgba(0, 255, 136, 0.2)',
        }}
      >
        {/* Back Button */}
        <Container maxWidth="xl">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              mb: 4,
              color: '#00FF88',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
              }
            }}
          >
            Back to Home
          </Button>
        </Container>

        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="Meet the Team"
                sx={{
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                  color: '#00FF88',
                  mb: 3,
                  px: 2,
                  py: 1,
                  fontSize: '0.9rem',
                  fontWeight: 600,
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
                }}
              >
                The Minds Behind Our AI Revolution
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
                A diverse team of AI specialists, researchers, and engineers 
                dedicated to pushing the boundaries of artificial intelligence 
                and delivering exceptional results for our clients.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Leadership Team */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F172A' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Leadership Team
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
              Visionary leaders guiding our strategy and innovation
            </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center">
            {leadershipTeam.map((member, index) => (
              <Grid item xs={12} md={6} key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      bgcolor: '#121218',
                      border: '2px solid',
                      borderColor: 'rgba(0, 255, 136, 0.3)',
                      borderRadius: 4,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#00FF88',
                        boxShadow: '0 20px 60px rgba(0, 255, 136, 0.3)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: { xs: 120, md: 140 },
                            height: { xs: 120, md: 140 },
                            border: '3px solid #00FF88',
                            boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                          }}
                        />
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h3"
                            sx={{
                              mb: 1,
                              fontWeight: 700,
                              color: '#FFFFFF',
                              fontSize: { xs: '1.8rem', md: '2rem' },
                            }}
                          >
                            {member.name}
                          </Typography>
                          
                          <Chip
                            label={member.position}
                            sx={{
                              bgcolor: 'rgba(0, 255, 136, 0.1)',
                              color: '#00FF88',
                              mb: 3,
                              fontWeight: 600,
                            }}
                          />
                          
                          <Typography
                            variant="body1"
                            color="#A0A0A0"
                            sx={{
                              mb: 3,
                              lineHeight: 1.7,
                              fontSize: '1rem',
                            }}
                          >
                            {member.bio}
                          </Typography>
                          
                          <Box sx={{ mb: 3 }}>
                            {member.expertise.map((skill, idx) => (
                              <Chip
                                key={idx}
                                label={skill}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                                  color: '#FFFFFF',
                                  fontWeight: 500,
                                }}
                              />
                            ))}
                          </Box>
                          
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                              href={member.linkedin}
                              target="_blank"
                              size="medium"
                              sx={{
                                bgcolor: 'rgba(0, 255, 136, 0.1)',
                                color: '#00FF88',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 255, 136, 0.2)',
                                },
                              }}
                            >
                              <LinkedInIcon />
                            </IconButton>
                            <IconButton
                              href={member.twitter}
                              target="_blank"
                              size="medium"
                              sx={{
                                bgcolor: 'rgba(0, 255, 136, 0.1)',
                                color: '#00FF88',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 255, 136, 0.2)',
                                },
                              }}
                            >
                              <TwitterIcon />
                            </IconButton>
                            <IconButton
                              href={`mailto:${member.email}`}
                              size="medium"
                              sx={{
                                bgcolor: 'rgba(0, 255, 136, 0.1)',
                                color: '#00FF88',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 255, 136, 0.2)',
                                },
                              }}
                            >
                              <EmailIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Team Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F172A' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Culture
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
              The principles that define how we work together
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: '#121218',
                      border: '2px solid',
                      borderColor: alpha(value.color, 0.3),
                      borderRadius: 4,
                      height: '100%',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: value.color,
                        boxShadow: `0 20px 40px ${alpha(value.color, 0.2)}`,
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        mb: 2,
                        fontSize: '4rem',
                        lineHeight: 1,
                      }}
                    >
                      {value.icon}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: value.color,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="#A0A0A0">
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default TeamPage;