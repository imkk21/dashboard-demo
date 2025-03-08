import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import OverviewCards from './components/OverviewCards';
import OrdersTable from './components/OrdersTable';
import SalesChart from './components/SalesChart';

const App = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-6">
      <TopBar />
      <OverviewCards />
      <div className="grid grid-cols-2 gap-4">
        <OrdersTable />
        <SalesChart />
      </div>
    </div>
  </div>
);

export default App;
