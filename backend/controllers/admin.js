const User = require('../models/User');
const Content = require('../models/Content');
const Contact = require('../models/Contact');
const ChatHistory = require('../models/ChatHistory');

// Get dashboard statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const [
      totalUsers,
      totalContacts,
      totalChatSessions,
      recentContacts,
      contentUpdates,
      activeUsers,
    ] = await Promise.all([
      User.countDocuments(),
      Contact.countDocuments(),
      ChatHistory.countDocuments(),
      Contact.countDocuments({ createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } }),
      Content.countDocuments({ updatedAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }),
      User.countDocuments({ lastLogin: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }),
    ]);

    // Get contact status distribution
    const contactStatus = await Contact.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    // Get user registration trend (last 30 days)
    const userTrend = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      statistics: {
        users: { total: totalUsers, active: activeUsers },
        contacts: { total: totalContacts, recent: recentContacts },
        chatSessions: totalChatSessions,
        contentUpdates,
      },
      contactStatus,
      userTrend,
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard statistics' });
  }
};

// Get all users with pagination
exports.getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20, role, search } = req.query;
    const skip = (page - 1) * limit;

    const query = {};
    if (role) query.role = role;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    const [users, total] = await Promise.all([
      User.find(query)
        .select('-password')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      User.countDocuments(query),
    ]);

    res.json({
      users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, isActive, name } = req.body;

    const updateData = {};
    if (role !== undefined) updateData.role = role;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (name !== undefined) updateData.name = name;

    // Admin cannot demote themselves
    if (id === req.user._id && role && role !== 'admin') {
      return res.status(400).json({ error: 'Cannot change your own role' });
    }

    const user = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete user (soft delete)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent self-deletion
    if (id === req.user._id) {
      return res.status(400).json({ error: 'Cannot delete your own account' });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'User deactivated successfully',
      user,
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

// Get content audit log
exports.getContentAudit = async (req, res) => {
  try {
    const { startDate, endDate, userId } = req.query;

    const query = {};
    if (startDate || endDate) {
      query.updatedAt = {};
      if (startDate) query.updatedAt.$gte = new Date(startDate);
      if (endDate) query.updatedAt.$lte = new Date(endDate);
    }
    if (userId) query.lastUpdatedBy = userId;

    const auditLog = await Content.find(query)
      .sort({ updatedAt: -1 })
      .populate('lastUpdatedBy', 'name email')
      .limit(100);

    res.json(auditLog);
  } catch (error) {
    console.error('Content audit error:', error);
    res.status(500).json({ error: 'Failed to fetch content audit' });
  }
};

// Get system logs (simplified - in production use a proper logging system)
exports.getSystemLogs = async (req, res) => {
  try {
    // This is a simplified version. In production, use Winston or similar
    const logs = [
      {
        timestamp: new Date(),
        level: 'info',
        message: 'System check completed',
        source: 'system',
      },
      {
        timestamp: new Date(Date.now() - 3600000),
        level: 'info',
        message: 'Database backup completed',
        source: 'backup',
      },
    ];

    res.json(logs);
  } catch (error) {
    console.error('Get logs error:', error);
    res.status(500).json({ error: 'Failed to fetch system logs' });
  }
};