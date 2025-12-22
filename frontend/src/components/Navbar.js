import React, { useState } from 'react';
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
  useScrollTrigger,
  Slide,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../services/AuthContext';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

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

  const drawer = (
    <Box sx={{ textAlign: 'center', bgcolor: 'background.paper', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
          AI SOLUTIONS
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(0, 255, 136, 0.1)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {isAuthenticated && user.role === 'admin' && (
          <ListItem
            component={Link}
            to="/admin"
            onClick={handleDrawerToggle}
            sx={{
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(0, 255, 136, 0.1)',
              },
            }}
          >
            <ListItemText primary="Admin Dashboard" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              {/* Logo */}
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                  textDecoration: 'none',
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  letterSpacing: '0.1em',
                }}
              >
                AI<span style={{ color: '#fff' }}>SOLUTIONS</span>
              </Typography>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 'auto' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: 'text.primary',
                      mx: 1,
                      position: 'relative',
                      '&:hover': {
                        bgcolor: 'transparent',
                        '&::after': {
                          width: '100%',
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        bgcolor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* User Menu / Login */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {isAuthenticated ? (
                  <>
                    <IconButton
                      onClick={handleMenuOpen}
                      sx={{ ml: 2 }}
                    >
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                        {user.name?.charAt(0) || <AccountCircle />}
                      </Avatar>
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        sx: {
                          bgcolor: 'background.paper',
                          mt: 1.5,
                          minWidth: 200,
                        },
                      }}
                    >
                      <MenuItem disabled>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </MenuItem>
                      {user.role === 'admin' && (
                        <MenuItem
                          component={Link}
                          to="/admin"
                          onClick={handleMenuClose}
                        >
                          Admin Dashboard
                        </MenuItem>
                      )}
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Button
                    component={Link}
                    to="/admin/login"
                    variant="outlined"
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.light',
                        bgcolor: 'rgba(0, 255, 136, 0.1)',
                      },
                    }}
                  >
                    Admin Login
                  </Button>
                )}

                {/* Mobile menu button */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' }, ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;