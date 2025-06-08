import React from "react";
import "./Assurance.css"; 

function Assurance() {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center gy-5">
        {/* Text Column */}
        <div className="col-md-6">
          <div className="mb-4">
            <h4 className="fw-semibold">Built on Trust</h4>
            <h5 className="fw-normal text-secondary">Your goals, our priority</h5>
            <p className="text-muted">
              Over 16 million users rely on Stoxify to manage their equity portfolios, with investments totaling over ₹6 lakh crores.
              We proudly support more than 15% of India’s daily retail trading activity.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">No noise, just value</h4>
            <h5 className="fw-normal text-secondary">Straightforward experience</h5>
            <p className="text-muted">
              At Stoxify, there’s no spam, tricks, or overwhelming notifications. Just powerful, easy-to-use tools designed for clarity and control.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">More than just a platform</h4>
            <h5 className="fw-normal text-secondary">A complete financial ecosystem</h5>
            <p className="text-muted">
              Through partnerships with 30+ fintech startups, Stoxify delivers a wide range of services tailored to every investor’s journey.
            </p>
          </div>

          <div>
            <h4 className="fw-semibold">Empowering smarter decisions</h4>
            <h5 className="fw-normal text-secondary">Tools that go beyond transactions</h5>
            <p className="text-muted">
              Features like SmartAlerts and TradingGuard are designed to help you make better financial choices—not just place orders.
            </p>
          </div>
        </div>

        {/* Image + Links Column */}
        <div className="col-md-6 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="Stoxify Ecosystem"
            className="img-fluid rounded shadow-sm mb-4"
          />

          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href="#" className="text-decoration-none text-primary d-flex align-items-center icon-link-hover">
              Explore our products
               <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ms-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
            </a>

            <a href="#" className="text-decoration-none text-primary d-flex align-items-center icon-link-hover">
              Try Stoxify demo
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ms-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
            </a>
          </div>
        </div>

        {/* Press Logos */}
        <div className="col-12 text-center mt-5">
          <img src="/media/images/press-logos.png" alt="Stoxify Press Mentions" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Assurance;
