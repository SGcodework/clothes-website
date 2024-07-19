import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo/logo.webp";
import { FaCaretDown, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="header">
      <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <NavLink className="menu-item" onClick={closeNav} to={"/"}>
          Home
        </NavLink>
        <div className="menu-item category" onClick={toggleDropdown}>
          Category
          <FaCaretDown />
        </div>
        <div className={`dropdown-category ${dropdownOpen ? "open" : ""}`}>
          <NavLink to={"categories/men"} onClick={closeNav}>
            Men
          </NavLink>
          <NavLink to={"categories/women"} onClick={closeNav}>
            Women
          </NavLink>
        </div>
        <NavLink className="menu-item" to={"profile"} onClick={closeNav}>
          Profile
        </NavLink>
        <NavLink className="menu-item" to={"aboutus"} onClick={closeNav}>
          About us
        </NavLink>
      </div>
      <div className="container">
        <header>
          <div className="menu-bar">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"profile/login"}>Profile</NavLink>
            <NavLink to={"/Aboutus"}>About us</NavLink>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="profile-favourite-cart">
            <RiAccountCircleLine className="icon" />
            <PiShoppingCartSimpleFill className="icon" />
            <FaRegHeart className="icon" />
            <IoMenu className="mobile-menu-icon" onClick={openNav} />
          </div>
        </header>
      </div>
    </div>
  );
}
