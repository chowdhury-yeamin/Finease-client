import React from "react";
import { NavLink } from "react-router";
import img1 from "../assets/FinEase-Logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div className=" border-b-2 border-gray-200">
        <div className="navbar bg-base-100 w-11/12 mx-auto bg-gray-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-transaction">Add Transaction</NavLink>
                <NavLink to="/my-transactions">My Transactions</NavLink>
                <NavLink to="/reports">Reports</NavLink>
              </ul>
            </div>
            <NavLink className="btn btn-ghost text-xl  text-center">
              <img src={img1} alt="FinEase Logo" className="w-8 h-8 " />
              FinEase
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              <NavLink
                to="/"
                className="hover:bg-gray-300 px-3 py-2 rounded-2xl"
              >
                Home
              </NavLink>
              <NavLink
                to="/add-transaction"
                className="hover:bg-gray-300 px-3 py-2 rounded-2xl"
              >
                Add Transaction
              </NavLink>
              <NavLink
                to="/my-transactions"
                className="hover:bg-gray-300 px-3 py-2 rounded-2xl"
              >
                My Transactions
              </NavLink>
              <NavLink
                to="/reports"
                className="hover:bg-gray-300 px-3 py-2 rounded-2xl"
              >
                Reports
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink to="/login" className="btn btn-outline ml-2">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline ml-2">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
