import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import img1 from "../assets/FinEase-Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const activeClass =
    "bg-white/20 text-white px-3 py-2 rounded-lg transition-colors duration-200 font-medium flex items-center";
  const normalClass =
    "hover:bg-white/10 text-white px-3 py-2 rounded-lg transition-colors duration-200 flex items-center";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 left-0 z-50 shadow-lg w-full bg-gradient-to-r from-[#0A9284] to-[#0FB19D] dark:from-slate-900 dark:to-slate-800 border-b border-slate-700/50 dark:border-slate-700/50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex justify-between items-center py-3 min-h-[64px]">
          {/* LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              to="/"
            >
              <img src={img1} alt="FinEase Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white dark:text-white">
                FinEase
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <ul className="flex items-center gap-2 text-white dark:text-gray-100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/all-items"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                All Items
              </NavLink>

              {!user ? (
                <>
                  
                </>
              ) : (
                <>
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
                </>
              )}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Support
              </NavLink>
            </ul>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] dark:from-slate-900 dark:to-slate-800 border-t border-white/20 dark:border-slate-700/50 shadow-lg backdrop-blur-sm">
              <ul className="flex flex-col p-4 gap-2 text-white">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/all-items"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  All Items
                </NavLink>

                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? activeClass : normalClass
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? activeClass : normalClass
                      }
                    >
                      Register
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/add-transaction"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? activeClass : normalClass
                      }
                    >
                      Add Transaction
                    </NavLink>
                    <NavLink
                      to="/my-transactions"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? activeClass : normalClass
                      }
                    >
                      My Transactions
                    </NavLink>
                    <NavLink
                      to="/reports"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? activeClass : normalClass
                      }
                    >
                      Reports
                    </NavLink>
                  </>
                )}

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/support"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Support
                </NavLink>

                {user && (
                  <NavLink
                    to="/my-profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : normalClass
                    }
                  >
                    My Profile
                  </NavLink>
                )}
              </ul>
            </div>
          )}

          {/* RIGHT SIDE (THEME + USER) */}
          <div className="flex items-center gap-3 shrink-0">
            <label className="toggle cursor-pointer flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="sr-only"
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
                    className="btn btn-ghost btn-circle avatar flex items-center justify-center"
                  >
                    <div className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden flex items-center justify-center">
                      <img
                        alt="User"
                        src={user.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-white dark:bg-slate-800 rounded-box w-52 p-3 shadow-xl border border-slate-200 dark:border-slate-700"
                  >
                    <li className="font-bold text-sm text-slate-800 dark:text-slate-100">
                      {user.displayName || "User"}
                    </li>
                    <li className="text-xs mb-2 text-slate-600 dark:text-slate-400">
                      {user.email}
                    </li>
                    <li>
                      <Link
                        to="/my-profile"
                        className="text-slate-800 dark:text-slate-100 hover:text-[#0A9284] dark:hover:text-[#0FB19D] flex items-center gap-2 transition-colors"
                      >
                        <FaUser /> My Profile
                      </Link>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={signOutUser}
                  className="btn btn-outline gap-2 text-white border-white hover:bg-white hover:text-[#0A9284] dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0A9284] flex items-center"
                >
                  <BiLogOutCircle /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline gap-2 text-white border-white hover:bg-white hover:text-[#0A9284] dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0A9284] flex items-center"
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
