// const express = require('express');
// const router = express.Router();
// const contentController = require('../controllers/content');
// const authMiddleware = require('../middlewares/auth');
// const { upload } = require('../utils/cloudinary');

// // Public routes
// router.get('/page/:page', contentController.getPageContent);
// router.get('/item/:key', contentController.getContentItem);

// // Protected routes (admin only)
// router.get('/all', authMiddleware(['admin']), contentController.getAllContent);
// router.post('/', authMiddleware(['admin']), contentController.createContentItem);
// router.put('/:key', authMiddleware(['admin']), contentController.updateContentItem);
// router.delete('/:key', authMiddleware(['admin']), contentController.deleteContentItem);

// // Image upload route
// router.post('/upload', authMiddleware(['admin']), upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     res.json({
//       message: 'File uploaded successfully',
//       url: req.file.path,
//       publicId: req.file.filename,
//       format: req.file.format,
//       size: req.file.size,
//     });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'File upload failed' });
//   }
// });

// module.exports = router;

// backend/routes/content.js
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content');
const authMiddleware = require('../middlewares/auth');
const { upload } = require('../utils/cloudinary');

// Public routes - FIXED: Corrected route paths
router.get('/page/:page', contentController.getPageContent);
router.get('/item/:key', contentController.getContentItem);

// Protected routes (admin only)
router.get('/all', authMiddleware(['admin']), contentController.getAllContent);
router.post('/', authMiddleware(['admin']), contentController.createContentItem);
router.put('/:key', authMiddleware(['admin']), contentController.updateContentItem);
router.delete('/:key', authMiddleware(['admin']), contentController.deleteContentItem);

// Image upload route
router.post('/upload', authMiddleware(['admin']), upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
      message: 'File uploaded successfully',
      url: req.file.path,
      publicId: req.file.filename,
      format: req.file.format,
      size: req.file.size,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});

module.exports = router;