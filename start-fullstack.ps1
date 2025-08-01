# PharmaExport-Distributor Startup Script
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "PharmaExport-Distributor Setup" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host ""

Write-Host "[1/3] Installing frontend dependencies..." -ForegroundColor Green
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Frontend dependencies installation failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[2/3] Installing backend dependencies..." -ForegroundColor Green
Set-Location backend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Backend dependencies installation failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Set-Location ..

Write-Host "[3/3] Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "Starting both servers..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Backend will run on:  http://localhost:5000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Yellow
Write-Host ""

# Start backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run backend:dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start frontend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"

Write-Host ""
Write-Host "✅ Both servers are starting..." -ForegroundColor Green
Write-Host "Check the new PowerShell windows for server status" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit this setup window"
