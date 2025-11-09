import React from "react";
import img1 from "../assets/FinEase-Logo.png";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <main className="flex-grow ">
      {/* 1️ Banner Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Take Control of Your{" "}
              <span className="text-yellow-300">Finances</span>
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Track, plan, and grow your money with insights that make a
              difference.
            </p>
            <NavLink to="/login" className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition">
              Get Started
            </NavLink>
          </div>
          <div className="hidden md:block">
            <img
              src={img1}
              alt="FinEase App"
              className="w-full max-w-md mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 2️ Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Balance */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-gray-500 text-sm">Total Balance</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">$12,450</p>
          </div>

          {/* Total Income */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-gray-500 text-sm">Total Income</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$8,200</p>
          </div>

          {/* Total Expenses */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-3">📉</div>
            <h3 className="text-gray-500 text-sm">Total Expenses</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">$3,500</p>
          </div>
        </div>
      </section>

      {/* 3️ Static Sections */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Budgeting Tips */}
          <section className="max-w-6xl mx-auto px-6 py-16 grid bg-sky-100 md:grid-cols-2 gap-10 items-center hover:-translate-y-2 transition-all duration-300 border border-gray-100 p-8 rounded-2xl shadow-md">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                💡Budgeting Tips
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Track your spending regularly.</li>
                <li>Set clear saving goals each month.</li>
                <li>Cut down on unnecessary expenses.</li>
              </ul>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
              alt="Budgeting Illustration"
              className="order-1 md:order-2 w-72 mx-auto drop-shadow-lg"
            />
          </section>
          {/* Why Financial Planning Matters */}
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-3xl font-bold text-blue-700 mb-4">
                  📊Why Financial Planning Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Financial planning helps you manage income, expenses, and
                  investments effectively. It ensures that you’re prepared for
                  emergencies, achieving life goals, and maintaining long-term
                  stability. Taking small steps today can secure your tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-yellow-100 to-amber-50 p-10 rounded-2xl shadow-md border border-yellow-200">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">
            Smart Saving Strategies
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Building savings is the foundation of financial stability. Follow
            these smart saving habits to grow your wealth:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pay yourself first — save before you spend.</li>
            <li>Automate monthly savings transfers.</li>
            <li>Set short-term and long-term savings goals.</li>
            <li>Avoid unnecessary impulse buying.</li>
          </ul>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-50 p-10 rounded-2xl shadow-md border border-indigo-200">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">
            Investment Basics
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Investing helps your money grow over time. Start small, learn
            gradually, and make informed choices:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Diversify your investments — never rely on one source.</li>
            <li>Understand risk vs. reward before investing.</li>
            <li>Consider SIPs, ETFs, and index funds for beginners.</li>
            <li>Stay consistent and think long-term.</li>
          </ul>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-red-100 to-rose-50 p-10 rounded-2xl shadow-md border border-red-200">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">
            Debt Management
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Managing debt smartly is key to maintaining financial freedom.
            Here’s how you can keep debt under control:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Prioritize high-interest debts first.</li>
            <li>Avoid taking unnecessary loans or credit cards.</li>
            <li>Pay more than the minimum due whenever possible.</li>
            <li>Track all repayments and set reminders.</li>
          </ul>
        </div>
      </section>

      {/* about us  */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-10 items-center">
          <img
            src={img1}
            alt="FinEase Team"
            className="w-full max-w-sm "
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              About FinEase
            </h2>

            <p className="text-gray-700 mb-4">
              At <span className="font-semibold text-blue-600">FinEase</span>,
              we believe that everyone deserves the tools and knowledge to take
              full control of their finances. What started as a simple budgeting
              idea has grown into a powerful financial management platform
              designed to help individuals, families, and small businesses make
              smarter money decisions.
            </p>

            <p className="text-gray-700 mb-4">
              Our platform provides an intuitive dashboard where users can
              easily track income, expenses, savings, and investments — all in
              one place. Whether you’re planning your first budget, saving for a
              major goal, or working toward debt freedom, FinEase gives you
              clear insights and actionable guidance to stay on top of your
              financial journey.
            </p>
            <p className="text-gray-600 italic mt-6">
              “Your journey to financial freedom starts here. Let FinEase guide
              you every step of the way.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
