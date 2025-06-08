import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-center p-5 bg-light rounded shadow-sm">
      <p className="fs-5 text-muted mb-3">
        You haven't placed any orders today
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2 fw-semibold">
        Get started
      </Link>
    </div>
  );
};

export default Orders;
