import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyTransactions = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/transactions?sortBy=${sortBy}&order=${order}`
        );
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
  }, [user, sortBy, order]);

  const handleUpdate = (id) => {
    console.log("Update transaction:", id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This transaction will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/transactions/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setTransactions((prev) => prev.filter((txn) => txn._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Transaction deleted successfully.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete transaction.",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
        });
        console.log("Error deleting transaction:", error);
      }
    }
  };

  const handleViewDetails = (transaction) => {
    console.log("Transaction details:", transaction);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        My Transactions
      </h1>

      {/* Sorting Controls */}
      <div className="flex gap-4 mb-6 items-center justify-center">
        <label className="font-semibold">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {transactions.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-xl">No transactions found.</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {transactions.map((txn) => (
            <div
              key={txn._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div
                className={`p-4 ${
                  txn.type === "Income"
                    ? "bg-green-50 border-l-4 border-green-500"
                    : "bg-red-50 border-l-4 border-red-500"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      txn.type === "Income"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {txn.type}
                  </span>
                  <span className="font-mono font-bold text-lg">
                    {txn.type === "Income" ? "+" : "-"}$
                    {txn.amount.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{txn.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {new Date(txn.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 flex justify-between gap-2">
                <Link
                  to={`/my-transactions/${txn._id}`}
                  onClick={() => handleViewDetails(txn)}
                  state={{
                    transaction: txn,
                    categoryTotal: transactions
                      .filter((t) => t.category === txn.category)
                      .reduce((sum, item) => sum + Number(item.amount || 0), 0),
                  }}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
                <Link
                  to={`/transaction/update/${txn._id}`}
                  onClick={() => handleUpdate(txn._id)}
                  className="text-center flex-1 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(txn._id)}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
