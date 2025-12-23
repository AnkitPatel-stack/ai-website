import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Link,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      if (result.user.role === 'admin') {
        navigate(from, { replace: true });
      } else {
        setError('You do not have admin privileges');
        setLoading(false);
      }
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, md: 6 },
            bgcolor: '#121218',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: '#00FF88',
                fontWeight: 700,
              }}
            >
              AI SOLUTIONS
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Admin Portal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your credentials to access the admin dashboard
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              disabled={loading}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              disabled={loading}
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                mb: 2,
                bgcolor: '#00FF88',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Link
                href="/"
                color="primary"
                underline="hover"
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                onClick={() => navigate('/')}
              >
                ← Back to Home
              </Link>
            </Box>
          </form>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary" align="center">
              For security reasons, please log out after your session.
              <br />
              Contact support if you encounter any issues.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default AdminLogin;