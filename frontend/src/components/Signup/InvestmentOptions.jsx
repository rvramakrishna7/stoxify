import React from 'react';

function InvestmentOptions() {
  return (
    <div className="container py-5 my-5">
      <h1 className="text-center fw-semibold mb-5">
        Investment Options with Stoxify Demat Account
      </h1>

      <div className="row text-center g-5">
        {[
          {
            title: 'Stocks',
            img: '/media/images/stocks-acop.svg',
            desc: 'Invest in all exchange-listed securities',
          },
          {
            title: 'Mutual Funds',
            img: '/media/images/mf-acop.svg',
            desc: 'Invest in commission-free direct mutual funds',
          },
          {
            title: 'IPO',
            img: '/media/images/ipo-acop.svg',
            desc: 'Apply to the latest IPOs instantly via UPI',
          },
          {
            title: 'Futures & Options',
            img: '/media/images/fo-acop.svg',
            desc: 'Hedge and mitigate market risk through simplified F&O trading',
          },
        ].map((option, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <img
              src={option.img}
              alt={`Stoxify ${option.title}`}
              className="img-fluid mb-4"
              style={{ maxHeight: "100px" }}
            />
            <h5 className="fw-semibold">{option.title}</h5>
            <p className="text-muted">{option.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-4">
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default InvestmentOptions;
