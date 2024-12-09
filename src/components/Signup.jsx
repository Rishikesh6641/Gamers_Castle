import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Auth.css";
import { userSignup } from "./signupaxios"; // Ensure you have the correct path

const Signup = () => {
  // State for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("ROLE_USER");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const signupData = { firstName, lastName, role, contact, email, password, dob }; // Collect data
    await userSignup(signupData); // Call the signup function
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
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup-first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="signup-first-name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // Update firstName state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="signup-last-name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Update lastName state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-role">Role</label>
            <select
              className="form-control"
              id="signup-role"
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update role state
            >
              <option value="ROLE_USER">User</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="signup-contact">Contact</label>
            <input
              type="text"
              className="form-control"
              id="signup-contact"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)} // Update contact state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              className="form-control"
              id="signup-email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="signup-password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="signup-dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)} // Update dob state
              required
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
