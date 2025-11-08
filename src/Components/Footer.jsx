import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../assets/FinEase-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={img1} alt="FinEase Logo" className="w-14 h-14 mb-2" />
          <h2 className="text-2xl font-bold text-blue-600">FinEase</h2>
          <p className="text-gray-500 mt-2">
            Simplify your personal finance management with ease.
          </p>
        </div>

        {/* Middle Section - Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-600">Email: chowdhuryyeamin07@gmail.com</p>
          <p className="text-gray-600">Phone: +880 1701101422</p>
          <p className="text-gray-600">Address: Sylhet , Bangladesh</p>
        </div>

        {/* Right Section - Terms & Social */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Quick Links
          </h3>
          <Link to="/terms" className="block text-gray-600 hover:text-blue-500">
            Terms & Conditions
          </Link>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-blue-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
