// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Chatbot from './components/Chatbot';

// // Pages
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import ContactPage from './pages/ContactPage';
// import AdminDashboard from './admin/AdminDashboard';
// import AdminLogin from './admin/AdminLogin';

// // Services
// import { AuthProvider } from './services/AuthContext';
// import ProtectedRoute from './services/ProtectedRoute';

// function App() {
//   const location = useLocation();
//   const [showChatbot, setShowChatbot] = useState(false);

//   useEffect(() => {
//     // Show chatbot after 30 seconds on home page
//     if (location.pathname === '/') {
//       const timer = setTimeout(() => {
//         setShowChatbot(true);
//       }, 30000);
//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname]);

//   return (
//     <AuthProvider>
//       <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Routes location={location}>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//               <Route path="/admin/login" element={<AdminLogin />} />
//               <Route
//                 path="/admin/*"
//                 element={
//                   <ProtectedRoute role="admin">
//                     <AdminDashboard />
//                   </ProtectedRoute>
//                 }
//               />
//             </Routes>
//           </motion.div>
//         </AnimatePresence>
//         <Footer />
//         {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
//       </Box>
//     </AuthProvider>
//   );
// }

// export default App;


// import React, { Suspense, lazy } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Box, CircularProgress } from '@mui/material';
// import { AnimatePresence } from 'framer-motion';

// // Components
// import Navbar from './components/Navbar';
// import Chatbot from './components/Chatbot';
// import Footer from './components/Footer';

// // Pages - Lazy loaded for performance
// const HomePage = lazy(() => import('./pages/HomePage'));
// const AboutPage = lazy(() => import('./pages/AboutPage'));
// const ServicesPage = lazy(() => import('./pages/ServicesPage'));
// const TeamPage = lazy(() => import('./pages/TeamPage'));
// const ContactPage = lazy(() => import('./pages/ContactPage'));

// function App() {
//   const location = useLocation();

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       <Navbar />
      
//       <AnimatePresence mode="wait">
//         <Suspense fallback={
//           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//             <CircularProgress color="primary" />
//           </Box>
//         }>
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/team" element={<TeamPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </Suspense>
//       </AnimatePresence>
      
//       <Chatbot />
//       <Footer />
//     </Box>
//   );
// }

// export default App;


// // src/App.js
// import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Chatbot from './components/Chatbot';

// // Pages
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import ContactPage from './pages/ContactPage';
// import TeamPage from './pages/TeamPage';
// import AdminDashboard from './admin/AdminDashboard';
// import AdminLogin from './admin/AdminLogin';

// // Auth Context
// import { AuthProvider } from './contexts/AuthContext';  // Update this line
// import ProtectedRoute from './services/ProtectedRoute';

// function App() {
//   const location = useLocation();
//   const [showChatbot, setShowChatbot] = useState(false);

//   useEffect(() => {
//     if (location.pathname === '/') {
//       const timer = setTimeout(() => {
//         setShowChatbot(true);
//       }, 30000);
//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname]);

//   return (
//     <AuthProvider>
//       <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Routes location={location}>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/team" element={<TeamPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//               <Route path="/admin/login" element={<AdminLogin />} />
//               <Route
//                 path="/admin/*"
//                 element={
//                   <ProtectedRoute role="admin">
//                     <AdminDashboard />
//                   </ProtectedRoute>
//                 }
//               />
//             </Routes>
//           </motion.div>
//         </AnimatePresence>
//         <Footer />
//         {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
//       </Box>
//     </AuthProvider>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';  // Add useState and useEffect here
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';

// Auth Context
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './services/ProtectedRoute';
import StarsBackground from './components/StarsBackground';

function App() {
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowChatbot(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <AuthProvider>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StarsBackground/>
          
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
        {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
      </Box>
    </AuthProvider>
  );
}

export default App;