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
// } from '@mui/material'; // Remove alpha import
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
//             borderColor: '#333333',
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
//             <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
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
//               background: 'rgba(0, 0, 0, 0.1)',
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
//                       : 'rgba(18, 18, 24, 0.7)',
//                     color: message.sender === 'user' ? '#121218' : '#FFFFFF',
//                     border: '1px solid',
//                     borderColor: message.sender === 'user' 
//                       ? '#00FF88' 
//                       : 'rgba(0, 255, 136, 0.3)',
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
//                       color: message.sender === 'user' ? '#121218' : '#A0A0A0',
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
//                     bgcolor: 'rgba(18, 18, 24, 0.7)',
//                     borderRadius: '20px 20px 20px 4px',
//                     border: '1px solid',
//                     borderColor: 'rgba(0, 255, 136, 0.3)',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <CircularProgress size={16} sx={{ color: '#00FF88' }} />
//                     <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
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
//         <Box sx={{ p: 2, borderTop: '1px solid', borderColor: '#333333' }}>
//           <Typography variant="caption" sx={{ mb: 1, display: 'block', color: '#A0A0A0' }}>
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
//                     borderColor: 'rgba(0, 255, 136, 0.3)',
//                     borderRadius: 20,
//                     cursor: 'pointer',
//                     '&:hover': {
//                       bgcolor: 'rgba(0, 255, 136, 0.2)',
//                     },
//                   }}
//                 >
//                   <Typography variant="caption" sx={{ color: '#00FF88' }}>
//                     {reply}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             ))}
//           </Box>
//         </Box>

//         {/* Input Area */}
//         <Box sx={{ p: 3, borderTop: '1px solid', borderColor: '#333333', bgcolor: '#121218' }}>
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
//                   bgcolor: 'rgba(26, 26, 26, 0.5)',
//                   '& fieldset': {
//                     borderColor: '#333333',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: '#00FF88',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#00FF88',
//                   },
//                 },
//                 '& .MuiOutlinedInput-input': {
//                   color: '#FFFFFF',
//                 },
//                 '& .MuiInputLabel-root': {
//                   color: '#A0A0A0',
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#00FF88',
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
//                 color: '#121218',
//                 '&:hover': {
//                   bgcolor: '#00CC6D',
//                 },
//                 '&.Mui-disabled': {
//                   bgcolor: 'rgba(0, 255, 136, 0.3)',
//                   color: 'rgba(18, 18, 24, 0.5)',
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
//                 borderColor: '#333333',
//                 color: '#FFFFFF',
//                 '&:hover': {
//                   borderColor: '#00FF88',
//                   bgcolor: 'rgba(0, 255, 136, 0.1)',
//                 },
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
//   Badge,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import SendIcon from '@mui/icons-material/Send';
// import MicIcon from '@mui/icons-material/Mic';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import { motion, AnimatePresence } from 'framer-motion';
// import { chatbotApi } from '../services/api';

// // Professional AI Avatar Component
// const AIAvatar = () => (
//   <Box
//     sx={{
//       position: 'relative',
//       width: 48,
//       height: 48,
//       borderRadius: '50%',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
//       border: '2px solid rgba(255, 255, 255, 0.1)',
//       overflow: 'hidden',
//     }}
//   >
//     {/* Neural Network Dots Animation */}
//     <Box
//       sx={{
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         background: 'radial-gradient(circle, transparent 30%, rgba(255,255,255,0.1) 70%)',
//         animation: 'pulse 2s infinite',
//       }}
//     />
    
//     {/* Circuit Pattern */}
//     <Box
//       sx={{
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         background: `
//           linear-gradient(90deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%) 0 0 / 10px 10px,
//           linear-gradient(0deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%) 0 0 / 10px 10px
//         `,
//         opacity: 0.3,
//       }}
//     />
    
//     {/* AI Icon */}
//     <SmartToyIcon
//       sx={{
//         color: 'white',
//         fontSize: 24,
//         position: 'relative',
//         zIndex: 2,
//         filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
//       }}
//     />
    
//     {/* Active Pulse Ring */}
//     <Box
//       sx={{
//         position: 'absolute',
//         top: -2,
//         left: -2,
//         right: -2,
//         bottom: -2,
//         borderRadius: '50%',
//         border: '2px solid rgba(102, 126, 234, 0.5)',
//         animation: 'ripple 2s infinite',
//       }}
//     />
    
//     <style jsx>{`
//       @keyframes pulse {
//         0%, 100% { opacity: 0.3; }
//         50% { opacity: 0.6; }
//       }
//       @keyframes ripple {
//         0% { transform: scale(1); opacity: 1; }
//         100% { transform: scale(1.1); opacity: 0; }
//       }
//     `}</style>
//   </Box>
// );

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
//   const [hasUnread, setHasUnread] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Initialize with welcome message
//   useEffect(() => {
//     const welcomeMessage = {
//       id: 1,
//       text: "Hello! I'm Nova AI, your intelligent assistant. I can help you with: \n\n• AI solutions and consulting\n• Machine learning models\n• Data analysis\n• Automation strategies\n• Technical guidance\n\nHow can I assist you today?",
//       sender: 'bot',
//       timestamp: new Date(),
//     };
//     setMessages([welcomeMessage]);
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleOpenChat = () => {
//     setOpen(true);
//     setHasUnread(false);
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       // Real API call - remove demo mode
//       const response = await chatbotApi.sendMessage({
//         message: inputMessage,
//         sessionId: sessionId,
//         context: messages.slice(-5).map(m => ({ role: m.sender, content: m.text }))
//       });

//       // Simulate realistic AI thinking delay
//       const thinkingTime = Math.min(Math.max(response.text.length * 20, 800), 2000);
      
//       setTimeout(() => {
//         const botMessage = {
//           id: Date.now() + 1,
//           text: response.message || response.text || "I've processed your request. How else can I help?",
//           sender: 'bot',
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botMessage]);
//         setIsTyping(false);
//       }, thinkingTime);

//     } catch (error) {
//       console.error('Chat API Error:', error);
      
//       // More informative error message
//       const errorMessage = {
//         id: Date.now() + 1,
//         text: "I encountered an issue processing your request. Please try rephrasing your question or check your connection. If the problem persists, contact our support team.",
//         sender: 'bot',
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//       setIsTyping(false);
//     }
//   };

//   const handleQuickReply = async (reply) => {
//     setInputMessage(reply);
//     // Auto-send after a brief delay
//     setTimeout(() => {
//       handleSendMessage();
//     }, 100);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Realistic quick replies for AI website
//   const quickReplies = [
//     "Explain AI solutions for businesses",
//     "Show me ML use cases",
//     "How to implement automation?",
//     "Data analysis best practices",
//     "AI consulting services",
//     "Technical requirements",
//   ];

//   return (
//     <>
//       {/* Enhanced Floating Chatbot Button */}
//       <motion.div
//         initial={{ scale: 0, y: 100 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ type: 'spring', damping: 20, stiffness: 100 }}
//         style={{
//           position: 'fixed',
//           bottom: 32,
//           right: 32,
//           zIndex: 999,
//         }}
//         whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Badge
//           color="error"
//           variant="dot"
//           invisible={!hasUnread}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <Fab
//             onClick={handleOpenChat}
//             sx={{
//               width: 64,
//               height: 64,
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
//               '&:hover': {
//                 background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
//                 boxShadow: '0 15px 40px rgba(102, 126, 234, 0.6)',
//               },
//             }}
//           >
//             <AIAvatar />
//           </Fab>
//         </Badge>
//       </motion.div>

//       {/* Enhanced Chat Dialog */}
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
//             height: '80vh',
//             maxHeight: 700,
//             width: '95vw',
//             maxWidth: 500,
//             borderRadius: 4,
//             bgcolor: '#0a0a0f',
//             backgroundImage: `
//               radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
//               radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)
//             `,
//             border: '1px solid',
//             borderColor: 'rgba(102, 126, 234, 0.3)',
//             boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
//             overflow: 'hidden',
//             backdropFilter: 'blur(10px)',
//           },
//         }}
//         TransitionComponent={Slide}
//         TransitionProps={{ direction: 'up' }}
//       >
//         {/* Enhanced Chat Header */}
//         <Box
//           sx={{
//             p: 3,
//             background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)',
//             borderBottom: '1px solid',
//             borderColor: 'rgba(102, 126, 234, 0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2,
//             backdropFilter: 'blur(10px)',
//           }}
//         >
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.05, 1]
//             }}
//             transition={{ 
//               duration: 3, 
//               repeat: Infinity,
//               repeatType: "reverse" 
//             }}
//           >
//             <AIAvatar />
//           </motion.div>
          
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="h6" fontWeight={700} sx={{ 
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}>
//               Nova AI Assistant
//             </Typography>
//             <Typography variant="caption" sx={{ 
//               color: '#A0A0FF',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//             }}>
//               <Box 
//                 component="span" 
//                 sx={{ 
//                   width: 6, 
//                   height: 6, 
//                   borderRadius: '50%', 
//                   bgcolor: '#00FF88',
//                   animation: 'pulse 2s infinite',
//                 }} 
//               />
//               {isTyping ? 'Processing your request...' : 'Online • Powered by GPT-4'}
//             </Typography>
//           </Box>
          
//           <IconButton 
//             onClick={() => setOpen(false)}
//             sx={{
//               color: '#A0A0FF',
//               '&:hover': {
//                 bgcolor: 'rgba(102, 126, 234, 0.1)',
//               },
//             }}
//           >
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
//             background: 'radial-gradient(circle at top right, rgba(102,126,234,0.05) 0%, transparent 50%)',
//             '&::-webkit-scrollbar': {
//               width: '6px',
//             },
//             '&::-webkit-scrollbar-track': {
//               background: 'rgba(10, 10, 15, 0.5)',
//               borderRadius: '3px',
//             },
//             '&::-webkit-scrollbar-thumb': {
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '3px',
//             },
//           }}
//         >
//           <AnimatePresence>
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                   maxWidth: '85%',
//                 }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2.5,
//                     background: message.sender === 'user' 
//                       ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
//                       : 'rgba(20, 20, 30, 0.7)',
//                     color: message.sender === 'user' ? '#FFFFFF' : '#E0E0FF',
//                     border: '1px solid',
//                     borderColor: message.sender === 'user' 
//                       ? 'rgba(102, 126, 234, 0.5)' 
//                       : 'rgba(102, 126, 234, 0.2)',
//                     borderRadius: message.sender === 'user' 
//                       ? '20px 20px 4px 20px'
//                       : '20px 20px 20px 4px',
//                     backdropFilter: 'blur(10px)',
//                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//                     whiteSpace: 'pre-line',
//                   }}
//                 >
//                   <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                     {message.text}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       display: 'block',
//                       mt: 1.5,
//                       opacity: 0.7,
//                       textAlign: 'right',
//                       color: message.sender === 'user' ? 'rgba(255,255,255,0.8)' : '#A0A0FF',
//                       fontSize: '0.7rem',
//                     }}
//                   >
//                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             ))}
            
//             {isTyping && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{ alignSelf: 'flex-start' }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2,
//                     background: 'rgba(20, 20, 30, 0.7)',
//                     borderRadius: '20px 20px 20px 4px',
//                     border: '1px solid',
//                     borderColor: 'rgba(102, 126, 234, 0.2)',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//                     <Box sx={{ display: 'flex', gap: 0.5 }}>
//                       {[0, 1, 2].map((i) => (
//                         <motion.div
//                           key={i}
//                           animate={{ y: [0, -4, 0] }}
//                           transition={{
//                             duration: 0.6,
//                             repeat: Infinity,
//                             delay: i * 0.1,
//                           }}
//                         >
//                           <Box
//                             sx={{
//                               width: 6,
//                               height: 6,
//                               borderRadius: '50%',
//                               bgcolor: '#667eea',
//                             }}
//                           />
//                         </motion.div>
//                       ))}
//                     </Box>
//                     <Typography variant="body2" sx={{ color: '#A0A0FF' }}>
//                       Analyzing your query...
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           <div ref={messagesEndRef} />
//         </DialogContent>

//         {/* Quick Replies */}
//         {messages.length <= 3 && (
//           <Box sx={{ 
//             p: 2, 
//             borderTop: '1px solid', 
//             borderColor: 'rgba(102, 126, 234, 0.2)',
//             background: 'rgba(10, 10, 15, 0.8)',
//             backdropFilter: 'blur(10px)',
//           }}>
//             <Typography variant="caption" sx={{ 
//               mb: 1.5, 
//               display: 'block', 
//               color: '#A0A0FF',
//               fontWeight: 500,
//             }}>
//               Quick suggestions:
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//               {quickReplies.map((reply, index) => (
//                 <motion.div 
//                   key={index} 
//                   whileHover={{ scale: 1.05 }} 
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Paper
//                     component="button"
//                     onClick={() => handleQuickReply(reply)}
//                     sx={{
//                       px: 2,
//                       py: 1,
//                       background: 'rgba(102, 126, 234, 0.1)',
//                       border: '1px solid',
//                       borderColor: 'rgba(102, 126, 234, 0.3)',
//                       borderRadius: 20,
//                       cursor: 'pointer',
//                       transition: 'all 0.2s',
//                       '&:hover': {
//                         background: 'rgba(102, 126, 234, 0.2)',
//                         borderColor: 'rgba(102, 126, 234, 0.5)',
//                         transform: 'translateY(-1px)',
//                       },
//                     }}
//                   >
//                     <Typography variant="caption" sx={{ 
//                       color: '#667eea',
//                       fontWeight: 500,
//                       fontSize: '0.75rem',
//                     }}>
//                       {reply}
//                     </Typography>
//                   </Paper>
//                 </motion.div>
//               ))}
//             </Box>
//           </Box>
//         )}

//         {/* Enhanced Input Area */}
//         <Box sx={{ 
//           p: 3, 
//           borderTop: '1px solid', 
//           borderColor: 'rgba(102, 126, 234, 0.2)', 
//           background: 'rgba(10, 10, 15, 0.95)',
//           backdropFilter: 'blur(10px)',
//         }}>
//           <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
//             <TextField
//               fullWidth
//               multiline
//               maxRows={4}
//               placeholder="Ask Nova AI anything about artificial intelligence..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               variant="outlined"
//               size="small"
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 30,
//                   background: 'rgba(20, 20, 30, 0.7)',
//                   border: '1px solid transparent',
//                   '& fieldset': {
//                     borderColor: 'rgba(102, 126, 234, 0.2)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgba(102, 126, 234, 0.4)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#667eea',
//                     borderWidth: '1px',
//                   },
//                 },
//                 '& .MuiOutlinedInput-input': {
//                   color: '#E0E0FF',
//                   fontSize: '0.9rem',
//                   padding: '12px 20px',
//                   '&::placeholder': {
//                     color: 'rgba(160, 160, 255, 0.5)',
//                   },
//                 },
//               }}
//             />
            
//             <IconButton
//               onClick={handleSendMessage}
//               disabled={!inputMessage.trim() || isTyping}
//               sx={{
//                 width: 48,
//                 height: 48,
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 color: '#FFFFFF',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
//                 },
//                 '&.Mui-disabled': {
//                   background: 'rgba(102, 126, 234, 0.2)',
//                   color: 'rgba(255, 255, 255, 0.3)',
//                 },
//                 transition: 'all 0.2s',
//               }}
//             >
//               <SendIcon />
//             </IconButton>
            
//             <IconButton
//               sx={{
//                 width: 48,
//                 height: 48,
//                 border: '1px solid',
//                 borderColor: 'rgba(102, 126, 234, 0.3)',
//                 color: '#A0A0FF',
//                 '&:hover': {
//                   borderColor: '#667eea',
//                   background: 'rgba(102, 126, 234, 0.1)',
//                   transform: 'translateY(-2px)',
//                 },
//                 transition: 'all 0.2s',
//               }}
//               title="Voice input (coming soon)"
//             >
//               <MicIcon />
//             </IconButton>
//           </Box>
          
//           <Typography variant="caption" sx={{ 
//             mt: 1, 
//             display: 'block', 
//             textAlign: 'center', 
//             color: 'rgba(160, 160, 255, 0.5)',
//             fontSize: '0.7rem',
//           }}>
//             Nova AI can help with technical questions, AI solutions, and business automation
//           </Typography>
//         </Box>
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
//   Badge,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import SendIcon from '@mui/icons-material/Send';
// import MicIcon from '@mui/icons-material/Mic';
// import ChatIcon from '@mui/icons-material/Chat';
// import { motion, AnimatePresence } from 'framer-motion';
// import { chatbotApi } from '../services/api';

// // Professional AI Avatar Component
// const AIAvatar = ({ size = 48 }) => (
//   <Box
//     sx={{
//       position: 'relative',
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
//       border: '2px solid rgba(255, 255, 255, 0.1)',
//       overflow: 'hidden',
//     }}
//   >
//     {/* Neural Network Dots Animation */}
//     <Box
//       sx={{
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         background: 'radial-gradient(circle, transparent 30%, rgba(255,255,255,0.1) 70%)',
//         animation: 'pulse 2s infinite',
//       }}
//     />
    
//     {/* Circuit Pattern */}
//     <Box
//       sx={{
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//         background: `
//           linear-gradient(90deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%) 0 0 / 10px 10px,
//           linear-gradient(0deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%) 0 0 / 10px 10px
//         `,
//         opacity: 0.3,
//       }}
//     />
    
//     {/* AI Icon */}
//     <SmartToyIcon
//       sx={{
//         color: 'white',
//         fontSize: size * 0.5,
//         position: 'relative',
//         zIndex: 2,
//         filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
//       }}
//     />
    
//     {/* Active Pulse Ring */}
//     <Box
//       sx={{
//         position: 'absolute',
//         top: -2,
//         left: -2,
//         right: -2,
//         bottom: -2,
//         borderRadius: '50%',
//         border: '2px solid rgba(102, 126, 234, 0.5)',
//         animation: 'ripple 2s infinite',
//       }}
//     />
    
//     <style jsx>{`
//       @keyframes pulse {
//         0%, 100% { opacity: 0.3; }
//         50% { opacity: 0.6; }
//       }
//       @keyframes ripple {
//         0% { transform: scale(1); opacity: 1; }
//         100% { transform: scale(1.1); opacity: 0; }
//       }
//     `}</style>
//   </Box>
// );

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
//   const [hasUnread, setHasUnread] = useState(false);
//   const [buttonPosition, setButtonPosition] = useState('center');
//   const messagesEndRef = useRef(null);

//   // Initialize with welcome message
//   useEffect(() => {
//     const welcomeMessage = {
//       id: 1,
//       text: "Hello! I'm Nova AI, your intelligent assistant. I can help you with: \n\n• AI solutions and consulting\n• Machine learning models\n• Data analysis\n• Automation strategies\n• Technical guidance\n\nHow can I assist you today?",
//       sender: 'bot',
//       timestamp: new Date(),
//     };
//     setMessages([welcomeMessage]);
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleOpenChat = () => {
//     setOpen(true);
//     setHasUnread(false);
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await chatbotApi.sendMessage({
//         message: inputMessage,
//         sessionId: sessionId,
//         context: messages.slice(-5).map(m => ({ role: m.sender, content: m.text }))
//       });

//       const thinkingTime = Math.min(Math.max(response.text.length * 20, 800), 2000);
      
//       setTimeout(() => {
//         const botMessage = {
//           id: Date.now() + 1,
//           text: response.message || response.text || "I've processed your request. How else can I help?",
//           sender: 'bot',
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botMessage]);
//         setIsTyping(false);
//       }, thinkingTime);

//     } catch (error) {
//       console.error('Chat API Error:', error);
      
//       const errorMessage = {
//         id: Date.now() + 1,
//         text: "I encountered an issue processing your request. Please try rephrasing your question or check your connection. If the problem persists, contact our support team.",
//         sender: 'bot',
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//       setIsTyping(false);
//     }
//   };

//   const handleQuickReply = async (reply) => {
//     setInputMessage(reply);
//     setTimeout(() => {
//       handleSendMessage();
//     }, 100);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Realistic quick replies for AI website
//   const quickReplies = [
//     "Explain AI solutions for businesses",
//     "Show me ML use cases",
//     "How to implement automation?",
//     "Data analysis best practices",
//     "AI consulting services",
//     "Technical requirements",
//   ];

//   // Unique positioning options
//   const positions = [
//     { 
//       id: 'floating-center',
//       label: 'Floating Center',
//       style: { 
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 999,
//       }
//     },
//     { 
//       id: 'smart-corner',
//       label: 'Smart Corner',
//       style: { 
//         position: 'fixed',
//         top: '85%',
//         right: '5%',
//         zIndex: 999,
//       }
//     },
//     { 
//       id: 'bottom-middle',
//       label: 'Bottom Middle',
//       style: { 
//         position: 'fixed',
//         bottom: '30px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         zIndex: 999,
//       }
//     },
//     { 
//       id: 'floating-side',
//       label: 'Floating Side',
//       style: { 
//         position: 'fixed',
//         top: '50%',
//         right: '20px',
//         transform: 'translateY(-50%)',
//         zIndex: 999,
//       }
//     }
//   ];

//   // Select a unique position (you can change this)
//   const selectedPosition = positions[0]; // Change index to try different positions

//   return (
//     <>
//       {/* UNIQUE FLOATING CHATBOT BUTTON - NOT ON RIGHT SIDE */}
//       <motion.div
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: 'spring', damping: 20, stiffness: 100 }}
//         style={selectedPosition.style}
//         whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Badge
//           color="error"
//           variant="dot"
//           invisible={!hasUnread}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <motion.div
//             animate={{
//               y: [0, -10, 0],
//               rotate: [0, 5, -5, 0]
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           >
//             <Fab
//               onClick={handleOpenChat}
//               sx={{
//                 width: 70,
//                 height: 70,
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 boxShadow: '0 15px 35px rgba(102, 126, 234, 0.5)',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
//                   boxShadow: '0 20px 45px rgba(102, 126, 234, 0.7)',
//                 },
//               }}
//             >
//               <Box sx={{ position: 'relative' }}>
//                 <AIAvatar size={48} />
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: -5,
//                     right: -5,
//                     background: '#00FF88',
//                     borderRadius: '50%',
//                     width: 20,
//                     height: 20,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
//                   }}
//                 >
//                   <ChatIcon sx={{ fontSize: 12, color: '#121218' }} />
//                 </Box>
//               </Box>
//             </Fab>
//           </motion.div>
//         </Badge>
        
//         {/* Chat Invitation Text (Only shows when not hovering directly on button) */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1 }}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             right: selectedPosition.id === 'floating-side' ? '80px' : 'auto',
//             left: selectedPosition.id === 'floating-side' ? 'auto' : '50%',
//             transform: selectedPosition.id === 'floating-side' 
//               ? 'translateY(-50%)' 
//               : 'translateX(-50%)',
//             width: 'max-content',
//           }}
//         >
//           <Paper
//             sx={{
//               p: 1.5,
//               background: 'rgba(20, 20, 30, 0.9)',
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(102, 126, 234, 0.3)',
//               borderRadius: 2,
//               boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//               display: selectedPosition.id === 'floating-side' ? 'block' : 'none',
//             }}
//           >
//             <Typography variant="caption" sx={{ color: '#A0A0FF', whiteSpace: 'nowrap' }}>
//               Ask me anything! 👋
//             </Typography>
//           </Paper>
//         </motion.div>
//       </motion.div>

//       {/* Enhanced Chat Dialog */}
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
//             height: '80vh',
//             maxHeight: 700,
//             width: '95vw',
//             maxWidth: 500,
//             borderRadius: 4,
//             bgcolor: '#0a0a0f',
//             backgroundImage: `
//               radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
//               radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)
//             `,
//             border: '1px solid',
//             borderColor: 'rgba(102, 126, 234, 0.3)',
//             boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
//             overflow: 'hidden',
//             backdropFilter: 'blur(10px)',
//           },
//         }}
//         TransitionComponent={Slide}
//         TransitionProps={{ direction: 'up' }}
//       >
//         {/* Enhanced Chat Header */}
//         <Box
//           sx={{
//             p: 3,
//             background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)',
//             borderBottom: '1px solid',
//             borderColor: 'rgba(102, 126, 234, 0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2,
//             backdropFilter: 'blur(10px)',
//           }}
//         >
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.05, 1]
//             }}
//             transition={{ 
//               duration: 3, 
//               repeat: Infinity,
//               repeatType: "reverse" 
//             }}
//           >
//             <AIAvatar size={48} />
//           </motion.div>
          
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="h6" fontWeight={700} sx={{ 
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}>
//               Nova AI Assistant
//             </Typography>
//             <Typography variant="caption" sx={{ 
//               color: '#A0A0FF',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//             }}>
//               <Box 
//                 component="span" 
//                 sx={{ 
//                   width: 6, 
//                   height: 6, 
//                   borderRadius: '50%', 
//                   bgcolor: '#00FF88',
//                   animation: 'pulse 2s infinite',
//                 }} 
//               />
//               {isTyping ? 'Processing your request...' : 'Online • Powered by GPT-4'}
//             </Typography>
//           </Box>
          
//           <IconButton 
//             onClick={() => setOpen(false)}
//             sx={{
//               color: '#A0A0FF',
//               '&:hover': {
//                 bgcolor: 'rgba(102, 126, 234, 0.1)',
//               },
//             }}
//           >
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
//             background: 'radial-gradient(circle at top right, rgba(102,126,234,0.05) 0%, transparent 50%)',
//             '&::-webkit-scrollbar': {
//               width: '6px',
//             },
//             '&::-webkit-scrollbar-track': {
//               background: 'rgba(10, 10, 15, 0.5)',
//               borderRadius: '3px',
//             },
//             '&::-webkit-scrollbar-thumb': {
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '3px',
//             },
//           }}
//         >
//           <AnimatePresence>
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
//                   maxWidth: '85%',
//                 }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2.5,
//                     background: message.sender === 'user' 
//                       ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
//                       : 'rgba(20, 20, 30, 0.7)',
//                     color: message.sender === 'user' ? '#FFFFFF' : '#E0E0FF',
//                     border: '1px solid',
//                     borderColor: message.sender === 'user' 
//                       ? 'rgba(102, 126, 234, 0.5)' 
//                       : 'rgba(102, 126, 234, 0.2)',
//                     borderRadius: message.sender === 'user' 
//                       ? '20px 20px 4px 20px'
//                       : '20px 20px 20px 4px',
//                     backdropFilter: 'blur(10px)',
//                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//                     whiteSpace: 'pre-line',
//                   }}
//                 >
//                   <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                     {message.text}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       display: 'block',
//                       mt: 1.5,
//                       opacity: 0.7,
//                       textAlign: 'right',
//                       color: message.sender === 'user' ? 'rgba(255,255,255,0.8)' : '#A0A0FF',
//                       fontSize: '0.7rem',
//                     }}
//                   >
//                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             ))}
            
//             {isTyping && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{ alignSelf: 'flex-start' }}
//               >
//                 <Paper
//                   sx={{
//                     p: 2,
//                     background: 'rgba(20, 20, 30, 0.7)',
//                     borderRadius: '20px 20px 20px 4px',
//                     border: '1px solid',
//                     borderColor: 'rgba(102, 126, 234, 0.2)',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//                     <Box sx={{ display: 'flex', gap: 0.5 }}>
//                       {[0, 1, 2].map((i) => (
//                         <motion.div
//                           key={i}
//                           animate={{ y: [0, -4, 0] }}
//                           transition={{
//                             duration: 0.6,
//                             repeat: Infinity,
//                             delay: i * 0.1,
//                           }}
//                         >
//                           <Box
//                             sx={{
//                               width: 6,
//                               height: 6,
//                               borderRadius: '50%',
//                               bgcolor: '#667eea',
//                             }}
//                           />
//                         </motion.div>
//                       ))}
//                     </Box>
//                     <Typography variant="body2" sx={{ color: '#A0A0FF' }}>
//                       Analyzing your query...
//                     </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           <div ref={messagesEndRef} />
//         </DialogContent>

//         {/* Quick Replies */}
//         {messages.length <= 3 && (
//           <Box sx={{ 
//             p: 2, 
//             borderTop: '1px solid', 
//             borderColor: 'rgba(102, 126, 234, 0.2)',
//             background: 'rgba(10, 10, 15, 0.8)',
//             backdropFilter: 'blur(10px)',
//           }}>
//             <Typography variant="caption" sx={{ 
//               mb: 1.5, 
//               display: 'block', 
//               color: '#A0A0FF',
//               fontWeight: 500,
//             }}>
//               Quick suggestions:
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//               {quickReplies.map((reply, index) => (
//                 <motion.div 
//                   key={index} 
//                   whileHover={{ scale: 1.05 }} 
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Paper
//                     component="button"
//                     onClick={() => handleQuickReply(reply)}
//                     sx={{
//                       px: 2,
//                       py: 1,
//                       background: 'rgba(102, 126, 234, 0.1)',
//                       border: '1px solid',
//                       borderColor: 'rgba(102, 126, 234, 0.3)',
//                       borderRadius: 20,
//                       cursor: 'pointer',
//                       transition: 'all 0.2s',
//                       '&:hover': {
//                         background: 'rgba(102, 126, 234, 0.2)',
//                         borderColor: 'rgba(102, 126, 234, 0.5)',
//                         transform: 'translateY(-1px)',
//                       },
//                     }}
//                   >
//                     <Typography variant="caption" sx={{ 
//                       color: '#667eea',
//                       fontWeight: 500,
//                       fontSize: '0.75rem',
//                     }}>
//                       {reply}
//                     </Typography>
//                   </Paper>
//                 </motion.div>
//               ))}
//             </Box>
//           </Box>
//         )}

//         {/* Enhanced Input Area */}
//         <Box sx={{ 
//           p: 3, 
//           borderTop: '1px solid', 
//           borderColor: 'rgba(102, 126, 234, 0.2)', 
//           background: 'rgba(10, 10, 15, 0.95)',
//           backdropFilter: 'blur(10px)',
//         }}>
//           <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
//             <TextField
//               fullWidth
//               multiline
//               maxRows={4}
//               placeholder="Ask Nova AI anything about artificial intelligence..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               variant="outlined"
//               size="small"
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 30,
//                   background: 'rgba(20, 20, 30, 0.7)',
//                   border: '1px solid transparent',
//                   '& fieldset': {
//                     borderColor: 'rgba(102, 126, 234, 0.2)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgba(102, 126, 234, 0.4)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#667eea',
//                     borderWidth: '1px',
//                   },
//                 },
//                 '& .MuiOutlinedInput-input': {
//                   color: '#E0E0FF',
//                   fontSize: '0.9rem',
//                   padding: '12px 20px',
//                   '&::placeholder': {
//                     color: 'rgba(160, 160, 255, 0.5)',
//                   },
//                 },
//               }}
//             />
            
//             <IconButton
//               onClick={handleSendMessage}
//               disabled={!inputMessage.trim() || isTyping}
//               sx={{
//                 width: 48,
//                 height: 48,
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 color: '#FFFFFF',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
//                 },
//                 '&.Mui-disabled': {
//                   background: 'rgba(102, 126, 234, 0.2)',
//                   color: 'rgba(255, 255, 255, 0.3)',
//                 },
//                 transition: 'all 0.2s',
//               }}
//             >
//               <SendIcon />
//             </IconButton>
            
//             <IconButton
//               sx={{
//                 width: 48,
//                 height: 48,
//                 border: '1px solid',
//                 borderColor: 'rgba(102, 126, 234, 0.3)',
//                 color: '#A0A0FF',
//                 '&:hover': {
//                   borderColor: '#667eea',
//                   background: 'rgba(102, 126, 234, 0.1)',
//                   transform: 'translateY(-2px)',
//                 },
//                 transition: 'all 0.2s',
//               }}
//               title="Voice input (coming soon)"
//             >
//               <MicIcon />
//             </IconButton>
//           </Box>
          
//           <Typography variant="caption" sx={{ 
//             mt: 1, 
//             display: 'block', 
//             textAlign: 'center', 
//             color: 'rgba(160, 160, 255, 0.5)',
//             fontSize: '0.7rem',
//           }}>
//             Nova AI can help with technical questions, AI solutions, and business automation
//           </Typography>
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
  Badge,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import { motion, AnimatePresence } from 'framer-motion';
import { chatbotApi } from '../services/api';

// Custom Avatar with your image
const AIAvatar = ({ size = 'medium' }) => {
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 48, height: 48 },
    large: { width: 60, height: 60 }
  };

  const { width, height } = sizes[size] || sizes.medium;
  const avatarUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fvirtual-assistance-chatbot-avatar-customer-support_1106493-271045.jpg&f=1&nofb=1&ipt=8c9e3b237ab75d4d4e2b9d4e6f057f5ddb20483bb70de5f04fbe68eb66860d5a";

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Outer Glow Ring */}
      <Box
        sx={{
          position: 'absolute',
          top: -4,
          left: -4,
          right: -4,
          bottom: -4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.5,
          animation: 'avatarPulse 2s infinite',
          '@keyframes avatarPulse': {
            '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
            '50%': { opacity: 0.6, transform: 'scale(1.02)' }
          }
        }}
      />
      
      {/* Avatar Image with Border */}
      <Avatar
        src={avatarUrl}
        alt="AI Assistant"
        sx={{
          width: width,
          height: height,
          border: '3px solid white',
          boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
          position: 'relative',
          zIndex: 2,
          animation: 'avatarFloat 3s infinite ease-in-out',
          '@keyframes avatarFloat': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-3px)' }
          }
        }}
      />
      
      {/* Active Status Dot */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 2,
          right: 2,
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#00FF88',
          border: '2px solid white',
          boxShadow: '0 0 10px #00FF88',
          zIndex: 3,
          animation: 'statusBlink 1.5s infinite',
          '@keyframes statusBlink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.7 }
          }
        }}
      />
    </Box>
  );
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      text: "Hello! I'm Nova AI, your intelligent assistant. I can help you with: \n\n• AI solutions and consulting\n• Machine learning models\n• Data analysis\n• Automation strategies\n• Technical guidance\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenChat = () => {
    setOpen(true);
    setHasUnread(false);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Real API call - remove demo mode
      const response = await chatbotApi.sendMessage({
        message: inputMessage,
        sessionId: sessionId,
        context: messages.slice(-5).map(m => ({ role: m.sender, content: m.text }))
      });

      // Simulate realistic AI thinking delay
      const thinkingTime = Math.min(Math.max(response.text.length * 20, 800), 2000);
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: response.message || response.text || "I've processed your request. How else can I help?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, thinkingTime);

    } catch (error) {
      console.error('Chat API Error:', error);
      
      // More informative error message
      const errorMessage = {
        id: Date.now() + 1,
        text: "I encountered an issue processing your request. Please try rephrasing your question or check your connection. If the problem persists, contact our support team.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleQuickReply = async (reply) => {
    setInputMessage(reply);
    // Auto-send after a brief delay
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Realistic quick replies for AI website
  const quickReplies = [
    "Explain AI solutions for businesses",
    "Show me ML use cases",
    "How to implement automation?",
    "Data analysis best practices",
    "AI consulting services",
    "Technical requirements",
  ];

  return (
    <>
      {/* Enhanced Floating Chatbot Button */}
      <motion.div
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999,
        }}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        <Badge
          color="error"
          variant="dot"
          invisible={!hasUnread}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Fab
            onClick={handleOpenChat}
            sx={{
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                boxShadow: '0 15px 40px rgba(102, 126, 234, 0.6)',
              },
            }}
          >
            <AIAvatar size="medium" />
          </Fab>
        </Badge>
      </motion.div>

      {/* Enhanced Chat Dialog */}
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
            height: '80vh',
            maxHeight: 700,
            width: '95vw',
            maxWidth: 500,
            borderRadius: 4,
            bgcolor: '#0a0a0f',
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)
            `,
            border: '1px solid',
            borderColor: 'rgba(102, 126, 234, 0.3)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          },
        }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
      >
        {/* Enhanced Chat Header */}
        <Box
          sx={{
            p: 3,
            background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%)',
            borderBottom: '1px solid',
            borderColor: 'rgba(102, 126, 234, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <AIAvatar size="medium" />
          </motion.div>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={700} sx={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Nova AI Assistant
            </Typography>
            <Typography variant="caption" sx={{ 
              color: '#A0A0FF',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}>
              <Box 
                component="span" 
                sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  bgcolor: '#00FF88',
                  animation: 'pulse 2s infinite',
                }} 
              />
              {isTyping ? 'Processing your request...' : 'Online • Powered by GPT-4'}
            </Typography>
          </Box>
          
          <IconButton 
            onClick={() => setOpen(false)}
            sx={{
              color: '#A0A0FF',
              '&:hover': {
                bgcolor: 'rgba(102, 126, 234, 0.1)',
              },
            }}
          >
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
            background: 'radial-gradient(circle at top right, rgba(102,126,234,0.05) 0%, transparent 50%)',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(10, 10, 15, 0.5)',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '3px',
            },
          }}
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                }}
              >
                <Paper
                  sx={{
                    p: 2.5,
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : 'rgba(20, 20, 30, 0.7)',
                    color: message.sender === 'user' ? '#FFFFFF' : '#E0E0FF',
                    border: '1px solid',
                    borderColor: message.sender === 'user' 
                      ? 'rgba(102, 126, 234, 0.5)' 
                      : 'rgba(102, 126, 234, 0.2)',
                    borderRadius: message.sender === 'user' 
                      ? '20px 20px 4px 20px'
                      : '20px 20px 20px 4px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {message.text}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 1.5,
                      opacity: 0.7,
                      textAlign: 'right',
                      color: message.sender === 'user' ? 'rgba(255,255,255,0.8)' : '#A0A0FF',
                      fontSize: '0.7rem',
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ alignSelf: 'flex-start' }}
              >
                <Paper
                  sx={{
                    p: 2,
                    background: 'rgba(20, 20, 30, 0.7)',
                    borderRadius: '20px 20px 20px 4px',
                    border: '1px solid',
                    borderColor: 'rgba(102, 126, 234, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <AIAvatar size="small" />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: '#667eea',
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                      <Typography variant="body2" sx={{ color: '#A0A0FF' }}>
                        Thinking...
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </DialogContent>

        {/* Quick Replies */}
        {messages.length <= 3 && (
          <Box sx={{ 
            p: 2, 
            borderTop: '1px solid', 
            borderColor: 'rgba(102, 126, 234, 0.2)',
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(10px)',
          }}>
            <Typography variant="caption" sx={{ 
              mb: 1.5, 
              display: 'block', 
              color: '#A0A0FF',
              fontWeight: 500,
            }}>
              Quick suggestions:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {quickReplies.map((reply, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    component="button"
                    onClick={() => handleQuickReply(reply)}
                    sx={{
                      px: 2,
                      py: 1,
                      background: 'rgba(102, 126, 234, 0.1)',
                      border: '1px solid',
                      borderColor: 'rgba(102, 126, 234, 0.3)',
                      borderRadius: 20,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: 'rgba(102, 126, 234, 0.2)',
                        borderColor: 'rgba(102, 126, 234, 0.5)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{ 
                      color: '#667eea',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}>
                      {reply}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Box>
        )}

        {/* Enhanced Input Area */}
        <Box sx={{ 
          p: 3, 
          borderTop: '1px solid', 
          borderColor: 'rgba(102, 126, 234, 0.2)', 
          background: 'rgba(10, 10, 15, 0.95)',
          backdropFilter: 'blur(10px)',
        }}>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Ask Nova AI anything about artificial intelligence..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 30,
                  background: 'rgba(20, 20, 30, 0.7)',
                  border: '1px solid transparent',
                  '& fieldset': {
                    borderColor: 'rgba(102, 126, 234, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(102, 126, 234, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#667eea',
                    borderWidth: '1px',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: '#E0E0FF',
                  fontSize: '0.9rem',
                  padding: '12px 20px',
                  '&::placeholder': {
                    color: 'rgba(160, 160, 255, 0.5)',
                  },
                },
              }}
            />
            
            <IconButton
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              sx={{
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#FFFFFF',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                },
                '&.Mui-disabled': {
                  background: 'rgba(102, 126, 234, 0.2)',
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                transition: 'all 0.2s',
              }}
            >
              <SendIcon />
            </IconButton>
            
            <IconButton
              sx={{
                width: 48,
                height: 48,
                border: '1px solid',
                borderColor: 'rgba(102, 126, 234, 0.3)',
                color: '#A0A0FF',
                '&:hover': {
                  borderColor: '#667eea',
                  background: 'rgba(102, 126, 234, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s',
              }}
              title="Voice input (coming soon)"
            >
              <MicIcon />
            </IconButton>
          </Box>
          
          <Typography variant="caption" sx={{ 
            mt: 1, 
            display: 'block', 
            textAlign: 'center', 
            color: 'rgba(160, 160, 255, 0.5)',
            fontSize: '0.7rem',
          }}>
            Nova AI can help with technical questions, AI solutions, and business automation
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default Chatbot;