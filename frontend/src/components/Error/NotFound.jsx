import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Oops! Page not found.</h2>
        <p className="text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <span>Return to Stoxify</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;