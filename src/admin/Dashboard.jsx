import { useState, useEffect } from 'react';
import apiService from '../services/apiService';
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
        // Fetch data from mock service
        const [
          inquiries,
          users,
          universities,
          testimonials,
          countries,
          services,
          processes,
          documentations
        ] = await Promise.all([
          apiService.getInquiries(),
          apiService.getUsers(),
          apiService.getUniversities(),
          apiService.getTestimonials(),
          apiService.getCountries(),
          apiService.getServices(),
          apiService.getProcesses(),
          apiService.getDocumentations()
        ]);

        setStats({
          inquiries: inquiries.length,
          users: users.length,
          universities: universities.length,
          testimonials: testimonials.length,
          countries: countries.length,
          services: services.length,
          processes: processes.length,
          documentationRequirements: documentations.length
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