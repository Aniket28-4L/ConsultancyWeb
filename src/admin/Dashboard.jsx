import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    inquiries: 0,
    users: 0,
    universities: 0,
    testimonials: 0,
    countries: 0,
    services: 0,
    processes: 0,
    documentationRequirements: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        // Fetch counts from different endpoints
        const [
          inquiriesRes,
          usersRes,
          universitiesRes,
          testimonialsRes,
          countriesRes,
          servicesRes,
          processesRes,
          docsRes
        ] = await Promise.all([
          axios.get('/api/inquiries', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/users', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/universities', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/testimonials', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/countries', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/services', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/processes', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/documentation-requirements', { headers: { Authorization: `Bearer ${token}` } })
        ]);

        setStats({
          inquiries: inquiriesRes.data.length,
          users: usersRes.data.length,
          universities: universitiesRes.data.length,
          testimonials: testimonialsRes.data.length,
          countries: countriesRes.data.length,
          services: servicesRes.data.length,
          processes: processesRes.data.length,
          documentationRequirements: docsRes.data.length
        });
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch dashboard data');
        setLoading(false);
        console.error('Dashboard error:', err);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="admin-loading">Loading dashboard data...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Consultancy Admin Panel</p>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">👤</div>
          <div className="admin-stat-content">
            <h3>Users</h3>
            <p className="admin-stat-number">{stats.users}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">📝</div>
          <div className="admin-stat-content">
            <h3>Inquiries</h3>
            <p className="admin-stat-number">{stats.inquiries}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">🌎</div>
          <div className="admin-stat-content">
            <h3>Countries</h3>
            <p className="admin-stat-number">{stats.countries}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">🎓</div>
          <div className="admin-stat-content">
            <h3>Universities</h3>
            <p className="admin-stat-number">{stats.universities}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">💬</div>
          <div className="admin-stat-content">
            <h3>Testimonials</h3>
            <p className="admin-stat-number">{stats.testimonials}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">🛠️</div>
          <div className="admin-stat-content">
            <h3>Services</h3>
            <p className="admin-stat-number">{stats.services}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">📋</div>
          <div className="admin-stat-content">
            <h3>Processes</h3>
            <p className="admin-stat-number">{stats.processes}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">📄</div>
          <div className="admin-stat-content">
            <h3>Documentation</h3>
            <p className="admin-stat-number">{stats.documentationRequirements}</p>
          </div>
        </div>
      </div>

      <div className="admin-card admin-recent-section">
        <h2>Recent Inquiries</h2>
        <p>Check the Inquiries page for detailed information</p>
      </div>
    </div>
  );
};

export default Dashboard;