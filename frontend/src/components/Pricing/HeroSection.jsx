import React from 'react';

function HeroSection() {
  return (
    <div className="container py-5 my-4 text-center">
      <h1 className="fw-bold mb-3">Charges</h1>
      <h4 className="text-muted fw-normal mb-5">List of all charges and taxes</h4>

      <div className="row g-4">
        <div className="col-md-4">
          <img src="/media/images/pricing0.svg" alt="Zero Cost" className="mb-3" />
          <h5 className="fw-semibold">Zero-Cost Equity Delivery</h5>
          <p className="text-muted fs-6">
            Invest in equity delivery across NSE and BSE with absolutely no brokerage charges — it's completely free.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/media/images/pricingEquity.svg" alt="Free Mutual Funds" className="mb-3" />
          <h5 className="fw-semibold">Free Direct Mutual Funds</h5>
          <p className="text-muted fs-6">
            Enjoy investing in direct mutual funds at zero cost — no commissions, no DP charges.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/media/images/intradayTrades.svg" alt="Flat Pricing" className="mb-3" />
          <h5 className="fw-semibold">Flat Pricing for Intraday & F&O</h5>
          <p className="text-muted fs-6">
            Trade intraday in equities, currencies, or commodities at just ₹20 or 0.03% per order — whichever is lower.
            Options? Just ₹20 flat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
