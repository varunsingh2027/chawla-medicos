@echo off
echo Installing PharmaExport-Distributor Full Stack Application...
echo.

echo [1/3] Installing root dependencies...
call npm install
echo.

echo [2/3] Installing backend dependencies...
cd backend
call npm install
cd..
echo.

echo [3/3] Installation complete!
echo.
echo To start the application:
echo   npm run fullstack:dev  - Run both frontend and backend
echo   npm run dev           - Run frontend only
echo   npm run backend:dev   - Run backend only
echo.
echo Don't forget to:
echo 1. Configure backend/.env file
echo 2. Start MongoDB
echo 3. Run 'npm run backend:seed' for sample data
echo.
pause
