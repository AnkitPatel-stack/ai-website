const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const authMiddleware = require('../middlewares/auth');

// All admin routes require admin role
router.use(authMiddleware(['admin']));

// Dashboard statistics
router.get('/dashboard/stats', adminController.getDashboardStats);

// User management
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Content management
router.get('/content/audit', adminController.getContentAudit);

// System logs
router.get('/logs', adminController.getSystemLogs);

module.exports = router;