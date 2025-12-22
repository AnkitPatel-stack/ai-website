const Content = require('../models/Content');

// Get all content for a specific page
exports.getPageContent = async (req, res) => {
  try {
    const { page } = req.params;
    const { section } = req.query;

    const query = { page, isActive: true };
    if (section) {
      query.section = section;
    }

    const content = await Content.find(query).sort('order');

    // Transform to object format for easier consumption
    const contentObject = {};
    content.forEach(item => {
      if (!contentObject[item.section]) {
        contentObject[item.section] = {};
      }
      contentObject[item.section][item.key] = item.value;
    });

    res.json(contentObject);
  } catch (error) {
    console.error('Get content error:', error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
};

// Get single content item
exports.getContentItem = async (req, res) => {
  try {
    const { key } = req.params;
    const content = await Content.findOne({ key, isActive: true });

    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    res.json(content);
  } catch (error) {
    console.error('Get content item error:', error);
    res.status(500).json({ error: 'Failed to fetch content item' });
  }
};

// Update content item (admin only)
exports.updateContentItem = async (req, res) => {
  try {
    const { key } = req.params;
    const { value, isActive, order, metadata } = req.body;

    const updateData = { updatedAt: new Date(), lastUpdatedBy: req.user._id };
    if (value !== undefined) updateData.value = value;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (order !== undefined) updateData.order = order;
    if (metadata !== undefined) updateData.metadata = metadata;

    const content = await Content.findOneAndUpdate(
      { key },
      updateData,
      { new: true, runValidators: true }
    );

    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    res.json({
      message: 'Content updated successfully',
      content,
    });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({ error: 'Failed to update content' });
  }
};

// Create new content item (admin only)
exports.createContentItem = async (req, res) => {
  try {
    const { page, section, type, key, value, order = 0, metadata = {} } = req.body;

    // Check if key already exists
    const existingContent = await Content.findOne({ key });
    if (existingContent) {
      return res.status(400).json({ error: 'Content key already exists' });
    }

    const content = new Content({
      page,
      section,
      type,
      key,
      value,
      order,
      metadata,
      lastUpdatedBy: req.user._id,
    });

    await content.save();

    res.status(201).json({
      message: 'Content created successfully',
      content,
    });
  } catch (error) {
    console.error('Create content error:', error);
    res.status(500).json({ error: 'Failed to create content' });
  }
};

// Delete content item (admin only - soft delete)
exports.deleteContentItem = async (req, res) => {
  try {
    const { key } = req.params;

    const content = await Content.findOneAndUpdate(
      { key },
      { isActive: false, updatedAt: new Date(), lastUpdatedBy: req.user._id },
      { new: true }
    );

    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    res.json({
      message: 'Content deleted successfully',
      content,
    });
  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({ error: 'Failed to delete content' });
  }
};

// Get all pages with sections (admin only)
exports.getAllContent = async (req, res) => {
  try {
    const { page, section, type, search } = req.query;
    
    const query = {};
    if (page) query.page = page;
    if (section) query.section = section;
    if (type) query.type = type;
    if (search) {
      query.$or = [
        { key: { $regex: search, $options: 'i' } },
        { 'value.text': { $regex: search, $options: 'i' } },
      ];
    }

    const content = await Content.find(query)
      .sort({ page: 1, section: 1, order: 1 })
      .populate('lastUpdatedBy', 'name email');

    res.json(content);
  } catch (error) {
    console.error('Get all content error:', error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
};