import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Sales</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;