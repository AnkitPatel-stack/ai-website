// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// const API_BASE_URL = 'https://ai-website-q79r.onrender.com/api';
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

//   // Configure axios defaults
//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       // Verify token on mount
//       verifyToken();
//     } else {
//       setLoading(false);
//     }
//   }, [token]);

//   const verifyToken = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/auth/profile`);
//       setUser(response.data.user);
//     } catch (error) {
//       console.error('Token verification failed:', error);
//       logout();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, {
//         email,
//         password,
//       });
      
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setToken(token);
//       setUser(user);
//       return { success: true, user };
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
//       const response = await axios.post(`${API_BASE_URL}/auth/register`, {
//         name,
//         email,
//         password,
//       });
      
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setToken(token);
//       setUser(user);
//       return { success: true, user };
//     } catch (error) {
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Registration failed',
//       };
//     }
//   };

//   const updateProfile = async (updates) => {
//     try {
//       const response = await axios.put(`${API_BASE_URL}/auth/profile`, updates);
//       setUser(response.data.user);
//       return { success: true, user: response.data.user };
//     } catch (error) {
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Update failed',
//       };
//     }
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     register,
//     updateProfile,
//     isAuthenticated: !!user,
//     isAdmin: user?.role === 'admin',
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// // Set API base URL with fallback logic
// const getApiBaseUrl = () => {
//   // Priority order: environment variable -> direct Render URL -> localhost
//   if (process.env.REACT_APP_API_URL) {
//     return process.env.REACT_APP_API_URL;
//   }
  
//   // If you want to always use the Render backend for production
//   if (process.env.NODE_ENV === 'production') {
//     return 'https://ai-website-q79r.onrender.com/api';
//   }
  
//   // Default to localhost for development
//   return 'http://localhost:5000/api';
// };

// const API_BASE_URL = getApiBaseUrl();
// console.log('🌐 Using API URL:', API_BASE_URL);

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

//   // Configure axios defaults
//   useEffect(() => {
//     console.log('🔧 Configuring axios with API URL:', API_BASE_URL);
    
//     // Set base URL for all requests
//     axios.defaults.baseURL = API_BASE_URL.replace('/api', '');
    
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       console.log('🔑 Token found, verifying...');
//       // Verify token on mount
//       verifyToken();
//     } else {
//       console.log('🔓 No token found');
//       setLoading(false);
//     }
//   }, [token]);

//   const verifyToken = async () => {
//     try {
//       console.log('🔍 Verifying token...');
//       // Note: Your mock backend doesn't have /auth/profile endpoint yet
//       // For now, we'll skip verification or use a different endpoint
      
//       // Since your mock backend doesn't have profile endpoint,
//       // we'll check if we can access any protected endpoint
//       const response = await axios.get(`${API_BASE_URL}/admin/dashboard/stats`);
//       console.log('✅ Token verified successfully');
      
//       // Since we don't get user data from this endpoint in mock mode,
//       // we'll set a default admin user
//       if (response.data) {
//         setUser({
//           id: '1',
//           email: 'admin@aiwebsite.com',
//           name: 'System Administrator',
//           role: 'admin'
//         });
//       }
//     } catch (error) {
//       console.error('❌ Token verification failed:', error.message);
      
//       // For mock mode, we might still want to set user if token exists
//       if (token && token.includes('mock-jwt-token')) {
//         console.log('🔄 Using mock authentication');
//         setUser({
//           id: '1',
//           email: 'admin@aiwebsite.com',
//           name: 'System Administrator',
//           role: 'admin'
//         });
//       } else {
//         logout();
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       console.log('🔐 Attempting login to:', API_BASE_URL);
//       const response = await axios.post(`${API_BASE_URL}/auth/login`, {
//         email,
//         password,
//       });
      
//       console.log('✅ Login response:', response.data);
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setToken(token);
//       setUser(user);
//       return { success: true, user };
//     } catch (error) {
//       console.error('❌ Login error:', error);
      
//       // For development, provide mock login if backend is down
//       if (email === 'admin@aiwebsite.com' && password === 'Admin@123') {
//         console.log('🔄 Using mock login for development');
//         const mockToken = 'mock-jwt-token-for-development';
//         const mockUser = {
//           id: '1',
//           email: 'admin@aiwebsite.com',
//           name: 'System Administrator',
//           role: 'admin'
//         };
//         localStorage.setItem('token', mockToken);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
//         setToken(mockToken);
//         setUser(mockUser);
//         return { success: true, user: mockUser };
//       }
      
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Login failed. Please check your credentials and try again.',
//       };
//     }
//   };

//   const logout = () => {
//     console.log('🚪 Logging out...');
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     setToken(null);
//     setUser(null);
//   };

//   const register = async (name, email, password) => {
//     try {
//       console.log('📝 Attempting registration to:', API_BASE_URL);
//       const response = await axios.post(`${API_BASE_URL}/auth/register`, {
//         name,
//         email,
//         password,
//       });
      
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setToken(token);
//       setUser(user);
//       return { success: true, user };
//     } catch (error) {
//       console.error('❌ Registration error:', error);
      
//       // For development, provide mock registration
//       console.log('🔄 Using mock registration for development');
//       const mockToken = 'mock-jwt-token-for-development';
//       const mockUser = {
//         id: Date.now().toString(),
//         email,
//         name,
//         role: 'user'
//       };
//       localStorage.setItem('token', mockToken);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
//       setToken(mockToken);
//       setUser(mockUser);
//       return { success: true, user: mockUser };
//     }
//   };

//   const updateProfile = async (updates) => {
//     try {
//       const response = await axios.put(`${API_BASE_URL}/auth/profile`, updates);
//       setUser(response.data.user);
//       return { success: true, user: response.data.user };
//     } catch (error) {
//       console.error('❌ Profile update error:', error);
      
//       // For mock mode, update locally
//       if (user) {
//         const updatedUser = { ...user, ...updates };
//         setUser(updatedUser);
//         return { success: true, user: updatedUser };
//       }
      
//       return {
//         success: false,
//         error: error.response?.data?.error || 'Update failed',
//       };
//     }
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     register,
//     updateProfile,
//     isAuthenticated: !!user,
//     isAdmin: user?.role === 'admin',
//     apiUrl: API_BASE_URL, // For debugging
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useContext, useEffect } from 'react';

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

  // Mock authentication for development
  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setUser({
        id: '1',
        email: 'admin@aivision.com',
        name: 'Admin User',
        role: 'admin',
      });
      setLoading(false);
    }, 500);
  }, []);

  const login = async (email, password) => {
    // Mock login
    const mockUser = {
      id: '1',
      email: email,
      name: email.split('@')[0],
      role: email === 'admin@aivision.com' ? 'admin' : 'user',
    };
    setUser(mockUser);
    return { success: true, user: mockUser };
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name, email, password) => {
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
    };
    setUser(mockUser);
    return { success: true, user: mockUser };
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