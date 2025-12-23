// import React, { useState, useRef, useEffect } from 'react';
// import {
//   Box,
//   Paper,
//   TextField,
//   IconButton,
//   Typography,
//   Avatar,
//   CircularProgress,
//   Fade,
//   Slide,
//   Collapse,
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import PersonIcon from '@mui/icons-material/Person';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { motion } from 'framer-motion';
// import { chatbotApi } from '../services/api';

// const Chatbot = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content: "Hello! I'm your AI assistant. How can I help you today?",
//       timestamp: new Date(),
//     },
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [sessionId, setSessionId] = useState(null);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();
//     setInput('');
//     setMessages((prev) => [
//       ...prev,
//       { role: 'user', content: userMessage, timestamp: new Date() },
//     ]);
//     setLoading(true);

//     try {
//       const response = await chatbotApi.sendMessage(
//         userMessage,
//         sessionId,
//         messages.slice(1) // Exclude initial greeting
//       );

//       setSessionId(response.sessionId);
//       setMessages((prev) => [
//         ...prev,
//         { role: 'assistant', content: response.response, timestamp: new Date() },
//       ]);
//     } catch (error) {
//       console.error('Chatbot error:', error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: 'assistant',
//           content: "I apologize, but I'm having trouble processing your request. Please try again.",
//           timestamp: new Date(),
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   if (!isOpen) {
//     return (
//       <Box
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//         }}
//       >
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <IconButton
//             onClick={() => setIsOpen(true)}
//             sx={{
//               bgcolor: '#00FF88',
//               color: 'background.default',
//               width: 60,
//               height: 60,
//               '&:hover': {
//                 bgcolor: 'primary.dark',
//               },
//             }}
//           >
//             <SmartToyIcon />
//           </IconButton>
//         </motion.div>
//       </Box>
//     );
//   }

//   return (
//     <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
//       <Paper
//         elevation={24}
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           width: { xs: '90vw', sm: 400 },
//           maxWidth: 400,
//           height: isMinimized ? 60 : 500,
//           display: 'flex',
//           flexDirection: 'column',
//           zIndex: 1000,
//           bgcolor: '#121218',
//           border: '1px solid',
//           borderColor: 'divider',
//           borderRadius: 2,
//           overflow: 'hidden',
//         }}
//       >
//         {/* Header */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             p: 2,
//             bgcolor: '#00FF88',
//             color: 'background.default',
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <SmartToyIcon />
//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               AI Assistant
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', gap: 0.5 }}>
//             <IconButton
//               size="small"
//               onClick={() => setIsMinimized(!isMinimized)}
//               sx={{ color: 'background.default' }}
//             >
//               {isMinimized ? <ExpandMoreIcon /> : <ExpandLessIcon />}
//             </IconButton>
//             <IconButton
//               size="small"
//               onClick={() => {
//                 setIsOpen(false);
//                 onClose?.();
//               }}
//               sx={{ color: 'background.default' }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//         </Box>

//         <Collapse in={!isMinimized}>
//           {/* Messages */}
//           <Box
//             sx={{
//               flex: 1,
//               overflow: 'auto',
//               p: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//             }}
//           >
//             {messages.map((message, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
//                   gap: 1,
//                 }}
//               >
//                 <Avatar
//                   sx={{
//                     width: 32,
//                     height: 32,
//                     bgcolor:
//                       message.role === 'user' ? 'secondary.main' : '#00FF88',
//                   }}
//                 >
//                   {message.role === 'user' ? <PersonIcon /> : <SmartToyIcon />}
//                 </Avatar>
//                 <Paper
//                   sx={{
//                     maxWidth: '70%',
//                     p: 1.5,
//                     bgcolor:
//                       message.role === 'user'
//                         ? 'primary.dark'
//                         : 'background.default',
//                     color:
//                       message.role === 'user'
//                         ? 'background.default'
//                         : 'text.primary',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                   }}
//                 >
//                   <Typography variant="body2">{message.content}</Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       display: 'block',
//                       mt: 0.5,
//                       opacity: 0.7,
//                       textAlign:
//                         message.role === 'user' ? 'right' : 'left',
//                     }}
//                   >
//                     {message.timestamp.toLocaleTimeString([], {
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </Typography>
//                 </Paper>
//               </Box>
//             ))}
//             {loading && (
//               <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//                 <Avatar
//                   sx={{
//                     width: 32,
//                     height: 32,
//                     bgcolor: '#00FF88',
//                   }}
//                 >
//                   <SmartToyIcon />
//                 </Avatar>
//                 <Paper
//                   sx={{
//                     p: 1.5,
//                     bgcolor: 'background.default',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                   }}
//                 >
//                   <CircularProgress size={20} />
//                 </Paper>
//               </Box>
//             )}
//             <div ref={messagesEndRef} />
//           </Box>

//           {/* Input */}
//           <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
//             <Box sx={{ display: 'flex', gap: 1 }}>
//               <TextField
//                 fullWidth
//                 multiline
//                 maxRows={3}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 disabled={loading}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     bgcolor: 'background.default',
//                   },
//                 }}
//               />
//               <IconButton
//                 onClick={handleSend}
//                 disabled={!input.trim() || loading}
//                 sx={{
//                   bgcolor: '#00FF88',
//                   color: 'background.default',
//                   '&:hover': {
//                     bgcolor: 'primary.dark',
//                   },
//                   '&:disabled': {
//                     bgcolor: 'action.disabled',
//                   },
//                 }}
//               >
//                 <SendIcon />
//               </IconButton>
//             </Box>
//             <Typography
//               variant="caption"
//               color="text.secondary"
//               sx={{ display: 'block', mt: 1, textAlign: 'center' }}
//             >
//               Press Enter to send, Shift+Enter for new line
//             </Typography>
//           </Box>
//         </Collapse>
//       </Paper>
//     </Slide>
//   );
// };

// export default Chatbot;


// import React, { useState } from 'react';
// import { Fab, Dialog, DialogContent, Box, Avatar, TextField, IconButton, Typography } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import SendIcon from '@mui/icons-material/Send';
// import { motion } from 'framer-motion';

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState('');

//   return (
//     <>
//       {/* Floating Action Button - Centered at Bottom */}
//       <motion.div
//         style={{
//           position: 'fixed',
//           bottom: 30,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 1000,
//         }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Fab
//           color="primary"
//           onClick={() => setOpen(true)}
//           sx={{
//             bgcolor: '#00FF88',
//             width: 60,
//             height: 60,
//           }}
//         >
//           <SmartToyIcon />
//         </Fab>
//       </motion.div>

//       {/* Centered Chat Dialog */}
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           sx: {
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             height: '70vh',
//             bgcolor: '#121218',
//             border: '1px solid',
//             borderColor: '#00FF88',
//           },
//         }}
//       >
//         {/* Chat Header with Avatar */}
//         <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
//           <Avatar sx={{ bgcolor: '#00FF88', mr: 2 }}>
//             <SmartToyIcon />
//           </Avatar>
//           <Box>
//             <Typography variant="h6">AI Assistant</Typography>
//             <Typography variant="caption" color="text.secondary">Ask me about our services</Typography>
//           </Box>
//           <IconButton onClick={() => setOpen(false)} sx={{ ml: 'auto' }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Chat Messages Area */}
//         <DialogContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//           <Box sx={{ flexGrow: 1, mb: 2 }}>
//             {/* Messages will be mapped here */}
//             <Typography>Hello! How can I help you today?</Typography>
//           </Box>

//           {/* Message Input */}
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <TextField
//               fullWidth
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               size="small"
//             />
//             <IconButton color="primary">
//               <SendIcon />
//             </IconButton>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Chatbot;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Fab,
//   Dialog,
//   DialogContent,
//   Box,
//   Avatar,
//   TextField,
//   IconButton,
//   Typography,
//   Paper,
//   CircularProgress,
//   Slide,
//   alpha,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import SendIcon from '@mui/icons-material/Send';
// import MicIcon from '@mui/icons-material/Mic';
// import { motion, AnimatePresence } from 'framer-motion';
// import { chatbotApi } from '../services/api';

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! I'm your AI assistant. I can help you learn more about our services, team, or answer any questions you have about AI solutions.",
//       sender: 'bot',
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [sessionId] = useState(`session_${Date.now()}`);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const userMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await chatbotApi.sendMessage(inputMessage, sessionId);

//       setTimeout(() => {
//         const botMessage = {
//           id: messages.length + 2,
//           text: response.response,
//           sender: 'bot',
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botMessage]);
//         setIsTyping(false);
//       }, 1000);
//     } catch (error) {
//       const errorMessage = {
//         id: messages.length + 2,
//         text: "I'm having trouble connecting right now. Please try again in a moment.",
//         sender: 'bot',
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//       setIsTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const quickReplies = [
//     "Tell me about your services",
//     "Who's on your team?",
//     "How can AI help my business?",
//     "Contact information",
//   ];

//   return (
//     <>
//       {/* Floating Chatbot Button - Centered at Bottom */}
//       <motion.div
//         initial={{ scale: 0, y: 100 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ type: 'spring', damping: 15 }}
//         style={{
//           position: 'fixed',
//           bottom: 32,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 999,
//         }}
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Fab
//           onClick={() => setOpen(true)}
//           sx={{
//             width: 64,
//             height: 64,
//             background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
//             boxShadow: '0 10px 30px rgba(0, 255, 136, 0.4)',
//             '&:hover': {
//               background: 'linear-gradient(135deg, #00CC6D 0%, #6E1FB3 100%)',
//               boxShadow: '0 15px 40px rgba(0, 255, 136, 0.6)',
//             },
//           }}
//         >
//           <SmartToyIcon sx={{ fontSize: 32 }} />
//         </Fab>
//       </motion.div>

//       {/* Chat Dialog */}
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           sx: {
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             height: '75vh',
//             maxHeight: 700,
//             width: '90vw',
//             maxWidth: 500,
//             borderRadius: 4,
//             bgcolor: '#121218',
//             border: '2px solid',
//             borderColor: '#00FF88',
//             boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
//             overflow: 'hidden',
//           },
//         }}
//         TransitionComponent={Slide}
//         TransitionProps={{ direction: 'up' }}
//       >
//         {/* Chat Header */}
//         <Box
//           sx={{
//             p: 3,
//             bgcolor: '#121218',
//             borderBottom: '1px solid',
//             borderColor: 'divider',
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <motion.div
//             animate={{ rotate: [0, 10, -10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <Avatar
//               sx={{
//                 width: 48,
//                 height: 48,
//                 bgcolor: 'transparent',
//                 border: '2px solid',
//                 borderColor: '#00FF88',
//               }}
//             >
//               <SmartToyIcon sx={{ color: '#00FF88', fontSize: 32 }} />
//             </Avatar>
//           </motion.div>

//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="h6" fontWeight={700}>
//               AI Assistant
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               {isTyping ? 'Typing...' : 'Online • Ready to help'}
//             </Typography>
//           </Box>

//           <IconButton onClick={() => setOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Messages Container */}
//         <DialogContent
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//             overflowY: 'auto',
//             '&::-webkit-scrollbar': {
//               width: '6px',
//             },
//             '&::-webkit-scrollbar-track': {
//               background: alpha('#000', 0.1),
//             },
//             '&::-webkit-scrollbar-thumb': {
//               background: '#00FF88',
//               borderRadius: '3px',
//             },
//           }}
//         >
//           <AnimatePresence>
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                   maxWidth: '80%',
//                 }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2,
//                     bgcolor: message.sender === 'user'
//                       ? '#00FF88'
//                       : alpha('#121218', 0.7),
//                     color: message.sender === 'user' ? 'background.default' : 'text.primary',
//                     border: '1px solid',
//                     borderColor: message.sender === 'user'
//                       ? '#00FF88'
//                       : alpha('#00FF88', 0.3),
//                     borderRadius: message.sender === 'user'
//                       ? '20px 20px 4px 20px'
//                       : '20px 20px 20px 4px',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   <Typography variant="body1">{message.text}</Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       display: 'block',
//                       mt: 1,
//                       opacity: 0.7,
//                       textAlign: 'right',
//                     }}
//                   >
//                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             ))}

//             {isTyping && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{ alignSelf: 'flex-start' }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2,
//                     bgcolor: alpha('#121218', 0.7),
//                     borderRadius: '20px 20px 20px 4px',
//                     border: '1px solid',
//                     borderColor: alpha('#00FF88', 0.3),
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <CircularProgress size={16} color="primary" />
//                     <Typography variant="body2" color="text.secondary">
//                       Thinking...
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           <div ref={messagesEndRef} />
//         </DialogContent>

//         {/* Quick Replies */}
//         <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
//           <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
//             Quick questions:
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//             {quickReplies.map((reply, index) => (
//               <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Paper
//                   component="button"
//                   onClick={() => setInputMessage(reply)}
//                   sx={{
//                     px: 2,
//                     py: 1,
//                     bgcolor: 'rgba(0, 255, 136, 0.1)',
//                     border: '1px solid',
//                     borderColor: alpha('#00FF88', 0.3),
//                     borderRadius: 20,
//                     cursor: 'pointer',
//                     '&:hover': {
//                       bgcolor: alpha('#00FF88', 0.2),
//                     },
//                   }}
//                 >
//                   <Typography variant="caption" color="#00FF88">
//                     {reply}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             ))}
//           </Box>
//         </Box>

//         {/* Input Area */}
//         <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', bgcolor: '#121218' }}>
//           <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
//             <TextField
//               fullWidth
//               multiline
//               maxRows={3}
//               placeholder="Type your message here..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               variant="outlined"
//               size="small"
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 30,
//                   bgcolor: 'rgba(18, 18, 24, 0.5)' ,
//                 },
//               }}
//             />

//             <IconButton
//               onClick={handleSendMessage}
//               disabled={!inputMessage.trim()}
//               sx={{
//                 width: 48,
//                 height: 48,
//                 bgcolor: '#00FF88',
//                 color: 'background.default',
//                 '&:hover': {
//                   bgcolor: 'primary.dark',
//                 },
//                 '&.Mui-disabled': {
//                   bgcolor: alpha('#00FF88', 0.3),
//                 },
//               }}
//             >
//               <SendIcon />
//             </IconButton>

//             <IconButton
//               sx={{
//                 width: 48,
//                 height: 48,
//                 border: '1px solid',
//                 borderColor: 'divider',
//               }}
//             >
//               <MicIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Dialog>
//     </>
//   );
// };

// export default Chatbot;


import React, { useState, useEffect, useRef } from 'react';
import {
  Fab,
  Dialog,
  DialogContent,
  Box,
  Avatar,
  TextField,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
  Slide,
} from '@mui/material'; // Remove alpha import
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import { motion, AnimatePresence } from 'framer-motion';
import { chatbotApi } from '../services/api';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. I can help you learn more about our services, team, or answer any questions you have about AI solutions.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await chatbotApi.sendMessage(inputMessage, sessionId);
      
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: response.response,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about your services",
    "Who's on your team?",
    "How can AI help my business?",
    "Contact information",
  ];

  return (
    <>
      {/* Floating Chatbot Button - Centered at Bottom */}
      <motion.div
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        style={{
          position: 'fixed',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Fab
          onClick={() => setOpen(true)}
          sx={{
            width: 64,
            height: 64,
            background: 'linear-gradient(135deg, #00FF88 0%, #8A2BE2 100%)',
            boxShadow: '0 10px 30px rgba(0, 255, 136, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #00CC6D 0%, #6E1FB3 100%)',
              boxShadow: '0 15px 40px rgba(0, 255, 136, 0.6)',
            },
          }}
        >
          <SmartToyIcon sx={{ fontSize: 32 }} />
        </Fab>
      </motion.div>

      {/* Chat Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '75vh',
            maxHeight: 700,
            width: '90vw',
            maxWidth: 500,
            borderRadius: 4,
            bgcolor: '#121218',
            border: '2px solid',
            borderColor: '#00FF88',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
          },
        }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            p: 3,
            bgcolor: '#121218',
            borderBottom: '1px solid',
            borderColor: '#333333',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Avatar
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'transparent',
                border: '2px solid',
                borderColor: '#00FF88',
              }}
            >
              <SmartToyIcon sx={{ color: '#00FF88', fontSize: 32 }} />
            </Avatar>
          </motion.div>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              AI Assistant
            </Typography>
            <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
              {isTyping ? 'Typing...' : 'Online • Ready to help'}
            </Typography>
          </Box>
          
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Messages Container */}
        <DialogContent
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 0, 0, 0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#00FF88',
              borderRadius: '3px',
            },
          }}
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                }}
              >
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: message.sender === 'user' 
                      ? '#00FF88' 
                      : 'rgba(18, 18, 24, 0.7)',
                    color: message.sender === 'user' ? '#121218' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: message.sender === 'user' 
                      ? '#00FF88' 
                      : 'rgba(0, 255, 136, 0.3)',
                    borderRadius: message.sender === 'user' 
                      ? '20px 20px 4px 20px'
                      : '20px 20px 20px 4px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="body1">{message.text}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 1,
                      opacity: 0.7,
                      textAlign: 'right',
                      color: message.sender === 'user' ? '#121218' : '#A0A0A0',
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ alignSelf: 'flex-start' }}
              >
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    borderRadius: '20px 20px 20px 4px',
                    border: '1px solid',
                    borderColor: 'rgba(0, 255, 136, 0.3)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <CircularProgress size={16} sx={{ color: '#00FF88' }} />
                    <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
                      Thinking...
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </DialogContent>

        {/* Quick Replies */}
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: '#333333' }}>
          <Typography variant="caption" sx={{ mb: 1, display: 'block', color: '#A0A0A0' }}>
            Quick questions:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {quickReplies.map((reply, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Paper
                  component="button"
                  onClick={() => setInputMessage(reply)}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    border: '1px solid',
                    borderColor: 'rgba(0, 255, 136, 0.3)',
                    borderRadius: 20,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(0, 255, 136, 0.2)',
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#00FF88' }}>
                    {reply}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Input Area */}
        <Box sx={{ p: 3, borderTop: '1px solid', borderColor: '#333333', bgcolor: '#121218' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder="Type your message here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 30,
                  bgcolor: 'rgba(26, 26, 26, 0.5)',
                  '& fieldset': {
                    borderColor: '#333333',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00FF88',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00FF88',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: '#FFFFFF',
                },
                '& .MuiInputLabel-root': {
                  color: '#A0A0A0',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#00FF88',
                },
              }}
            />
            
            <IconButton
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#00FF88',
                color: '#121218',
                '&:hover': {
                  bgcolor: '#00CC6D',
                },
                '&.Mui-disabled': {
                  bgcolor: 'rgba(0, 255, 136, 0.3)',
                  color: 'rgba(18, 18, 24, 0.5)',
                },
              }}
            >
              <SendIcon />
            </IconButton>
            
            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid',
                borderColor: '#333333',
                color: '#FFFFFF',
                '&:hover': {
                  borderColor: '#00FF88',
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                },
              }}
            >
              <MicIcon />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Chatbot;