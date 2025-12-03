import React from "react";
import { Link } from "react-router";
import { ArrowRight, Home, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-center px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#0A9284] to-[#0FB19D] rounded-full flex items-center justify-center">
            <AlertCircle className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            to="/all-items"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-[#0A9284] dark:text-[#0FB19D] border-2 border-[#0A9284] dark:border-[#0FB19D] font-semibold rounded-lg hover:bg-[#0A9284]/10 dark:hover:bg-[#0FB19D]/10 transition-colors"
          >
            Browse Items
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
