import React from 'react';
import './OrdersTable.css';

function OrdersTable() {
  return (
    <div className="orders-table">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Adolf Hitler</td>
            <td>Rs. 1000</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;