// import { createTheme, alpha } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#00FF88',
//       light: '#33FF9F',
//       dark: '#00CC6D',
//       contrastText: '#000000',
//     },
//     secondary: {
//       main: '#8A2BE2',
//       light: '#9D4FE6',
//       dark: '#6E1FB3',
//     },
//     background: {
//       default: '#0A0A0F',  // Changed from theme reference to actual color
//       paper: '#121218',    // Changed from theme reference to actual color
//     },
//     text: {
//       primary: '#FFFFFF',
//       secondary: '#B0B0C0',
//       disabled: '#6B6B7A',
//     },
//     divider: 'rgba(255, 255, 255, 0.1)',
//   },
//   typography: {
//     fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     h1: {
//       fontSize: '4.5rem',
//       fontWeight: 800,
//       lineHeight: 1.1,
//       letterSpacing: '-0.02em',
//       '@media (max-width: 900px)': {
//         fontSize: '3rem',
//       },
//       '@media (max-width: 600px)': {
//         fontSize: '2.5rem',
//       },
//     },
//     h2: {
//       fontSize: '3.5rem',
//       fontWeight: 700,
//       lineHeight: 1.2,
//       letterSpacing: '-0.01em',
//       '@media (max-width: 900px)': {
//         fontSize: '2.5rem',
//       },
//       '@media (max-width: 600px)': {
//         fontSize: '2rem',
//       },
//     },
//     h3: {
//       fontSize: '2.5rem',
//       fontWeight: 600,
//       lineHeight: 1.3,
//     },
//     h4: {
//       fontSize: '2rem',
//       fontWeight: 600,
//       lineHeight: 1.4,
//     },
//     h5: {
//       fontSize: '1.5rem',
//       fontWeight: 600,
//       lineHeight: 1.5,
//     },
//     h6: {
//       fontSize: '1.25rem',
//       fontWeight: 600,
//       lineHeight: 1.6,
//     },
//     body1: {
//       fontSize: '1.125rem',
//       lineHeight: 1.7,
//     },
//     body2: {
//       fontSize: '1rem',
//       lineHeight: 1.6,
//     },
//     button: {
//       textTransform: 'none',
//       fontWeight: 600,
//       fontSize: '1rem',
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           scrollBehavior: 'smooth',
//           '&::-webkit-scrollbar': {
//             width: '10px',
//           },
//           '&::-webkit-scrollbar-track': {
//             background: '#0A0A0F',
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: 'linear-gradient(180deg, #00FF88 0%, #8A2BE2 100%)',
//             borderRadius: '5px',
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '50px',
//           padding: '12px 32px',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           position: 'relative',
//           overflow: 'hidden',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)',
//           },
//         },
//         contained: {
//           background: 'linear-gradient(135deg, #00FF88 0%, #00CC6D 100%)',
//           color: '#000000',
//           fontWeight: 700,
//         },
//         outlined: {
//           borderWidth: '2px',
//           '&:hover': {
//             borderWidth: '2px',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           background: 'linear-gradient(145deg, #121218 0%, #0D0D12 100%)',
//           border: '1px solid rgba(255, 255, 255, 0.05)',
//           backdropFilter: 'blur(10px)',
//           transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//           '&:hover': {
//             transform: 'translateY(-8px)',
//             borderColor: 'rgba(0, 255, 136, 0.3)',
//             boxShadow: '0 20px 60px rgba(0, 255, 136, 0.15)',
//           },
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           background: 'rgba(10, 10, 15, 0.85)',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//         },
//       },
//     },
//   },
// });

// // Create a helper function to get alpha colors from theme
// export const getAlphaColor = (color, alphaValue) => {
//   const colorMap = {
//     'background.default': '#0A0A0F',
//     '#121218': '#121218',
//     '#00FF88': '#00FF88',
//     'secondary.main': '#8A2BE2',
//   };
  
//   return alpha(colorMap[color] || color, alphaValue);
// };

// export default theme;


// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'light', // Gravitee uses a light theme
//     primary: {
//       main: '#0066CC', // Gravitee's primary blue
//       dark: '#0052A3',
//     },
//     secondary: {
//       main: '#FF6B35', // Example accent (orange)
//     },
//     background: {
//       default: '#FFFFFF',
//       paper: '#F8F9FA', // Very light grey
//     },
//     text: {
//       primary: '#1A202C',
//       secondary: '#4A5568',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Geist", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 800,
//       fontSize: '3.5rem',
//       lineHeight: 1.2,
//     },
//     h2: {
//       fontWeight: 700,
//       fontSize: '2.5rem',
//       lineHeight: 1.3,
//     },
//     h3: {
//       fontWeight: 600,
//       fontSize: '2rem',
//     },
//     body1: {
//       fontSize: '1.125rem',
//       lineHeight: 1.7,
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 600,
//           borderRadius: '6px',
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: '12px',
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//           border: '1px solid #E2E8F0',
//         },
//       },
//     },
//   },
// });

// export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fa8072',
      light: '#ff1dce',
      dark: '#cc0074',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      color: '#ffffff',
    },
    h2: {
      fontWeight: 700,
      color: '#ffffff',
    },
    h3: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h4: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h5: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h6: {
      fontWeight: 500,
      color: '#cccccc',
    },
    body1: {
      color: '#cccccc',
    },
    body2: {
      color: '#999999',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #fa8072, #ff1dce)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff1dce, #fa8072)',
          },
        },
        outlinedPrimary: {
          borderColor: '#fa8072',
          color: '#fa8072',
          '&:hover': {
            borderColor: '#ff1dce',
            backgroundColor: 'rgba(255, 0, 144, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          background: 'linear-gradient(145deg, #111111, #0a0a0a)',
          border: '1px solid #222222',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#fa8072',
            boxShadow: '0 8px 32px rgba(255, 0, 144, 0.2)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: '16px', sm: '24px', md: '32px' },
          paddingRight: { xs: '16px', sm: '24px', md: '32px' },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;