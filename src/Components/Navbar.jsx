import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import img1 from "../assets/FinEase-Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, signOutUser } = useContext(AuthContext);

  const activeClass =
    "bg-primary text-white px-3 py-2 rounded-lg transition-colors duration-200";
  const normalClass =
    "hover:bg-primary/20 px-3 py-2 rounded-lg transition-colors duration-200";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 left-0 z-50  shadow-md w-full px-6 bg-[#0FB19D]">
      <div className="border-b">
        <div className="navbar w-full mx-auto flex justify-between items-center py-3">
          <div className="navbar-start flex items-center gap-3">
            <Link
              className="flex items-center gap-2 hover:text-green-700"
              to="/"
            >
              <img src={img1} alt="FinEase Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">FinEase</span>
            </Link>
          </div>

          <div className="hidden lg:flex navbar-center">
            <ul className="flex gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
              {user ? (
                <NavLink
                  to="/add-transaction"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Add Transaction
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink
                  to="/my-transactions"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  My Transactions
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Reports
                </NavLink>
              ) : (
                ""
              )}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                About
              </NavLink>
              {user ? (
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  My Profile
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-4">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                defaultChecked={localStorage.getItem("theme") === "dark"}
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

            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-9 rounded-full border">
                      <img
                        alt="User"
                        src={user.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-100 rounded-box w-52 p-3 shadow"
                  >
                    <li className="font-bold text-sm">
                      {user.displayName || "User"}
                    </li>
                    <li className="text-xs mb-2">{user.email}</li>
                    <li>
                      <Link to="/my-profile">
                        <FaUser /> My Profile
                      </Link>
                    </li>
                  </ul>
                </div>

                <button onClick={signOutUser} className="btn btn-outline gap-2">
                  <BiLogOutCircle /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-outline gap-2">
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
