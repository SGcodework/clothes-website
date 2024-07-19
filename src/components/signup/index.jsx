import React from "react";

import "./signup.scss";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup-form">
      <h1 className="heading">Create an Account</h1>
      <p className="sub-heading">Join Us and Elevate Your Style</p>
      <div className="form">
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="button">Signup</button>
        </form>
      </div>
      <p className="bottom-text">
        Already have an account ?
        <NavLink to={"/login"}>
          <span>Login</span>
        </NavLink>
      </p>
    </div>
  );
}
