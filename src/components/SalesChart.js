import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', sales: 5000 },
  { month: 'Feb', sales: 7000 },
  { month: 'Mar', sales: 6000 },
  { month: 'Apr', sales: 8000 },
  { month: 'May', sales: 10000 },
];

const SalesChart = () => (
  <div className="p-4 bg-white shadow-md rounded-lg">
    <h3 className="text-xl font-bold mb-4">Monthly Sales</h3>
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Bar dataKey="sales" fill="#4CAF50" />
    </BarChart>
  </div>
);

export default SalesChart;
