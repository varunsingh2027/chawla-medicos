# 🍃 MongoDB Setup Guide for PharmaExport-Distributor

## Quick Setup Options

### Option 1: MongoDB Atlas (Cloud) - Recommended ⭐
1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create a free cluster**
3. **Get connection string** from Atlas dashboard
4. **Update** `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/pharmaexport-distributor?retryWrites=true&w=majority
   ```

### Option 2: Local MongoDB Installation
#### Windows:
```bash
# Download and install MongoDB Community Server
# From: https://www.mongodb.com/try/download/community

# Start MongoDB service
net start MongoDB

# Or run manually:
mongod --dbpath C:\data\db
```

#### macOS:
```bash
# Install via Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

#### Linux (Ubuntu):
```bash
# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Option 3: Docker (All Platforms)
```bash
# Run MongoDB in Docker
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:latest

# Verify it's running
docker ps
```

## Testing Your Connection

### 1. Test MongoDB Connection
```bash
cd backend
node test-mongodb.js
```

### 2. Expected Output (Success):
```
🔍 MongoDB Connection Test

1. Loading configuration...
   📍 Connection string: mongodb://localhost:27017/pharmaexport-distributor

2. Attempting to connect to MongoDB...
3. Connection successful! ✅
   🏠 Host: localhost
   📊 Database: pharmaexport-distributor
   🔌 Status: Connected

4. Testing basic operations...
   ✅ Insert test passed
   ✅ Query test passed
   ✅ Delete test passed

🎉 MongoDB is fully connected and operational!
```

### 3. Seed Database with Sample Data
```bash
cd backend
npm run seed
```

## Configuration Files

### Backend Environment (`.env`):
```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/pharmaexport-distributor

# MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/pharmaexport-distributor?retryWrites=true&w=majority

# Docker MongoDB
MONGODB_URI=mongodb://localhost:27017/pharmaexport-distributor
```

## Troubleshooting

### Connection Refused Error:
```
❌ Database connection failed: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: MongoDB is not running. Start MongoDB service.

### Authentication Failed:
```
❌ Database connection failed: Authentication failed
```
**Solution**: Check username/password in connection string.

### Network Timeout:
```
❌ Database connection failed: Server selection timed out
```
**Solution**: Check network connection and MongoDB Atlas IP whitelist.

## MongoDB Atlas Setup (Detailed)

### 1. Create Account
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
- Sign up for free account

### 2. Create Cluster
- Click "Build a Database"
- Choose "FREE" shared cluster
- Select cloud provider and region
- Click "Create Cluster"

### 3. Create Database User
- Go to "Database Access"
- Click "Add New Database User"
- Choose authentication method
- Set username and password
- Grant "Read and write to any database"

### 4. Configure Network Access
- Go to "Network Access"
- Click "Add IP Address"
- Choose "Allow Access from Anywhere" (0.0.0.0/0)
- Or add your specific IP address

### 5. Get Connection String
- Go to "Database"
- Click "Connect"
- Choose "Connect your application"
- Copy the connection string
- Replace `<password>` with your database user password

### 6. Update Environment Variables
```env
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/pharmaexport-distributor?retryWrites=true&w=majority
```

## Database Collections

After successful connection, your database will have:

- **users** - User accounts and authentication
- **products** - Medicine and pharmaceutical products
- **categories** - Product categories
- **manufacturers** - Pharmaceutical companies
- **contacts** - Contact form submissions
- **quotes** - Quote requests
- **news** - News articles and updates

## Verification Steps

1. **Start Backend**: `npm run backend:dev`
2. **Check Logs**: Look for "✅ MongoDB Connected Successfully!"
3. **Test API**: Visit `http://localhost:5000/api/health`
4. **Frontend Status**: Green dot indicates database connection
5. **Search Test**: Try searching medicines - real data vs mock data

## Benefits of MongoDB Connection

### With MongoDB Connected:
- ✅ Real pharmaceutical data
- ✅ User authentication and profiles
- ✅ Contact form submissions saved
- ✅ Quote requests tracked
- ✅ Product management
- ✅ Search with full-text indexing
- ✅ Data persistence and reliability

### Without MongoDB (Mock Mode):
- 🔄 Sample data for development
- 🔄 All features work but no persistence
- 🔄 Perfect for frontend development
- 🔄 No data loss concerns

## Production Deployment

For production, use MongoDB Atlas:
1. Create production cluster
2. Enable backups
3. Set up monitoring
4. Configure proper security
5. Use environment-specific connection strings

Your application is designed to work seamlessly with or without MongoDB, ensuring maximum flexibility during development and reliability in production!
