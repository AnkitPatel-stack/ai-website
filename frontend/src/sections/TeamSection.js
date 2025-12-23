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
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const [content] = useState({
    team_title: 'Meet Our Leadership',
    team_subtitle: 'Our team combines extensive experience in AI, technology, and business transformation.',
    team_members: [
      {
        name: 'Dr. Sarah Chen',
        position: 'CEO & Founder',
        bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Michael Rodriguez',
        position: 'CTO',
        bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Jessica Williams',
        position: 'Head of Product',
        bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'David Kim',
        position: 'Lead ML Engineer',
        bio: 'PhD in AI from MIT, published researcher in neural networks',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
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
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
      <Container maxWidth="xl">
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
                fontWeight: 700,
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
              }}
            >
              {content.team_subtitle}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {content.team_members.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    bgcolor: '#1a1a1a',
                    border: '1px solid',
                    borderColor: '#333',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#00FF88',
                      boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      objectFit: 'cover',
                      filter: 'grayscale(20%)',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                      },
                    }}
                  />
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 0.5,
                        fontWeight: 600,
                        color: '#FFFFFF',
                      }}
                    >
                      {member.name}
                    </Typography>
                    
                    <Chip
                      label={member.position}
                      size="small"
                      sx={{
                        bgcolor: '#00FF88',
                        color: '#121218',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    />
                    
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        lineHeight: 1.6,
                        minHeight: 60,
                        color: '#A0A0A0',
                      }}
                    >
                      {member.bio}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <IconButton
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: '#00FF88',
                          '&:hover': {
                            bgcolor: 'rgba(0, 255, 136, 0.1)',
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleViewTeam}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              bgcolor: '#00FF88',
              color: '#121218',
              '&:hover': {
                bgcolor: '#00CC6D',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 20px rgba(0, 255, 136, 0.3)',
              },
            }}
          >
            Meet Full Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;