import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const AddTransaction = () => {
  const { user } = useContext(AuthContext);

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

  const handleTypeChange = (e) => {
    const categorySelect = e.target.form.category;
    categorySelect.innerHTML = `
      <option value="">Select Category</option>
      ${categories[e.target.value]
        .map(
          (cat) => `
        <option value="${cat}">${cat}</option>
      `
        )
        .join("")}
    `;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      type: e.target.type.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
      created_at: new Date(),
      created_by: user?.email,
    };
    console.log("Transaction submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Add New Transaction
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Transaction Type
            </label>
            <select
              name="type"
              defaultValue="Income"
              onChange={handleTypeChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <select
              name="category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              {categories["Income"].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter transaction description"
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              User Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              User Name
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
