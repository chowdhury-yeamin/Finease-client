import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import img1 from "../assets/FinEase-Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { FaUser, FaGear } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, signOutUser } = useContext(AuthContext);

  const activeClass =
    "bg-gray-400 px-3 py-2 rounded-2xl transition-colors duration-200";
  const normalClass =
    "hover:bg-gray-300 px-3 py-2 rounded-2xl transition-colors duration-200";

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="border-b-2 ">
        <div className="navbar bg-base-100 w-11/12 mx-auto ">
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
              {user && (
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  My Profile
                </NavLink>
              )}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            <div className="">
              <label className="toggle text-base-content">
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
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
                        src={user.photoURL}
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
                      <Link to="/my-profile">
                        <FaUser /> My Profile
                      </Link>
                    </li>
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
                  <BiLogOutCircle /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline hover:bg-gray-400  gap-2"
              >
                <IoMdLogIn /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
