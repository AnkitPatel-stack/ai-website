// frontend/src/services/contentService.js
import { contentApi } from './api';

// Default content in case API fails
const defaultContent = {
  hero: {
    hero_title: 'Transform Your Business with AI-Powered Solutions',
    hero_subtitle: 'We build enterprise-grade AI solutions that drive innovation, efficiency, and growth for forward-thinking companies.',
    hero_cta_primary: 'Start Your AI Journey',
    hero_cta_secondary: 'View Case Studies',
    hero_background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  about: {
    about_title: 'Leading the AI Revolution',
    about_description: 'We are at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform how businesses operate.',
    about_stats: [
      { label: 'Projects Delivered', value: '150', suffix: '+' },
      { label: 'AI Models Deployed', value: '500', suffix: '+' },
      { label: 'Client Satisfaction', value: '98', suffix: '%' },
      { label: 'Team Members', value: '50', suffix: '+' },
    ],
  },
  services: {
    services_title: 'Our AI Services',
    services_subtitle: 'Comprehensive AI solutions tailored to your business needs',
    services_list: [
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
  },
  team: {
    team_title: 'Meet Our Leadership',
    team_subtitle: 'Our team combines decades of experience in AI, technology, and business transformation.',
    team_members: [
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
  },
  why_choose_us: {
    why_title: 'Why Choose Our AI Solutions',
    why_points: [
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
  },
  contact: {
    contact_title: 'Ready to Transform Your Business?',
    contact_subtitle: "Let's discuss how AI can drive growth and efficiency in your organization.",
  },
};

export const loadContent = async (page, section = null) => {
  try {
    const data = await contentApi.getPageContent(page, section);
    return data;
  } catch (error) {
    console.warn('Using default content due to API error:', error.message);
    
    // Return default content for the requested section
    if (section && defaultContent[section]) {
      return { [section]: defaultContent[section] };
    }
    
    // If no section specified, return all sections for that page
    if (page === 'home') {
      return defaultContent;
    }
    
    return {};
  }
};