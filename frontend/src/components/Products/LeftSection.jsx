import React from "react";

function LeftSection({ imageUrl, heading, para, googleplay, appstore }) {
  return (
    <div className="container py-5 my-4">
      <div className="row align-items-center gx-5">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imageUrl}
            alt={heading}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{heading}</h2>
          <p className="fs-5 text-muted mb-4">{para}</p>

          {(googleplay || appstore) && (
            <div className="d-flex flex-wrap gap-3 mt-4">
              {googleplay && (
                <img
                  src={googleplay}
                  alt="Download on Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "160px", height: "auto" }}
                />
              )}
              {appstore && (
                <img
                  src={appstore}
                  alt="Download on App Store"
                  className="img-fluid"
                  style={{ maxWidth: "160px", height: "auto" }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
