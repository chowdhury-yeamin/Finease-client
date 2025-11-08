import React from "react";
import img1 from "../assets/FinEase-Logo.png";

const Home = () => {
  return (
    <main className="flex-grow ">
      {/* 1️⃣ Banner Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-black py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Take Control of Your Finances
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Manage your money smartly, track every transaction, and achieve your
          financial goals with <span className="font-semibold">FinEase</span>.
        </p>
      </section>

      {/* 2️⃣ Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-gray-500 text-sm">Total Balance</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">$12,450</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-gray-500 text-sm">Total Income</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$8,200</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-gray-500 text-sm">Total Expenses</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">$3,500</p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Static Sections */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Budgeting Tips */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Budgeting Tips
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Track your spending regularly.</li>
              <li>Set clear saving goals each month.</li>
              <li>Cut down on unnecessary expenses.</li>
              <li>Use 50/30/20 rule for smart budgeting.</li>
            </ul>
          </div>

          {/* Why Financial Planning Matters */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Why Financial Planning Matters
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Financial planning helps you manage income, expenses, and
              investments effectively. It ensures that you’re prepared for
              emergencies, achieving life goals, and maintaining long-term
              stability. Taking small steps today can secure your tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-yellow-100 to-amber-50 p-10 rounded-2xl shadow-md border border-yellow-200">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
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
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
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
          <h3 className="text-2xl font-semibold text-red-700 mb-4">
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
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-md border border-gray-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                About Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At <span className="font-semibold text-blue-600">FinEase</span>,
                our mission is to empower individuals to take control of their
                personal finances with confidence. We believe that financial
                stability begins with awareness and smart management — and
                that’s exactly what our platform helps you achieve.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From tracking your income and expenses to providing insightful
                reports, FinEase makes financial planning simple, secure, and
                effective. Our goal is to help you save more, spend wisely, and
                reach your life goals faster.
              </p>
              <p className="text-gray-600 italic">
                “Your journey to financial freedom starts here.”
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={img1}
                alt="Our Team"
                className="w-full max-w-md rounded-2xl "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
