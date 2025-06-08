import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid p-0 border-bottom sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center gap-2 hover-effect"
            to="/"
          >
            <i className="fa-solid fa-arrow-trend-up text-primary fs-4"></i>
            <span className="fw-bold fs-5">Stoxify</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-lg-4">
              {["signup", "about", "product", "pricing", "support"].map((page) => (
                <li className="nav-item" key={page}>
                  <Link
                    className="nav-link text-muted fw-semibold hover-effect"
                    to={`/${page}`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                </li>
              ))}

              {/* Login menu item */}
              <li className="nav-item">
                <Link
                  className="nav-link text-primary fw-semibold d-flex align-items-center gap-1 hover-effect"
                  to="/login"
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
