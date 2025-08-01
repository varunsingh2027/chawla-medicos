@echo off
echo ====================================
echo PharmaExport-Distributor Setup
echo ====================================
echo.

echo Installing dependencies...
echo.

echo [1/3] Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend dependencies installation failed!
    pause
    exit /b 1
)

echo [2/3] Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend dependencies installation failed!
    pause
    exit /b 1
)

cd ..

echo [3/3] Dependencies installed successfully!
echo.

echo Starting both servers...
echo.
echo Frontend will run on: http://localhost:5173
echo Backend will run on:  http://localhost:5000
echo.
echo Press Ctrl+C to stop both servers
echo.

start "Backend Server" cmd /c "npm run backend:dev"
timeout /t 3 /nobreak > nul
start "Frontend Server" cmd /c "npm run dev"

echo.
echo ✅ Both servers are starting...
echo Check the new terminal windows for server status
echo.
pause
