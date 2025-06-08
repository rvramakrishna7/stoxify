import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container bg-white border-bottom py-2 px-3 d-flex justify-content-between align-items-center shadow-sm">
      <div className="indices-container d-flex gap-4 align-items-center">
        <div className="text-center">
          <p className="mb-1 fw-semibold text-muted small">NIFTY 50</p>
          <p className="mb-0 fw-bold text-success small">
            22,100.45 <span className="ms-2 text-success">+0.75%</span>
          </p>
        </div>
        <div className="text-center">
          <p className="mb-1 fw-semibold text-muted small">SENSEX</p>
          <p className="mb-0 fw-bold text-danger small">
            73,050.21 <span className="ms-2 text-danger">-0.42%</span>
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
