// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useScrollTrigger,
//   Slide,
//   Typography,
//   Avatar,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useAuth } from '../services/AuthContext';

// const HideOnScroll = ({ children }) => {
//   const trigger = useScrollTrigger();
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// };

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();
//   const { user, logout, isAuthenticated } = useAuth();

//   const navItems = [
//     { label: 'Home', id: 'home' },
//     { label: 'About', id: 'about' },
//     { label: 'Services', id: 'services' },
//     { label: 'Team', id: 'team' },
//     { label: 'Contact', id: 'contact' },
//   ];

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate('/');
//   };

//   const drawer = (
//     <Box sx={{ textAlign: 'center', bgcolor: '#121218', height: '100%' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
//         <Typography variant="h6" sx={{ my: 2, color: '#00FF88' }}>
//           AI SOLUTIONS
//         </Typography>
//         <IconButton onClick={handleDrawerToggle} color="inherit">
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {navItems.map((item) => (
//           <ListItem
//             key={item.label}
//             component={Link}
//             to={item.path}
//             onClick={handleDrawerToggle}
//             sx={{
//               color: 'text.primary',
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//         {isAuthenticated && user.role === 'admin' && (
//           <ListItem
//             component={Link}
//             to="/admin"
//             onClick={handleDrawerToggle}
//             sx={{
//               color: 'text.primary',
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText primary="Admin Dashboard" />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <HideOnScroll>
//         <AppBar
//           position="fixed"
//           sx={{
//             bgcolor: 'rgba(10, 10, 10, 0.95)',
//             backdropFilter: 'blur(10px)',
//             borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar sx={{ py: 1 }}>
//               {/* Logo */}
//               <Typography
//                 variant="h6"
//                 component={Link}
//                 to="/"
//                 sx={{
//                   flexGrow: { xs: 1, md: 0 },
//                   textDecoration: 'none',
//                   color: '#00FF88',
//                   fontWeight: 700,
//                   fontSize: '1.5rem',
//                   letterSpacing: '0.1em',
//                 }}
//               >
//                 AI<span style={{ color: '#fff' }}>SOLUTIONS</span>
//               </Typography>

//               {/* Desktop Navigation */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 'auto' }}>
//                 {navItems.map((item) => (
//                   <Button
//                     key={item.label}
//                     component={Link}
//                     to={item.path}
//                     sx={{
//                       color: 'text.primary',
//                       mx: 1,
//                       position: 'relative',
//                       '&:hover': {
//                         bgcolor: 'transparent',
//                         '&::after': {
//                           width: '100%',
//                         },
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         width: '0%',
//                         height: '2px',
//                         bgcolor: '#00FF88',
//                         transition: 'width 0.3s ease',
//                       },
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 ))}
//               </Box>

//               {/* User Menu / Login */}
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 {isAuthenticated ? (
//                   <>
//                     <IconButton
//                       onClick={handleMenuOpen}
//                       sx={{ ml: 2 }}
//                     >
//                       <Avatar sx={{ width: 32, height: 32, bgcolor: '#00FF88' }}>
//                         {user.name?.charAt(0) || <AccountCircle />}
//                       </Avatar>
//                     </IconButton>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleMenuClose}
//                       PaperProps={{
//                         sx: {
//                           bgcolor: '#121218',
//                           mt: 1.5,
//                           minWidth: 200,
//                         },
//                       }}
//                     >
//                       <MenuItem disabled>
//                         <Typography variant="body2" color="text.secondary">
//                           {user.email}
//                         </Typography>
//                       </MenuItem>
//                       {user.role === 'admin' && (
//                         <MenuItem
//                           component={Link}
//                           to="/admin"
//                           onClick={handleMenuClose}
//                         >
//                           Admin Dashboard
//                         </MenuItem>
//                       )}
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                     </Menu>
//                   </>
//                 ) : (
//                   <Button
//                     component={Link}
//                     to="/admin/login"
//                     variant="outlined"
//                     sx={{
//                       display: { xs: 'none', md: 'flex' },
//                       color: '#00FF88',
//                       borderColor: '#00FF88',
//                       '&:hover': {
//                         borderColor: 'primary.light',
//                         bgcolor: 'rgba(0, 255, 136, 0.1)',
//                       },
//                     }}
//                   >
//                     Admin Login
//                   </Button>
//                 )}

//                 {/* Mobile menu button */}
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   edge="end"
//                   onClick={handleDrawerToggle}
//                   sx={{ display: { md: 'none' }, ml: 1 }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       {/* Mobile drawer */}
//       <Drawer
//         variant="temporary"
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: 280,
//             bgcolor: '#121218',
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>

//       {/* Spacer for fixed navbar */}
//       <Toolbar />
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Avatar,
//   Menu,
//   MenuItem,
//   useScrollTrigger,
//   Slide,
//   alpha,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';

// const HideOnScroll = ({ children }) => {
//   const trigger = useScrollTrigger();
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// };

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user, logout, isAuthenticated } = useAuth();

//   const navItems = [
//     { label: 'Home', path: '/', section: 'hero' },
//     { label: 'About', path: '/about' },
//     { label: 'Services', path: '/services' },
//     { label: 'Team', path: '/team' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate('/');
//   };

//   const handleNavClick = (path, section = null) => {
//     if (location.pathname === '/' && section) {
//       // Scroll to section on home page
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -100;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else {
//       // Navigate to page
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ width: 280, height: '100%', bgcolor: '#121218' }}>
//       <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6" sx={{ color: '#00FF88', fontWeight: 700 }}>
//             AI<span style={{ color: '#fff' }}>SOLUTIONS</span>
//           </Typography>
//           <IconButton onClick={handleDrawerToggle}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 2 }}>
//         {navItems.map((item) => (
//           <ListItem
//             key={item.label}
//             component="button"
//             onClick={() => handleNavClick(item.path, item.section)}
//             sx={{
//               py: 2,
//               borderRadius: 2,
//               mb: 1,
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText 
//               primary={item.label} 
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 color: location.pathname === item.path ? '#00FF88' : 'text.primary'
//               }}
//             />
//           </ListItem>
//         ))}
        
//         {isAuthenticated && user?.role === 'admin' && (
//           <ListItem
//             component="button"
//             onClick={() => handleNavClick('/admin')}
//             sx={{
//               py: 2,
//               borderRadius: 2,
//               mb: 1,
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText 
//               primary="Admin Dashboard" 
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 color: '#00FF88'
//               }}
//             />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <HideOnScroll>
//         <AppBar
//           sx={{
//             bgcolor: scrolled ? alpha('#0A0A0F', 0.95) : 'transparent',
//             transition: 'all 0.3s ease',
//             boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar disableGutters sx={{ py: 1 }}>
//               {/* Logo */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Typography
//                   component={RouterLink}
//                   to="/"
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     textDecoration: 'none',
//                     mr: 4,
//                   }}
//                 >
//                   <SmartToyIcon sx={{ color: '#00FF88', mr: 1, fontSize: 28 }} />
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: 800,
//                       background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       backgroundClip: 'text',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                     }}
//                   >
//                     AIVISION
//                   </Typography>
//                 </Typography>
//               </motion.div>

//               {/* Desktop Navigation */}
//               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Button
//                       onClick={() => handleNavClick(item.path, item.section)}
//                       sx={{
//                         color: location.pathname === item.path ? '#00FF88' : 'text.primary',
//                         position: 'relative',
//                         px: 3,
//                         '&:after': {
//                           content: '""',
//                           position: 'absolute',
//                           bottom: 0,
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: location.pathname === item.path ? '100%' : '0%',
//                           height: '2px',
//                           bgcolor: '#00FF88',
//                           transition: 'width 0.3s ease',
//                         },
//                         '&:hover:after': {
//                           width: '100%',
//                         },
//                       }}
//                     >
//                       {item.label}
//                     </Button>
//                   </motion.div>
//                 ))}
//               </Box>

//               {/* User Menu & Mobile Button */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 {isAuthenticated ? (
//                   <>
//                     <IconButton onClick={handleMenuOpen} size="small">
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           bgcolor: '#00FF88',
//                           color: 'background.default',
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleMenuClose}
//                       PaperProps={{
//                         sx: {
//                           mt: 1.5,
//                           minWidth: 200,
//                           bgcolor: '#121218',
//                           border: '1px solid',
//                           borderColor: 'divider',
//                         },
//                       }}
//                     >
//                       <MenuItem disabled sx={{ opacity: 0.7 }}>
//                         <Typography variant="body2">{user?.email}</Typography>
//                       </MenuItem>
//                       {user?.role === 'admin' && (
//                         <MenuItem onClick={() => handleNavClick('/admin')}>
//                           Admin Dashboard
//                         </MenuItem>
//                       )}
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                     </Menu>
//                   </>
//                 ) : (
//                   <Button
//                     variant="outlined"
//                     onClick={() => navigate('/contact')}
//                     sx={{ display: { xs: 'none', md: 'flex' } }}
//                   >
//                     Get Started
//                   </Button>
//                 )}

//                 {/* Mobile Menu Button */}
//                 <IconButton
//                   color="inherit"
//                   onClick={handleDrawerToggle}
//                   sx={{ display: { md: 'none' } }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', damping: 25 }}
//             style={{
//               position: 'fixed',
//               top: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 1300,
//             }}
//           >
//             <Drawer
//               variant="temporary"
//               anchor="right"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               ModalProps={{ keepMounted: true }}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//                 '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Spacer for fixed navbar */}
//       <Toolbar />
//     </>
//   );
// };

// export default Navbar;

// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Avatar,
//   Menu,
//   MenuItem,
//   useScrollTrigger,
//   Slide,
//   alpha,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';

// const HideOnScroll = ({ children }) => {
//   const trigger = useScrollTrigger();
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// };

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user, logout, isAuthenticated } = useAuth();

//   const navItems = [
//     { label: 'Home', path: '/', section: 'hero' },
//     { label: 'About', path: '/about', section: 'about' },
//     { label: 'Services', path: '/services', section: 'services' },
//     { label: 'Team', path: '/team', section: 'team' },
//     { label: 'Contact', path: '/contact', section: 'contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate('/');
//   };

//   const handleNavClick = (path, section = null) => {
//     if (section && location.pathname === '/') {
//       // Scroll to section on home page
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -80;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       // Navigate to home page with section hash
//       navigate(`/#${section}`);
//       // Wait for navigation then scroll to section
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -80;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       // Navigate to page
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ width: 280, height: '100%', bgcolor: '#121218' }}>
//       <Box sx={{ p: 3, borderBottom: 1, borderColor: '#333' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6" sx={{ color: '#00FF88', fontWeight: 700 }}>
//             AI<span style={{ color: '#fff' }}>SOLUTIONS</span>
//           </Typography>
//           <IconButton onClick={handleDrawerToggle}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 2 }}>
//         {navItems.map((item) => (
//           <ListItem
//             key={item.label}
//             component="button"
//             onClick={() => handleNavClick(item.path, item.section)}
//             sx={{
//               py: 2,
//               borderRadius: 2,
//               mb: 1,
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText 
//               primary={item.label} 
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 color: (location.pathname === item.path || 
//                        (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                        ? '#00FF88' : '#fff'
//               }}
//             />
//           </ListItem>
//         ))}
        
//         {isAuthenticated && user?.role === 'admin' && (
//           <ListItem
//             component="button"
//             onClick={() => handleNavClick('/admin')}
//             sx={{
//               py: 2,
//               borderRadius: 2,
//               mb: 1,
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.1)',
//               },
//             }}
//           >
//             <ListItemText 
//               primary="Admin Dashboard" 
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 color: '#00FF88'
//               }}
//             />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <HideOnScroll>
//         <AppBar
//           sx={{
//             bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
//             transition: 'all 0.3s ease',
//             boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
//             backdropFilter: scrolled ? 'blur(10px)' : 'none',
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar disableGutters sx={{ py: 1 }}>
//               {/* Logo */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Typography
//                   component={RouterLink}
//                   to="/"
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     textDecoration: 'none',
//                     mr: 4,
//                   }}
//                 >
//                   <SmartToyIcon sx={{ color: '#00FF88', mr: 1, fontSize: 28 }} />
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: 800,
//                       background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                       backgroundClip: 'text',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                     }}
//                   >
//                     AIVISION
//                   </Typography>
//                 </Typography>
//               </motion.div>

//               {/* Desktop Navigation */}
//               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Button
//                       onClick={() => handleNavClick(item.path, item.section)}
//                       sx={{
//                         color: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '#00FF88' : '#fff',
//                         position: 'relative',
//                         px: 3,
//                         fontWeight: 500,
//                         '&:after': {
//                           content: '""',
//                           position: 'absolute',
//                           bottom: 0,
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: (location.pathname === item.path || 
//                                  (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                  ? '100%' : '0%',
//                           height: '2px',
//                           bgcolor: '#00FF88',
//                           transition: 'width 0.3s ease',
//                         },
//                         '&:hover:after': {
//                           width: '100%',
//                         },
//                       }}
//                     >
//                       {item.label}
//                     </Button>
//                   </motion.div>
//                 ))}
//               </Box>

//               {/* User Menu & Mobile Button */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 {isAuthenticated ? (
//                   <>
//                     <IconButton onClick={handleMenuOpen} size="small">
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           bgcolor: '#00FF88',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={Boolean(anchorEl)}
//                       onClose={handleMenuClose}
//                       PaperProps={{
//                         sx: {
//                           mt: 1.5,
//                           minWidth: 200,
//                           bgcolor: '#121218',
//                           border: '1px solid',
//                           borderColor: '#333',
//                         },
//                       }}
//                     >
//                       <MenuItem disabled sx={{ opacity: 0.7 }}>
//                         <Typography variant="body2" sx={{ color: '#fff' }}>{user?.email}</Typography>
//                       </MenuItem>
//                       {user?.role === 'admin' && (
//                         <MenuItem onClick={() => handleNavClick('/admin')}>
//                           Admin Dashboard
//                         </MenuItem>
//                       )}
//                       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                     </Menu>
//                   </>
//                 ) : (
//                   <Button
//                     variant="outlined"
//                     onClick={() => navigate('/contact')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: '#00FF88',
//                       color: '#00FF88',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                       }
//                     }}
//                   >
//                     Get Started
//                   </Button>
//                 )}

//                 {/* Mobile Menu Button */}
//                 <IconButton
//                   color="inherit"
//                   onClick={handleDrawerToggle}
//                   sx={{ display: { md: 'none' }, color: '#fff' }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', damping: 25 }}
//             style={{
//               position: 'fixed',
//               top: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 1300,
//             }}
//           >
//             <Drawer
//               variant="temporary"
//               anchor="right"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               ModalProps={{ keepMounted: true }}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//                 '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Spacer for fixed navbar */}
//       <Toolbar />
//     </>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Home', path: '/', section: 'hero' },
    { label: 'About', path: '/about', section: 'about' },
    { label: 'Services', path: '/services', section: 'services' },
    { label: 'Team', path: '/team', section: 'team' },
    { label: 'Contact', path: '/contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/');
  };

  const handleNavClick = (path, section = null) => {
    if (section && location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (section) {
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ 
      width: 280, 
      height: '100%', 
      background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Effects */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
        animation: 'pulseEffect 8s infinite alternate'
      }} />
      
      <Box sx={{ 
        position: 'relative', 
        zIndex: 1,
        p: 3, 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(10px)'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ 
            color: '#00FF88', 
            fontWeight: 800,
            fontSize: '1.5rem',
            textShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
          }}>
            AI<span style={{ color: '#fff', fontWeight: 600 }}>VISION</span>
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      
      <List sx={{ p: 2, position: 'relative', zIndex: 1 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ListItem
              component="button"
              onClick={() => handleNavClick(item.path, item.section)}
              sx={{
                py: 2,
                borderRadius: 2,
                mb: 1,
                background: (location.pathname === item.path || 
                           (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                           ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%)' 
                           : 'transparent',
                border: '1px solid',
                borderColor: (location.pathname === item.path || 
                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                            ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.05) 100%)',
                  borderColor: 'rgba(0, 255, 136, 0.5)',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: (location.pathname === item.path || 
                         (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                         ? '#00FF88' : '#fff'
                }}
              />
            </ListItem>
          </motion.div>
        ))}
        
        {isAuthenticated && user?.role === 'admin' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
          >
            <ListItem
              component="button"
              onClick={() => handleNavClick('/admin')}
              sx={{
                py: 2,
                borderRadius: 2,
                mb: 1,
                background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.1) 100%)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.3) 0%, rgba(138, 43, 226, 0.2) 100%)',
                  borderColor: 'rgba(138, 43, 226, 0.5)',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <DashboardIcon sx={{ mr: 2, color: '#8A2BE2' }} />
              <ListItemText 
                primary="Admin Dashboard" 
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: '#8A2BE2'
                }}
              />
            </ListItem>
          </motion.div>
        )}
      </List>
      
      {/* User Info in Drawer */}
      {isAuthenticated && (
        <Box sx={{ 
          p: 3, 
          mt: 'auto',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(0,0,0,0.5)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#00FF88',
                color: '#000',
                fontWeight: 'bold',
                mr: 2
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                {user?.name || 'User'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {user?.email}
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              bgcolor: 'rgba(255, 0, 0, 0.2)',
              color: '#ff4444',
              border: '1px solid rgba(255, 0, 0, 0.3)',
              '&:hover': {
                bgcolor: 'rgba(255, 0, 0, 0.3)',
              }
            }}
          >
            Logout
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed" // ✅ Fixed position for sticky navbar
        sx={{
          bgcolor: scrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? '0 5px 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.15)' 
            : '0 2px 10px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundImage: 'linear-gradient(to bottom, #000000, #121212)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 9999, // ✅ High z-index to ensure it's on top
        }}
      >
        {/* Glowing Border Effect */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #00FF88)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite linear',
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        }} />
        
        {/* Particle Effect Background */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          pointerEvents: 'none'
        }} />

        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ 
            py: 0.5, // ✅ Reduced padding to make navbar more compact
            minHeight: '64px', // ✅ Fixed height
            position: 'relative', 
            zIndex: 1 
          }}>
            {/* Logo with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Typography
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  mr: 4,
                  filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))'
                }}
              >
                <SmartToyIcon sx={{ 
                  color: '#00FF88', 
                  mr: 1, 
                  fontSize: 30, // ✅ Slightly smaller
                  filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))'
                }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    fontSize: '1.7rem', // ✅ Slightly smaller
                    letterSpacing: '1px',
                    background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 50%, #00FF88 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    animation: 'glow 3s infinite alternate',
                    '@keyframes glow': {
                      '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))' },
                      '100%': { filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.3))' }
                    }
                  }}
                >
                  AIVISION
                </Typography>
              </Typography>
            </motion.div>

            {/* Desktop Navigation with Hover Effects */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.path, item.section)}
                    sx={{
                      color: (location.pathname === item.path || 
                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                             ? '#00FF88' : '#fff',
                      position: 'relative',
                      px: 2.5, // ✅ Reduced padding
                      fontWeight: 600,
                      fontSize: '0.9rem', // ✅ Slightly smaller
                      letterSpacing: '0.5px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
                        transition: 'left 0.7s'
                      },
                      '&:hover:before': {
                        left: '100%'
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: (location.pathname === item.path || 
                               (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                               ? '70%' : '0%',
                        height: '2px',
                        bgcolor: '#00FF88',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                        boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                      },
                      '&:hover': {
                        background: 'rgba(0, 255, 136, 0.1)',
                        color: '#00FF88'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* User Menu & Mobile Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {isAuthenticated ? (
                <>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton onClick={handleMenuOpen} size="small" sx={{
                      border: '2px solid rgba(0, 255, 136, 0.3)',
                      '&:hover': {
                        borderColor: '#00FF88',
                        boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
                      }
                    }}>
                      <Avatar
                        sx={{
                          width: 34,
                          height: 34,
                          bgcolor: '#00FF88',
                          color: '#121218',
                          fontWeight: 'bold',
                          boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
                        }}
                      >
                        {user?.name?.charAt(0) || 'U'}
                      </Avatar>
                    </IconButton>
                  </motion.div>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        minWidth: 200,
                        background: 'linear-gradient(135deg, #000000 0%, #121212 100%)',
                        border: '1px solid rgba(0, 255, 136, 0.3)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 136, 0.2)',
                        '& .MuiMenuItem-root': {
                          color: '#fff',
                          '&:hover': {
                            background: 'rgba(0, 255, 136, 0.1)',
                            color: '#00FF88'
                          }
                        }
                      },
                    }}
                  >
                    <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
                      <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
                        {user?.email}
                      </Typography>
                    </MenuItem>
                    {user?.role === 'admin' && (
                      <MenuItem onClick={() => handleNavClick('/admin')}>
                        <DashboardIcon sx={{ mr: 2, fontSize: 20 }} />
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
                      <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    startIcon={<LoginIcon />}
                    onClick={() => navigate('/login')}
                    sx={{ 
                      display: { xs: 'none', md: 'flex' },
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 0.7,
                      '&:hover': {
                        borderColor: '#00FF88',
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)'
                      }
                    }}
                  >
                    Login
                  </Button>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      startIcon={<PersonAddIcon />}
                      onClick={() => navigate('/contact')}
                      sx={{ 
                        display: { xs: 'none', md: 'flex' },
                        bgcolor: '#00FF88',
                        color: '#121218',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        px: 2.5,
                        py: 0.7,
                        '&:hover': {
                          bgcolor: '#00CC6D',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 20px rgba(0, 255, 136, 0.4)',
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </>
              )}

              {/* Mobile Menu Button with Animation */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    display: { md: 'none' }, 
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    '&:hover': {
                      borderColor: '#00FF88',
                      background: 'rgba(0, 255, 136, 0.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 1300,
            }}
          >
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: 280,
                  border: 'none'
                },
              }}
            >
              {drawer}
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No spacer needed - HeroSection will start immediately below navbar */}
    </>
  );
};

export default Navbar;