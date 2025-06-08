import React from "react";

function PricingDetail() {
  return (
    <div className="container py-4 my-4">
      <h4 className="mb-4">Charges explained</h4>

      <div className="row">
        <div className="col-md-6 mb-4">
          <section className="mb-4">
            <h5 className="text-muted fw-normal">Securities/Commodities Transaction Tax</h5>
            <p className="text-muted">
              Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-muted">
              When trading at Stoxify, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Transaction/Turnover Charges</h5>
            <p className="text-muted">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <ul className="text-muted ps-3">
              <li>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
              </li>
              <li>
                BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
              </li>
              <li>
                BSE has revised transaction charges for group A, B and other non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on a flat rate basis w.e.f. December 1, 2022.
              </li>
              <li>
                BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Call & Trade</h5>
            <p className="text-muted">
              Additional charges of ₹50 per order for orders placed through a dealer at Stoxify including auto square off orders.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Stamp Charges</h5>
            <p className="text-muted">
              Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">NRI Brokerage Charges</h5>
            <ul className="text-muted ps-3">
              <li>₹100 per order for futures and options.</li>
              <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>₹500 + GST as yearly account maintenance charges (AMC).</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Account with Debit Balance</h5>
            <p className="text-muted">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
            <ul className="text-muted ps-3">
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST of traded value (premium value).</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
          </section>

          <section>
            <h5 className="text-muted fw-normal">Margin Trading Facility (MTF)</h5>
            <ul className="text-muted ps-3">
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
              </li>
              <li>MTF Brokerage: 0.3% or ₹20 per executed order, whichever is lower.</li>
              <li>MTF Pledge Charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>
          </section>
        </div>

        <div className="col-md-6 mb-4">
          <section className="mb-4">
            <h5 className="text-muted fw-normal">GST</h5>
            <p className="text-muted">
              Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">SEBI Charges</h5>
            <p className="text-muted">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">DP (Depository Participant) Charges</h5>
            <p className="text-muted">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Stoxify fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
            </p>
            <p className="text-muted">
              Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="text-muted">
              Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Pledging Charges</h5>
            <p className="text-muted">₹30 + GST per pledge request per ISIN.</p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">AMC (Account Maintenance Charges)</h5>
            <ul className="text-muted ps-3">
              <li>
                For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here
              </li>
              <li>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Corporate Action Order Charges</h5>
            <p className="text-muted">
              ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Stoxify Console.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Off-market Transfer Charges</h5>
            <p className="text-muted">₹25 per transaction.</p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Physical CMR Request</h5>
            <p className="text-muted">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Payment Gateway Charges</h5>
            <p className="text-muted">₹9 + GST (Not levied on transfers done via UPI)</p>
          </section>

          <section className="mb-4">
            <h5 className="text-muted fw-normal">Delayed Payment Charges</h5>
            <p className="text-muted">
              Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.
            </p>
          </section>

          <section>
            <h5 className="text-muted fw-normal">Trading using 3-in-1 Account with Block Functionality</h5>
            <ul className="text-muted ps-3">
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="row border-top pt-4 mt-4">
        <div className="col">
          <h5 className="text-muted fw-normal">Disclaimer</h5>
          <p className="text-muted">
            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals.
            Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients.
            Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage.
            A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens.
            For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingDetail;
