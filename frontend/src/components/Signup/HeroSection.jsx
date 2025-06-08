import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HeroSection() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/signup", inputValue, {
        withCredentials: true,
      });

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("username", data.user.username);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Signup failed. Please try again.");
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="container py-5 my-3">
      <div className="text-center mb-5">
        <h1 className="fw-semibold">Open a Free Demat & Trading Account</h1>
        <h5 className="text-muted mt-3">
          Join over 1.6 crore investors and traders. Zero brokerage. Full control.
        </h5>
      </div>

      <div className="row align-items-center g-5">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            className="img-fluid rounded shadow-sm"
            src="/media/images/StoxifyPlatformInterface.png"
            alt="Stoxify Platform Interface"
          />
        </div>

        {/* Signup Form Section */}
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">Sign up now</h2>
          <p className="text-muted mb-4">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
                placeholder="Enter a unique username"
                name="username"
                value={username}
                onChange={handleOnChange}
                required
              />
              <label htmlFor="floatingUsername">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleOnChange}
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleOnChange}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign up
              </button>
            </div>

            <p className="text-muted text-center mt-4 mb-2" style={{ fontSize: "0.9rem" }}>
              By proceeding, you agree to the <span className="text-primary">Stoxify terms & privacy policy</span>.
            </p>

            <p className="text-muted text-center" style={{ fontSize: "0.9rem" }}>
              Already have an account?
              <Link className="ms-1 text-decoration-none text-primary" to="/login">
                Login
              </Link>
            </p>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
