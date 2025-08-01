@echo off
echo ===================================
echo PharmaExport-Distributor Deployment
echo ===================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

echo 📋 Pre-deployment checklist:
echo.

REM Check project structure
echo ✅ Checking project structure...
if not exist "backend" (
    echo ❌ Backend directory not found
    pause
    exit /b 1
)

if not exist "backend\package.json" (
    echo ❌ Backend package.json not found
    pause
    exit /b 1
)

echo ✅ Project structure looks good
echo.

REM Test frontend build
echo 🔨 Testing frontend build...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)
echo ✅ Frontend build successful
echo.

REM Test backend
echo 🔧 Testing backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend dependencies installation failed
    pause
    exit /b 1
)

REM Check for .env file
if not exist ".env" (
    echo ⚠️  Warning: .env file not found in backend directory
    echo    Please create .env file with production variables
    echo    See .env.production.template for reference
    echo.
)

cd ..
echo ✅ Backend check completed
echo.

echo 🎉 Pre-deployment checks passed!
echo.
echo 📝 Next steps:
echo 1. Deploy backend to Render/Railway/Heroku
echo 2. Update REACT_APP_API_URL with your backend URL
echo 3. Deploy frontend to Netlify/Vercel
echo 4. Test the deployed application
echo.
echo 📖 See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
