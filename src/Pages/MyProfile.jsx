import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Mail, User } from "lucide-react";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8 flex items-center justify-center my-10">
      <div className="shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-w-6xl w-full backdrop-blur-md bg-white/90 dark:bg-[#1A1A1A]/95">
        {/* Sidebar Card */}
        <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center p-10 w-full md:w-1/3">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-2xl font-bold mb-1">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            {user?.email || "example@email.com"}
          </p>
        </div>

        {/* Profile Info Section */}
        <div className="flex-1 p-10 bg-white dark:bg-[#0B0B0B]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
            <User className="w-8 h-8 text-blue-600" /> Account Information
          </h1>

          <div className="space-y-6">
            <div>
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm font-semibold mb-1">
                Full Name
              </p>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                {user?.displayName || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm font-semibold mb-1">
                Email Address
              </p>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-100 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                {user?.email || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm font-semibold mb-1">
                Photo URL
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 break-all border-b border-gray-200 dark:border-gray-700 pb-2">
                {user?.photoURL || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/edit-profile"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Manage Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
