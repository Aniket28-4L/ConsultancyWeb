import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    window.location.href = '/admin/login';
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/countries', label: 'Countries', icon: '🌎' },
    { path: '/admin/universities', label: 'Universities', icon: '🎓' },
    { path: '/admin/testimonials', label: 'Testimonials', icon: '💬' },
    { path: '/admin/inquiries', label: 'Inquiries', icon: '📝' },
    { path: '/admin/services', label: 'Services', icon: '🛠️' },
    { path: '/admin/processes', label: 'Processes', icon: '📋' },
    { path: '/admin/documentation', label: 'Documentation', icon: '📄' },
  ];

  return (
    <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="admin-sidebar-header">
        <h2>{isCollapsed ? 'C' : 'CONSUL'}</h2>
        <button 
          className="toggle-sidebar" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="admin-sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="admin-sidebar-footer">
        <button onClick={handleLogout} className="logout-button">
          <span className="nav-icon">🚪</span>
          {!isCollapsed && <span className="nav-label">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;