import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-body-tertiary border-top pt-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand + Social */}
          <div className="col-lg-3 col-sm-6">
            <a className="navbar-brand d-block mb-2" href="#">
              <h5 className="fw-bold">
                <i className="fa-solid fa-arrow-trend-up text-primary me-2"></i>
                Stoxify
              </h5>
            </a>
            <p className="mb-1 text-muted">&copy;2025 Stoxify Broking Ltd</p>
            <p className="text-muted">All rights reserved.</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="social-icon">
                <i className="fa-brands fa-square-facebook fs-4"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-square-twitter fs-4"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-instagram fs-4"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-linkedin-in fs-4"></i>
              </a>
            </div>
          </div>

          {/* Account Links */}
          <div className="col-lg-2 col-sm-6">
            <h6 className="fw-semibold mb-3">Account</h6>
            {[
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "Commodity",
              "Dematerialization",
              "Fund Transfer",
              "MTF",
              "Referral Program",
            ].map((text, idx) => (
              <a
                key={idx}
                href="#"
                className="d-block text-muted text-decoration-none mb-1"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Support Links */}
          <div className="col-lg-2 col-sm-6">
            <h6 className="fw-semibold mb-3">Support</h6>
            {[
              "Contact us",
              "Support Portal",
              "How to file a complaint?",
              "Status of your complaints",
              "Bulletin",
              "Circular",
              "Z-connect Blog",
              "Downloads",
            ].map((text, idx) => (
              <a
                key={idx}
                href="#"
                className="d-block text-muted text-decoration-none mb-1"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-sm-6">
            <h6 className="fw-semibold mb-3">Company</h6>
            {[
              "About",
              "Philosophy",
              "Press & Media",
              "Careers",
              "Stoxify Cares",
              "Stoxify.tech",
              "Open Source",
            ].map((text, idx) => (
              <a
                key={idx}
                href="#"
                className="d-block text-muted text-decoration-none mb-1"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-sm-6">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            {[
              "Upcoming IPOs",
              "Brokerage Charges",
              "Market Holidays",
              "Economic Calendar",
              "Calculators",
              "Markets",
              "Sectors",
            ].map((text, idx) => (
              <a
                key={idx}
                href="#"
                className="d-block text-muted text-decoration-none mb-1"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="row my-5">
          <div className="col">
            <div className="accordion" id="disclaimerAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#disclaimerCollapse"
                    aria-expanded="false"
                    aria-controls="disclaimerCollapse"
                  >
                    Attention Investors & Disclaimer
                  </button>
                </h2>
                <div
                  id="disclaimerCollapse"
                  className="accordion-collapse collapse"
                  data-bs-parent="#disclaimerAccordion"
                >
                  <div className="accordion-body text-muted small">
                    <p>
                      Stoxify Broking Ltd.: Member of NSE, BSE & MCX – SEBI
                      Registration no.: #. CDSL/NSDL: Depository services
                      through Stoxify Broking Ltd. Commodity Trading through
                      Stoxify Commodities Pvt. Ltd. Registered office: NSE
                      Exchange Plaza, Bandra (E), Mumbai.
                    </p>
                    <p>
                      Complaints:{" "}
                      <a href="#" className="text-decoration-none">
                        complaints@stoxify.com
                      </a>{" "}
                      |{" "}
                      <a href="#" className="text-decoration-none">
                        dp@stoxify.com
                      </a>
                    </p>
                    <p>
                      File complaint on{" "}
                      <a href="#" className="text-decoration-none">
                        SEBI SCORES
                      </a>
                      : Register, provide Name, PAN, Mobile, Email. Benefit:
                      Speedy redressal.
                    </p>
                    <p>
                      <a href="#" className="text-decoration-none">
                        Smart ODR | Grievance Redressal
                      </a>
                    </p>
                    <p>
                      Stock market investments are subject to risks. Read all
                      related documents carefully before investing.
                    </p>
                    <p>
                      Prevent unauthorized transactions. Update your contact
                      info with your broker/DP. Get OTPs directly from the
                      depository.
                    </p>
                    <p>
                      IPO subscription doesn’t require a cheque. Sign and
                      mention your bank details on the form. Beware of fraud —
                      Stoxify does not offer stock tips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="row border-top pt-3">
          <div className="col d-flex flex-wrap justify-content-center gap-3 small text-muted">
            {[
              "NSE",
              "BSE",
              "MCX",
              "Terms & conditions",
              "Policies & procedures",
              "Privacy policy",
              "Disclosure",
              "For investor's attention",
              "Investor charter",
            ].map((link, idx) => (
              <a key={idx} href="#" className="text-decoration-none text-muted">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
