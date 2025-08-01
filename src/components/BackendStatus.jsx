import React, { useState, useEffect } from 'react';
import apiService from '../services/api.js';

const BackendStatus = () => {
  const [backendStatus, setBackendStatus] = useState({
    connected: false,
    loading: true,
    error: null,
    lastChecked: null,
    database: null
  });

  const checkBackendStatus = async () => {
    setBackendStatus(prev => ({ ...prev, loading: true }));
    
    try {
      const response = await apiService.healthCheck();
      setBackendStatus({
        connected: response.success,
        loading: false,
        error: response.success ? null : response.error,
        lastChecked: new Date().toLocaleTimeString(),
        database: response.database || null
      });
    } catch (error) {
      setBackendStatus({
        connected: false,
        loading: false,
        error: error.message,
        lastChecked: new Date().toLocaleTimeString(),
        database: null
      });
    }
  };

  useEffect(() => {
    checkBackendStatus();
    // Check every 30 seconds
    const interval = setInterval(checkBackendStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="backend-status" style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      fontSize: '12px',
      border: `2px solid ${backendStatus.connected ? '#10b981' : '#ef4444'}`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: backendStatus.loading ? '#f59e0b' : (backendStatus.connected ? '#10b981' : '#ef4444')
        }}></div>
        <span>
          {backendStatus.loading ? 'Checking...' : 
           backendStatus.connected ? 'Backend Connected' : 'Backend Offline'}
        </span>
      </div>
      {backendStatus.database && (
        <div style={{ marginTop: '4px', fontSize: '10px', color: backendStatus.database.connected ? '#10b981' : '#f59e0b' }}>
          DB: {backendStatus.database.connected ? `✅ ${backendStatus.database.name}` : '⚠️ Mock Data'}
        </div>
      )}
      {backendStatus.lastChecked && (
        <div style={{ marginTop: '4px', color: '#6b7280' }}>
          Last checked: {backendStatus.lastChecked}
        </div>
      )}
      {backendStatus.error && (
        <div style={{ marginTop: '4px', color: '#ef4444', fontSize: '10px' }}>
          {backendStatus.error}
        </div>
      )}
      <button 
        onClick={checkBackendStatus}
        style={{
          marginTop: '4px',
          padding: '2px 6px',
          fontSize: '10px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          background: 'white',
          cursor: 'pointer'
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default BackendStatus;
