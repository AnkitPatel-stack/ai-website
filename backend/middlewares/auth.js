const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    try {
      // Get token from header
      const token = req.header('Authorization')?.replace('Bearer ', '');
      
      if (!token) {
        return res.status(401).json({ error: 'No authentication token provided' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Find user
      const user = await User.findOne({
        _id: decoded.userId,
        isActive: true,
      });

      if (!user) {
        return res.status(401).json({ error: 'User not found or inactive' });
      }

      // Check role permissions
      if (roles.length > 0 && !roles.includes(user.role)) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      // Attach user to request
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid token' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired' });
      }
      res.status(500).json({ error: 'Authentication failed' });
    }
  };
};

module.exports = authMiddleware;