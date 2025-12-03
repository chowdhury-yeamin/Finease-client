import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../FireBase/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(displayName, photoURL);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile has been successfully updated.",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8 max-w-lg w-full border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0A9284] to-[#0FB19D] bg-clip-text text-transparent mb-8">
          Edit Your Profile
        </h2>

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
              placeholder="Paste your photo link"
            />
          </div>

          {photoURL && (
            <div className="flex justify-center mt-4">
              <img
                src={photoURL}
                alt="Preview"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#0A9284] dark:border-[#0FB19D] shadow-lg"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              href="/"
              type="button"
              onClick={() => navigate("/profile")}
              className="px-6 py-2 bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                loading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#0A9284] to-[#0FB19D] hover:opacity-90"
              } transition`}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
