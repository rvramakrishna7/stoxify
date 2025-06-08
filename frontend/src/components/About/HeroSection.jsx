import React from "react";

function HeroSection() {
  return (
    <div className="container py-5 my-5">
      <div className="row text-center mb-5">
        <div className="col-lg-10 mx-auto">
          <h1 className="fw-semibold mb-3">
            We introduced the discount broking model in India.
          </h1>
          <h4 className="text-muted">
            Now, we’re pushing boundaries with our technology.
          </h4>
        </div>
      </div>

      <div className="row gx-5">
        <div className="col-md-6">
          <p className="text-muted fs-5 mb-4">
            Stoxify began its journey on August 15, 2010, with a mission to eliminate
            the hurdles investors and traders face in terms of cost, accessibility, and
            technology. The name “Stoxify” reflects our aim to simplify stock investing
            for everyone.
          </p>
          <p className="text-muted fs-5 mb-4">
            Today, our innovative pricing structure and proprietary technology have
            helped us grow into one of India’s leading stock broking platforms.
          </p>
          <p className="text-muted fs-5 mb-4">
            With over 1.5+ crore clients placing billions of orders every year, Stoxify
            contributes to a significant share of retail trading volumes in India.
          </p>
        </div>

        <div className="col-md-6">
          <p className="text-muted fs-5 mb-4">
            We also run several open educational and community-driven initiatives to
            empower retail investors and traders with knowledge.
          </p>
          <p className="text-muted fs-5 mb-4">
            Through our fintech initiative, we invest in promising startups that aim
            to strengthen and expand India's financial markets.
          </p>
          <p className="text-muted fs-5 mb-4">
            We’re constantly building and improving. Follow our latest developments on
            our blog, explore media coverage, or dive deeper into our mission and
            philosophy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
