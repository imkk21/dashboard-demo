import React from 'react';

const Sidebar = () => (
  <div className="w-64 h-screen bg-blue-800 text-white p-4">
    <h2 className="text-2xl font-bold mb-6">E-Shop Dashboard</h2>
    <ul>
      <li className="py-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
      <li className="py-2 hover:bg-blue-700 cursor-pointer">Orders</li>
      <li className="py-2 hover:bg-blue-700 cursor-pointer">Products</li>
      <li className="py-2 hover:bg-blue-700 cursor-pointer">Customers</li>
      <li className="py-2 hover:bg-blue-700 cursor-pointer">Settings</li>
    </ul>
  </div>
);

export default Sidebar;
