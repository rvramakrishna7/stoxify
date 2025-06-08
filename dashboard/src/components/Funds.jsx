import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="p-4 bg-white rounded shadow-sm w-100">
      <div className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <p className="fw-medium text-muted mb-2 mb-md-0">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div className="d-flex gap-2">
          <Link className="btn btn-success">Add funds</Link>
          <Link className="btn btn-primary">Withdraw</Link>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="p-4 border rounded bg-light h-100">
            <h5 className="fw-bold mb-4 border-bottom pb-2">Equity</h5>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Available margin</span>
                <span className="fw-semibold text-success">₹4,043.10</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Used margin</span>
                <span className="fw-semibold">₹3,757.30</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Available cash</span>
                <span className="fw-semibold">₹4,043.10</span>
              </div>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold mb-3 text-muted">Breakdown</h6>
              {[
                ["Opening Balance", "₹4,043.10"],
                ["Opening Balance", "₹3,736.40"],
                ["Payin", "₹4,064.00"],
                ["SPAN", "₹0.00"],
                ["Delivery margin", "₹0.00"],
                ["Exposure", "₹0.00"],
                ["Options premium", "₹0.00"],
              ].map(([label, value], idx) => (
                <div className="d-flex justify-content-between mb-2" key={idx}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <div>
              <h6 className="fw-semibold mb-3 text-muted">Collateral</h6>
              {[
                ["Collateral (Liquid funds)", "₹0.00"],
                ["Collateral (Equity)", "₹0.00"],
                ["Total Collateral", "₹0.00"],
              ].map(([label, value], idx) => (
                <div
                  className={`d-flex justify-content-between ${
                    idx < 2 ? "mb-2" : ""
                  }`}
                  key={idx}
                >
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
