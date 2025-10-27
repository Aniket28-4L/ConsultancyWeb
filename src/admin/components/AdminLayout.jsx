import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;