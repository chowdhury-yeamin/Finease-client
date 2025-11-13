import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams, useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import { MdOutlineArrowBack } from "react-icons/md";

const UpdateTransaction = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "Income",
    category: "",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`https://fin-ease-server-jade.vercel.app/transactions/${id}`);
        const data = await res.json();
        setFormData({
          type: data.type,
          category: data.category,
          amount: data.amount,
          description: data.description,
          date: data.date.split("T")[0],
        });
      } catch (err) {
        console.error("Failed to fetch transaction:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Unable to load transaction.",
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTransaction();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      ...formData,
      amount: Number(formData.amount),
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch(`https://fin-ease-server-jade.vercel.app/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Transaction Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(-1);
      })
      .catch((err) => {
        console.error("Error updating transaction:", err);
        Swal.fire({
          icon: "error",
          title: "Failed to update transaction",
          text: "Please try again",
        });
      });
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link className="flex items-center text-blue-600" to="/my-transactions">
        <p className="">
          <MdOutlineArrowBack />
        </p>
        <p className="pl-1"> Back</p>
      </Link>
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Update Transaction
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Transaction Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Transaction Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            <label className="block text-gray-700 font-semibold mb-2">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              min="0"
              step="0.01"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter transaction description"
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* User Info */}
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

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Update Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTransaction;
