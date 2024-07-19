import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-grid__item">
          <h3 className="footer-heading">SHOP</h3>
          <span>Ladies</span>
          <span>Men</span>
          <span>Sports</span>
          <span>Magazine</span>
        </div>
        <div className="footer-grid__item">
          <h3 className="footer-heading">CORPORATE INFO</h3>
          <span>Press</span>
          <span>Investor relations</span>
          <span>Corporate governance</span>
        </div>
        <div className="footer-grid__item">
          <h3 className="footer-heading">HELP</h3>
          <span>Customer Service</span>
          <span>Find a store</span>
          <span>Legal & Privacy</span>
          <span>Contact</span>
          <span>Report a scam</span>
          <span>Cookie Notice</span>
          <span>Cookie Settings</span>
        </div>
        <div className="footer-grid__item">
          <h3></h3>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
