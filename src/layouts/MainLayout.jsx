import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar className=""></Navbar>
      <main className="pt-[70px]">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
