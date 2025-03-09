import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import OverviewCards from './components/OverviewCards';
import SalesChart from './components/SalesChart';
import OrdersTable from './components/OrdersTable';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <OverviewCards />
        <SalesChart />
        <OrdersTable />
      </div>
    </div>
  );
}

export default App;