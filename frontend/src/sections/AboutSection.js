// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Link } from 'react-router-dom';

// const AboutSection = () => {
//   const [content] = useState({
//     about_title: 'Leading in Practical AI Solutions',
//     about_description: 'We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.',
//     about_stats: [
//       { label: 'Projects Delivered', value: '150', suffix: '+' },
//       { label: 'AI Models Deployed', value: '500', suffix: '+' },
//       { label: 'Client Satisfaction', value: '98', suffix: '%' },
//       { label: 'Team Members', value: '50', suffix: '+' },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   fontWeight: 700,
//                 }}
//               >
//                 {content.about_title}
//               </Typography>
              
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 4,
//                   color: 'text.secondary',
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {content.about_description}
//               </Typography>
              
//               <Button
//                 component={Link}
//                 to="/about"
//                 variant="outlined"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderWidth: 2,
//                   '&:hover': {
//                     borderWidth: 2,
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={3}>
//               {content.about_stats.map((stat, index) => (
//                 <Grid item xs={6} key={stat.label}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card
//                       sx={{
//                         bgcolor: '#121218',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         height: '100%',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           borderColor: '#00FF88',
//                           boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center', p: 3 }}>
//                         <Typography
//                           variant="h2"
//                           sx={{
//                             color: '#00FF88',
//                             fontWeight: 700,
//                             mb: 1,
//                           }}
//                         >
//                           {stat.value}
//                           <Box
//                             component="span"
//                             sx={{ color: 'text.primary', fontSize: '1.5rem' }}
//                           >
//                             {stat.suffix}
//                           </Box>
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           color="text.secondary"
//                         >
//                           {stat.label}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;



// src/sections/AboutSection.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [content] = useState({
    about_title: 'Leading in Practical AI Solutions',
    about_description: 'We specialize in delivering measurable AI solutions that transform how businesses operate, focusing on real-world applications and tangible results.',
    about_stats: [
      { label: 'Projects Delivered', value: '150', suffix: '+' },
      { label: 'AI Models Deployed', value: '500', suffix: '+' },
      { label: 'Client Satisfaction', value: '98', suffix: '%' },
      { label: 'Team Members', value: '50', suffix: '+' },
    ],
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#121218' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: '#00FF88',
                  fontWeight: 700,
                }}
              >
                {content.about_title}
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: '#E0E0E0',
                  lineHeight: 1.8,
                }}
              >
                {content.about_description}
              </Typography>
              
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleLearnMore}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  borderColor: '#00FF88',
                  color: '#00FF88',
                  fontWeight: 600,
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: '#00FF88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Learn More About Us
              </Button>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {content.about_stats.map((stat, index) => (
                <Grid item xs={6} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        bgcolor: '#1a1a1a',
                        border: '1px solid',
                        borderColor: '#333',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor: '#00FF88',
                          boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Typography
                          variant="h2"
                          sx={{
                            color: '#00FF88',
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {stat.value}
                          <Box
                            component="span"
                            sx={{ color: '#FFFFFF', fontSize: '1.5rem' }}
                          >
                            {stat.suffix}
                          </Box>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: '#A0A0A0' }}
                        >
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;