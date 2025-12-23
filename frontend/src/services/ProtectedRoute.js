// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { CircularProgress, Box } from '@mui/material';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ children, role }) => {
//   const { user, loading, isAuthenticated } = useAuth();
//   const location = useLocation();

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!isAuthenticated) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/admin/login" state={{ from: location }} replace />;
//   }

//   if (role && user.role !== role) {
//     // Redirect to home if not authorized
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


// src/services/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, role = 'user' }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (role === 'admin' && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;