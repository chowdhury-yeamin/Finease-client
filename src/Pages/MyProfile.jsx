import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Mail, User } from "lucide-react";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8 flex items-center justify-center my-10">
      <div className="shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-w-6xl w-full backdrop-blur-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        {/* Sidebar Card */}
        <div className="bg-gradient-to-br from-[#0A9284] to-[#0FB19D] text-white flex flex-col items-center justify-center p-10 w-full md:w-1/3">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-2xl font-bold mb-1">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-white/90 text-sm mb-6">
            {user?.email || "example@email.com"}
          </p>
        </div>

        {/* Profile Info Section */}
        <div className="flex-1 p-10 bg-white dark:bg-slate-800">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <User className="w-8 h-8 text-[#0A9284] dark:text-[#0FB19D]" /> Account Information
          </h1>

          <div className="space-y-6">
            <div>
              <p className="text-slate-500 dark:text-slate-400 uppercase text-sm font-semibold mb-1">
                Full Name
              </p>
              <p className="text-xl font-medium text-slate-800 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2">
                {user?.displayName || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400 uppercase text-sm font-semibold mb-1">
                Email Address
              </p>
              <p className="text-xl font-medium text-slate-800 dark:text-slate-300 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                <Mail className="w-5 h-5 text-[#0A9284] dark:text-[#0FB19D]" />
                {user?.email || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400 uppercase text-sm font-semibold mb-1">
                Photo URL
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-400 break-all border-b border-slate-200 dark:border-slate-700 pb-2">
                {user?.photoURL || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/edit-profile"
              className="px-8 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-opacity"
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
