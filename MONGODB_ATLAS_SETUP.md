# MongoDB Atlas Setup Guide

## 🍃 Setting up MongoDB Atlas (Free Tier)

### Step 1: Create Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free"
3. Sign up with email or Google account

### Step 2: Create Cluster
1. Choose "Build a Database"
2. Select **M0 Sandbox** (Free Forever)
3. Choose AWS and closest region
4. Cluster Name: `pharmaexport-cluster`
5. Click "Create Cluster"

### Step 3: Database User Setup
1. Go to "Database Access"
2. Click "Add New Database User"
3. Authentication Method: Password
4. Username: `pharmaexport-admin`
5. Password: Generate secure password (save it!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 4: Network Access
1. Go to "Network Access"
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - For production, use specific IPs
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" → "Connect"
2. Choose "Connect your application"
3. Driver: Node.js, Version: 4.1 or later
4. Copy connection string
5. Replace `<password>` with your actual password
6. Replace `<dbname>` with `pharmaexport-distributor`

### Example Connection String:
```
mongodb+srv://pharmaexport-admin:<password>@pharmaexport-cluster.xxxxx.mongodb.net/pharmaexport-distributor?retryWrites=true&w=majority
```

### Step 6: Test Connection
1. Add the connection string to your `.env` file:
   ```
   MONGODB_URI=mongodb+srv://pharmaexport-admin:yourpassword@pharmaexport-cluster.xxxxx.mongodb.net/pharmaexport-distributor?retryWrites=true&w=majority
   ```
2. Run the test script:
   ```bash
   cd backend
   node test-mongodb.js
   ```

### Step 7: Seed Database (Optional)
```bash
cd backend
npm run seed
```

## 🔒 Security Best Practices

### For Production:
1. **Restrict IP Access**: Only allow your server IPs
2. **Use Strong Passwords**: 16+ characters with mixed case, numbers, symbols
3. **Database-Specific Users**: Create users for specific databases only
4. **Enable Auditing**: Monitor database access
5. **Regular Backups**: Atlas provides automatic backups

### Environment Variables:
Never commit these to version control!
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-super-secret-key-min-32-chars
```

## 📊 Monitoring

### Atlas Provides:
- Real-time performance metrics
- Query profiler
- Index suggestions
- Alert notifications
- Backup management

### Useful Commands:
```bash
# Test connection
node backend/test-mongodb.js

# Seed database
npm run backend:seed

# Check database status
curl https://your-backend-url/api/health
```

## 🆘 Troubleshooting

### Common Issues:

1. **Connection Timeout**
   - Check network access whitelist
   - Verify connection string format
   - Ensure cluster is running

2. **Authentication Failed**
   - Double-check username/password
   - Verify user has correct permissions
   - Check database name in connection string

3. **IP Not Allowed**
   - Add current IP to whitelist
   - For development: use 0.0.0.0/0
   - For production: use specific server IPs

### Debug Commands:
```bash
# Test MongoDB connection
node -e "require('mongoose').connect('your-connection-string').then(() => console.log('Connected!')).catch(console.error)"

# Check cluster status
mongosh "your-connection-string" --eval "db.runCommand({ping: 1})"
```

---

**Free Tier Limits:**
- 512 MB storage
- Shared RAM and vCPU
- No backup retention
- Community support only

For production, consider upgrading to M2/M5 dedicated clusters.
