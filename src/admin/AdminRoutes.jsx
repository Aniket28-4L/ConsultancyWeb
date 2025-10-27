import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminLayout from './components/AdminLayout';
import Dashboard from './Dashboard';
import ManageCountries from './pages/ManageCountries';
import ManageUniversities from './pages/ManageUniversities';
import ManageTestimonials from './pages/ManageTestimonials';
import ManageInquiries from './pages/ManageInquiries';
import ManageServices from './pages/ManageServices';
import ManageProcesses from './pages/ManageProcesses';
import ManageDocumentation from './pages/ManageDocumentation';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="countries" element={<ManageCountries />} />
        <Route path="universities" element={<ManageUniversities />} />
        <Route path="testimonials" element={<ManageTestimonials />} />
        <Route path="inquiries" element={<ManageInquiries />} />
        <Route path="services" element={<ManageServices />} />
        <Route path="processes" element={<ManageProcesses />} />
        <Route path="documentation" element={<ManageDocumentation />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;