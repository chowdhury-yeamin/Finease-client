import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" ">
      <h1 className="text-center text-4xl md:text-5xl text-blue-600 font-bold mt-5">
        My Profile
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-10 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 py-10 flex flex-col justify-center items-center w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-blue-400"
          />
          <p className="text-lg font-medium mb-4 text-gray-800">
            {user?.displayName || "N/A"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 w-full md:w-2/3 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            {user?.displayName || "N/A"}
          </h2>

          <div className="space-y-3 text-gray-700">
            <p className="text-lg">
              <span className="font-bold text-gray-800">Email:</span>{" "}
              {user?.email || "N/A"}
            </p>
            <p className="text-lg break-words">
              <span className="font-bold text-gray-800">Photo URL:</span>{" "}
              {user?.photoURL || "N/A"}
            </p>
          </div>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
