import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      setIsLoading(true);
      const result = await signInUser(email, password);
      console.log(result.user);
      event.target.reset();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully logged in!",
        showConfirmButton: false,
        timer: 1500,
      });

      const from = location?.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid Email or Password!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const from = location?.state?.from?.pathname || "/";
        navigate(from, { replace: true });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="card bg-white dark:bg-slate-800 my-8 w-full mx-auto max-w-sm shrink-0 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />

            <button
              disabled={isLoading}
              className="btn text-white mt-4 rounded-full bg-gradient-to-r from-[#0A9284] to-[#0FB19D] hover:opacity-90 transition-opacity"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center text-slate-600 dark:text-slate-400">
          New to our website?{" "}
          <Link className="text-[#0A9284] dark:text-[#0FB19D] hover:opacity-80 font-bold transition-opacity"  to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
