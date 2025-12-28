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
//   alpha,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';

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
//       setScrolled(window.scrollY > 10);
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 280, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Animated Background Effects */}
//       <Box sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
//         animation: 'pulseEffect 8s infinite alternate'
//       }} />
      
//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid rgba(255,255,255,0.1)',
//         background: 'rgba(0,0,0,0.7)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6" sx={{ 
//             color: '#00FF88', 
//             fontWeight: 800,
//             fontSize: '1.5rem',
//             textShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//           }}>
//             AI<span style={{ color: '#fff', fontWeight: 600 }}>VISION</span>
//           </Typography>
//           <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 2, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 1,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%)' 
//                            : 'transparent',
//                 border: '1px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   background: 'linear-gradient(90deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.05) 100%)',
//                   borderColor: 'rgba(0, 255, 136, 0.5)',
//                   transform: 'translateX(5px)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary={item.label} 
//                 primaryTypographyProps={{
//                   fontWeight: 600,
//                   fontSize: '1.1rem',
//                   color: (location.pathname === item.path || 
//                          (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                          ? '#00FF88' : '#fff'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 1,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.1) 100%)',
//                 border: '1px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.3) 0%, rgba(138, 43, 226, 0.2) 100%)',
//                   borderColor: 'rgba(138, 43, 226, 0.5)',
//                   transform: 'translateX(5px)',
//                 },
//               }}
//             >
//               <DashboardIcon sx={{ mr: 2, color: '#8A2BE2' }} />
//               <ListItemText 
//                 primary="Admin Dashboard" 
//                 primaryTypographyProps={{
//                   fontWeight: 600,
//                   color: '#8A2BE2'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(255,255,255,0.1)',
//           background: 'rgba(0,0,0,0.5)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <Avatar
//               sx={{
//                 width: 40,
//                 height: 40,
//                 bgcolor: '#00FF88',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 mr: 2
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 0, 0, 0.2)',
//               color: '#ff4444',
//               border: '1px solid rgba(255, 0, 0, 0.3)',
//               '&:hover': {
//                 bgcolor: 'rgba(255, 0, 0, 0.3)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed" // ✅ Fixed position for sticky navbar
//         sx={{
//           bgcolor: scrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.15)' 
//             : '0 2px 10px rgba(0, 0, 0, 0.5)',
//           backdropFilter: 'blur(15px)',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           backgroundImage: 'linear-gradient(to bottom, #000000, #121212)',
//           position: 'relative',
//           overflow: 'hidden',
//           zIndex: 9999, // ✅ High z-index to ensure it's on top
//         }}
//       >
//         {/* Glowing Border Effect */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '2px',
//           background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #00FF88)',
//           backgroundSize: '200% 100%',
//           animation: 'shimmer 3s infinite linear',
//           '@keyframes shimmer': {
//             '0%': { backgroundPosition: '-200% 0' },
//             '100%': { backgroundPosition: '200% 0' }
//           }
//         }} />
        
//         {/* Particle Effect Background */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff88' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none'
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 0.5, // ✅ Reduced padding to make navbar more compact
//             minHeight: '64px', // ✅ Fixed height
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with Glow Effect */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Typography
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))'
//                 }}
//               >
//                 <SmartToyIcon sx={{ 
//                   color: '#00FF88', 
//                   mr: 1, 
//                   fontSize: 30, // ✅ Slightly smaller
//                   filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))'
//                 }} />
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: '1.7rem', // ✅ Slightly smaller
//                     letterSpacing: '1px',
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 50%, #00FF88 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
//                     animation: 'glow 3s infinite alternate',
//                     '@keyframes glow': {
//                       '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))' },
//                       '100%': { filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.3))' }
//                     }
//                   }}
//                 >
//                   AIVISION
//                 </Typography>
//               </Typography>
//             </motion.div>

//             {/* Desktop Navigation with Hover Effects */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 2.5, // ✅ Reduced padding
//                       fontWeight: 600,
//                       fontSize: '0.9rem', // ✅ Slightly smaller
//                       letterSpacing: '0.5px',
//                       borderRadius: '6px',
//                       overflow: 'hidden',
//                       '&:before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover:before': {
//                         left: '100%'
//                       },
//                       '&:after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '70%' : '0%',
//                         height: '2px',
//                         bgcolor: '#00FF88',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88'
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* User Menu & Mobile Button */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 34,
//                           height: 34,
//                           bgcolor: '#00FF88',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 200,
//                         background: 'linear-gradient(135deg, #000000 0%, #121212 100%)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20 }} />
//                         Admin Dashboard
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     variant="outlined"
//                     startIcon={<LoginIcon />}
//                     onClick={() => navigate('/login')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(255,255,255,0.3)',
//                       color: '#fff',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 2,
//                       py: 0.7,
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                         boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)'
//                       }
//                     }}
//                   >
//                     Login
//                   </Button>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<PersonAddIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         bgcolor: '#00FF88',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 2.5,
//                         py: 0.7,
//                         '&:hover': {
//                           bgcolor: '#00CC6D',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 136, 0.4)',
//                         }
//                       }}
//                     >
//                       Get Started
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button with Animation */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   color="inherit"
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#fff',
//                     border: '1px solid rgba(255,255,255,0.2)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)'
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 280,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* No spacer needed - HeroSection will start immediately below navbar */}
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import BoltIcon from '@mui/icons-material/Bolt';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aiActive, setAiActive] = useState(false);
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
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // AI active animation
//     const aiInterval = setInterval(() => {
//       setAiActive(prev => !prev);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(aiInterval);
//     };
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #0A0A0F 0%, #121218 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '40px 40px',
//           opacity: 0.3,
//         }}
//       />

//       {/* AI Active Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             bgcolor: aiActive ? '#00FF88' : 'transparent',
//             boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//             animation: aiActive ? 'aiPulse 1.5s infinite' : 'none',
//             '@keyframes aiPulse': {
//               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//               '50%': { opacity: 1, transform: 'scale(1.5)' }
//             }
//           }}
//         />
//         <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//           AI ONLINE
//         </Typography>
//       </Box>

//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//         background: 'rgba(10, 10, 15, 0.8)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <SmartToyIcon sx={{ color: '#00FF88', fontSize: 28 }} />
//             <Typography variant="h6" sx={{ 
//               color: '#00FF88', 
//               fontWeight: 900,
//               fontSize: '1.8rem',
//               letterSpacing: '1px',
//               background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}>
//               AIVISION
//             </Typography>
//           </Box>
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#00FF88',
//             border: '1px solid rgba(0, 255, 136, 0.3)',
//             '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%)' 
//                            : 'transparent',
//                 border: '2px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   borderColor: 'rgba(0, 255, 136, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(0, 255, 136, 0.1)',
//                   '& .nav-glow': {
//                     opacity: 1,
//                   }
//                 },
//               }}
//             >
//               {/* Glow Effect */}
//               <Box
//                 className="nav-glow"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                 }}
//               />

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: '#00FF88',
//                     opacity: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) ? 1 : 0.3,
//                   }}
//                 />
//                 <ListItemText 
//                   primary={item.label} 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: '1.1rem',
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#00FF88' : '#fff'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '2px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2' }} />
//                 <ListItemText 
//                   primary="Admin Dashboard" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 50,
//                 height: 50,
//                 bgcolor: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 border: '2px solid #00FF88',
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 69, 69, 0.2)',
//               background: 'linear-gradient(135deg, rgba(255, 69, 69, 0.2), rgba(255, 69, 69, 0.1))',
//               color: '#ff4545',
//               border: '1px solid rgba(255, 69, 69, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(255, 69, 69, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.1)' 
//             : 'none',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
//           zIndex: 9999,
//           background: scrolled 
//             ? 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.9))'
//             : 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent)',
//         }}
//       >
//         {/* Animated AI Border */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '2px',
//             background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//             backgroundSize: '300% 100%',
//             animation: 'aiBorderFlow 4s linear infinite',
//             '@keyframes aiBorderFlow': {
//               '0%': { backgroundPosition: '0% 50%' },
//               '100%': { backgroundPosition: '300% 50%' }
//             }
//           }}
//         />

//         {/* AI Particles */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with AI Animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Box
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   position: 'relative',
//                 }}
//               >
//                 {/* AI Glow Effect */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     width: 40,
//                     height: 40,
//                     borderRadius: '50%',
//                     background: 'radial-gradient(circle, #00FF88, transparent 70%)',
//                     filter: 'blur(10px)',
//                     opacity: aiActive ? 0.6 : 0.3,
//                     transition: 'opacity 0.5s ease',
//                     animation: 'aiPulse 3s infinite',
//                     '@keyframes aiPulse': {
//                       '0%, 100%': { opacity: 0.3 },
//                       '50%': { opacity: 0.6 }
//                     }
//                   }}
//                 />
                
//                 <SmartToyIcon sx={{ 
//                   color: '#00FF88', 
//                   mr: 1.5, 
//                   fontSize: 32,
//                   position: 'relative',
//                   filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
//                   animation: aiActive ? 'aiFloat 3s infinite ease-in-out' : 'none',
//                   '@keyframes aiFloat': {
//                     '0%, 100%': { transform: 'translateY(0)' },
//                     '50%': { transform: 'translateY(-3px)' }
//                   }
//                 }} />
                
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: '1.8rem',
//                     letterSpacing: '1px',
//                     background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 50%, #0066FF 100%)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
//                     animation: aiActive ? 'aiGlow 2s infinite alternate' : 'none',
//                     '@keyframes aiGlow': {
//                       '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))' },
//                       '100%': { filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.3))' }
//                     }
//                   }}
//                 >
//                   AIVISION
//                 </Typography>

//                 {/* AI Active Indicator */}
//                 <Box
//                   sx={{
//                     ml: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 10px #00FF88' : 'none',
//                       animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                       '@keyframes aiBlink': {
//                         '0%, 100%': { opacity: 0.3 },
//                         '50%': { opacity: 1 }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ 
//                     color: '#00FF88', 
//                     fontWeight: 700,
//                     fontSize: '0.6rem',
//                     letterSpacing: '1px',
//                   }}>
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 3,
//                       fontWeight: 600,
//                       fontSize: '0.95rem',
//                       letterSpacing: '0.5px',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover::before': {
//                         left: '100%'
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '80%' : '0%',
//                         height: '2px',
//                         background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {/* AI Status Indicator */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: aiActive ? '#00FF88' : '#666',
//                     boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//                     animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                   }}
//                 />
              
//               </Box>

//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 220,
//                         background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.95))',
//                         backdropFilter: 'blur(20px)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           py: 1.5,
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     variant="outlined"
//                     startIcon={<LoginIcon />}
//                     onClick={() => navigate('/login')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(0, 255, 136, 0.3)',
//                       color: '#00FF88',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Login
//                   </Button>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<BoltIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 3.5,
//                         py: 0.8,
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 25px rgba(0, 255, 136, 0.4)',
//                         },
//                       }}
//                     >
//                       Start AI Journey
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#00FF88',
//                     border: '1px solid rgba(0, 255, 136, 0.3)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)',
//                       boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import BoltIcon from '@mui/icons-material/Bolt';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import logo from '../assets/log.png'; 

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aiActive, setAiActive] = useState(false);
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
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // AI active animation
//     const aiInterval = setInterval(() => {
//       setAiActive(prev => !prev);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(aiInterval);
//     };
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #0A0A0F 0%, #121218 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '40px 40px',
//           opacity: 0.3,
//         }}
//       />

//       {/* AI Active Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             bgcolor: aiActive ? '#00FF88' : 'transparent',
//             boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//             animation: aiActive ? 'aiPulse 1.5s infinite' : 'none',
//             '@keyframes aiPulse': {
//               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//               '50%': { opacity: 1, transform: 'scale(1.5)' }
//             }
//           }}
//         />
//         <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//           AI ONLINE
//         </Typography>
//       </Box>

//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//         background: 'rgba(10, 10, 15, 0.8)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box
//               component="img"
//               src={logo}
//               alt="Logo"
//               sx={{
//                 height: 80,
//                 width: 'auto',
//               }}
//             />
//           </Box>
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#00FF88',
//             border: '1px solid rgba(0, 255, 136, 0.3)',
//             '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%)' 
//                            : 'transparent',
//                 border: '2px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   borderColor: 'rgba(0, 255, 136, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(0, 255, 136, 0.1)',
//                   '& .nav-glow': {
//                     opacity: 1,
//                   }
//                 },
//               }}
//             >
//               {/* Glow Effect */}
//               <Box
//                 className="nav-glow"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                 }}
//               />

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: '#00FF88',
//                     opacity: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) ? 1 : 0.3,
//                   }}
//                 />
//                 <ListItemText 
//                   primary={item.label} 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: '1.1rem',
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#00FF88' : '#fff'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '2px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2' }} />
//                 <ListItemText 
//                   primary="Admin Dashboard" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 50,
//                 height: 50,
//                 bgcolor: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 border: '2px solid #00FF88',
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 69, 69, 0.2)',
//               background: 'linear-gradient(135deg, rgba(255, 69, 69, 0.2), rgba(255, 69, 69, 0.1))',
//               color: '#ff4545',
//               border: '1px solid rgba(255, 69, 69, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(255, 69, 69, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.1)' 
//             : 'none',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
//           zIndex: 9999,
//           background: scrolled 
//             ? 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.9))'
//             : 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent)',
//         }}
//       >
//         {/* Animated AI Border */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '2px',
//             background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//             backgroundSize: '300% 100%',
//             animation: 'aiBorderFlow 4s linear infinite',
//             '@keyframes aiBorderFlow': {
//               '0%': { backgroundPosition: '0% 50%' },
//               '100%': { backgroundPosition: '300% 50%' }
//             }
//           }}
//         />

//         {/* AI Particles */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with AI Animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Box
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   position: 'relative',
//                 }}
//               >
//                 {/* Logo Image */}
//                 <Box
//                   component="img"
//                   src={logo} 
//                   alt="Logo"
//                   sx={{
//                     height: 80,
//                     width: 'auto',
//                     mr: 1.5,
//                     filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
//                     animation: aiActive ? 'aiFloat 3s infinite ease-in-out' : 'none',
//                     '@keyframes aiFloat': {
//                       '0%, 100%': { transform: 'translateY(0)' },
//                       '50%': { transform: 'translateY(-3px)' }
//                     }
//                   }}
//                 />

//                 {/* AI Active Indicator */}
//                 <Box
//                   sx={{
//                     ml: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 10px #00FF88' : 'none',
//                       animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                       '@keyframes aiBlink': {
//                         '0%, 100%': { opacity: 0.3 },
//                         '50%': { opacity: 1 }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ 
//                     color: '#00FF88', 
//                     fontWeight: 700,
//                     fontSize: '0.6rem',
//                     letterSpacing: '1px',
//                   }}>
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 3,
//                       fontWeight: 600,
//                       fontSize: '0.95rem',
//                       letterSpacing: '0.5px',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover::before': {
//                         left: '100%'
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '80%' : '0%',
//                         height: '2px',
//                         background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {/* AI Status Indicator */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: aiActive ? '#00FF88' : '#666',
//                     boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//                     animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                   }}
//                 />
              
//               </Box>

//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 220,
//                         background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.95))',
//                         backdropFilter: 'blur(20px)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           py: 1.5,
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     variant="outlined"
//                     startIcon={<LoginIcon />}
//                     onClick={() => navigate('/login')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(0, 255, 136, 0.3)',
//                       color: '#00FF88',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Login
//                   </Button>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<BoltIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 3.5,
//                         py: 0.8,
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 25px rgba(0, 255, 136, 0.4)',
//                         },
//                       }}
//                     >
//                       Start AI Journey
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#00FF88',
//                     border: '1px solid rgba(0, 255, 136, 0.3)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)',
//                       boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import BoltIcon from '@mui/icons-material/Bolt';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import logo from '../assets/log.png'; 

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aiActive, setAiActive] = useState(false);
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
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // AI active animation
//     const aiInterval = setInterval(() => {
//       setAiActive(prev => !prev);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(aiInterval);
//     };
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   // Admin Login handler
//   const handleAdminLogin = () => {
//     navigate('/admin/login');
//     setMobileOpen(false);
//   };

//   // Regular Login handler
//   const handleRegularLogin = () => {
//     navigate('/login');
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #0A0A0F 0%, #121218 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '40px 40px',
//           opacity: 0.3,
//         }}
//       />

//       {/* AI Active Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             bgcolor: aiActive ? '#00FF88' : 'transparent',
//             boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//             animation: aiActive ? 'aiPulse 1.5s infinite' : 'none',
//             '@keyframes aiPulse': {
//               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//               '50%': { opacity: 1, transform: 'scale(1.5)' }
//             }
//           }}
//         />
//         <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//           AI ONLINE
//         </Typography>
//       </Box>

//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//         background: 'rgba(10, 10, 15, 0.8)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box
//               component="img"
//               src={logo}
//               alt="Logo"
//               sx={{
//                 height: 80,
//                 width: 'auto',
//               }}
//             />
//           </Box>
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#00FF88',
//             border: '1px solid rgba(0, 255, 136, 0.3)',
//             '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%)' 
//                            : 'transparent',
//                 border: '2px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   borderColor: 'rgba(0, 255, 136, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(0, 255, 136, 0.1)',
//                   '& .nav-glow': {
//                     opacity: 1,
//                   }
//                 },
//               }}
//             >
//               {/* Glow Effect */}
//               <Box
//                 className="nav-glow"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                 }}
//               />

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: '#00FF88',
//                     opacity: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) ? 1 : 0.3,
//                   }}
//                 />
//                 <ListItemText 
//                   primary={item.label} 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: '1.1rem',
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#00FF88' : '#fff'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {/* Admin Login Option in Mobile Drawer */}
//         {!isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={handleAdminLogin}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '1px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                 <ListItemText 
//                   primary="Admin Login" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}

//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '2px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2' }} />
//                 <ListItemText 
//                   primary="Admin Dashboard" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* Mobile Drawer Buttons */}
//       {!isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//         }}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LoginIcon />}
//             onClick={handleRegularLogin}
//             sx={{
//               bgcolor: 'rgba(0, 255, 136, 0.2)',
//               background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1))',
//               color: '#00FF88',
//               border: '1px solid rgba(0, 255, 136, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(0, 255, 136, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             User Login
//           </Button>
          
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<DashboardIcon />}
//             onClick={handleAdminLogin}
//             sx={{
//               bgcolor: 'rgba(138, 43, 226, 0.2)',
//               background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1))',
//               color: '#8A2BE2',
//               border: '1px solid rgba(138, 43, 226, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(138, 43, 226, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Admin Login
//           </Button>
//         </Box>
//       )}
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 50,
//                 height: 50,
//                 bgcolor: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 border: '2px solid #00FF88',
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 69, 69, 0.2)',
//               background: 'linear-gradient(135deg, rgba(255, 69, 69, 0.2), rgba(255, 69, 69, 0.1))',
//               color: '#ff4545',
//               border: '1px solid rgba(255, 69, 69, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(255, 69, 69, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.1)' 
//             : 'none',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
//           zIndex: 9999,
//           background: scrolled 
//             ? 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.9))'
//             : 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent)',
//         }}
//       >
//         {/* Animated AI Border */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '2px',
//             background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//             backgroundSize: '300% 100%',
//             animation: 'aiBorderFlow 4s linear infinite',
//             '@keyframes aiBorderFlow': {
//               '0%': { backgroundPosition: '0% 50%' },
//               '100%': { backgroundPosition: '300% 50%' }
//             }
//           }}
//         />

//         {/* AI Particles */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with AI Animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Box
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   position: 'relative',
//                 }}
//               >
//                 {/* Logo Image */}
//                 <Box
//                   component="img"
//                   src={logo} 
//                   alt="Logo"
//                   sx={{
//                     height: 80,
//                     width: 'auto',
//                     mr: 1.5,
//                     filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
//                     animation: aiActive ? 'aiFloat 3s infinite ease-in-out' : 'none',
//                     '@keyframes aiFloat': {
//                       '0%, 100%': { transform: 'translateY(0)' },
//                       '50%': { transform: 'translateY(-3px)' }
//                     }
//                   }}
//                 />

//                 {/* AI Active Indicator */}
//                 <Box
//                   sx={{
//                     ml: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 10px #00FF88' : 'none',
//                       animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                       '@keyframes aiBlink': {
//                         '0%, 100%': { opacity: 0.3 },
//                         '50%': { opacity: 1 }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ 
//                     color: '#00FF88', 
//                     fontWeight: 700,
//                     fontSize: '0.6rem',
//                     letterSpacing: '1px',
//                   }}>
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 3,
//                       fontWeight: 600,
//                       fontSize: '0.95rem',
//                       letterSpacing: '0.5px',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover::before': {
//                         left: '100%'
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '80%' : '0%',
//                         height: '2px',
//                         background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {/* AI Status Indicator */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: aiActive ? '#00FF88' : '#666',
//                     boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//                     animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                   }}
//                 />
//               </Box>

//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 220,
//                         background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.95))',
//                         backdropFilter: 'blur(20px)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           py: 1.5,
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   {/* User Login Button */}
//                   <Button
//                     variant="outlined"
//                     startIcon={<LoginIcon />}
//                     onClick={handleRegularLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(0, 255, 136, 0.3)',
//                       color: '#00FF88',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         backgroundColor: 'rgba(0, 255, 136, 0.1)',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Login
//                   </Button>

//                   {/* Admin Login Button - Desktop */}
//                   <Button
//                     variant="outlined"
//                     startIcon={<DashboardIcon />}
//                     onClick={handleAdminLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(138, 43, 226, 0.3)',
//                       color: '#8A2BE2',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#8A2BE2',
//                         backgroundColor: 'rgba(138, 43, 226, 0.1)',
//                         boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Admin Login
//                   </Button>

//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<BoltIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 3.5,
//                         py: 0.8,
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 25px rgba(0, 255, 136, 0.4)',
//                         },
//                       }}
//                     >
//                       Start AI Journey
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#00FF88',
//                     border: '1px solid rgba(0, 255, 136, 0.3)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)',
//                       boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import BoltIcon from '@mui/icons-material/Bolt';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import logo from '../assets/log.png'; 

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aiActive, setAiActive] = useState(false);
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
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // AI active animation
//     const aiInterval = setInterval(() => {
//       setAiActive(prev => !prev);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(aiInterval);
//     };
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   // Admin Login handler
//   const handleAdminLogin = () => {
//     navigate('/admin/login');
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #0A0A0F 0%, #121218 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '40px 40px',
//           opacity: 0.3,
//         }}
//       />

//       {/* AI Active Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             bgcolor: aiActive ? '#00FF88' : 'transparent',
//             boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//             animation: aiActive ? 'aiPulse 1.5s infinite' : 'none',
//             '@keyframes aiPulse': {
//               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//               '50%': { opacity: 1, transform: 'scale(1.5)' }
//             }
//           }}
//         />
//         <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//           AI ONLINE
//         </Typography>
//       </Box>

//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//         background: 'rgba(10, 10, 15, 0.8)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box
//               component="img"
//               src={logo}
//               alt="Logo"
//               sx={{
//                 height: 120,
//                 width: 'auto',
//               }}
//             />
//           </Box>
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#00FF88',
//             border: '1px solid rgba(0, 255, 136, 0.3)',
//             '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%)' 
//                            : 'transparent',
//                 border: '2px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   borderColor: 'rgba(0, 255, 136, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(0, 255, 136, 0.1)',
//                   '& .nav-glow': {
//                     opacity: 1,
//                   }
//                 },
//               }}
//             >
//               {/* Glow Effect */}
//               <Box
//                 className="nav-glow"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                 }}
//               />

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: '#00FF88',
//                     opacity: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) ? 1 : 0.3,
//                   }}
//                 />
//                 <ListItemText 
//                   primary={item.label} 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: '1.1rem',
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#00FF88' : '#fff'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {/* Admin Login Option in Mobile Drawer - Only show if NOT authenticated */}
//         {!isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={handleAdminLogin}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '1px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                 <ListItemText 
//                   primary="Admin Login" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}

//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '2px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2' }} />
//                 <ListItemText 
//                   primary="Admin Dashboard" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* Mobile Drawer Buttons - Only Admin Login */}
//       {!isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//         }}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<DashboardIcon />}
//             onClick={handleAdminLogin}
//             sx={{
//               bgcolor: 'rgba(138, 43, 226, 0.2)',
//               background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1))',
//               color: '#8A2BE2',
//               border: '1px solid rgba(138, 43, 226, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(138, 43, 226, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Admin Login
//           </Button>
//         </Box>
//       )}
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 50,
//                 height: 50,
//                 bgcolor: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 border: '2px solid #00FF88',
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 69, 69, 0.2)',
//               background: 'linear-gradient(135deg, rgba(255, 69, 69, 0.2), rgba(255, 69, 69, 0.1))',
//               color: '#ff4545',
//               border: '1px solid rgba(255, 69, 69, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(255, 69, 69, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.1)' 
//             : 'none',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
//           zIndex: 9999,
//           background: scrolled 
//             ? 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.9))'
//             : 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent)',
//         }}
//       >
//         {/* Animated AI Border */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '2px',
//             background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//             backgroundSize: '300% 100%',
//             animation: 'aiBorderFlow 4s linear infinite',
//             '@keyframes aiBorderFlow': {
//               '0%': { backgroundPosition: '0% 50%' },
//               '100%': { backgroundPosition: '300% 50%' }
//             }
//           }}
//         />

//         {/* AI Particles */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with AI Animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Box
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   position: 'relative',
//                 }}
//               >
//                 {/* Logo Image */}
//                 <Box
//                   component="img"
//                   src={logo} 
//                   alt="Logo"
//                   sx={{
//                     height: 80,
//                     width: 'auto',
//                     mr: 1.5,
//                     filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
//                     animation: aiActive ? 'aiFloat 3s infinite ease-in-out' : 'none',
//                     '@keyframes aiFloat': {
//                       '0%, 100%': { transform: 'translateY(0)' },
//                       '50%': { transform: 'translateY(-3px)' }
//                     }
//                   }}
//                 />

//                 {/* AI Active Indicator */}
//                 <Box
//                   sx={{
//                     ml: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 10px #00FF88' : 'none',
//                       animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                       '@keyframes aiBlink': {
//                         '0%, 100%': { opacity: 0.3 },
//                         '50%': { opacity: 1 }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ 
//                     color: '#00FF88', 
//                     fontWeight: 700,
//                     fontSize: '0.6rem',
//                     letterSpacing: '1px',
//                   }}>
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 3,
//                       fontWeight: 600,
//                       fontSize: '0.95rem',
//                       letterSpacing: '0.5px',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover::before': {
//                         left: '100%'
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '80%' : '0%',
//                         height: '2px',
//                         background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {/* AI Status Indicator */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: aiActive ? '#00FF88' : '#666',
//                     boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//                     animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                   }}
//                 />
//               </Box>

//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 220,
//                         background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.95))',
//                         backdropFilter: 'blur(20px)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           py: 1.5,
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   {/* ONLY Admin Login Button - Extra user login button REMOVED */}
//                   <Button
//                     variant="outlined"
//                     startIcon={<DashboardIcon />}
//                     onClick={handleAdminLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(138, 43, 226, 0.3)',
//                       color: '#8A2BE2',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#8A2BE2',
//                         backgroundColor: 'rgba(138, 43, 226, 0.1)',
//                         boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Admin Login
//                   </Button>

//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<BoltIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 3.5,
//                         py: 0.8,
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 25px rgba(0, 255, 136, 0.4)',
//                         },
//                       }}
//                     >
//                       Start AI Journey
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#00FF88',
//                     border: '1px solid rgba(0, 255, 136, 0.3)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)',
//                       boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import BoltIcon from '@mui/icons-material/Bolt';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import Logo from '../components/Logo'; // Import the Logo component
// // Remove: import logo from '../assets/log.png'; 

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aiActive, setAiActive] = useState(false);
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
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // AI active animation
//     const aiInterval = setInterval(() => {
//       setAiActive(prev => !prev);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearInterval(aiInterval);
//     };
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   // Admin Login handler
//   const handleAdminLogin = () => {
//     navigate('/admin/login');
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       background: 'linear-gradient(180deg, #0A0A0F 0%, #121218 100%)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* AI Circuit Background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%),
//             linear-gradient(-45deg, transparent 49%, rgba(138, 43, 226, 0.05) 50%, transparent 51%)
//           `,
//           backgroundSize: '40px 40px',
//           opacity: 0.3,
//         }}
//       />

//       {/* AI Active Indicator */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             bgcolor: aiActive ? '#00FF88' : 'transparent',
//             boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//             animation: aiActive ? 'aiPulse 1.5s infinite' : 'none',
//             '@keyframes aiPulse': {
//               '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
//               '50%': { opacity: 1, transform: 'scale(1.5)' }
//             }
//           }}
//         />
//         <Typography variant="caption" sx={{ color: '#00FF88', fontWeight: 600 }}>
//           AI ONLINE
//         </Typography>
//       </Box>

//       <Box sx={{ 
//         position: 'relative', 
//         zIndex: 1,
//         p: 3, 
//         borderBottom: '1px solid',
//         borderColor: 'rgba(0, 255, 136, 0.2)',
//         background: 'rgba(10, 10, 15, 0.8)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             {/* Use Logo component instead of img */}
//             <Logo width={120} />
//           </Box>
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#00FF88',
//             border: '1px solid rgba(0, 255, 136, 0.3)',
//             '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3, position: 'relative', zIndex: 1 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? 'linear-gradient(90deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 255, 136, 0.05) 100%)' 
//                            : 'transparent',
//                 border: '2px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   borderColor: 'rgba(0, 255, 136, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(0, 255, 136, 0.1)',
//                   '& .nav-glow': {
//                     opacity: 1,
//                   }
//                 },
//               }}
//             >
//               {/* Glow Effect */}
//               <Box
//                 className="nav-glow"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'radial-gradient(circle at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                 }}
//               />

//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: '#00FF88',
//                     opacity: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) ? 1 : 0.3,
//                   }}
//                 />
//                 <ListItemText 
//                   primary={item.label} 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: '1.1rem',
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#00FF88' : '#fff'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {/* Admin Login Option in Mobile Drawer - Only show if NOT authenticated */}
//         {!isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={handleAdminLogin}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '1px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2', fontSize: 20 }} />
//                 <ListItemText 
//                   primary="Admin Login" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}

//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 2,
//                 mb: 2,
//                 background: 'linear-gradient(90deg, rgba(138, 43, 226, 0.2) 0%, rgba(138, 43, 226, 0.05) 100%)',
//                 border: '2px solid rgba(138, 43, 226, 0.3)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: 'rgba(138, 43, 226, 0.6)',
//                   transform: 'translateX(5px)',
//                   boxShadow: '0 10px 20px rgba(138, 43, 226, 0.1)',
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <DashboardIcon sx={{ color: '#8A2BE2' }} />
//                 <ListItemText 
//                   primary="Admin Dashboard" 
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     color: '#8A2BE2'
//                   }}
//                 />
//               </Box>
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* Mobile Drawer Buttons - Only Admin Login */}
//       {!isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//         }}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<DashboardIcon />}
//             onClick={handleAdminLogin}
//             sx={{
//               bgcolor: 'rgba(138, 43, 226, 0.2)',
//               background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1))',
//               color: '#8A2BE2',
//               border: '1px solid rgba(138, 43, 226, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(138, 43, 226, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Admin Login
//           </Button>
//         </Box>
//       )}
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ 
//           p: 3, 
//           mt: 'auto',
//           borderTop: '1px solid rgba(0, 255, 136, 0.2)',
//           background: 'rgba(10, 10, 15, 0.8)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 50,
//                 height: 50,
//                 bgcolor: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                 color: '#000',
//                 fontWeight: 'bold',
//                 border: '2px solid #00FF88',
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               bgcolor: 'rgba(255, 69, 69, 0.2)',
//               background: 'linear-gradient(135deg, rgba(255, 69, 69, 0.2), rgba(255, 69, 69, 0.1))',
//               color: '#ff4545',
//               border: '1px solid rgba(255, 69, 69, 0.3)',
//               fontWeight: 600,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: 'rgba(255, 69, 69, 0.3)',
//                 transform: 'translateY(-2px)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled 
//             ? '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.1)' 
//             : 'none',
//           backdropFilter: 'blur(20px)',
//           borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
//           zIndex: 9999,
//           background: scrolled 
//             ? 'linear-gradient(to bottom, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.9))'
//             : 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), transparent)',
//         }}
//       >
//         {/* Animated AI Border */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '2px',
//             background: 'linear-gradient(90deg, #00FF88, #8A2BE2, #0066FF, #00FF88)',
//             backgroundSize: '300% 100%',
//             animation: 'aiBorderFlow 4s linear infinite',
//             '@keyframes aiBorderFlow': {
//               '0%': { backgroundPosition: '0% 50%' },
//               '100%': { backgroundPosition: '300% 50%' }
//             }
//           }}
//         />

//         {/* AI Particles */}
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           opacity: 0.3,
//           pointerEvents: 'none',
//         }} />

//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//             position: 'relative', 
//             zIndex: 1 
//           }}>
//             {/* Logo with AI Animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Box
//                 component={RouterLink}
//                 to="/"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   textDecoration: 'none',
//                   mr: 4,
//                   position: 'relative',
//                 }}
//               >
//                 {/* Use Logo component instead of img */}
//                 <Logo 
//                   width={80} 
//                   sx={{
//                     mr: 1.5,
//                     filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
//                     animation: aiActive ? 'aiFloat 3s infinite ease-in-out' : 'none',
//                     '@keyframes aiFloat': {
//                       '0%, 100%': { transform: 'translateY(0)' },
//                       '50%': { transform: 'translateY(-3px)' }
//                     }
//                   }}
//                 />

//                 {/* AI Active Indicator */}
//                 <Box
//                   sx={{
//                     ml: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 0.5,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 6,
//                       height: 6,
//                       borderRadius: '50%',
//                       bgcolor: aiActive ? '#00FF88' : 'transparent',
//                       boxShadow: aiActive ? '0 0 10px #00FF88' : 'none',
//                       animation: aiActive ? 'aiBlink 1.5s infinite' : 'none',
//                       '@keyframes aiBlink': {
//                         '0%, 100%': { opacity: 0.3 },
//                         '50%': { opacity: 1 }
//                       }
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ 
//                     color: '#00FF88', 
//                     fontWeight: 700,
//                     fontSize: '0.6rem',
//                     letterSpacing: '1px',
//                   }}>
//                     AI
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Button
//                     onClick={() => handleNavClick(item.path, item.section)}
//                     sx={{
//                       color: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '#00FF88' : '#fff',
//                       position: 'relative',
//                       px: 3,
//                       fontWeight: 600,
//                       fontSize: '0.95rem',
//                       letterSpacing: '0.5px',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: '-100%',
//                         width: '100%',
//                         height: '100%',
//                         background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
//                         transition: 'left 0.7s'
//                       },
//                       '&:hover::before': {
//                         left: '100%'
//                       },
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: (location.pathname === item.path || 
//                                (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                                ? '80%' : '0%',
//                         height: '2px',
//                         background: 'linear-gradient(90deg, #00FF88, #8A2BE2)',
//                         borderRadius: '2px',
//                         transition: 'width 0.3s ease',
//                         boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
//                       },
//                       '&:hover': {
//                         background: 'rgba(0, 255, 136, 0.1)',
//                         color: '#00FF88',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 </motion.div>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {/* AI Status Indicator */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2 }}>
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     bgcolor: aiActive ? '#00FF88' : '#666',
//                     boxShadow: aiActive ? '0 0 15px #00FF88' : 'none',
//                     animation: aiActive ? 'aiPulse 2s infinite' : 'none',
//                   }}
//                 />
//               </Box>

//               {isAuthenticated ? (
//                 <>
//                   <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                     <IconButton onClick={handleMenuOpen} size="small" sx={{
//                       border: '2px solid rgba(0, 255, 136, 0.3)',
//                       background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(138, 43, 226, 0.1))',
//                       '&:hover': {
//                         borderColor: '#00FF88',
//                         boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
//                       }
//                     }}>
//                       <Avatar
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           background: 'linear-gradient(135deg, #00FF88, #8A2BE2)',
//                           color: '#121218',
//                           fontWeight: 'bold',
//                           boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
//                         }}
//                       >
//                         {user?.name?.charAt(0) || 'U'}
//                       </Avatar>
//                     </IconButton>
//                   </motion.div>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 220,
//                         background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95), rgba(18, 18, 24, 0.95))',
//                         backdropFilter: 'blur(20px)',
//                         border: '1px solid rgba(0, 255, 136, 0.3)',
//                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 136, 0.2)',
//                         '& .MuiMenuItem-root': {
//                           color: '#fff',
//                           py: 1.5,
//                           '&:hover': {
//                             background: 'rgba(0, 255, 136, 0.1)',
//                             color: '#00FF88'
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 20, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#ff4444' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   {/* ONLY Admin Login Button - Extra user login button REMOVED */}
//                   <Button
//                     variant="outlined"
//                     startIcon={<DashboardIcon />}
//                     onClick={handleAdminLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: 'rgba(138, 43, 226, 0.3)',
//                       color: '#8A2BE2',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                       px: 3,
//                       py: 0.8,
//                       '&:hover': {
//                         borderColor: '#8A2BE2',
//                         backgroundColor: 'rgba(138, 43, 226, 0.1)',
//                         boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)',
//                         transform: 'translateY(-2px)',
//                       }
//                     }}
//                   >
//                     Admin Login
//                   </Button>

//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       startIcon={<BoltIcon />}
//                       onClick={() => navigate('/contact')}
//                       sx={{ 
//                         display: { xs: 'none', md: 'flex' },
//                         background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//                         color: '#121218',
//                         fontWeight: 700,
//                         fontSize: '0.9rem',
//                         px: 3.5,
//                         py: 0.8,
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #00CC6D 0%, #7A1BD2 100%)',
//                           transform: 'translateY(-2px)',
//                           boxShadow: '0 10px 25px rgba(0, 255, 136, 0.4)',
//                         },
//                       }}
//                     >
//                       Start AI Journey
//                     </Button>
//                   </motion.div>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//                 <IconButton
//                   onClick={handleDrawerToggle}
//                   sx={{ 
//                     display: { md: 'none' }, 
//                     color: '#00FF88',
//                     border: '1px solid rgba(0, 255, 136, 0.3)',
//                     '&:hover': {
//                       borderColor: '#00FF88',
//                       background: 'rgba(0, 255, 136, 0.1)',
//                       boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import Logo from '../components/Logo';

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
//       setScrolled(window.scrollY > 10);
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const handleAdminLogin = () => {
//     navigate('/admin/login');
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       bgcolor: '#0A0A0F',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       <Box sx={{ 
//         p: 3, 
//         borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Logo size="medium" />
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#FF2D55',
//             '&:hover': { bgcolor: 'rgba(255, 45, 85, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: (location.pathname === item.path || 
//                          (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                          ? 'rgba(138, 43, 226, 0.1)' : 'transparent',
//                 border: '1px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? '#8A2BE2' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: '#FF2D55',
//                   bgcolor: 'rgba(255, 45, 85, 0.05)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary={item.label} 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   fontSize: '1rem',
//                   color: (location.pathname === item.path || 
//                          (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                          ? '#FFFFFF' : '#A0A0A0'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {/* Admin Login Option */}
//         {!isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={handleAdminLogin}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: 'rgba(138, 43, 226, 0.1)',
//                 border: '1px solid #8A2BE2',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   bgcolor: 'rgba(138, 43, 226, 0.2)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary="Admin Login" 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   color: '#8A2BE2'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         )}

//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: 'rgba(138, 43, 226, 0.1)',
//                 border: '1px solid #8A2BE2',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   bgcolor: 'rgba(138, 43, 226, 0.2)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary="Admin Dashboard" 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   color: '#8A2BE2'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* Mobile Drawer Buttons */}
//       {!isAuthenticated && (
//         <Box sx={{ p: 3 }}>
//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleAdminLogin}
//             sx={{
//               bgcolor: '#8A2BE2',
//               color: '#FFFFFF',
//               fontWeight: 500,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: '#7A1BD2',
//               }
//             }}
//           >
//             Admin Login
//           </Button>
//         </Box>
//       )}
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ p: 3, mt: 'auto' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 40,
//                 height: 40,
//                 bgcolor: '#8A2BE2',
//                 color: '#FFFFFF',
//                 fontWeight: 600,
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="outlined"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               borderColor: '#FF2D55',
//               color: '#FF2D55',
//               fontWeight: 500,
//               py: 1,
//               '&:hover': {
//                 borderColor: '#E82D4D',
//                 color: '#E82D4D',
//                 bgcolor: 'rgba(255, 45, 85, 0.1)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? '#0A0A0F' : 'rgba(10, 10, 15, 0.95)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           zIndex: 9999,
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//           }}>
//             {/* Logo */}
//             <Box
//               component={RouterLink}
//               to="/"
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 textDecoration: 'none',
//                 mr: 4,
//               }}
//             >
//               <Logo size="medium" />
//             </Box>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <Button
//                   key={item.label}
//                   onClick={() => handleNavClick(item.path, item.section)}
//                   sx={{
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#FFFFFF' : '#A0A0A0',
//                     position: 'relative',
//                     px: 2.5,
//                     fontWeight: 500,
//                     fontSize: '0.95rem',
//                     letterSpacing: '0.3px',
//                     transition: 'all 0.3s ease',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: 0,
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '60%' : '0%',
//                       height: '2px',
//                       bgcolor: '#FF2D55',
//                       borderRadius: '1px',
//                       transition: 'width 0.3s ease',
//                     },
//                     '&:hover': {
//                       color: '#FFFFFF',
//                       '&::after': {
//                         width: '60%',
//                         bgcolor: '#FF2D55',
//                       }
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {isAuthenticated ? (
//                 <>
//                   <IconButton onClick={handleMenuOpen} size="small" sx={{
//                     border: '1px solid rgba(138, 43, 226, 0.3)',
//                     '&:hover': {
//                       borderColor: '#8A2BE2',
//                     }
//                   }}>
//                     <Avatar
//                       sx={{
//                         width: 32,
//                         height: 32,
//                         bgcolor: '#8A2BE2',
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                       }}
//                     >
//                       {user?.name?.charAt(0) || 'U'}
//                     </Avatar>
//                   </IconButton>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 200,
//                         bgcolor: '#0A0A0F',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//                         '& .MuiMenuItem-root': {
//                           color: '#FFFFFF',
//                           py: 1,
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             bgcolor: 'rgba(138, 43, 226, 0.1)',
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#A0A0A0', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 18, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#FF2D55' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 18 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   {/* Admin Login Button */}
//                   <Button
//                     variant="outlined"
//                     onClick={handleAdminLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: '#8A2BE2',
//                       color: '#8A2BE2',
//                       fontWeight: 500,
//                       fontSize: '0.9rem',
//                       px: 2.5,
//                       py: 0.6,
//                       '&:hover': {
//                         borderColor: '#7A1BD2',
//                         color: '#7A1BD2',
//                         bgcolor: 'rgba(138, 43, 226, 0.1)',
//                       }
//                     }}
//                   >
//                     Admin Login
//                   </Button>

//                   {/* Contact Button */}
//                   <Button
//                     variant="contained"
//                     onClick={() => navigate('/contact')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       bgcolor: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
//                       background: 'linear-gradient(135deg, #8A2BE2 0%, #FF2D55 100%)',
//                       color: '#FFFFFF',
//                       fontWeight: 500,
//                       fontSize: '0.9rem',
//                       px: 2.5,
//                       py: 0.6,
//                       '&:hover': {
//                         background: 'linear-gradient(135deg, #7A1BD2 0%, #E82D4D 100%)',
//                       }
//                     }}
//                   >
//                     Contact Us
//                   </Button>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <IconButton
//                 onClick={handleDrawerToggle}
//                 sx={{ 
//                   display: { md: 'none' }, 
//                   color: '#FFFFFF',
//                   '&:hover': {
//                     bgcolor: 'rgba(255, 255, 255, 0.1)',
//                   }
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext';
// import Logo from '../components/Logo';

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
//       setScrolled(window.scrollY > 10);
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
//       const element = document.getElementById(section);
//       if (element) {
//         const yOffset = -70;
//         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     } else if (section) {
//       navigate(`/#${section}`);
//       setTimeout(() => {
//         const element = document.getElementById(section);
//         if (element) {
//           const yOffset = -70;
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       navigate(path);
//     }
//     setMobileOpen(false);
//   };

//   const handleAdminLogin = () => {
//     navigate('/admin/login');
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ 
//       width: 320, 
//       height: '100%', 
//       bgcolor: '#0A0A0F',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       <Box sx={{ 
//         p: 3, 
//         borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//       }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Logo variant="MainLogo" size="medium" />
//           <IconButton onClick={handleDrawerToggle} sx={{ 
//             color: '#8A2BE2',
//             '&:hover': { bgcolor: 'rgba(138, 43, 226, 0.1)' }
//           }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Box>
      
//       <List sx={{ p: 3 }}>
//         {navItems.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick(item.path, item.section)}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: (location.pathname === item.path || 
//                          (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                          ? 'rgba(138, 43, 226, 0.1)' : 'transparent',
//                 border: '1px solid',
//                 borderColor: (location.pathname === item.path || 
//                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                             ? '#8A2BE2' : 'rgba(255,255,255,0.1)',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: '#8A2BE2',
//                   bgcolor: 'rgba(138, 43, 226, 0.05)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary={item.label} 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   fontSize: '1rem',
//                   color: (location.pathname === item.path || 
//                          (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                          ? '#FFFFFF' : '#A0A0A0'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         ))}
        
//         {/* Admin Login Option */}
//         {!isAuthenticated && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={handleAdminLogin}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: 'rgba(138, 43, 226, 0.1)',
//                 border: '1px solid #8A2BE2',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   bgcolor: 'rgba(138, 43, 226, 0.2)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary="Admin Login" 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   color: '#8A2BE2'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         )}

//         {isAuthenticated && user?.role === 'admin' && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
//           >
//             <ListItem
//               component="button"
//               onClick={() => handleNavClick('/admin')}
//               sx={{
//                 py: 2,
//                 borderRadius: 1,
//                 mb: 1,
//                 bgcolor: 'rgba(138, 43, 226, 0.1)',
//                 border: '1px solid #8A2BE2',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   bgcolor: 'rgba(138, 43, 226, 0.2)',
//                 },
//               }}
//             >
//               <ListItemText 
//                 primary="Admin Dashboard" 
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   color: '#8A2BE2'
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         )}
//       </List>
      
//       {/* Mobile Drawer Buttons */}
//       {!isAuthenticated && (
//         <Box sx={{ p: 3 }}>
//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleAdminLogin}
//             sx={{
//               bgcolor: '#8A2BE2',
//               color: '#FFFFFF',
//               fontWeight: 500,
//               py: 1.5,
//               '&:hover': {
//                 bgcolor: '#7A1BD2',
//               }
//             }}
//           >
//             Admin Login
//           </Button>
//         </Box>
//       )}
      
//       {/* User Info in Drawer */}
//       {isAuthenticated && (
//         <Box sx={{ p: 3, mt: 'auto' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 40,
//                 height: 40,
//                 bgcolor: '#8A2BE2',
//                 color: '#FFFFFF',
//                 fontWeight: 600,
//               }}
//             >
//               {user?.name?.charAt(0) || 'U'}
//             </Avatar>
//             <Box>
//               <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
//                 {user?.name || 'User'}
//               </Typography>
//               <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
//                 {user?.email}
//               </Typography>
//             </Box>
//           </Box>
//           <Button
//             fullWidth
//             variant="outlined"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//             sx={{
//               borderColor: '#8A2BE2',
//               color: '#8A2BE2',
//               fontWeight: 500,
//               py: 1,
//               '&:hover': {
//                 borderColor: '#7A1BD2',
//                 color: '#7A1BD2',
//                 bgcolor: 'rgba(138, 43, 226, 0.1)',
//               }
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           bgcolor: scrolled ? '#0A0A0F' : 'rgba(10, 10, 15, 0.95)',
//           transition: 'all 0.3s ease',
//           boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//           zIndex: 9999,
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ 
//             py: 1,
//             minHeight: '70px',
//           }}>
//             {/* Logo */}
//             <Box
//               component={RouterLink}
//               to="/"
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 textDecoration: 'none',
//                 mr: 4,
//               }}
//             >
//               <Logo variant="MainLogo" size="medium" />
//             </Box>

//             {/* Desktop Navigation */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
//               {navItems.map((item, index) => (
//                 <Button
//                   key={item.label}
//                   onClick={() => handleNavClick(item.path, item.section)}
//                   sx={{
//                     color: (location.pathname === item.path || 
//                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                            ? '#FFFFFF' : '#A0A0A0',
//                     position: 'relative',
//                     px: 2.5,
//                     fontWeight: 500,
//                     fontSize: '0.95rem',
//                     letterSpacing: '0.3px',
//                     transition: 'all 0.3s ease',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: 0,
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: (location.pathname === item.path || 
//                              (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
//                              ? '60%' : '0%',
//                       height: '2px',
//                       bgcolor: '#8A2BE2',
//                       borderRadius: '1px',
//                       transition: 'width 0.3s ease',
//                     },
//                     '&:hover': {
//                       color: '#FFFFFF',
//                       '&::after': {
//                         width: '60%',
//                         bgcolor: '#8A2BE2',
//                       }
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               ))}
//             </Box>

//             {/* Right Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
//               {isAuthenticated ? (
//                 <>
//                   <IconButton onClick={handleMenuOpen} size="small" sx={{
//                     border: '1px solid rgba(138, 43, 226, 0.3)',
//                     '&:hover': {
//                       borderColor: '#8A2BE2',
//                     }
//                   }}>
//                     <Avatar
//                       sx={{
//                         width: 32,
//                         height: 32,
//                         bgcolor: '#8A2BE2',
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                       }}
//                     >
//                       {user?.name?.charAt(0) || 'U'}
//                     </Avatar>
//                   </IconButton>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1.5,
//                         minWidth: 200,
//                         bgcolor: '#0A0A0F',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//                         '& .MuiMenuItem-root': {
//                           color: '#FFFFFF',
//                           py: 1,
//                           fontSize: '0.9rem',
//                           '&:hover': {
//                             bgcolor: 'rgba(138, 43, 226, 0.1)',
//                           }
//                         }
//                       },
//                     }}
//                   >
//                     <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
//                       <Typography variant="body2" sx={{ color: '#A0A0A0', fontSize: '0.8rem' }}>
//                         {user?.email}
//                       </Typography>
//                     </MenuItem>
//                     {user?.role === 'admin' && (
//                       <MenuItem onClick={() => handleNavClick('/admin')}>
//                         <DashboardIcon sx={{ mr: 2, fontSize: 18, color: '#8A2BE2' }} />
//                         <Typography sx={{ color: '#8A2BE2' }}>Admin Dashboard</Typography>
//                       </MenuItem>
//                     )}
//                     <MenuItem onClick={handleLogout} sx={{ color: '#8A2BE2' }}>
//                       <LogoutIcon sx={{ mr: 2, fontSize: 18 }} />
//                       Logout
//                     </MenuItem>
//                   </Menu>
//                 </>
//               ) : (
//                 <>
//                   {/* Admin Login Button */}
//                   <Button
//                     variant="outlined"
//                     onClick={handleAdminLogin}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       borderColor: '#8A2BE2',
//                       color: '#8A2BE2',
//                       fontWeight: 500,
//                       fontSize: '0.9rem',
//                       px: 2.5,
//                       py: 0.6,
//                       '&:hover': {
//                         borderColor: '#7A1BD2',
//                         color: '#7A1BD2',
//                         bgcolor: 'rgba(138, 43, 226, 0.1)',
//                       }
//                     }}
//                   >
//                     Admin Login
//                   </Button>

//                   {/* Contact Button */}
//                   <Button
//                     variant="contained"
//                     onClick={() => navigate('/contact')}
//                     sx={{ 
//                       display: { xs: 'none', md: 'flex' },
//                       bgcolor: '#8A2BE2',
//                       color: '#FFFFFF',
//                       fontWeight: 500,
//                       fontSize: '0.9rem',
//                       px: 2.5,
//                       py: 0.6,
//                       '&:hover': {
//                         bgcolor: '#7A1BD2',
//                       }
//                     }}
//                   >
//                     Contact Us
//                   </Button>
//                 </>
//               )}

//               {/* Mobile Menu Button */}
//               <IconButton
//                 onClick={handleDrawerToggle}
//                 sx={{ 
//                   display: { md: 'none' }, 
//                   color: '#FFFFFF',
//                   '&:hover': {
//                     bgcolor: 'rgba(255, 255, 255, 0.1)',
//                   }
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

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
//                 '& .MuiDrawer-paper': { 
//                   boxSizing: 'border-box', 
//                   width: 320,
//                   border: 'none'
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  // Color constants
  const telemagenta = '#cf3476';
  const salmon = '#fa8072';
  const telemagentaHover = '#d94b8a';
  const salmonHover = '#fb9488';

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

  const handleAdminLogin = () => {
    navigate('/admin/login');
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ 
      width: 320, 
      height: '100%', 
      bgcolor: '#0A0A0F',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        p: 3, 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo variant="MainLogo" size="medium" />
          <IconButton onClick={handleDrawerToggle} sx={{ 
            color: telemagenta,
            '&:hover': { bgcolor: `rgba(207, 52, 118, 0.1)` }
          }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      
      <List sx={{ p: 3 }}>
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
                borderRadius: 1,
                mb: 1,
                bgcolor: (location.pathname === item.path || 
                         (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                         ? `rgba(207, 52, 118, 0.1)` : 'transparent',
                border: '1px solid',
                borderColor: (location.pathname === item.path || 
                            (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                            ? telemagenta : 'rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: salmon,
                  bgcolor: `rgba(250, 128, 114, 0.05)`,
                },
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: (location.pathname === item.path || 
                         (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                         ? '#FFFFFF' : '#A0A0A0'
                }}
              />
            </ListItem>
          </motion.div>
        ))}
        
        {/* Admin Login Option */}
        {!isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
          >
            <ListItem
              component="button"
              onClick={handleAdminLogin}
              sx={{
                py: 2,
                borderRadius: 1,
                mb: 1,
                bgcolor: `rgba(207, 52, 118, 0.1)`,
                border: `1px solid ${telemagenta}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: `rgba(207, 52, 118, 0.2)`,
                  borderColor: telemagentaHover,
                },
              }}
            >
              <ListItemText 
                primary="Admin Login" 
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: telemagenta
                }}
              />
            </ListItem>
          </motion.div>
        )}

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
                borderRadius: 1,
                mb: 1,
                bgcolor: `rgba(207, 52, 118, 0.1)`,
                border: `1px solid ${telemagenta}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: `rgba(207, 52, 118, 0.2)`,
                  borderColor: telemagentaHover,
                },
              }}
            >
              <ListItemText 
                primary="Admin Dashboard" 
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: telemagenta
                }}
              />
            </ListItem>
          </motion.div>
        )}
      </List>
      
      {/* Mobile Drawer Buttons */}
      {!isAuthenticated && (
        <Box sx={{ p: 3 }}>
          {/* <Button
            fullWidth
            variant="contained"
            onClick={handleAdminLogin}
            sx={{
              bgcolor: telemagenta,
              color: '#FFFFFF',
              fontWeight: 500,
              py: 1.5,
              '&:hover': {
                bgcolor: telemagentaHover,
              }
            }}
          >
            Admin Login
          </Button> */}
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/contact')}
            sx={{
              mt: 2,
              borderColor: salmon,
              color: salmon,
              fontWeight: 500,
              py: 1.5,
              '&:hover': {
                borderColor: salmonHover,
                color: salmonHover,
                bgcolor: `rgba(250, 128, 114, 0.1)`,
              }
            }}
          >
            Contact Us
          </Button>
        </Box>
      )}
      
      {/* User Info in Drawer */}
      {isAuthenticated && (
        <Box sx={{ p: 3, mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: telemagenta,
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                {user?.name || 'User'}
              </Typography>
              <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
                {user?.email}
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderColor: salmon,
              color: salmon,
              fontWeight: 500,
              py: 1,
              '&:hover': {
                borderColor: salmonHover,
                color: salmonHover,
                bgcolor: `rgba(250, 128, 114, 0.1)`,
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
        position="fixed"
        sx={{
          bgcolor: scrolled ? '#0A0A0F' : 'rgba(10, 10, 15, 0.95)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 9999,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ 
            py: 1,
            minHeight: '70px',
          }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                mr: 4,
              }}
            >
              <Logo variant="MainLogo" size="medium" />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 }}>
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.section)}
                  sx={{
                    color: (location.pathname === item.path || 
                           (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                           ? '#FFFFFF' : '#A0A0A0',
                    position: 'relative',
                    px: 2.5,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: (location.pathname === item.path || 
                             (location.pathname === '/' && window.location.hash === `#${item.section}`)) 
                             ? '60%' : '0%',
                      height: '2px',
                      bgcolor: telemagenta,
                      borderRadius: '1px',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: '#FFFFFF',
                      '&::after': {
                        width: '60%',
                        bgcolor: salmon,
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
              {isAuthenticated ? (
                <>
                  <IconButton onClick={handleMenuOpen} size="small" sx={{
                    border: `1px solid ${telemagenta}33`,
                    '&:hover': {
                      borderColor: telemagenta,
                    }
                  }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: telemagenta,
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    >
                      {user?.name?.charAt(0) || 'U'}
                    </Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        minWidth: 200,
                        bgcolor: '#0A0A0F',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        '& .MuiMenuItem-root': {
                          color: '#FFFFFF',
                          py: 1,
                          fontSize: '0.9rem',
                          '&:hover': {
                            bgcolor: `rgba(207, 52, 118, 0.1)`,
                          }
                        }
                      },
                    }}
                  >
                    <MenuItem disabled sx={{ opacity: 0.7, py: 1 }}>
                      <Typography variant="body2" sx={{ color: '#A0A0A0', fontSize: '0.8rem' }}>
                        {user?.email}
                      </Typography>
                    </MenuItem>
                    {user?.role === 'admin' && (
                      <MenuItem onClick={() => handleNavClick('/admin')}>
                        <DashboardIcon sx={{ mr: 2, fontSize: 18, color: telemagenta }} />
                        <Typography sx={{ color: telemagenta }}>Admin Dashboard</Typography>
                      </MenuItem>
                    )}
                    <MenuItem onClick={handleLogout} sx={{ color: salmon }}>
                      <LogoutIcon sx={{ mr: 2, fontSize: 18 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  {/* Admin Login Button */}
                  {/* <Button
                    variant="outlined"
                    onClick={handleAdminLogin}
                    sx={{ 
                      display: { xs: 'none', md: 'flex' },
                      borderColor: telemagenta,
                      color: telemagenta,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 2.5,
                      py: 0.6,
                      '&:hover': {
                        borderColor: telemagentaHover,
                        color: telemagentaHover,
                        bgcolor: `rgba(207, 52, 118, 0.1)`,
                      }
                    }}
                  >
                    Admin Login
                  </Button> */}

                  {/* Contact Button */}
                  <Button
                    variant="contained"
                    onClick={() => navigate('/contact')}
                    sx={{ 
                      display: { xs: 'none', md: 'flex' },
                      bgcolor: salmon,
                      color: '#FFFFFF',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      px: 2.5,
                      py: 0.6,
                      '&:hover': {
                        bgcolor: salmonHover,
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' }, 
                  color: '#FFFFFF',
                  '&:hover': {
                    bgcolor: `rgba(207, 52, 118, 0.1)`,
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
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
                  width: 320,
                  border: 'none'
                },
              }}
            >
              {drawer}
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;