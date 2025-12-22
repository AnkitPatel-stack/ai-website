// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const contentRoutes = require('./routes/content');
// const contactRoutes = require('./routes/contact');
// const chatbotRoutes = require('./routes/chatbot');
// const adminRoutes = require('./routes/admin');

// const app = express();

// // Security middleware
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
//       fontSrc: ["'self'", "https://fonts.gstatic.com"],
//       imgSrc: ["'self'", "data:", "https://res.cloudinary.com", "https://images.unsplash.com"],
//     },
//   },
// }));

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });
// app.use('/api/', limiter);

// // CORS configuration - FIXED FOR MULTIPLE ORIGINS
// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://10.251.140.151:3000',
//   process.env.FRONTEND_URL
// ].filter(Boolean); // Remove any undefined/null values

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Handle preflight requests
// app.options('*', cors());

// // Body parsing middleware
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Logging
// app.use(morgan('dev')); // Changed to 'dev' for better readability

// // Database connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-website', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected successfully'))
// .catch(err => {
//   console.error('❌ MongoDB connection error:', err);
//   process.exit(1);
// });

// // Initialize database with seed data
// const seedDatabase = require('./utils/seedContent');
// seedDatabase();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/content', contentRoutes);
// app.use('/api/contact', contactRoutes);
// app.use('/api/chatbot', chatbotRoutes);
// app.use('/api/admin', adminRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.status(200).json({
//     status: 'healthy',
//     timestamp: new Date().toISOString(),
//     uptime: process.uptime(),
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   console.error('Stack:', err.stack);
  
//   // Handle CORS errors
//   if (err.message.includes('CORS')) {
//     return res.status(403).json({ 
//       error: 'CORS Error',
//       message: err.message,
//       allowedOrigins: allowedOrigins
//     });
//   }
  
//   res.status(err.status || 500).json({
//     error: {
//       message: err.message || 'Internal Server Error',
//       ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
//     },
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const contentRoutes = require('./routes/content');
// const contactRoutes = require('./routes/contact');
// const chatbotRoutes = require('./routes/chatbot');
// const adminRoutes = require('./routes/admin');

// const app = express();

// // Security middleware
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
//       fontSrc: ["'self'", "https://fonts.gstatic.com"],
//       imgSrc: ["'self'", "data:", "https://res.cloudinary.com", "https://images.unsplash.com"],
//     },
//   },
// }));

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });
// app.use('/api/', limiter);

// // CORS configuration
// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://10.251.140.151:3000'
// ];

// // Clean up FRONTEND_URL if it has quotes or commas
// let frontendUrl = process.env.FRONTEND_URL;
// if (frontendUrl) {
//   // Remove quotes and extra spaces
//   frontendUrl = frontendUrl.replace(/['",]/g, '').trim();
//   if (!allowedOrigins.includes(frontendUrl)) {
//     allowedOrigins.push(frontendUrl);
//   }
// }

// console.log('🌐 Allowed origins:', allowedOrigins);

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}. Allowed origins: ${allowedOrigins.join(', ')}`;
//       console.warn('CORS blocked origin:', origin);
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Handle preflight requests
// app.options('*', cors());

// // Body parsing middleware
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Logging
// app.use(morgan('dev'));

// // Database connection with better error handling
// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-website';
//     console.log('🔌 Connecting to MongoDB...');
    
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
//       socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     });
    
//     console.log('✅ MongoDB connected successfully');
    
//     // Initialize database with seed data
//     try {
//       const seedDatabase = require('./utils/seedContent');
//       await seedDatabase();
//       console.log('✅ Database seeded successfully');
//     } catch (seedError) {
//       console.warn('⚠️ Database seeding failed, continuing anyway:', seedError.message);
//     }
    
//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err.message);
//     console.log('💡 Tips to fix:');
//     console.log('1. Check if your IP is whitelisted in MongoDB Atlas');
//     console.log('2. Verify your MongoDB connection string');
//     console.log('3. Try using local MongoDB: mongodb://localhost:27017/ai-website');
    
//     // For development, you can continue without MongoDB
//     if (process.env.NODE_ENV === 'development') {
//       console.log('⚠️ Running in development mode without database connection');
//     } else {
//       console.log('❌ Exiting application due to database connection failure');
//       process.exit(1);
//     }
//   }
// };

// // Connect to database
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/content', contentRoutes);
// app.use('/api/contact', contactRoutes);
// app.use('/api/chatbot', chatbotRoutes);
// app.use('/api/admin', adminRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
//   res.status(200).json({
//     status: 'healthy',
//     database: dbStatus,
//     timestamp: new Date().toISOString(),
//     uptime: process.uptime(),
//     allowedOrigins: allowedOrigins,
//   });
// });

// // Test endpoint without database
// app.get('/api/test', (req, res) => {
//   res.json({
//     message: 'Server is running',
//     timestamp: new Date().toISOString(),
//     environment: process.env.NODE_ENV,
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
  
//   // Handle CORS errors
//   if (err.message.includes('CORS')) {
//     return res.status(403).json({ 
//       error: 'CORS Error',
//       message: err.message,
//       allowedOrigins: allowedOrigins
//     });
//   }
  
//   res.status(err.status || 500).json({
//     error: {
//       message: err.message || 'Internal Server Error',
//       ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
//     },
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
//   console.log(`🏭 Environment: ${process.env.NODE_ENV}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const contentRoutes = require('./routes/content');
// const contactRoutes = require('./routes/contact');
// const chatbotRoutes = require('./routes/chatbot');
// const adminRoutes = require('./routes/admin');

// const app = express();

// // Security middleware
// app.use(helmet({
//   contentSecurityPolicy: false, // Temporarily disable for debugging
// }));

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 1000, // Increased for debugging
// });
// app.use('/api/', limiter);

// // CORS configuration
// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://10.251.140.151:3000',
//   'http://10.251.140.151:3000' // Added twice to be sure
// ];

// console.log('🌐 Allowed origins:', allowedOrigins);

// // Simple CORS configuration for debugging
// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Handle preflight requests
// app.options('*', cors());

// // Body parsing middleware
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Logging - detailed for debugging
// app.use(morgan('dev'));

// // Database connection
// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-website';
//     console.log('🔌 Connecting to MongoDB...');
    
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 10000,
//     });
    
//     console.log('✅ MongoDB connected successfully');
    
//     // Initialize database with seed data
//     try {
//       const seedDatabase = require('./utils/seedContent');
//       await seedDatabase();
//       console.log('✅ Database seeded successfully');
//     } catch (seedError) {
//       console.warn('⚠️ Database seeding failed:', seedError.message);
//     }
    
//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err.message);
//   }
// };

// connectDB();

// // Add request logging middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/content', contentRoutes);
// app.use('/api/contact', contactRoutes);
// app.use('/api/chatbot', chatbotRoutes);
// app.use('/api/admin', adminRoutes);

// // Debug route to list all routes
// app.get('/api/routes', (req, res) => {
//   const routes = [];
//   app._router.stack.forEach((middleware) => {
//     if (middleware.route) {
//       routes.push({
//         path: middleware.route.path,
//         methods: Object.keys(middleware.route.methods)
//       });
//     } else if (middleware.name === 'router') {
//       middleware.handle.stack.forEach((handler) => {
//         if (handler.route) {
//           routes.push({
//             path: handler.route.path,
//             methods: Object.keys(handler.route.methods)
//           });
//         }
//       });
//     }
//   });
//   res.json(routes);
// });

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
//   res.status(200).json({
//     status: 'healthy',
//     database: dbStatus,
//     timestamp: new Date().toISOString(),
//     uptime: process.uptime(),
//     allowedOrigins: allowedOrigins,
//   });
// });

// // Test content endpoint
// app.get('/api/test-content', async (req, res) => {
//   try {
//     // Check if Content model exists
//     const Content = require('./models/Content');
//     const count = await Content.countDocuments();
    
//     res.json({
//       message: 'Content test endpoint',
//       totalContentItems: count,
//       sampleQuery: 'http://localhost:5000/api/content/page/home?section=hero'
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Test specific content endpoint
// app.get('/api/content-test', async (req, res) => {
//   try {
//     const Content = require('./models/Content');
//     const content = await Content.find({ page: 'home', section: 'hero' });
    
//     res.json({
//       message: 'Direct content test',
//       items: content.length,
//       data: content
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   console.error('Stack:', err.stack);
  
//   // Handle CORS errors
//   if (err.message.includes('CORS')) {
//     return res.status(403).json({ 
//       error: 'CORS Error',
//       message: err.message,
//       allowedOrigins: allowedOrigins
//     });
//   }
  
//   res.status(err.status || 500).json({
//     error: {
//       message: err.message || 'Internal Server Error',
//       ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
//     },
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   console.log(`404 Not Found: ${req.method} ${req.url}`);
//   res.status(404).json({ 
//     error: 'Route not found',
//     requestedUrl: req.url,
//     method: req.method,
//     availableRoutes: ['/api/health', '/api/test-content', '/api/content-test', '/api/routes']
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
//   console.log(`🏭 Environment: ${process.env.NODE_ENV}`);
//   console.log(`📡 Test URLs:`);
//   console.log(`   Health: http://localhost:${PORT}/api/health`);
//   console.log(`   Routes: http://localhost:${PORT}/api/routes`);
//   console.log(`   Content Test: http://localhost:${PORT}/api/content-test`);
// });


const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for now
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Increased limit
});
app.use('/api/', limiter);

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://10.251.140.151:3000'
];

console.log('🌐 Allowed origins:', allowedOrigins);

// Simple CORS configuration
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle preflight requests
app.options('*', cors());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(morgan('dev'));

// Mock data for content
const mockContent = {
  hero: {
    hero_title: 'Transform Your Business with AI-Powered Solutions',
    hero_subtitle: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
    hero_cta_primary: 'Start Your AI Journey',
    hero_cta_secondary: 'View Case Studies',
    hero_background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  about: {
    about_title: 'Leading the AI Revolution',
    about_description: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate.',
    about_stats: [
      { label: 'Projects Delivered', value: '150', suffix: '+' },
      { label: 'AI Models Deployed', value: '500', suffix: '+' },
      { label: 'Client Satisfaction', value: '98', suffix: '%' },
      { label: 'Team Members', value: '50', suffix: '+' },
    ],
  },
  services: {
    services_title: 'Our AI Services',
    services_subtitle: 'Comprehensive AI solutions tailored to your business needs',
    services_list: [
      {
        title: 'AI Strategy & Consulting',
        description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
        icon: 'strategy',
      },
      {
        title: 'Machine Learning Development',
        description: 'Custom ML models built and deployed for your specific use cases.',
        icon: 'ml',
      },
      {
        title: 'Natural Language Processing',
        description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
        icon: 'nlp',
      },
      {
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for automation and insights.',
        icon: 'vision',
      },
      {
        title: 'AI Integration',
        description: 'Seamlessly integrate AI capabilities into your existing systems.',
        icon: 'integration',
      },
      {
        title: 'AI Training & Support',
        description: 'Comprehensive training and ongoing support for your teams.',
        icon: 'support',
      },
    ],
  },
  team: {
    team_title: 'Meet Our Leadership',
    team_subtitle: 'Our team combines decades of experience in AI, technology, and business transformation.',
    team_members: [
      {
        name: 'Dr. Sarah Chen',
        position: 'CEO & Founder',
        bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Michael Rodriguez',
        position: 'CTO',
        bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Jessica Williams',
        position: 'Head of Product',
        bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'David Kim',
        position: 'Lead ML Engineer',
        bio: 'PhD in AI from MIT, published researcher in neural networks',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
    ],
  },
  why_choose_us: {
    why_title: 'Why Choose Our AI Solutions',
    why_points: [
      {
        title: 'Enterprise-Grade Security',
        description: 'Bank-level security protocols and compliance standards for all our solutions.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Designed to grow with your business from day one.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear, predictable pricing with no hidden fees.',
      },
      {
        title: '24/7 Expert Support',
        description: 'Round-the-clock support from our AI specialists.',
      },
      {
        title: 'Proven Track Record',
        description: 'Successfully delivered AI solutions for Fortune 500 companies.',
      },
      {
        title: 'Continuous Innovation',
        description: 'We stay ahead of the curve with cutting-edge AI research.',
      },
    ],
  },
  contact: {
    contact_title: 'Ready to Transform Your Business?',
    contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
  },
};

// Mock authentication data
const mockUsers = [
  {
    id: '1',
    email: 'admin@aiwebsite.com',
    password: 'Admin@123',
    name: 'System Administrator',
    role: 'admin'
  }
];

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ==================== MOCK API ENDPOINTS ====================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: 'mock-mode',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    allowedOrigins: allowedOrigins,
    message: 'Running in mock mode without MongoDB'
  });
});

// Content endpoints
app.get('/api/content/page/:page', (req, res) => {
  const { page } = req.params;
  const { section } = req.query;
  
  console.log(`📁 Getting content for page: ${page}, section: ${section}`);
  
  if (page === 'home') {
    if (section && mockContent[section]) {
      // Return specific section
      return res.json({ [section]: mockContent[section] });
    } else if (!section) {
      // Return all sections
      return res.json(mockContent);
    }
  }
  
  // Return empty for other pages
  res.json({});
});

app.get('/api/content/item/:key', (req, res) => {
  const { key } = req.params;
  res.json({
    key,
    value: `Mock value for ${key}`,
    type: 'text',
    page: 'home',
    section: 'hero'
  });
});

// Auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = mockUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token: 'mock-jwt-token-for-development',
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body;
  
  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
    },
    token: 'mock-jwt-token-for-development',
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  console.log('📧 Contact form submitted:', { name, email, subject });
  
  res.status(201).json({
    message: 'Thank you for your enquiry. We will get back to you soon!',
    contact: {
      id: Date.now().toString(),
      name,
      email,
      subject,
    },
  });
});

// Chatbot endpoint
app.post('/api/chatbot/chat', (req, res) => {
  const { message } = req.body;
  
  const responses = [
    "Hello! I'm your AI assistant. How can I help you today?",
    "I can help you with information about our AI services, pricing, or schedule a consultation.",
    "Our AI solutions help businesses transform their operations with machine learning and automation.",
    "Would you like to learn more about our specific AI services?",
    "I'm here to answer any questions you have about our AI solutions.",
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  res.json({
    response: randomResponse,
    sessionId: 'mock-session-id',
    history: [],
    tokens: 0,
  });
});

// Admin endpoints (protected with mock auth)
const mockAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token && token.includes('mock-jwt-token')) {
    req.user = { id: '1', role: 'admin' };
    return next();
  }
  
  res.status(401).json({ error: 'Unauthorized' });
};

app.get('/api/admin/dashboard/stats', mockAuthMiddleware, (req, res) => {
  res.json({
    statistics: {
      users: { total: 1, active: 1 },
      contacts: { total: 5, recent: 2 },
      chatSessions: 10,
      contentUpdates: 3,
    },
    contactStatus: [
      { _id: 'new', count: 2 },
      { _id: 'read', count: 2 },
      { _id: 'replied', count: 1 },
    ],
    userTrend: [
      { _id: new Date().toISOString().split('T')[0], count: 1 }
    ],
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  console.log(`API 404: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ 
    error: 'API endpoint not found',
    requestedUrl: req.originalUrl,
    availableEndpoints: [
      'GET  /api/health',
      'GET  /api/content/page/:page',
      'POST /api/auth/login',
      'POST /api/auth/register',
      'POST /api/contact',
      'POST /api/chatbot/chat',
      'GET  /api/admin/dashboard/stats (requires auth)',
    ]
  });
});

// Serve frontend build if in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
  console.log(`🏭 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💡 Running in MOCK MODE (no MongoDB required)`);
  console.log(`📡 Test URLs:`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Content: http://localhost:${PORT}/api/content/page/home?section=hero`);
  console.log(`   Login: POST http://localhost:${PORT}/api/auth/login`);
  console.log(`\n🔑 Admin credentials:`);
  console.log(`   Email: admin@aiwebsite.com`);
  console.log(`   Password: Admin@123`);
});