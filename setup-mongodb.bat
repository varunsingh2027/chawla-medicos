@echo off
echo ====================================
echo MongoDB Setup for PharmaExport
echo ====================================
echo.

echo [1/4] Testing MongoDB Connection...
cd backend
node test-mongodb.js

echo.
echo [2/4] Would you like to seed the database with sample data? (y/n)
set /p seed="Enter choice: "

if /i "%seed%"=="y" (
    echo.
    echo [3/4] Seeding database with pharmaceutical data...
    npm run seed
    echo ✅ Database seeded successfully!
) else (
    echo [3/4] Skipping database seeding...
)

echo.
echo [4/4] Starting backend server with MongoDB...
echo.
echo Backend will connect to MongoDB and serve real data
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
