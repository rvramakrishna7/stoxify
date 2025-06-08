import React from "react";

function RightSection({ heading, para, imageUrl }) {
  return (
    <div className="container py-5 my-4">
      <div className="row align-items-center gx-5">
        <div className="col-md-6 order-md-1 order-2">
          <h2 className="fw-semibold mb-3">{heading}</h2>
          <p className="fs-5 text-muted">{para}</p>
        </div>

        <div className="col-md-6 order-md-2 order-1 text-center">
          <img
            src={imageUrl}
            alt={heading}
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
