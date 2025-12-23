// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';

// const ContactCTASection = () => {
//   const [content] = useState({
//     contact_title: 'Ready to Transform Your Business?',
//     contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
//       <Container maxWidth="xl">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <Box
//             sx={{
//               bgcolor: '#121218',
//               border: '2px solid',
//               borderColor: '#00FF88',
//               borderRadius: 4,
//               p: { xs: 4, md: 8 },
//               textAlign: 'center',
//               position: 'relative',
//               overflow: 'hidden',
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: 4,
//                 bgcolor: '#00FF88',
//               },
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 background: 'linear-gradient(135deg, #00FF88 30%, #8A2BE2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 700,
//               }}
//             >
//               {content.contact_title}
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
//               {content.contact_subtitle}
//             </Typography>
            
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   component={Link}
//                   to="/contact"
//                   variant="contained"
//                   size="large"
//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                   }}
//                 >
//                   Get in Touch
//                 </Button>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   component={Link}
//                   to="/services"
//                   variant="outlined"
//                   size="large"
//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                     borderWidth: 2,
//                     '&:hover': {
//                       borderWidth: 2,
//                     },
//                   }}
//                 >
//                   View Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ContactCTASection;



// src/sections/ContactCTASection.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const ContactCTASection = () => {
  const [content] = useState({
    contact_title: 'Ready to Transform Your Business?',
    contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0A0F' }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              bgcolor: '#121218',
              border: '2px solid',
              borderColor: '#00FF88',
              borderRadius: 4,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                bgcolor: '#00FF88',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: '#00FF88',
                fontWeight: 700,
              }}
            >
              {content.contact_title}
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
              {content.contact_subtitle}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleGetInTouch}
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
                  Get in Touch
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactCTASection;