const Content = require('../models/Content');
const User = require('../models/User');

const initialContent = [
  // Hero Section
  {
    page: 'home',
    section: 'hero',
    type: 'text',
    key: 'hero_title',
    value: 'Transform Your Business with AI-Powered Solutions',
    order: 1,
  },
  {
    page: 'home',
    section: 'hero',
    type: 'text',
    key: 'hero_subtitle',
    value: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
    order: 2,
  },
  {
    page: 'home',
    section: 'hero',
    type: 'text',
    key: 'hero_cta_primary',
    value: 'Start Your AI Journey',
    order: 3,
  },
  {
    page: 'home',
    section: 'hero',
    type: 'text',
    key: 'hero_cta_secondary',
    value: 'View Case Studies',
    order: 4,
  },
  {
    page: 'home',
    section: 'hero',
    type: 'image',
    key: 'hero_background',
    value: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    metadata: {
      alt: 'AI Neural Network Visualization',
      caption: 'Advanced AI neural network processing data',
    },
    order: 5,
  },

  // About Section
  {
    page: 'home',
    section: 'about',
    type: 'text',
    key: 'about_title',
    value: 'Leading the AI Revolution',
    order: 1,
  },
  {
    page: 'home',
    section: 'about',
    type: 'text',
    key: 'about_description',
    value: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate. Our team of experts combines deep technical knowledge with practical business insights to deliver tangible results.',
    order: 2,
  },
  {
    page: 'home',
    section: 'about',
    type: 'array',
    key: 'about_stats',
    value: [
      { label: 'Projects Delivered', value: '150+', suffix: '+' },
      { label: 'AI Models Deployed', value: '500', suffix: '+' },
      { label: 'Client Satisfaction', value: '98', suffix: '%' },
      { label: 'Team Members', value: '50', suffix: '+' },
    ],
    order: 3,
  },

  // Services Section
  {
    page: 'home',
    section: 'services',
    type: 'text',
    key: 'services_title',
    value: 'Our AI Services',
    order: 1,
  },
  {
    page: 'home',
    section: 'services',
    type: 'text',
    key: 'services_subtitle',
    value: 'Comprehensive AI solutions tailored to your business needs',
    order: 2,
  },
  {
    page: 'home',
    section: 'services',
    type: 'array',
    key: 'services_list',
    value: [
      {
        title: 'AI Strategy & Consulting',
        description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
        icon: 'strategy',
      },
      {
        title: 'Machine Learning Development',
        description: 'Custom ML models built and deployed for your specific use cases.',
        icon: 'ml',
      },
      {
        title: 'Natural Language Processing',
        description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
        icon: 'nlp',
      },
      {
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for automation and insights.',
        icon: 'vision',
      },
      {
        title: 'AI Integration',
        description: 'Seamlessly integrate AI capabilities into your existing systems.',
        icon: 'integration',
      },
      {
        title: 'AI Training & Support',
        description: 'Comprehensive training and ongoing support for your teams.',
        icon: 'support',
      },
    ],
    order: 3,
  },

  // Team Section
  {
    page: 'home',
    section: 'team',
    type: 'text',
    key: 'team_title',
    value: 'Meet Our Leadership',
    order: 1,
  },
  {
    page: 'home',
    section: 'team',
    type: 'text',
    key: 'team_subtitle',
    value: 'Our team combines decades of experience in AI, technology, and business transformation.',
    order: 2,
  },
  {
    page: 'home',
    section: 'team',
    type: 'array',
    key: 'team_members',
    value: [
      {
        name: 'Dr. Sarah Chen',
        position: 'CEO & Founder',
        bio: 'Former AI Research Lead at Google, PhD in Computer Science from Stanford',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Michael Rodriguez',
        position: 'CTO',
        bio: 'Ex-Microsoft AI Architect, 15+ years in machine learning systems',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'Jessica Williams',
        position: 'Head of Product',
        bio: 'Former Product Director at OpenAI, specializes in AI product strategy',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
      {
        name: 'David Kim',
        position: 'Lead ML Engineer',
        bio: 'PhD in AI from MIT, published researcher in neural networks',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        linkedin: '#',
      },
    ],
    order: 3,
  },

  // Why Choose Us Section
  {
    page: 'home',
    section: 'why_choose_us',
    type: 'text',
    key: 'why_title',
    value: 'Why Choose Our AI Solutions',
    order: 1,
  },
  {
    page: 'home',
    section: 'why_choose_us',
    type: 'array',
    key: 'why_points',
    value: [
      {
        title: 'Enterprise-Grade Security',
        description: 'Bank-level security protocols and compliance standards for all our solutions.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Designed to grow with your business from day one.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear, predictable pricing with no hidden fees.',
      },
      {
        title: '24/7 Expert Support',
        description: 'Round-the-clock support from our AI specialists.',
      },
      {
        title: 'Proven Track Record',
        description: 'Successfully delivered AI solutions for Fortune 500 companies.',
      },
      {
        title: 'Continuous Innovation',
        description: 'We stay ahead of the curve with cutting-edge AI research.',
      },
    ],
    order: 2,
  },

  // Contact Section
  {
    page: 'home',
    section: 'contact',
    type: 'text',
    key: 'contact_title',
    value: 'Ready to Transform Your Business?',
    order: 1,
  },
  {
    page: 'home',
    section: 'contact',
    type: 'text',
    key: 'contact_subtitle',
    value: "Let's discuss how AI can drive growth and efficiency in your organization.",
    order: 2,
  },
];

const seedDatabase = async () => {
  try {
    // Check if content already exists
    const existingContent = await Content.countDocuments();
    
    if (existingContent === 0) {
      console.log('🌱 Seeding initial content...');
      await Content.insertMany(initialContent);
      console.log('✅ Content seeded successfully');
    }

    // Create admin user if doesn't exist
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      const adminUser = new User({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin',
        name: 'System Administrator',
      });
      await adminUser.save();
      console.log('👑 Admin user created');
    }
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};

module.exports = seedDatabase;