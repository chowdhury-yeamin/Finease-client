import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return {
      valid: hasUpper && hasLower && hasLength,
      hasUpper,
      hasLower,
      hasLength,
    };
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const photoUrl = event.target.photoUrl.value.trim();
    const password = event.target.password.value;

    const { valid, hasUpper, hasLower, hasLength } = validatePassword(password);
    if (!valid) {
      // Show all requirements in a single alert and mark which ones passed/failed
      const lines = [
        `${hasUpper ? "✅" : "❌"} Contains an uppercase letter (A-Z)`,
        `${hasLower ? "✅" : "❌"} Contains a lowercase letter (a-z)`,
        `${hasLength ? "✅" : "❌"} At least 6 characters long`,
      ].join("<br/>");

      return Swal.fire({
        icon: "error",
        title: "Invalid password",
        html: lines,
      });
    }

    try {
      setIsLoading(true);
      await createUser(email, password);
      // Update profile with displayName and photoURL
      await updateUserProfile(name, photoUrl || null);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registered successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      event.target.reset();
      const from = location?.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithGoogle();
      console.log(result.user);
      const from = location?.state?.from?.pathname || "/";
      navigate(from, { replace: true });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registered successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card bg-white dark:bg-slate-800 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-slate-200 dark:border-slate-700 my-8">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
              required
            />

            <label className="label">PhotoUrl</label>
            <input
              type="text"
              name="photoUrl"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="PhotoUrl (optional)"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
              required
            />

            <button
              disabled={isLoading}
              className="btn text-white mt-4 rounded-full bg-gradient-to-r from-[#0A9284] to-[#0FB19D] hover:opacity-90 transition-opacity"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600"
        >
          <FcGoogle />
          Register with Google
        </button>
        <p className="text-center text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            className="text-[#0A9284] dark:text-[#0FB19D] hover:opacity-80 font-bold transition-opacity"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
