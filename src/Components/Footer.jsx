import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../assets/FinEase-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
  const activeClass =
    "bg-[#0FB19D] text-white px-3 py-2 rounded-lg transition-colors duration-200";
  const normalClass =
    "hover:bg-[#0FB19D]/20 px-3 py-2 rounded-lg transition-colors duration-200";

  const { user } = useContext(AuthContext);

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={img1} alt="FinEase Logo" className="w-14 h-14 mb-2" />
          <h2 className="text-2xl font-bold text-[#0FB19D] dark:text-[#0FB19D]">FinEase</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Simplify your personal finance management with FinEase.
          </p>
        </div>

        {/* Middle Section - Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-400">Email: chowdhuryyeamin07@gmail.com</p>
          <p className="text-gray-600 dark:text-gray-400">Phone: +880 1701101422</p>
          <p className="text-gray-600 dark:text-gray-400">Address: Sylhet, Bangladesh</p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Home
            </Link>
            {user && (
              <Link to="/add-transaction" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Add Transaction
              </Link>
            )}
            {user && (
              <Link to="/my-transactions" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                My Transactions
              </Link>
            )}
            {user && (
              <Link to="/reports" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Reports
              </Link>
            )}
            <Link to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              About
            </Link>
            {user && (
              <Link to="/my-profile" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                My Profile
              </Link>
            )}
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-[#0FB19D] text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#0FB19D]/70 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#0FB19D]/90 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
