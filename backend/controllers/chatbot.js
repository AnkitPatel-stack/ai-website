const axios = require('axios');
const ChatHistory = require('../models/ChatHistory');
const { v4: uuidv4 } = require('uuid');

// Generate AI response using GROQ
exports.generateResponse = async (req, res) => {
  try {
    const { message, sessionId, history = [] } = req.body;

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Generate session ID if not provided
    const currentSessionId = sessionId || uuidv4();

    // Prepare conversation history
    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant for an AI solutions company. 
        Be professional, helpful, and knowledgeable about AI, machine learning, 
        and our services. Keep responses concise and focused. 
        If asked about pricing or specific implementation details, 
        suggest scheduling a consultation. 
        Company services: AI Strategy, ML Development, NLP, Computer Vision, AI Integration.
        Current year: ${new Date().getFullYear()}.`,
      },
      ...history.slice(-6), // Keep last 6 messages for context
      { role: 'user', content: message.trim() },
    ];

    // Call GROQ API
    const response = await axios.post(
      `${process.env.GROQ_BASE_URL}/chat/completions`,
      {
        model: process.env.GROQ_MODEL,
        messages,
        max_tokens: 500,
        temperature: 0.7,
        stream: false,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    const totalTokens = response.data.usage.total_tokens;

    // Save to chat history
    const chatHistory = await ChatHistory.findOneAndUpdate(
      { sessionId: currentSessionId },
      {
        $push: {
          messages: [
            { role: 'user', content: message, timestamp: new Date() },
            { role: 'assistant', content: aiResponse, timestamp: new Date(), tokens: totalTokens },
          ],
        },
        $inc: { totalTokens },
        $setOnInsert: {
          sessionId: currentSessionId,
          userId: req.user?._id,
          model: process.env.GROQ_MODEL,
          metadata: {
            ipAddress: req.ip,
            userAgent: req.headers['user-agent'],
            referrer: req.headers.referer,
          },
        },
      },
      { upsert: true, new: true }
    );

    res.json({
      response: aiResponse,
      sessionId: currentSessionId,
      history: chatHistory.messages,
      tokens: totalTokens,
    });
  } catch (error) {
    console.error('Chatbot error:', error.response?.data || error.message);

    // Fallback response if API fails
    const fallbackResponses = [
      "I apologize, but I'm having trouble connecting to our AI service. Please try again in a moment.",
      "I'm currently experiencing technical difficulties. Please try your question again shortly.",
      "Our AI service is temporarily unavailable. Please contact our team directly for immediate assistance.",
    ];

    res.status(200).json({
      response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      sessionId: req.body.sessionId || uuidv4(),
      history: [],
      tokens: 0,
    });
  }
};

// Get chat history for a session
exports.getChatHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const chatHistory = await ChatHistory.findOne({ sessionId }).sort({ 'messages.timestamp': 1 });

    if (!chatHistory) {
      return res.status(404).json({ error: 'Chat history not found' });
    }

    res.json(chatHistory);
  } catch (error) {
    console.error('Get chat history error:', error);
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
};

// Get all chat sessions (admin only)
exports.getAllChatSessions = async (req, res) => {
  try {
    const { startDate, endDate, userId } = req.query;

    const query = {};
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }
    if (userId) query.userId = userId;

    const sessions = await ChatHistory.find(query)
      .sort({ createdAt: -1 })
      .limit(100)
      .populate('userId', 'name email');

    res.json(sessions);
  } catch (error) {
    console.error('Get all sessions error:', error);
    res.status(500).json({ error: 'Failed to fetch chat sessions' });
  }
};