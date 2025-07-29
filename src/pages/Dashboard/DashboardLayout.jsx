// pages/Dashboard/DashboardLayout.jsx
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => (
  <div>
    <h2>Admin Dashboard</h2>
    <nav>
      <Link to="analytics">Analytics</Link>
      <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default DashboardLayout;
