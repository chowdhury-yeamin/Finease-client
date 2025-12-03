import { Link } from "react-router";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import img1 from "../assets/FinEase-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="relative border-t bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-slate-700/50 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A9284]/20 via-transparent to-[#0FB19D]/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={img1}
                alt="FinEase Logo"
                className="w-12 h-12 drop-shadow-lg"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0FB19D] to-[#0A9284] bg-clip-text text-transparent">
                FinEase
              </h2>
            </div>
            <p className="text-slate-300 dark:text-slate-300 mb-6 max-w-md leading-relaxed">
              Simplify your personal finance management with FinEase. Track
              income, manage expenses, and achieve your financial goals.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0FB19D] dark:text-slate-400 dark:hover:text-[#0FB19D] text-2xl transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0FB19D] dark:text-slate-400 dark:hover:text-[#0FB19D] text-2xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-items"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  All Items
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  Support
                </Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {user && (
                <>
                  <li>
                    <Link
                      to="/add-transaction"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      Add Transaction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-transactions"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      My Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-profile"
                      className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      My Profile
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/terms"
                  className="text-slate-300 dark:text-slate-300 hover:text-[#0FB19D] dark:hover:text-[#0FB19D] transition-colors duration-200 inline-block hover:translate-x-1"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 dark:border-slate-700/50 mt-10 pt-6 text-center">
          <p className="text-slate-400 dark:text-slate-400">
            © {new Date().getFullYear()} FinEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
