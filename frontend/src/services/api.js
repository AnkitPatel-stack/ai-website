// import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// const API_BASE_URL = 'https://ai-website-q79r.onrender.com/api';

// // Content API
// export const contentApi = {
//   // Get page content
//   getPageContent: async (page, section = null) => {
//     const params = section ? { section } : {};
//     const response = await axios.get(`${API_BASE_URL}/content/page/${page}`, { params });
//     return response.data;
//   },

//   // Get single content item
//   getContentItem: async (key) => {
//     const response = await axios.get(`${API_BASE_URL}/content/item/${key}`);
//     return response.data;
//   },

//   // Update content item (admin only)
//   updateContentItem: async (key, data) => {
//     const response = await axios.put(`${API_BASE_URL}/content/${key}`, data);
//     return response.data;
//   },

//   // Create content item (admin only)
//   createContentItem: async (data) => {
//     const response = await axios.post(`${API_BASE_URL}/content`, data);
//     return response.data;
//   },

//   // Upload image (admin only)
//   uploadImage: async (file) => {
//     const formData = new FormData();
//     formData.append('image', file);
//     const response = await axios.post(`${API_BASE_URL}/content/upload`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   },
// };

// // Contact API
// export const contactApi = {
//   // Submit contact form
//   submitContact: async (data) => {
//     const response = await axios.post(`${API_BASE_URL}/contact`, data);
//     return response.data;
//   },

//   // Get all contacts (admin only)
//   getContacts: async (params = {}) => {
//     const response = await axios.get(`${API_BASE_URL}/contact`, { params });
//     return response.data;
//   },

//   // Update contact (admin only)
//   updateContact: async (id, data) => {
//     const response = await axios.put(`${API_BASE_URL}/contact/${id}`, data);
//     return response.data;
//   },
// };

// // Chatbot API
// export const chatbotApi = {
//   // Send message to chatbot
//   sendMessage: async (message, sessionId = null, history = []) => {
//     const response = await axios.post(`${API_BASE_URL}/chatbot/chat`, {
//       message,
//       sessionId,
//       history,
//     });
//     return response.data;
//   },

//   // Get chat history
//   getChatHistory: async (sessionId) => {
//     const response = await axios.get(`${API_BASE_URL}/chatbot/history/${sessionId}`);
//     return response.data;
//   },
// };

// // Admin API
// export const adminApi = {
//   // Get dashboard statistics
//   getDashboardStats: async () => {
//     const response = await axios.get(`${API_BASE_URL}/admin/dashboard/stats`);
//     return response.data;
//   },

//   // Get all users
//   getUsers: async (params = {}) => {
//     const response = await axios.get(`${API_BASE_URL}/admin/users`, { params });
//     return response.data;
//   },

//   // Update user
//   updateUser: async (id, data) => {
//     const response = await axios.put(`${API_BASE_URL}/admin/users/${id}`, data);
//     return response.data;
//   },

//   // Get content audit
//   getContentAudit: async (params = {}) => {
//     const response = await axios.get(`${API_BASE_URL}/admin/content/audit`, { params });
//     return response.data;
//   },
// };


import axios from 'axios';

// Determine the API base URL based on environment
const getApiBaseUrl = () => {
  // Check if we're in production (running on Render or Vercel)
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL || 'https://ai-website-q79r.onrender.com/api';
  }
  // Development - use environment variable or default to localhost
  return process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
};

const API_BASE_URL = getApiBaseUrl();
console.log('🌐 API Base URL:', API_BASE_URL);

// Configure axios defaults
axios.defaults.baseURL = API_BASE_URL.replace('/api', '');
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Add request interceptor for debugging
axios.interceptors.request.use(
  (config) => {
    console.log(`📤 ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axios.interceptors.response.use(
  (response) => {
    console.log(`📥 Response ${response.status}: ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.message,
    });
    
    // Handle specific errors
    if (error.response?.status === 401) {
      console.log('🔐 Unauthorized - redirecting to login');
      // You could redirect to login here if needed
    }
    
    if (error.response?.status === 404) {
      console.log('🔍 Endpoint not found:', error.config?.url);
    }
    
    return Promise.reject(error);
  }
);

// Content API
export const contentApi = {
  // Get page content
  getPageContent: async (page, section = null) => {
    try {
      const params = section ? { section } : {};
      console.log(`📁 Fetching content: page=${page}, section=${section}`);
      const response = await axios.get(`/api/content/page/${page}`, { params });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get page content:', error);
      throw error;
    }
  },

  // Get single content item
  getContentItem: async (key) => {
    try {
      console.log(`📁 Fetching content item: ${key}`);
      const response = await axios.get(`/api/content/item/${key}`);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get content item:', error);
      throw error;
    }
  },

  // Update content item (admin only)
  updateContentItem: async (key, data) => {
    try {
      console.log(`✏️ Updating content item: ${key}`, data);
      const response = await axios.put(`/api/content/${key}`, data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to update content item:', error);
      throw error;
    }
  },

  // Create content item (admin only)
  createContentItem: async (data) => {
    try {
      console.log('🆕 Creating content item:', data);
      const response = await axios.post('/api/content', data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to create content item:', error);
      throw error;
    }
  },

  // Upload image (admin only)
  uploadImage: async (file) => {
    try {
      console.log('📤 Uploading image:', file.name);
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post('/api/content/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to upload image:', error);
      throw error;
    }
  },
};

// Contact API
export const contactApi = {
  // Submit contact form
  submitContact: async (data) => {
    try {
      console.log('📧 Submitting contact form:', { ...data, message: data.message?.substring(0, 50) + '...' });
      const response = await axios.post('/api/contact', data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to submit contact form:', error);
      throw error;
    }
  },

  // Get all contacts (admin only)
  getContacts: async (params = {}) => {
    try {
      console.log('📋 Fetching contacts with params:', params);
      const response = await axios.get('/api/contact', { params });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get contacts:', error);
      throw error;
    }
  },

  // Update contact (admin only)
  updateContact: async (id, data) => {
    try {
      console.log(`✏️ Updating contact ${id}:`, data);
      const response = await axios.put(`/api/contact/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to update contact:', error);
      throw error;
    }
  },
};

// Chatbot API
export const chatbotApi = {
  // Send message to chatbot
  sendMessage: async (message, sessionId = null, history = []) => {
    try {
      console.log('🤖 Sending chatbot message:', {
        messagePreview: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
        sessionId,
        historyLength: history.length,
      });
      const response = await axios.post('/api/chatbot/chat', {
        message,
        sessionId,
        history,
      });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to send chatbot message:', error);
      throw error;
    }
  },

  // Get chat history
  getChatHistory: async (sessionId) => {
    try {
      console.log(`📜 Getting chat history for session: ${sessionId}`);
      const response = await axios.get(`/api/chatbot/history/${sessionId}`);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get chat history:', error);
      throw error;
    }
  },
};

// Admin API
export const adminApi = {
  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      console.log('📊 Fetching dashboard statistics');
      const response = await axios.get('/api/admin/dashboard/stats');
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get dashboard stats:', error);
      throw error;
    }
  },

  // Get all users
  getUsers: async (params = {}) => {
    try {
      console.log('👥 Fetching users with params:', params);
      const response = await axios.get('/api/admin/users', { params });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get users:', error);
      throw error;
    }
  },

  // Update user
  updateUser: async (id, data) => {
    try {
      console.log(`✏️ Updating user ${id}:`, data);
      const response = await axios.put(`/api/admin/users/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to update user:', error);
      throw error;
    }
  },

  // Get content audit
  getContentAudit: async (params = {}) => {
    try {
      console.log('📝 Fetching content audit with params:', params);
      const response = await axios.get('/api/admin/content/audit', { params });
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get content audit:', error);
      throw error;
    }
  },
};

// Health check
export const healthCheck = async () => {
  try {
    console.log('🩺 Performing health check');
    const response = await axios.get('/api/health');
    console.log('✅ Health check successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Health check failed:', error);
    throw error;
  }
};

// Export the API base URL for debugging
export { API_BASE_URL };