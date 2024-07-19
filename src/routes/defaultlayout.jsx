import React from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import { Outlet } from "react-router-dom";
import Signup from "../components/signup";

export default function DefaultLayOut() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}

      <Signup />
    </div>
  );
}
