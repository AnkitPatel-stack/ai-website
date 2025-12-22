// backend/test-api.js
const mongoose = require('mongoose');
const Content = require('./models/Content');

async function testApiResponse() {
  try {
    await mongoose.connect('mongodb://localhost:27017/ai-website', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const content = await Content.find({ page: 'home', section: 'hero', isActive: true }).sort('order');
    
    console.log('Raw database content:');
    content.forEach(item => {
      console.log(`${item.section}.${item.key}:`, item.value);
    });

    // Transform to object format (what the API returns)
    const contentObject = {};
    content.forEach(item => {
      if (!contentObject[item.section]) {
        contentObject[item.section] = {};
      }
      contentObject[item.section][item.key] = item.value;
    });

    console.log('\nAPI response format:');
    console.log(JSON.stringify(contentObject, null, 2));

    process.exit(0);
  } catch (error) {
    console.error('Test error:', error);
    process.exit(1);
  }
}

testApiResponse();