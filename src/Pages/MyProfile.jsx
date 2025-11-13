import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Mail, Edit3, User } from "lucide-react"; // icons

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 p-8 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-w-6xl w-full">
        {/* Sidebar Card */}
        <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center p-10 w-full md:w-1/3">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-2xl font-bold mb-1">{user?.displayName || "User Name"}</h2>
          <p className="text-blue-100 text-sm mb-6">{user?.email || "example@email.com"}</p>

          <button className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300">
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="flex-1 p-10 bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User className="w-8 h-8 text-blue-600" /> Account Information
          </h1>

          <div className="space-y-6">
            <div>
              <p className="text-gray-500 uppercase text-sm font-semibold mb-1">Full Name</p>
              <p className="text-xl font-medium text-gray-800 border-b border-gray-200 pb-2">
                {user?.displayName || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 uppercase text-sm font-semibold mb-1">Email Address</p>
              <p className="text-xl font-medium text-gray-800 flex items-center gap-2 border-b border-gray-200 pb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                {user?.email || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 uppercase text-sm font-semibold mb-1">Photo URL</p>
              <p className="text-sm text-gray-700 break-all border-b border-gray-200 pb-2">
                {user?.photoURL || "N/A"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              Manage Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
