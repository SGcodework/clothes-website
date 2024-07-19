import React from "react";
import "./categories.scss";
import women from "../../assets/images/women/women.webp";
import men from "../../assets/images/men/men.webp";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <div className="category-grid">
          <NavLink to={"/categories/men"} className="category ">
            <div className="category-pic men">
              <img src={men} alt="category-pic" />
            </div>
            <div className="category-name">
              <p>Men</p>
            </div>
          </NavLink>
          <NavLink to={"/categories/women"} className="category">
            <div className="category-pic women">
              <img src={women} alt="category-pic" />
            </div>
            <div className="category-name">
              <p>Women</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
