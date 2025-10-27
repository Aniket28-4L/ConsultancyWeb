import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Hardcoded admin credentials
    if (username === 'admin' && password === 'admin123') {
      // Create mock token and user data
      const mockData = {
        username: 'admin',
        isAdmin: true,
        token: 'mock-jwt-token-for-admin-authentication'
      };
      
      localStorage.setItem('adminToken', mockData.token);
      localStorage.setItem('adminInfo', JSON.stringify(mockData));
      setLoading(false);
      navigate('/admin/dashboard');
    } else {
      setLoading(false);
      setError('Invalid credentials. Use admin/admin123');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form-container">
        <h1>Admin Login</h1>
        {error && <div className="admin-error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="admin-login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;