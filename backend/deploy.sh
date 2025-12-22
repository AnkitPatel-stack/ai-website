#!/bin/bash

echo "🚀 Deploying AI Website to Render..."

# Check if we're in the right directory
if [ ! -f "backend/package.json" ]; then
  echo "❌ Error: backend/package.json not found"
  exit 1
fi

echo "📦 Updating package.json files..."

# Update backend package.json
cat > backend/package.json << 'EOF'
{
  "name": "ai-website-backend",
  "version": "1.0.0",
  "description": "Enterprise AI Website Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "echo 'No build step required for backend'"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.41.0",
    "multer-storage-cloudinary": "^4.0.0",
    "express-rate-limit": "^7.1.5",
    "express-validator": "^7.0.1",
    "axios": "^1.5.0",
    "nodemailer": "^6.9.13",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "engines": {
    "node": "18.x || 20.x || 22.x"
  }
}
EOF

echo "✅ Backend package.json updated"

# Create render.yaml
cat > render.yaml << 'EOF'
services:
  - type: web
    name: ai-website-backend
    env: node
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 5000
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        generateValue: true
      - key: JWT_EXPIRE
        value: 7d
      - key: CLOUDINARY_CLOUD_NAME
        sync: false
      - key: CLOUDINARY_API_KEY
        sync: false
      - key: CLOUDINARY_API_SECRET
        sync: false
      - key: OPENAI_API_KEY
        sync: false
      - key: GROQ_BASE_URL
        value: https://api.groq.com/openai/v1
      - key: GROQ_MODEL
        value: llama-3.3-70b-versatile
      - key: FRONTEND_URL
        value: https://your-frontend-app.onrender.com
      - key: ADMIN_EMAIL
        value: admin@aiwebsite.com
      - key: ADMIN_PASSWORD
        value: Admin@123
EOF

echo "✅ render.yaml created"

# Create Procfile for alternative deployment
cat > Procfile << 'EOF'
web: cd backend && npm start
EOF

echo "✅ Procfile created"

# Create .env.production for reference
cat > .env.production << 'EOF'
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_uri_here
JWT_SECRET=generate_a_secure_random_string
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
OPENAI_API_KEY=your_groq_api_key
GROQ_BASE_URL=https://api.groq.com/openai/v1
GROQ_MODEL=llama-3.3-70b-versatile
FRONTEND_URL=https://your-frontend-app.onrender.com
ADMIN_EMAIL=admin@aiwebsite.com
ADMIN_PASSWORD=Admin@123
EOF

echo "✅ .env.production created"

echo ""
echo "📋 Deployment Instructions:"
echo "=========================="
echo "1. Push these changes to GitHub:"
echo "   git add ."
echo "   git commit -m 'Prepare for Render deployment'"
echo "   git push origin main"
echo ""
echo "2. Go to https://render.com"
echo ""
echo "3. Click 'New +' → 'Web Service'"
echo ""
echo "4. Connect your GitHub repository"
echo ""
echo "5. Configure the service:"
echo "   - Name: ai-website-backend"
echo "   - Environment: Node"
echo "   - Build Command: cd backend && npm install"
echo "   - Start Command: cd backend && npm start"
echo ""
echo "6. Add environment variables from .env.production"
echo ""
echo "7. Click 'Create Web Service'"
echo ""
echo "8. Wait for deployment to complete"
echo ""
echo "9. Your API will be available at: https://ai-website-backend.onrender.com"
echo "   Test: https://ai-website-backend.onrender.com/api/health"
echo ""
echo "🔑 Default admin credentials:"
echo "   Email: admin@aiwebsite.com"
echo "   Password: Admin@123"
echo ""
echo "🎉 Deployment ready!"