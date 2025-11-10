import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import img1 from "../assets/FinEase-Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { FaUser, FaGear } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const activeClass =
    "bg-gray-400 px-3 py-2 rounded-2xl transition-colors duration-200";
  const normalClass =
    "hover:bg-gray-300 px-3 py-2 rounded-2xl transition-colors duration-200";

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md">
      <div className="border-b-2 border-gray-200">
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/add-transaction"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Add Transaction
                </NavLink>
                <NavLink
                  to="/my-transactions"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  My Transactions
                </NavLink>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Reports
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  About
                </NavLink>
              </ul>
            </div>
            <NavLink className="btn btn-ghost text-xl text-center" to="/">
              <img src={img1} alt="FinEase Logo" className="w-8 h-8" />
              FinEase
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/add-transaction"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Add Transaction
              </NavLink>
              <NavLink
                to="/my-transactions"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                My Transactions
              </NavLink>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Reports
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                About
              </NavLink>
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {user ? (
              <>
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-9 border-2 border-gray-300 rounded-full">
                      <img
                        alt="User avatar"
                        referrerPolicy="no-referrer"
                        src={
                          user.photoURL ||
                          `https://ui-avatars.com/api/?name=${
                            user.displayName || "U"
                          }&background=random`
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                  >
                    <div className="pb-3 border-b border-b-gray-200">
                      <li className="text-sm font-bold">
                        {user.displayName || "User"}
                      </li>
                      <li className="text-xs">{user.email}</li>
                    </div>
                    <li className="mt-3">
                      <Link to="/my-transactions">
                        <FaUser /> My Transactions
                      </Link>
                    </li>
                    <li>
                      <Link to="/reports">
                        <FaGear /> Reports
                      </Link>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={signOutUser}
                  className="btn btn-outline hover:bg-gray-400  gap-2"
                >
                  <IoLogOut /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline hover:bg-gray-400  gap-2"
              >
                <IoLogIn /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
