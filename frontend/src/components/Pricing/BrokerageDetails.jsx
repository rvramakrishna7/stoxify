import React from "react";

function BrokerageDetails() {
  return (
    <div className="container py-5 my-4">
      <h2 className="mb-4 text-center">Brokerage & Regulatory Charges</h2>
      <div className="table-responsive border rounded p-3 shadow-sm">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Type</th>
              <th>Brokerage</th>
              <th>STT/CTT</th>
              <th>Transaction Charges</th>
              <th>GST</th>
              <th>SEBI Charges</th>
              <th>Stamp Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Equity Delivery</strong></td>
              <td>Zero</td>
              <td>0.1% on buy & sell</td>
              <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
              <td>18% on all charges</td>
              <td>₹10 / crore</td>
              <td>0.015% or ₹1500 / crore</td>
            </tr>
            <tr>
              <td><strong>Equity Intraday</strong></td>
              <td>₹20 or 0.03%</td>
              <td>0.025% (Sell)</td>
              <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
              <td>18% on all charges</td>
              <td>₹10 / crore</td>
              <td>0.003% or ₹300 / crore</td>
            </tr>
            <tr>
              <td><strong>F&O Futures</strong></td>
              <td>₹20 or 0.03%</td>
              <td>0.02% (Sell)</td>
              <td>NSE: 0.00173%</td>
              <td>18% on all charges</td>
              <td>₹10 / crore</td>
              <td>0.002% or ₹200 / crore</td>
            </tr>
            <tr>
              <td><strong>F&O Options</strong></td>
              <td>Flat ₹20</td>
              <td>
                <ul className="list-unstyled mb-0">
                  <li>0.125% on exercised buy</li>
                  <li>0.1% on sell (premium)</li>
                </ul>
              </td>
              <td>NSE: 0.03503%<br />BSE: 0.0325%</td>
              <td>18% on all charges</td>
              <td>₹10 / crore</td>
              <td>0.003% or ₹300 / crore</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BrokerageDetails;
