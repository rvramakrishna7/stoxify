import React from "react";
import './Pricing.css';

function Pricing() {
  const features = [
    {
      img: "/media/images/pricing0.svg",
      text: "Free account opening and more with Stoxify",
    },
    {
      img: "/media/images/pricingEquity.svg",
      text: "Free equity delivery & direct mutual funds",
    },
    {
      img: "/media/images/intradayTrades.svg",
      text: "Intraday & F&O trading at flat brokerage",
    },
  ];

  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center g-5">
        {/* Left Column */}
        <div className="col-lg-5">
          <h2 className="fw-semibold mb-4 text-dark">Unbeatable Pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="text-decoration-none link-hover text-primary d-inline-flex align-items-center fw-semibold mt-3"
          >
            See Pricing
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

        {/* Right Column - Features */}
        <div className="col-lg-7">
          <div className="row gy-4 justify-content-center">
            {features.map((feature, idx) => (
              <div className="col-md-6 d-flex" key={idx}>
                <div className="feature-card d-flex align-items-center p-3 rounded-4 shadow-sm bg-white h-100 w-100">
                  <div className="icon-container me-3">
                    <img src={feature.img} alt="" className="img-fluid" />
                  </div>
                  <div className="text-muted small">{feature.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
