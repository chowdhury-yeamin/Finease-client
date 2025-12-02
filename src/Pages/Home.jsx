/* Home.jsx - theme toggle ready (light + dark) */

import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/FinEase-Logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import CountUp from "../Components/CountUp";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [setLoading] = useState(true);

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

  return (
    <main className="flex-grow">
      {/* HERO */}
      <section
        className="
          max-w-6xl mx-auto py-16 px-6 rounded-3xl shadow-lg overflow-hidden
          bg-gradient-to-br from-[#E6FFF9] to-[#0FB19D]/40
          dark:bg-gradient-to-br dark:from-[#051622] dark:to-[#0FB19D]
          text-gray-900 dark:text-white
        "
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Take control of your
              <span className="text-[#0FB19D] dark:text-[#0FB19D]">
                {" "}
                finances
              </span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
              Track income & expenses with a clean, modern interface.
            </p>

            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/add-transaction"
                className="
                  px-5 py-2 font-semibold rounded-lg shadow
                  bg-[#0FB19D] text-white
                  hover:opacity-90 transition
                "
              >
                Get Started
              </NavLink>

              <NavLink
                to="/about"
                className="
                  px-5 py-2 rounded-lg border
                  border-gray-300 dark:border-white/40
                  text-gray-800 dark:text-white
                  hover:bg-gray-100 dark:hover:bg-white/10 transition
                "
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
        <h2 className="text-center text-3xl font-bold text-[#0FB19D] mb-6">
          Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "💰",
              label: "Total Balance",
              value: balance,
              color: "text-[#0FB19D]",
            },
            {
              icon: "📈",
              label: "Total Income",
              value: income,
              color: "text-[#0FB19D]",
            },
            {
              icon: "📉",
              label: "Total Expenses",
              value: expenses,
              color: "text-red-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl shadow border
                bg-white dark:bg-[#0A0A0A]
                border-gray-200 dark:border-gray-700
                text-center hover:-translate-y-2 transition duration-300
              "
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
        <div
          className="
            col-span-2 p-8 rounded-2xl shadow
            bg-[#0FB19D]/10 dark:bg-[#0FB19D]/20
            hover:-translate-y-2 transition
          "
        >
          <h3 className="text-2xl font-bold text-[#0FB19D] mb-3">
            Budgeting Tips
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Review spending weekly.</li>
            <li>Set monthly saving goals.</li>
            <li>Cut unnecessary expenses.</li>
          </ul>
        </div>

        <div
          className="
            p-6 rounded-2xl shadow
            bg-white dark:bg-[#0A0A0A]
            border border-[#0FB19D]/20
            hover:-translate-y-2 transition
          "
        >
          <h3 className="text-xl font-bold text-[#0FB19D] mb-2">
            Smart Saving Strategies
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Automate savings and define long-term goals clearly.
          </p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div
          className="
            p-8 rounded-2xl shadow border
            bg-white dark:bg-[#0A0A0A]
            border-gray-200 dark:border-gray-700
          "
        >
          <h2 className="text-3xl font-bold text-[#0FB19D] mb-4">
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
                className="
                    p-5 rounded-lg
                    bg-[#0FB19D]/10 dark:bg-[#0FB19D]/20 
                    hover:shadow-lg transition
                  "
              >
                <h3 className="font-semibold">{title}</h3>
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
        <div
          className="
            p-8 md:p-10 rounded-2xl shadow flex flex-col md:flex-row gap-6
            bg-[#0FB19D]/10 dark:bg-[#0FB19D]/20
            hover:shadow-xl transition
          "
        >
          <img
            src={img1}
            alt="FinEase"
            className="w-48 md:w-64 hover:scale-105 transition"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#0FB19D] mb-3">
              About FinEase
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              FinEase helps individuals and small businesses manage finances
              clearly and efficiently.
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
