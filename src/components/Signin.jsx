import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Auth.css";
import { userSignin } from "./signinaxios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    const signinData = { email, password };
    await userSignin(signinData); // Call the userSignin function with form data
  };

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
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          <div className="form-group">
            <label htmlFor="signin-email">Email</label>
            <input
              type="email"
              className="form-control"
              id="signin-email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signin-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="signin-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <button type="submit" className="btn btn-block">
            Sign In
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
