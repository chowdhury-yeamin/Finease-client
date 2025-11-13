import React from "react";
import img1 from "../assets/ErrorPage.png"; // your uploaded image
import { ArrowRight, Link } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white text-center px-6">
      <div className="max-w-md">
        <img
          src={img1}
          alt="Error Illustration"
          className="w-full rounded-2xl shadow-2xl mb-8 animate-pulse"
        />
        <h1 className="text-5xl font-extrabold mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          It seems we took you down the wrong road. Don’t worry, let’s get you
          back on track.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          Go Home <ArrowRight className="w-4 h-4 inline-block ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
