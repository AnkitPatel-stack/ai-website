import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  CircularProgress,
  Fade,
  Slide,
  Collapse,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { chatbotApi } from '../services/api';

const Chatbot = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage, timestamp: new Date() },
    ]);
    setLoading(true);

    try {
      const response = await chatbotApi.sendMessage(
        userMessage,
        sessionId,
        messages.slice(1) // Exclude initial greeting
      );

      setSessionId(response.sessionId);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: response.response, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I apologize, but I'm having trouble processing your request. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{
              bgcolor: 'primary.main',
              color: 'background.default',
              width: 60,
              height: 60,
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <SmartToyIcon />
          </IconButton>
        </motion.div>
      </Box>
    );
  }

  return (
    <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
      <Paper
        elevation={24}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: { xs: '90vw', sm: 400 },
          maxWidth: 400,
          height: isMinimized ? 60 : 500,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            bgcolor: 'primary.main',
            color: 'background.default',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SmartToyIcon />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              AI Assistant
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => setIsMinimized(!isMinimized)}
              sx={{ color: 'background.default' }}
            >
              {isMinimized ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setIsOpen(false);
                onClose?.();
              }}
              sx={{ color: 'background.default' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Collapse in={!isMinimized}>
          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor:
                      message.role === 'user' ? 'secondary.main' : 'primary.main',
                  }}
                >
                  {message.role === 'user' ? <PersonIcon /> : <SmartToyIcon />}
                </Avatar>
                <Paper
                  sx={{
                    maxWidth: '70%',
                    p: 1.5,
                    bgcolor:
                      message.role === 'user'
                        ? 'primary.dark'
                        : 'background.default',
                    color:
                      message.role === 'user'
                        ? 'background.default'
                        : 'text.primary',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2">{message.content}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 0.5,
                      opacity: 0.7,
                      textAlign:
                        message.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Typography>
                </Paper>
              </Box>
            ))}
            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                  }}
                >
                  <SmartToyIcon />
                </Avatar>
                <Paper
                  sx={{
                    p: 1.5,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <CircularProgress size={20} />
                </Paper>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                multiline
                maxRows={3}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={loading}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.default',
                  },
                }}
              />
              <IconButton
                onClick={handleSend}
                disabled={!input.trim() || loading}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'background.default',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '&:disabled': {
                    bgcolor: 'action.disabled',
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mt: 1, textAlign: 'center' }}
            >
              Press Enter to send, Shift+Enter for new line
            </Typography>
          </Box>
        </Collapse>
      </Paper>
    </Slide>
  );
};

export default Chatbot;