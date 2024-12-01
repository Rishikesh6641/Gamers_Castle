import React from "react";
import { Link } from "react-router-dom";
import "./style/Auth.css";

const Signup = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <h2>
                GAMER'S <em style={{ color: "#e63946" }}>CASTLE</em>
              </h2>
            </a>
          </div>
        </nav>
      </header>

      <div className="auth-section">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="signup-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="signup-name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              className="form-control"
              id="signup-email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="signup-password"
              placeholder="Create a password"
            />
          </div>
          <button type="submit" className="btn btn-block">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
