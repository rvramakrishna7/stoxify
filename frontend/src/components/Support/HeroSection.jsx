import React from "react";

function HeroSection() {
  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="row justify-content-center gx-5">
        <div className="col-md-6">
          <h4>Support Portal</h4>
          <h5 className="py-3 fw-normal">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <form>
            <div className="position-relative">
              <input
                type="text"
                className="form-control form-control-lg ps-5"
                id="searchInput"
                placeholder="How do I activate F&O..."
              />
              <i
                className="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y ms-3 text-muted"
                style={{ right: "15px" }}
              ></i>
            </div>
          </form>
        </div>

        <div className="col-md-4 offset-md-1">
          <h4>Track Tickets</h4>
          <div className="mb-3">
            <h5 className="fw-normal">Featured</h5>
            <p>1. Introduction of new F&O contracts on 9 individual securities</p>
            <p>2. Rights Entitlements listing in May 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
