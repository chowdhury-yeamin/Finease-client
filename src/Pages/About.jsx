import React, { useContext } from "react";
import { Link } from "react-router";
import logo from "../assets/FinEase-Logo.png";
import { AuthContext } from "../Context/AuthContext";

const About = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0FB19D]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <div className="bg-gradient-to-r from-[#E6FFF9] to-[#0FB19D]/10 dark:from-[#051622] dark:to-[#0FB19D]/20 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-12">
          <img
            src={logo}
            alt="FinEase Logo"
            className="w-28 h-28 object-contain"
          />

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0FB19D] dark:text-[#0FB19D]">
              FinEase
            </h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-2xl">
              FinEase is a simple, beautiful and secure personal finance manager
              built to help you track income and expenses, understand spending
              habits, and reach financial goals. Record transactions in seconds,
              visualize reports, and access your data across devices.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/add-transaction"
                className="inline-block bg-[#0FB19D] text-white px-4 py-2 rounded-full font-medium shadow hover:opacity-90 transition"
              >
                Add Transaction
              </Link>
              <Link
                to="/my-transactions"
                className="inline-block border border-[#0FB19D] text-[#0FB19D] px-4 py-2 rounded-full font-medium hover:bg-[#0FB19D]/10 dark:hover:bg-[#0FB19D]/20 transition"
              >
                My Transactions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#0FB19D] dark:text-[#0FB19D]">
            What FinEase Does
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Track Transactions", desc: "Quickly record income and expenses with categories, description and date. View your personal history in a clear card layout." },
              { title: "Insightful Reports", desc: "Generate simple reports that show where your money goes. Filter by category and period to find opportunities to save." },
              { title: "Secure & Sync", desc: "Built on modern auth (Firebase). Your data is private and only visible to your account. Access your data across devices." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white dark:bg-[#0A0A0A] rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-lg text-gray-400">{item.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#0FB19D]/10 dark:bg-[#0FB19D]/20 rounded-lg">
              <h4 className="text-lg font-semibold text-[#0FB19D] dark:text-[#0FB19D]">Why people love FinEase</h4>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Minimal, fast interface — add transactions in seconds.</li>
                <li>Helpful categories and smart defaults to reduce typing.</li>
                <li>Privacy-first approach — only you can see your transactions.</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-[#0A0A0A] rounded-lg text-gray-700 dark:text-gray-300">
              <h4 className="text-lg font-semibold text-[#0FB19D] dark:text-[#0FB19D]">Get Started</h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Sign up with email or Google, then use the Add Transaction page
                to start tracking your finances. View summaries on the Reports
                page and manage your entries from My Transactions.
              </p>

              <div className="mt-4 flex gap-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="inline-block bg-[#0FB19D] text-white px-4 py-2 rounded-full font-medium shadow hover:opacity-90 transition"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="inline-block border border-[#0FB19D] text-[#0FB19D] px-4 py-2 rounded-full font-medium hover:bg-[#0FB19D]/10 dark:hover:bg-[#0FB19D]/20 transition"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/my-transactions"
                    className="inline-block border border-[#0FB19D] text-[#0FB19D] px-4 py-2 rounded-full font-medium hover:bg-[#0FB19D]/10 dark:hover:bg-[#0FB19D]/20 transition"
                  >
                    My Transactions
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white dark:bg-[#0A0A0A] rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-[#0FB19D] dark:text-[#0FB19D]">About the Project</h4>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">
              FinEase is a lightweight finance tracker started to help people
              take control of their daily spending without complicated
              accounting tools. It combines quick transaction entry, simple
              reporting, and a clean UI to make financial tracking approachable.
            </p>

            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <strong>Tech stack:</strong> React, Vite, Tailwind CSS, Firebase Auth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
