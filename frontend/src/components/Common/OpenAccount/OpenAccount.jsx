import React from 'react';
import {Link} from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">

            <h2 className="fw-semibold my-3">Open a Stoxify account</h2>
            <p className="text-muted fs-5 mb-4">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <Link
              to="/signup"
              className="btn btn-primary btn-lg px-4 py-2 text-decoration-none"
            >
              Sign up for free
            </Link>
          </div>
        </div>
     );
}

export default OpenAccount;