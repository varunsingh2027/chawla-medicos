#!/bin/bash

echo "🚀 PharmaExport-Distributor Deployment Script"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Pre-deployment checklist:"
echo ""

# Check for required files
echo "✅ Checking project structure..."
if [ ! -d "backend" ]; then
    echo "❌ Backend directory not found"
    exit 1
fi

if [ ! -f "backend/package.json" ]; then
    echo "❌ Backend package.json not found"
    exit 1
fi

echo "✅ Project structure looks good"
echo ""

# Test build
echo "🔨 Testing frontend build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed"
    exit 1
fi
echo "✅ Frontend build successful"
echo ""

# Test backend
echo "🔧 Testing backend..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend dependencies installation failed"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found in backend directory"
    echo "   Please create .env file with production variables"
    echo "   See .env.production.template for reference"
fi

cd ..
echo "✅ Backend check completed"
echo ""

echo "🎉 Pre-deployment checks passed!"
echo ""
echo "📝 Next steps:"
echo "1. Deploy backend to Render/Railway/Heroku"
echo "2. Update REACT_APP_API_URL with your backend URL"
echo "3. Deploy frontend to Netlify/Vercel"
echo "4. Test the deployed application"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
