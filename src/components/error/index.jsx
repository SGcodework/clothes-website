import React from "react";
import "./error.scss";
import { NavLink } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

export default function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Page Not Found !</p>
      <NavLink className="back-button" to="/">
        Back To Home <FaAnglesRight />
      </NavLink>
    </div>
  );
}
