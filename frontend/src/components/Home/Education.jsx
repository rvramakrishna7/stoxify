import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <img
            className="img-fluid rounded shadow-sm"
            src="/media/images/Education.png"
            alt="Stoxify Education"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3 fw-semibold">Learn the markets, your way</h2>
          <p className="text-muted mb-4">
            Stoxify Learn is your go-to platform for free, in-depth stock market
            education—crafted for everyone from curious beginners to seasoned
            traders. Explore everything from fundamental concepts to advanced
            strategies, all in one place.
          </p>
          <a href="#" className="text-primary text-decoration-none icon-link-hover d-inline-flex align-items-center mb-4">
            Stoxify Learn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi ms-2"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>

          <h2 className="mb-3 fw-semibold">Ask. Discuss. Grow.</h2>
          <p className="text-muted mb-4">
            Stoxify Forum is where investors, traders, and finance enthusiasts
            come together. Join India’s most active market-focused community and
            get your questions answered, share insights, and stay ahead in the
            world of investing.
          </p>
          <a href="#" className="text-primary text-decoration-none icon-link-hover d-inline-flex align-items-center">
            Trading Q&A
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
    </section>
  );
}

export default Education;
