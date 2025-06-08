import React from "react";

function TeamInfo() {
  return (
    <div className="container py-5 my-5">
      <h2 className="text-center fw-semibold mb-5">Meet Our Founder</h2>

      <div className="row align-items-center g-5">
        <div className="col-md-6 text-center">
          <div
            className="rounded-circle overflow-hidden shadow border border-3 border-primary mx-auto"
            style={{ width: "240px", height: "240px" }}
          >
            <img
              src="/media/images/Founder.jpg"
              alt="Stoxify Founder"
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h5 className="mt-4 mb-1 fw-semibold">Ramakrishna</h5>
          <p className="text-muted">Founder, Stoxify</p>
        </div>

        <div className="col-md-6">
          <p className="text-muted fs-5 mb-4">
            Ramakrishna founded Stoxify in 2010, driven by the challenges he
            experienced during his 10-year journey as a trader. Since then,
            Stoxify has transformed the face of India's broking industry.
          </p>
          <p className="text-muted fs-5 mb-4">
            He is a certified full-stack developer and holds certifications in
            NISM.
          </p>
          <p className="text-muted fs-5 mb-0">
            When away from the screen, you'll find him sharpening his strategy
            over a game of chess.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
