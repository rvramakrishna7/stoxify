import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const handleBuyClick = () => {
    axios.post("https://stoxify-c63v.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    GeneralContext.closeBuyWindow();
  };
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };
  return (
    <div
      className="container buy-window shadow-sm border rounded"
      id="buy-window"
      draggable="true"
    >
      <div className="regular-order">
        <div className="row g-3">
          <div className="col-6">
            <fieldset className="form-fieldset">
              <legend className="form-label">Qty</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                className="form-control form-control-sm"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                min="1"
              />
            </fieldset>
          </div>
          <div className="col-6">
            <fieldset className="form-fieldset">
              <legend className="form-label">Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control form-control-sm"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
                min="1"
              />
            </fieldset>
          </div>
        </div>
      </div>

      <div className="buttons d-flex justify-content-between align-items-center border-top pt-3 px-3">
        <span className="text-muted small">Margin required ₹140.65</span>
        <div>
          <Link
            className="btn btn-sm btn-success me-2"
            onClick={handleBuyClick}
          >
            Buy
          </Link>
          <Link
            to=""
            className="btn btn-sm btn-outline-secondary"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BuyActionWindow;
