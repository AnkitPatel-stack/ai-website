// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext(null);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       verifyToken();
//     } else {
//       setLoading(false);
//     }
//   }, [token]);

//   const verifyToken = async () => {
//     try {
//       // Mock user for demo
//       setUser({
//         id: '1',
//         email: 'admin@aivision.com',
//         name: 'Admin User',
//         role: 'admin',
//       });
//     } catch (error) {
//       console.error('Token verification failed:', error);
//       logout();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       // Mock login for demo
//       const mockToken = 'mock-jwt-token-' + Date.now();
//       const mockUser = {
//         id: '1',
//         email: email,
//         name: email.split('@')[0],
//         role: email === 'admin@aivision.com' ? 'admin' : 'user',
//       };
      
//       localStorage.setItem('token', mockToken);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
//       setToken(mockToken);
//       setUser(mockUser);
      
//       return { success: true, user: mockUser };
//     } catch (error) {
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Login failed',
//       };
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     setToken(null);
//     setUser(null);
//   };

//   const register = async (name, email, password) => {
//     try {
//       const mockToken = 'mock-jwt-token-' + Date.now();
//       const mockUser = {
//         id: Date.now().toString(),
//         email,
//         name,
//         role: 'user',
//       };
      
//       localStorage.setItem('token', mockToken);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
//       setToken(mockToken);
//       setUser(mockUser);
      
//       return { success: true, user: mockUser };
//     } catch (error) {
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Registration failed',
//       };
//     }
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     register,
//     isAuthenticated: !!user,
//     isAdmin: user?.role === 'admin',
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      verifyToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      // Mock user for demo
      setUser({
        id: '1',
        email: 'admin@aivision.com',
        name: 'Admin User',
        role: 'admin',
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      // Mock login for demo
      const mockToken = 'mock-jwt-token-' + Date.now();
      const mockUser = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: email === 'admin@aivision.com' ? 'admin' : 'user',
      };
      
      localStorage.setItem('token', mockToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
      setToken(mockToken);
      setUser(mockUser);
      
      return { success: true, user: mockUser };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Login failed',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  const register = async (name, email, password) => {
    try {
      const mockToken = 'mock-jwt-token-' + Date.now();
      const mockUser = {
        id: Date.now().toString(),
        email,
        name,
        role: 'user',
      };
      
      localStorage.setItem('token', mockToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
      setToken(mockToken);
      setUser(mockUser);
      
      return { success: true, user: mockUser };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Registration failed',
      };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};