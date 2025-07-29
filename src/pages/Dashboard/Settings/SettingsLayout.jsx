import React from "react";
import { Outlet, Link } from 'react-router-dom';


const SettingsLayout = () => {
  return (
    <div>
      <h2>Settings Layout</h2>
      <nav>
        <Link to="user">User</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
