import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddTransaction = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    type: "Income",
    category: "",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const categories = {
    Income: ["Salary", "Freelance", "Investments", "Gift", "Other"],
    Expense: [
      "Food",
      "Transportation",
      "Housing",
      "Utilities",
      "Entertainment",
      "Healthcare",
      "Shopping",
      "Other",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      ...formData,
      amount: Number(formData.amount),
      userEmail: user?.email,
      userName: user?.displayName,
      created_at: new Date().toISOString(),
    };

    fetch("https://fin-ease-server-jade.vercel.app/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Transaction Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          type: "Income",
          category: "",
          amount: "",
          description: "",
          date: new Date().toISOString().split("T")[0],
        });
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Failed to add transaction",
          text: "Please try again",
        })
      );
  };

  return (
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] bg-clip-text text-transparent">
          Add New Transaction
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transaction Type */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Transaction Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0FB19D] focus:border-[#0FB19D] bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                required
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0FB19D] focus:border-[#0FB19D] bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                required
              >
                <option value="">Select Category</option>
                {categories[formData.type].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0FB19D] focus:border-[#0FB19D] bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                required
                min="0"
                step="0.01"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0FB19D] focus:border-[#0FB19D] bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter transaction description"
                rows="3"
                className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0FB19D] focus:border-[#0FB19D] bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                required
              />
            </div>

            {/* User Info */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                User Email
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full p-3 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full p-3 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0A9284] to-[#0FB19D] hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0FB19D]/50 focus:ring-opacity-50"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddTransaction;
