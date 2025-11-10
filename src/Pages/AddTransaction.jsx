import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

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
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    setCategory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      type,
      category,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
      created_at: new Date(),
      created_by: user?.email,
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Transaction added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error("Error :", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Add New Transaction
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Transaction Type</label>
            <select
              name="type"
              value={type}
              onChange={handleTypeChange}
              className={`w-full p-2 border rounded ${
                type === "Income"
                  ? "border-green-400 bg-green-50"
                  : "border-red-400 bg-red-50"
              }`}
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Category</option>
              {categories[type].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="w-full p-2 border border-gray-300 rounded"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter transaction description"
              rows="3"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">User Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">User Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-50"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
