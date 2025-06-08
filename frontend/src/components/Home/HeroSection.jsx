import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="container-fluid py-5  bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col">
            <h1 className=" fw-semibold mb-3">
              Next-Gen Trading. Built for Speed. Made for You.
            </h1>
            <h5 className="text-muted mb-4">
              Take control of your investments with our cutting-edge technology.
              High-performance platform built for the modern investor.
            </h5>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <img
              className="img-fluid rounded shadow-sm my-4"
              src="/media/images/HomeHeroSection.png"
              alt="Stoxify Home Page"
            />

            <h2 className="fw-semibold my-3">Invest in Everything</h2>
            <p className="text-muted fs-5 mb-4">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>

            <Link
              to="/signup"
              className="btn btn-primary btn-lg px-4 py-2 text-decoration-none"
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
