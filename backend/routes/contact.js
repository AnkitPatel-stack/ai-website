const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contact');
const authMiddleware = require('../middlewares/auth');

// Validation middleware
const validateContact = [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim(),
  body('message').notEmpty().trim(),
  body('phone').optional().trim(),
  body('company').optional().trim(),
];

// Public routes
router.post('/', validateContact, contactController.createContact);

// Protected routes (admin only)
router.get('/', authMiddleware(['admin']), contactController.getAllContacts);
router.get('/:id', authMiddleware(['admin']), contactController.getContactById);
router.put('/:id', authMiddleware(['admin']), contactController.updateContact);

module.exports = router;