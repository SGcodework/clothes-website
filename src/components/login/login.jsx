import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-form">
      <h1 className="heading">Login</h1>
      <p className="sub-heading">Login to Unlock Your Wardrobe.</p>
      <div className="form">
        <form action="">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <Link class="forgot-password">Forgot Password?</Link>
        </form>
        <NavLink to={"/"}>
          <button className="button">Login</button>
        </NavLink>
      </div>
    </div>
  );
}
