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
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/transactions");
        const data = await res.json();
        const userData = data.filter(
          (item) => item.userEmail?.toLowerCase() === user?.email?.toLowerCase()
        );
        setTransactions(userData);
      } catch (error) {
        console.log("Error loading transactions:", error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchTransactions();
    } else {
      setTransactions([]);
      setLoading(false);
    }
  }, [user]);

  const totalIncome = transactions
    .filter((t) => String(t.type).toLowerCase() === "income")
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const totalExpenses = transactions
    .filter((t) => String(t.type).toLowerCase() === "expense")
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <main className="flex-grow">
      <section className="banner relative bg-linear-to-br from-blue-600 via-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Take control of your{" "}
              <span className="text-yellow-300">finances</span>
            </h1>
            <p className="text-base md:text-lg mb-6 text-blue-100 max-w-xl">
              Track, plan, and grow your money with quick transaction entry,
              clear reports, and a clean, privacy-first interface.
            </p>

            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/add-transaction"
                className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition transform hover:-translate-y-0.5 hover:scale-[1.01] duration-200"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/about"
                className="px-5 py-2 border border-white/40 rounded-lg text-white/90 hover:bg-white/10 transition transform hover:-translate-y-0.5 duration-200"
              >
                Learn more
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src={img1}
              alt="FinEase App"
              className="w-56 h-56 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto  px-6 py-12 mt-12">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 text-center mb-6">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="text-gray-500 text-sm">Total Balance</h4>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              <CountUp
                from={0}
                to={balance || 0}
                direction="up"
                duration={1}
                className="text-blue-600"
              />
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {loading ? "Loading..." : `${transactions.length} transactions`}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-3xl mb-2">📈</div>
            <h4 className="text-gray-500 text-sm">Total Income</h4>
            <p className="text-2xl font-bold text-green-600 mt-2">
              <CountUp
                from={0}
                to={totalIncome || 0}
                direction="up"
                duration={1}
                className="text-green-600"
              />
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="text-3xl mb-2">📉</div>
            <h4 className="text-gray-500 text-sm">Total Expenses</h4>
            <p className="text-2xl font-bold text-red-600 mt-2">
              <CountUp
                from={0}
                to={totalExpenses || 0}
                direction="up"
                duration={1}
                className="text-red-600"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 bg-sky-50 p-8 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">
            Budgeting Tips
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Track your spending regularly and review weekly.</li>
            <li>Set clear saving goals and automate transfers.</li>
            <li>
              Cut non-essential expenses and prioritize high-impact savings.
            </li>
          </ul>
        </div>

        <div className="bg-linear-to-br from-yellow-100 to-amber-50 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Smart Saving Strategies
          </h3>
          <p className="text-gray-700">
            Pay yourself first, automate savings, and set short- and long-term
            targets.
          </p>
        </div>
      </section>

      {/* WHY FINANCIAL PLANNING MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Why Financial Planning Matters
          </h2>
          <p className="text-gray-700 mb-6">
            Financial planning keeps you prepared for life's surprises and helps
            you align your spending with long-term goals. It turns vague
            intentions into concrete steps that build security over time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-slate-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-semibold">Emergency Preparedness</h3>
              <p className="text-sm text-gray-600 mt-2">
                A plan ensures you have savings for unexpected events — reducing
                stress and avoiding high-interest debt.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-semibold">Goal Achievement</h3>
              <p className="text-sm text-gray-600 mt-2">
                Break down big goals (home, education, retirement) into
                manageable monthly steps and measure progress.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-semibold">Better Decision Making</h3>
              <p className="text-sm text-gray-600 mt-2">
                With clear priorities, it's easier to choose where to cut costs,
                what to invest in, and when to borrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT  */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-center transform transition-all duration-300 hover:shadow-2xl">
          <img
            src={img1}
            alt="FinEase Team"
            className="w-48 md:w-64 transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3">
              About FinEase
            </h2>
            <p className="text-gray-700">
              FinEase helps individuals and small businesses take control of
              their finances with minimal friction. Track transactions, analyze
              spending, and build better habits.
            </p>
            <p className="text-gray-600 italic mt-4">
              “Your journey to financial freedom starts here.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
