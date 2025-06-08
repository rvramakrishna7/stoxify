import React from "react";

function Benefits() {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6 text-center">
          <img
            className="img-fluid w-75 mb-4"
            src="/media/images/acop-benefits.svg"
            alt="Stoxify Ecosystem Benefits"
          />
          <h3 className="fw-semibold">Benefits of Opening a Stoxify Demat Account</h3>
        </div>

        <div className="col-md-6">
          {[
            {
              icon: "💸",
              title: "Transparent & Affordable Pricing",
              desc: "Invest in equities and mutual funds at zero cost. Trade intraday and F&O at a flat ₹20 per order — no hidden fees.",
            },
            {
              icon: "🔒",
              title: "No Spam. No Noise.",
              desc: "At Stoxify, we respect your time and focus. No distractions, no pushy notifications, and no gimmicks — just real value.",
            },
            {
              icon: "🌐",
              title: "A Complete Investment Ecosystem",
              desc: "More than just a platform — get complimentary access to our growing suite of intelligent tools and partner services.",
            },
            {
              icon: "🚀",
              title: "Seamless Trading Experience",
              desc: "Enjoy a clean, user-friendly platform designed for both beginners and seasoned investors — intuitive, fast, and reliable.",
            },
          ].map((item, idx) => (
            <div key={idx} className="mb-4">
              <h5 className="fw-semibold">{item.icon} {item.title}</h5>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
