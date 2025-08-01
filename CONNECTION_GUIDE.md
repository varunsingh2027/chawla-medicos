# 🚀 PharmaExport-Distributor Frontend-Backend Connection Guide

## Quick Start (3 Simple Steps)

### Method 1: Automatic Setup (Recommended)
```bash
# Double-click one of these files:
start-fullstack.bat     # For Command Prompt
start-fullstack.ps1     # For PowerShell
```

### Method 2: Manual Setup
```bash
# 1. Install all dependencies
npm run setup

# 2. Start both servers
npm run fullstack:dev
```

### Method 3: Separate Terminals
```bash
# Terminal 1 - Backend
npm run backend:dev

# Terminal 2 - Frontend  
npm run dev
```

## 🔍 Verify Connection

### Check Backend Status
1. **Visual Indicator**: Look for the green/red dot in top-right corner of website
2. **Direct API Test**: Visit http://localhost:5000/api/health
3. **Automated Test**: Run `npm run test:connection`

### Expected Results
- ✅ **Backend Running**: Green dot, real search results
- ❌ **Backend Offline**: Red dot, mock data (still functional)

## 📡 API Endpoints Working

| Endpoint | Purpose | Status |
|----------|---------|--------|
| `GET /api/health` | Backend status | ✅ Working |
| `GET /api/products/search?q={query}` | Medicine search | ✅ Working |
| `GET /api/products/salt/{name}` | Salt/generic search | ✅ Working |
| `GET /api/products/manufacturer/{name}` | Manufacturer search | ✅ Working |
| `GET /api/products` | All products | ✅ Working |
| `POST /api/contact` | Contact form | ✅ Ready |
| `POST /api/quotes` | Quote requests | ✅ Ready |

## 🎯 Frontend Features Connected

### ✅ Currently Working:
- **Hero Search Box**: Real-time medicine search with backend API
- **Salt & Manufacturer Tabs**: Connected to backend endpoints
- **Backend Status Monitor**: Real-time connection indicator
- **Error Handling**: Graceful fallback to mock data

### 🔄 Ready for Integration:
- **Contact Forms**: Backend endpoint ready
- **Quote System**: API ready for quote submissions
- **User Authentication**: JWT system implemented
- **Product Management**: Full CRUD operations

## 🌐 Server Configuration

### Frontend (React + Vite)
- **URL**: http://localhost:5173
- **Port**: 5173
- **Status**: Auto-opens browser

### Backend (Express.js)
- **URL**: http://localhost:5000
- **Port**: 5000
- **API Base**: http://localhost:5000/api
- **Status**: Console shows connection status

## 🔧 Troubleshooting

### Backend Won't Start
```bash
# Check if dependencies are installed
cd backend && npm install

# Try starting manually
cd backend && npm run dev
```

### Frontend Won't Connect
1. Ensure backend is running on port 5000
2. Check browser console for CORS errors
3. Verify API calls in Network tab

### Port Conflicts
- Frontend uses port 5173 (Vite default)
- Backend uses port 5000 (configurable in .env)
- Change ports in respective config files if needed

## 📊 Connection Status Indicators

### Visual Indicators:
- 🟢 **Green Dot**: Backend connected and responding
- 🔴 **Red Dot**: Backend offline, using mock data
- 🟡 **Yellow Dot**: Connecting/checking status

### Console Messages:
```bash
# Backend Connected
✅ Backend Connected: localhost
📊 Database: pharmaexport-distributor
🚀 API Server running on port 5000

# Frontend Connected  
✅ Frontend ready at http://localhost:5173
🔗 API calls connecting to http://localhost:5000/api
```

## 🧪 Test the Connection

### Manual Testing:
1. Open website: http://localhost:5173
2. Try searching for "Paracetamol" in hero section
3. Navigate to Salt & Manufacturer section
4. Test different search options

### Automated Testing:
```bash
npm run test:connection
```

### API Testing:
```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test search
curl "http://localhost:5000/api/products/search?q=paracetamol"
```

## 📁 Project Structure

```
├── src/
│   ├── services/api.js          # API service layer
│   ├── components/
│   │   ├── Hero.jsx            # Connected to search API
│   │   ├── Services.jsx        # Connected to salt/manufacturer APIs
│   │   └── BackendStatus.jsx   # Connection monitor
│   └── App.jsx                 # Main app with status indicator
├── backend/
│   ├── src/
│   │   ├── server.js           # Express server
│   │   ├── routes/mockProducts.js  # Mock API routes
│   │   └── data/mockData.js    # Sample data
│   └── .env                    # Backend configuration
└── Connection files:
    ├── start-fullstack.bat     # Windows batch script
    ├── start-fullstack.ps1     # PowerShell script
    └── test-connection.js      # Connection test
```

## 🎉 Success Indicators

### When Everything Is Working:
1. ✅ Both servers start without errors
2. ✅ Green connection indicator appears
3. ✅ Medicine search returns real results
4. ✅ Salt & Manufacturer features work
5. ✅ API endpoints respond correctly
6. ✅ No CORS errors in browser console

### Fallback Mode (Backend Offline):
- 🔴 Red indicator shows backend offline
- 📊 Website still fully functional with mock data
- 🔄 All searches and features work seamlessly
- 💡 User experience remains smooth

The frontend and backend are now properly connected with robust error handling and fallback mechanisms!
