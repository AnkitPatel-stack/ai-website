// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Logo = ({ variant = 'desktop' }) => {
//   const logoStyles = {
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: variant === 'desktop' ? 2 : 1.5,
//       textDecoration: 'none',
//     },
//     logoBox: {
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: variant === 'desktop' ? 50 : 40,
//       height: variant === 'desktop' ? 50 : 40,
//       background: 'linear-gradient(135deg, #000000 0%, #121218 100%)',
//       borderRadius: '12px',
//       border: '2px solid rgba(0, 255, 136, 0.3)',
//       boxShadow: '0 5px 20px rgba(0, 255, 136, 0.2)',
//       overflow: 'hidden',
//     },
//     aiIcon: {
//       fontWeight: 800,
//       fontSize: variant === 'desktop' ? '1.8rem' : '1.4rem',
//       background: 'linear-gradient(135deg, #00FF88 0%, #00CC6D 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       letterSpacing: '-1px',
//     },
//     brandName: {
//       fontWeight: 800,
//       fontSize: variant === 'desktop' ? '1.5rem' : '1.2rem',
//       background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       letterSpacing: '-0.5px',
//       lineHeight: 1,
//     },
//     tagline: {
//       color: 'rgba(255,255,255,0.7)',
//       fontSize: variant === 'desktop' ? '0.7rem' : '0.6rem',
//       letterSpacing: '1.5px',
//       fontWeight: 500,
//       marginTop: '2px',
//     }
//   };

//   return (
//     <Box sx={logoStyles.container}>
//       <Box sx={logoStyles.logoBox}>
//         <span style={logoStyles.aiIcon}>ZT</span>
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: -2,
//             right: -2,
//             width: 12,
//             height: 12,
//             background: '#00FF88',
//             borderRadius: '50%',
//             border: '2px solid #121218',
//             boxShadow: '0 0 10px #00FF88',
//           }}
//         />
//       </Box>
//       <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//         <Typography sx={logoStyles.brandName}>
//           ZENTURATECH
//         </Typography>
//         <Typography sx={logoStyles.tagline}>
//           AI SOLUTIONS
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Logo;


// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Logo = ({ width = 80, sx = {} }) => {
//   return (
//     <Box sx={{ width: width, ...sx }}>
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         {/* Z with 3 colors */}
//         <Box
//           sx={{
//             position: 'relative',
//             width: 40,
//             height: 40,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '2.5rem',
//               fontWeight: 800,
//               letterSpacing: '-2px',
//               lineHeight: 1,
//               position: 'relative',
//             }}
//           >
//             {/* Z with gradient effect */}
//             <Box
//               component="span"
//               sx={{
//                 background: 'linear-gradient(135deg, #00FF88 33%, #8A2BE2 66%, #0066FF 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}
//             >
//               Z
//             </Box>
//           </Typography>
          
//           {/* Optional: Small AI indicator dot */}
//           <Box
//             sx={{
//               position: 'absolute',
//               bottom: 2,
//               right: 2,
//               width: 6,
//               height: 6,
//               backgroundColor: '#00FF88',
//               borderRadius: '50%',
//               animation: 'pulse 2s infinite',
//               '@keyframes pulse': {
//                 '0%, 100%': { opacity: 1 },
//                 '50%': { opacity: 0.3 }
//               }
//             }}
//           />
//         </Box>

//         {/* Rest of the text in white */}
//         <Box sx={{ ml: 1 }}>
//           <Typography
//             sx={{
//               fontSize: '1.2rem',
//               fontWeight: 700,
//               color: '#FFFFFF',
//               letterSpacing: '0.5px',
//               lineHeight: 1,
//             }}
//           >
//             ENTURATECH
//           </Typography>
//           {/* <Typography
//             sx={{
//               fontSize: '0.6rem',
//               color: 'rgba(255,255,255,0.7)',
//               letterSpacing: '1px',
//               fontWeight: 500,
//               mt: '2px',
//             }}
//           >
//             AI SOLUTIONS
//           </Typography> */}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Logo;

// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const LogoVariations = {
//   Classic: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Red + Green + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #FF3B30 0%, #34C759 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   PremiumTech: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Electric Blue + Cyan + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #007AFF 0%, #32D74B 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   FuturisticAI: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Purple + Magenta + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #5E5CE6 0%, #FF2D55 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   MinimalProfessional: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Emerald Green + Teal + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #30D158 0%, #64D2FF 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   }
// };

// // Default export (Classic variation)
// const Logo = ({ variant = 'Classic', size = 'medium', sx = {} }) => {
//   const Component = LogoVariations[variant];
//   return <Component size={size} sx={sx} />;
// };

// // Named exports for each variation
// export { LogoVariations };
// export default Logo;


// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const LogoVariations = {
//   Classic: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Red + Green + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #FF3B30 0%, #34C759 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   // IMAGE में 2nd LOGO - Z और enturatedh separate with lowercase
//   ClassicStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '3rem', textSize: '0.9rem', spacing: '1px' },
//       medium: { zSize: '4rem', textSize: '1.2rem', spacing: '1.5px' },
//       large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'flex-start',
//           ...sx 
//         }}
//       >
//         {/* Big Z with gradient - Separated from text */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 800,
//             letterSpacing: currentSize.spacing,
//             lineHeight: 0.8,
//             marginBottom: '-8px',
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to bottom, #FF3B30 0%, #34C759 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//             }}
//           >
//             Z
//           </Box>
//         </Typography>
        
//         {/* Lowercase text below - pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'lowercase',
//           }}
//         >
//           enturatedh
//         </Typography>
//       </Box>
//     );
//   },

//   PremiumTech: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Electric Blue + Cyan + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #007AFF 0%, #32D74B 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   FuturisticAI: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Purple + Magenta + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #5E5CE6 0%, #FF2D55 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   MinimalProfessional: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Emerald Green + Teal + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #30D158 0%, #64D2FF 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   // Other stacked variations for consistency
//   PremiumTechStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '3rem', textSize: '0.9rem', spacing: '1px' },
//       medium: { zSize: '4rem', textSize: '1.2rem', spacing: '1.5px' },
//       large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'flex-start',
//           ...sx 
//         }}
//       >
//         {/* Big Z with Electric Blue + Cyan + White gradient */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 800,
//             letterSpacing: currentSize.spacing,
//             lineHeight: 0.8,
//             marginBottom: '-8px',
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to bottom, #007AFF 0%, #32D74B 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//             }}
//           >
//             Z
//           </Box>
//         </Typography>
        
//         {/* Lowercase text below - pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'lowercase',
//           }}
//         >
//           enturatedh
//         </Typography>
//       </Box>
//     );
//   },

//   FuturisticAIStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '3rem', textSize: '0.9rem', spacing: '1px' },
//       medium: { zSize: '4rem', textSize: '1.2rem', spacing: '1.5px' },
//       large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'flex-start',
//           ...sx 
//         }}
//       >
//         {/* Big Z with Purple + Magenta + White gradient */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 800,
//             letterSpacing: currentSize.spacing,
//             lineHeight: 0.8,
//             marginBottom: '-8px',
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to bottom, #5E5CE6 0%, #FF2D55 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//             }}
//           >
//             Z
//           </Box>
//         </Typography>
        
//         {/* Lowercase text below - pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'lowercase',
//           }}
//         >
//           enturatedh
//         </Typography>
//       </Box>
//     );
//   },

//   MinimalProfessionalStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '3rem', textSize: '0.9rem', spacing: '1px' },
//       medium: { zSize: '4rem', textSize: '1.2rem', spacing: '1.5px' },
//       large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'flex-start',
//           ...sx 
//         }}
//       >
//         {/* Big Z with Emerald Green + Teal + White gradient */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 800,
//             letterSpacing: currentSize.spacing,
//             lineHeight: 0.8,
//             marginBottom: '-8px',
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to bottom, #30D158 0%, #64D2FF 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//             }}
//           >
//             Z
//           </Box>
//         </Typography>
        
//         {/* Lowercase text below - pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'lowercase',
//           }}
//         >
//           enturatedh
//         </Typography>
//       </Box>
//     );
//   }
// };

// // Default export (Classic variation)
// const Logo = ({ variant = 'Classic', size = 'medium', sx = {} }) => {
//   const Component = LogoVariations[variant];
//   return <Component size={size} sx={sx} />;
// };

// // Named exports for each variation
// export { LogoVariations };
// export default Logo;


// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const LogoVariations = {
//   Classic: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Green + Blue + Teal gradient (image style) */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #00FF88 0%, #0066FF 50%, #00D4FF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//               fontWeight: 700,
//               position: 'relative',
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
//                 mixBlendMode: 'overlay',
//               }
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   // IMAGE में EXACT Z DESIGN - With angular cuts and multi-color
//   ImageExact: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', zSize: '2.5rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', zSize: '3.5rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', zSize: '5rem', spacing: '1.5px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         {/* Special Z with angular design */}
//         <Box
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 900,
//             letterSpacing: '-1px',
//             lineHeight: 0.7,
//             marginRight: '4px',
//             position: 'relative',
//             display: 'inline-block',
//           }}
//         >
//           {/* Main Z with angular gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #00FF88 0%, #0066FF 50%, #00D4FF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//               position: 'relative',
//               // Create angular effect with shadows
//               textShadow: `
//                 2px 0px 0px rgba(0, 255, 136, 0.3),
//                 -1px -1px 0px rgba(0, 102, 255, 0.3),
//                 1px 1px 0px rgba(0, 212, 255, 0.3)
//               `,
//             }}
//           >
//             Z
//           </Box>
          
//           {/* Overlay for angular cuts effect */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: `
//                 linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
//                 linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)
//               `,
//               mixBlendMode: 'overlay',
//               pointerEvents: 'none',
//             }}
//           />
//         </Box>
        
//         {/* Rest of text in pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.fontSize,
//             fontWeight: 500,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//           }}
//         >
//           enturatech
//         </Typography>
//       </Box>
//     );
//   },

//   // Stacked version like image (Z on top, text below)
//   ImageStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '3rem', textSize: '0.9rem', spacing: '1px' },
//       medium: { zSize: '4rem', textSize: '1.2rem', spacing: '1.5px' },
//       large: { zSize: '5.5rem', textSize: '1.6rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           ...sx 
//         }}
//       >
//         {/* Big Angular Z - Image style exact */}
//         <Box
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 900,
//             letterSpacing: '-2px',
//             lineHeight: 0.7,
//             position: 'relative',
//             marginBottom: '2px',
//           }}
//         >
//           {/* Z with angular gradient - Green -> Blue -> Cyan */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #00FF88 0%, #0066FF 50%, #00D4FF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//               // Angular effect
//               transform: 'perspective(100px) rotateX(5deg)',
//               textShadow: `
//                 3px 1px 0px rgba(0, 255, 136, 0.4),
//                 -2px -2px 0px rgba(0, 102, 255, 0.4),
//                 2px 2px 0px rgba(0, 212, 255, 0.4)
//               `,
//             }}
//           >
//             Z
//           </Box>
          
//           {/* Angular cut overlay for 3D effect */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: `
//                 linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%),
//                 linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%),
//                 linear-gradient(90deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)
//               `,
//               mixBlendMode: 'overlay',
//               pointerEvents: 'none',
//             }}
//           />
//         </Box>
        
//         {/* Text below - pure white, slightly spaced */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'uppercase',
//             marginTop: '4px',
//           }}
//         >
//           enturatech
//         </Typography>
//       </Box>
//     );
//   },

//   PremiumTech: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Electric Blue + Cyan + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #007AFF 0%, #32D74B 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   FuturisticAI: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Purple + Magenta + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #5E5CE6 0%, #FF2D55 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   MinimalProfessional: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           {/* Z with Emerald Green + Teal + White gradient */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(to right, #30D158 0%, #64D2FF 50%, #FFFFFF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           {/* Rest in pure white */}
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   }
// };

// // Default export (ImageExact variation - Image में exact design)
// const Logo = ({ variant = 'ImageExact', size = 'medium', sx = {} }) => {
//   const Component = LogoVariations[variant];
//   return <Component size={size} sx={sx} />;
// };

// // Named exports for each variation
// export { LogoVariations };
// export default Logo;

// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const LogoVariations = {
//   // IMAGE में EXACT Z DESIGN - With crack/cut in middle
//   ImageExact: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', zSize: '2.5rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', zSize: '3.5rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', zSize: '5rem', spacing: '1.5px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         {/* Special Z with crack/cut design - Purple + Pink combination */}
//         <Box
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 900,
//             letterSpacing: '-1px',
//             lineHeight: 0.7,
//             marginRight: '8px',
//             position: 'relative',
//             display: 'inline-block',
//             width: currentSize.zSize,
//             height: currentSize.zSize,
//             overflow: 'hidden',
//           }}
//         >
//           {/* Z with three sections and diagonal crack/cut */}
//           <Box
//             sx={{
//               position: 'relative',
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {/* Top section - Dark Purple */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '33%',
//                 background: '#8A2BE2', // Dark Purple
//                 clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: currentSize.zSize,
//                 fontWeight: 900,
//                 color: 'transparent',
//                 WebkitTextStroke: '1px #8A2BE2',
//                 zIndex: 3,
//               }}
//             >
//               Z
//             </Box>
            
//             {/* Middle section - Pink with crack */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '33%',
//                 left: 0,
//                 width: '100%',
//                 height: '34%',
//                 background: '#FF2D55', // Pink
//                 clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)', // Diagonal cut effect
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: currentSize.zSize,
//                 fontWeight: 900,
//                 color: 'transparent',
//                 WebkitTextStroke: '1px #FF2D55',
//                 zIndex: 2,
//                 transform: 'translateY(-1px)',
//               }}
//             >
//               Z
//             </Box>
            
//             {/* Bottom section - Light Purple */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '67%',
//                 left: 0,
//                 width: '100%',
//                 height: '33%',
//                 background: '#9370DB', // Light Purple
//                 clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: currentSize.zSize,
//                 fontWeight: 900,
//                 color: 'transparent',
//                 WebkitTextStroke: '1px #9370DB',
//                 zIndex: 1,
//                 transform: 'translateY(-2px)',
//               }}
//             >
//               Z
//             </Box>
            
//             {/* Main Z text for visibility - Purple + Pink gradient */}
//             <Box
//               component="span"
//               sx={{
//                 background: 'linear-gradient(180deg, #8A2BE2 33%, #FF2D55 34%, #FF2D55 66%, #9370DB 67%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 display: 'block',
//                 fontSize: currentSize.zSize,
//                 fontWeight: 900,
//                 position: 'relative',
//                 zIndex: 4,
//                 textShadow: 'none',
//                 // Crack line in middle
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: '33%',
//                   left: '20%',
//                   right: '20%',
//                   height: '1px',
//                   background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
//                   transform: 'rotate(-45deg)',
//                   zIndex: 5,
//                 }
//               }}
//             >
//               Z
//             </Box>
//           </Box>
          
//           {/* Diagonal crack line overlay */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: '33%',
//               left: '10%',
//               right: '10%',
//               height: '34%',
//               background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%)',
//               pointerEvents: 'none',
//               zIndex: 6,
//               transform: 'skewX(-15deg)',
//             }}
//           />
//         </Box>
        
//         {/* Rest of text in pure white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.fontSize,
//             fontWeight: 500,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//           }}
//         >
//           enturatech
//         </Typography>
//       </Box>
//     );
//   },

//   // Simplified version - Cleaner but same style
//   ImageClean: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', zSize: '2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', zSize: '2.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', zSize: '4rem', spacing: '1.5px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         {/* Z with diagonal cut effect - Purple + Pink */}
//         <Box
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 900,
//             letterSpacing: '-1px',
//             lineHeight: 0.7,
//             marginRight: '6px',
//             position: 'relative',
//           }}
//         >
//           {/* Purple + Pink gradient with diagonal cut */}
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #8A2BE2 30%, #FF2D55 50%, #9370DB 70%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//               position: 'relative',
//               // Diagonal cut effect using text shadow
//               textShadow: `
//                 1px 0px 0px rgba(138, 43, 226, 0.8),
//                 0px 1px 0px rgba(138, 43, 226, 0.8),
//                 -1px -1px 0px rgba(255, 45, 85, 0.8),
//                 1px 1px 0px rgba(147, 112, 219, 0.8)
//               `,
//               // Crack line effect
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '30%',
//                 left: '15%',
//                 right: '15%',
//                 height: '2px',
//                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
//                 transform: 'rotate(-45deg)',
//                 opacity: 0.8,
//               }
//             }}
//           >
//             Z
//           </Box>
//         </Box>
        
//         {/* Text in white */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.fontSize,
//             fontWeight: 500,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//           }}
//         >
//           enturatech
//         </Typography>
//       </Box>
//     );
//   },

//   // Stacked version (Z above, text below)
//   ImageStacked: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { zSize: '2.5rem', textSize: '0.8rem', spacing: '1px' },
//       medium: { zSize: '3.5rem', textSize: '1.1rem', spacing: '1.5px' },
//       large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
//     };
    
//     const currentSize = sizes[size];
    
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           ...sx 
//         }}
//       >
//         {/* Z with diagonal crack */}
//         <Box
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.zSize,
//             fontWeight: 900,
//             letterSpacing: '-2px',
//             lineHeight: 0.7,
//             position: 'relative',
//             marginBottom: '4px',
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(180deg, #8A2BE2 33%, #FF2D55 34%, #FF2D55 66%, #9370DB 67%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'block',
//               position: 'relative',
//               // Crack effect
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: '33%',
//                 left: '0',
//                 right: '0',
//                 height: '2px',
//                 background: 'linear-gradient(90deg, transparent, #FFFFFF, transparent)',
//                 transform: 'rotate(-45deg)',
//                 opacity: 0.7,
//                 mixBlendMode: 'overlay',
//               }
//             }}
//           >
//             Z
//           </Box>
//         </Box>
        
//         {/* Text below */}
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: currentSize.textSize,
//             fontWeight: 400,
//             letterSpacing: currentSize.spacing,
//             color: '#FFFFFF',
//             lineHeight: 1,
//             textTransform: 'uppercase',
//           }}
//         >
//           enturatech
//         </Typography>
//       </Box>
//     );
//   },

//   Classic: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #8A2BE2 30%, #FF2D55 50%, #9370DB 70%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//               fontWeight: 700,
//             }}
//           >
//             Z
//           </Box>
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   PremiumTech: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #007AFF 30%, #32D74B 50%, #64D2FF 70%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   },

//   MinimalProfessional: ({ size = 'medium', sx = {} }) => {
//     const sizes = {
//       small: { fontSize: '1.2rem', spacing: '0.5px' },
//       medium: { fontSize: '1.8rem', spacing: '1px' },
//       large: { fontSize: '2.5rem', spacing: '1.5px' }
//     };
    
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
//         <Typography
//           sx={{
//             fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
//             fontSize: sizes[size].fontSize,
//             fontWeight: 500,
//             letterSpacing: sizes[size].spacing,
//             lineHeight: 1,
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               background: 'linear-gradient(135deg, #30D158 30%, #00FF88 50%, #64D2FF 70%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               display: 'inline-block',
//               marginRight: '1px',
//             }}
//           >
//             Z
//           </Box>
//           <Box component="span" sx={{ color: '#FFFFFF' }}>
//             enturatech
//           </Box>
//         </Typography>
//       </Box>
//     );
//   }
// };

// // Default export (ImageClean variation - Best balance)
// const Logo = ({ variant = 'ImageClean', size = 'medium', sx = {} }) => {
//   const Component = LogoVariations[variant];
//   return <Component size={size} sx={sx} />;
// };

// // Named exports for each variation
// export { LogoVariations };
// export default Logo;


import React from 'react';
import { Box, Typography } from '@mui/material';

// Individual logo components
const MainLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { fontSize: '1.2rem', zSize: '2rem', spacing: '0.5px' },
    medium: { fontSize: '1.8rem', zSize: '2.8rem', spacing: '1px' },
    large: { fontSize: '2.5rem', zSize: '4rem', spacing: '1.5px' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <Box
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.zSize,
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: 0.7,
          marginRight: '6px',
        }}
      >
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
          }}
        >
          Z
        </Box>
      </Box>
      
      <Typography
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.fontSize,
          fontWeight: 500,
          letterSpacing: currentSize.spacing,
          color: '#FFFFFF',
          lineHeight: 1,
        }}
      >
        enturatech
      </Typography>
    </Box>
  );
};

const SimpleLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { fontSize: '1.2rem', zSize: '1.8rem', spacing: '0.5px' },
    medium: { fontSize: '1.8rem', zSize: '2.5rem', spacing: '1px' },
    large: { fontSize: '2.5rem', zSize: '3.5rem', spacing: '1.5px' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <Box
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.zSize,
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: 0.7,
          marginRight: '4px',
        }}
      >
        <Box
          component="span"
          sx={{
            color: '#ff0090',
            display: 'block',
          }}
        >
          Z
        </Box>
      </Box>
      
      <Typography
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.fontSize,
          fontWeight: 500,
          letterSpacing: currentSize.spacing,
          color: '#FFFFFF',
          lineHeight: 1,
        }}
      >
        enturatech
      </Typography>
    </Box>
  );
};

const PinkLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { fontSize: '1.2rem', zSize: '1.8rem', spacing: '0.5px' },
    medium: { fontSize: '1.8rem', zSize: '2.5rem', spacing: '1px' },
    large: { fontSize: '2.5rem', zSize: '3.5rem', spacing: '1.5px' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <Box
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.zSize,
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: 0.7,
          marginRight: '4px',
        }}
      >
        <Box
          component="span"
          sx={{
            color: '#ff0090',
            display: 'block',
          }}
        >
          Z
        </Box>
      </Box>
      
      <Typography
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.fontSize,
          fontWeight: 500,
          letterSpacing: currentSize.spacing,
          color: '#FFFFFF',
          lineHeight: 1,
        }}
      >
        enturatech
      </Typography>
    </Box>
  );
};

const StackedLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { zSize: '2.5rem', textSize: '0.8rem', spacing: '1px' },
    medium: { zSize: '3.5rem', textSize: '1.1rem', spacing: '1.5px' },
    large: { zSize: '5rem', textSize: '1.5rem', spacing: '2px' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        ...sx 
      }}
    >
      <Box
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.zSize,
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: 0.7,
          marginBottom: '4px',
        }}
      >
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
          }}
        >
          Z
        </Box>
      </Box>
      
      <Typography
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.textSize,
          fontWeight: 400,
          letterSpacing: currentSize.spacing,
          color: '#FFFFFF',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        enturatech
      </Typography>
    </Box>
  );
};

const MinimalLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { zSize: '1.5rem' },
    medium: { zSize: '2.5rem' },
    large: { zSize: '4rem' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <Box sx={{ ...sx }}>
      <Box
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: currentSize.zSize,
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: 0.7,
        }}
      >
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
          }}
        >
          Z
        </Box>
      </Box>
    </Box>
  );
};

const ClassicLogo = ({ size = 'medium', sx = {} }) => {
  const sizes = {
    small: { fontSize: '1.2rem', spacing: '0.5px' },
    medium: { fontSize: '1.8rem', spacing: '1px' },
    large: { fontSize: '2.5rem', spacing: '1.5px' }
  };
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <Typography
        sx={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontSize: sizes[size].fontSize,
          fontWeight: 500,
          letterSpacing: sizes[size].spacing,
          lineHeight: 1,
        }}
      >
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            marginRight: '1px',
            fontWeight: 700,
          }}
        >
          Z
        </Box>
        <Box component="span" sx={{ color: '#FFFFFF' }}>
          enturatech
        </Box>
      </Typography>
    </Box>
  );
};

// Main Logo component
const Logo = ({ variant = 'MainLogo', size = 'medium', sx = {} }) => {
  switch (variant) {
    case 'Simple':
      return <SimpleLogo size={size} sx={sx} />;
    case 'Pink':
      return <PinkLogo size={size} sx={sx} />;
    case 'Stacked':
      return <StackedLogo size={size} sx={sx} />;
    case 'Minimal':
      return <MinimalLogo size={size} sx={sx} />;
    case 'Classic':
      return <ClassicLogo size={size} sx={sx} />;
    case 'MainLogo':
    default:
      return <MainLogo size={size} sx={sx} />;
  }
};

// Export named components
export {
  MainLogo,
  SimpleLogo as Simple,
  PinkLogo as Pink,
  StackedLogo as Stacked,
  MinimalLogo as Minimal,
  ClassicLogo as Classic
};

// Default export
export default Logo;