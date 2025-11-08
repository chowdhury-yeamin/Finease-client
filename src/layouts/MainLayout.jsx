import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar className=""></Navbar>
      <Outlet className=""></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
