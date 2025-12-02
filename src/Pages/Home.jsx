import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/FinEase-Logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import CountUp from "../Components/CountUp";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "https://fin-ease-server-jade.vercel.app/transactions"
        );
        const data = await res.json();
        const userData = data.filter(
          (t) => t.userEmail?.toLowerCase() === user?.email?.toLowerCase()
        );
        setTransactions(userData);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) load();
    else setLoading(false);
  }, [user]);

  const income = transactions
    .filter((t) => t.type?.toLowerCase() === "income")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const expenses = transactions
    .filter((t) => t.type?.toLowerCase() === "expense")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const balance = income - expenses;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-600 dark:border-cyan-400"></div>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      {/* HERO */}
      <section
        className="max-w-6xl mx-auto py-16 px-6 rounded-3xl shadow-lg overflow-hidden
        bg-gradient-to-br from-cyan-50 to-cyan-200 dark:from-[#051622] dark:to-[#0FB19D]
        text-gray-900 dark:text-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Take control of your
              <span className="text-cyan-600 dark:text-cyan-400">
                {" "}
                finances
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
              Track income & expenses with a modern, vibrant interface.
            </p>
            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/add-transaction"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "px-6 py-3 font-semibold rounded-lg shadow-lg bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition"
                      : "px-6 py-3 font-semibold rounded-lg shadow-lg bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 transition"
                  }`.trim()
                }
              >
                Get Started
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "px-6 py-3 font-semibold rounded-lg shadow-lg bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition"
                      : "px-6 py-3 font-semibold rounded-lg shadow-lg bg-white text-black hover:bg-cyan-600 dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-500 transition"
                  }`.trim()
                }
              >
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src={img1}
              alt="FinEase"
              className="w-56 h-56 object-contain drop-shadow-2xl hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "💰",
              label: "Total Balance",
              value: balance,
              color: "text-cyan-600 dark:text-cyan-400",
            },
            {
              icon: "📈",
              label: "Total Income",
              value: income,
              color: "text-green-500 dark:text-green-400",
            },
            {
              icon: "📉",
              label: "Total Expenses",
              value: expenses,
              color: "text-red-500 dark:text-red-400",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A] text-center hover:-translate-y-2 transition"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                {item.label}
              </h4>
              <p className={`text-2xl font-bold mt-2 ${item.color}`}>
                <CountUp from={0} to={item.value || 0} duration={1} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET TIPS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="col-span-2 p-8 rounded-2xl shadow-lg bg-cyan-50 dark:bg-cyan-900/30 hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
            Budgeting Tips
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Review spending weekly.</li>
            <li>Set monthly saving goals.</li>
            <li>Cut unnecessary expenses.</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-[#0A0A0A] border border-cyan-200 dark:border-cyan-700 hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            Smart Saving Strategies
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Automate savings and define long-term goals clearly.
          </p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A]">
          <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
            Why Financial Planning Matters
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Planning creates clarity, protects you during emergencies, and
            accelerates goal achievement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Emergency Preparedness",
              "Goal Achievement",
              "Better Decisions",
            ].map((title, i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Stay financially prepared and make smarter choices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 bg-cyan-50 dark:bg-cyan-900/20 hover:shadow-xl transition">
          <img
            src={img1}
            alt="FinEase"
            className="w-48 md:w-64 hover:scale-105 transition"
          />
          <div>
            <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
              About FinEase
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              FinEase helps individuals and small businesses manage finances
              clearly and efficiently. It’s a simple, secure personal finance
              manager built to track income and expenses, understand spending
              habits, and reach financial goals.
            </p>
            <p className="italic text-gray-600 dark:text-gray-400 mt-4">
              “Your journey to financial freedom starts here.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
