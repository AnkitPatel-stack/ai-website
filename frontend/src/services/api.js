import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Content API
export const contentApi = {
  // Get page content
  getPageContent: async (page, section = null) => {
    const params = section ? { section } : {};
    const response = await axios.get(`${API_BASE_URL}/content/page/${page}`, { params });
    return response.data;
  },

  // Get single content item
  getContentItem: async (key) => {
    const response = await axios.get(`${API_BASE_URL}/content/item/${key}`);
    return response.data;
  },

  // Update content item (admin only)
  updateContentItem: async (key, data) => {
    const response = await axios.put(`${API_BASE_URL}/content/${key}`, data);
    return response.data;
  },

  // Create content item (admin only)
  createContentItem: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/content`, data);
    return response.data;
  },

  // Upload image (admin only)
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(`${API_BASE_URL}/content/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

// Contact API
export const contactApi = {
  // Submit contact form
  submitContact: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/contact`, data);
    return response.data;
  },

  // Get all contacts (admin only)
  getContacts: async (params = {}) => {
    const response = await axios.get(`${API_BASE_URL}/contact`, { params });
    return response.data;
  },

  // Update contact (admin only)
  updateContact: async (id, data) => {
    const response = await axios.put(`${API_BASE_URL}/contact/${id}`, data);
    return response.data;
  },
};

// Chatbot API
export const chatbotApi = {
  // Send message to chatbot
  sendMessage: async (message, sessionId = null, history = []) => {
    const response = await axios.post(`${API_BASE_URL}/chatbot/chat`, {
      message,
      sessionId,
      history,
    });
    return response.data;
  },

  // Get chat history
  getChatHistory: async (sessionId) => {
    const response = await axios.get(`${API_BASE_URL}/chatbot/history/${sessionId}`);
    return response.data;
  },
};

// Admin API
export const adminApi = {
  // Get dashboard statistics
  getDashboardStats: async () => {
    const response = await axios.get(`${API_BASE_URL}/admin/dashboard/stats`);
    return response.data;
  },

  // Get all users
  getUsers: async (params = {}) => {
    const response = await axios.get(`${API_BASE_URL}/admin/users`, { params });
    return response.data;
  },

  // Update user
  updateUser: async (id, data) => {
    const response = await axios.put(`${API_BASE_URL}/admin/users/${id}`, data);
    return response.data;
  },

  // Get content audit
  getContentAudit: async (params = {}) => {
    const response = await axios.get(`${API_BASE_URL}/admin/content/audit`, { params });
    return response.data;
  },
};