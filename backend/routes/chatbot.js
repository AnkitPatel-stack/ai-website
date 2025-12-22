const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');
const authMiddleware = require('../middlewares/auth');

// Public routes
router.post('/chat', chatbotController.generateResponse);
router.get('/history/:sessionId', chatbotController.getChatHistory);

// Protected routes (admin only)
router.get('/sessions', authMiddleware(['admin']), chatbotController.getAllChatSessions);

module.exports = router;