import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Welcome to FinEase! <br />
            Take control of your finances, track every transaction, and achieve
            your financial goals with ease. Your journey to smarter spending,
            better saving, and complete financial clarity starts here.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Register</button>
              <a className=" text-center flex  justify-center">
                <hr className="w-[60px] mt-2.5" /> or{" "}
                <hr className="w-[60px] mt-2.5" />
              </a>
              <button className="btn btn-outline mt-4">
                <FcGoogle className="w-6 h-[25px]" />
                Login with Google
              </button>
              <p className="font-medium">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="link text-blue-500 hover:text-blue-800"
                >
                  Login here
                </a>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
