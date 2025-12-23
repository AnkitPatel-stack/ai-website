// import React, { useState } from 'react';
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
// import { Link } from 'react-router-dom';

// const ServicesSection = () => {
//   const [content] = useState({
//     services_title: 'Our AI Services',
//     services_subtitle: 'Comprehensive AI solutions designed for practical business applications',
//     services_list: [
//       {
//         title: 'AI Strategy & Consulting',
//         description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
//         icon: '🎯',
//       },
//       {
//         title: 'Machine Learning Development',
//         description: 'Custom ML models built and deployed for specific use cases.',
//         icon: '🤖',
//       },
//       {
//         title: 'Natural Language Processing',
//         description: 'Advanced NLP solutions for text analysis and language understanding.',
//         icon: '💬',
//       },
//       {
//         title: 'Computer Vision',
//         description: 'Image and video analysis for automation and insights.',
//         icon: '👁️',
//       },
//       {
//         title: 'AI Integration',
//         description: 'Seamlessly integrate AI capabilities into existing systems.',
//         icon: '🔗',
//       },
//       {
//         title: 'AI Training & Support',
//         description: 'Comprehensive training and ongoing support for teams.',
//         icon: '🎓',
//       },
//     ],
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

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
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//               }}
//             >
//               {content.services_title}
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
//               {content.services_subtitle}
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {content.services_list.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={service.title}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     bgcolor: 'background.default',
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
//                   <CardContent sx={{ p: 4 }}>
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         mb: 2,
//                         fontSize: '3rem',
//                         lineHeight: 1,
//                       }}
//                     >
//                       {service.icon}
//                     </Typography>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {service.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         mb: 3,
//                         lineHeight: 1.7,
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
                    
//                     <Button
//                       component={Link}
//                       to="/services"
//                       variant="text"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: '#00FF88',
//                         fontWeight: 600,
//                         '&:hover': {
//                           bgcolor: 'rgba(0, 255, 136, 0.1)',
//                         },
//                       }}
//                     >
//                       Learn More
//                     </Button>
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

// export default ServicesSection;


// src/sections/ServicesSection.js
import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const [content] = useState({
    services_title: 'Our AI Services',
    services_subtitle: 'Comprehensive AI solutions designed for practical business applications',
    services_list: [
      {
        title: 'AI Strategy & Consulting',
        description: 'Develop comprehensive AI roadmaps aligned with your business objectives.',
        icon: '🎯',
      },
      {
        title: 'Machine Learning Development',
        description: 'Custom ML models built and deployed for specific use cases.',
        icon: '🤖',
      },
      {
        title: 'Natural Language Processing',
        description: 'Advanced NLP solutions for text analysis and language understanding.',
        icon: '💬',
      },
      {
        title: 'Computer Vision',
        description: 'Image and video analysis for automation and insights.',
        icon: '👁️',
      },
      {
        title: 'AI Integration',
        description: 'Seamlessly integrate AI capabilities into existing systems.',
        icon: '🔗',
      },
      {
        title: 'AI Training & Support',
        description: 'Comprehensive training and ongoing support for teams.',
        icon: '🎓',
      },
    ],
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0A0F' }}>
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
              {content.services_title}
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
              {content.services_subtitle}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {content.services_list.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    bgcolor: '#121218',
                    border: '1px solid',
                    borderColor: '#333',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#00FF88',
                      boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 2,
                        fontSize: '3rem',
                        lineHeight: 1,
                      }}
                    >
                      {service.icon}
                    </Typography>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: '#FFFFFF',
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        color: '#A0A0A0',
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      onClick={handleLearnMore}
                      sx={{
                        color: '#00FF88',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: 'rgba(0, 255, 136, 0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
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
            onClick={handleLearnMore}
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
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;