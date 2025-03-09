import React from 'react';
import './OverviewCards.css';

function OverviewCards() {
  return (
    <div className="overview-cards">
      <div className="card">Total Sales: Rs. 50000</div>
      <div className="card">Total Orders: 150</div>
      <div className="card">Active Users: 300</div>
    </div>
  );
}

export default OverviewCards;