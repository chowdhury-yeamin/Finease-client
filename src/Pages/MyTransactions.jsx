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
          `https://fin-ease-server-jade.vercel.app/transactions?sortBy=${sortBy}&order=${order}`
        );
        const data = await res.json();
        const userData = data.filter(
          (item) => item.userEmail?.toLowerCase() === user?.email?.toLowerCase()
        );
        setTransactions(userData);
      } catch (error) {
        console.error("Error loading transactions:", error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchTransactions();
    else {
      setTransactions([]);
      setLoading(false);
    }
  }, [user, sortBy, order]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This transaction will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0FB19D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(
          `https://fin-ease-server-jade.vercel.app/transactions/${id}`,
          { method: "DELETE" }
        );
        if (res.ok) {
          setTransactions((prev) => prev.filter((txn) => txn._id !== id));
          Swal.fire("Deleted!", "Transaction deleted successfully.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete transaction.", "error");
        }
      } catch {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-[#0FB19D]"></div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] bg-clip-text text-transparent">
        My Transactions
      </h1>

      {/* Sorting Controls */}
      {user ? (
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center">
          <label className="font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 md:p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A9284] dark:focus:ring-[#0FB19D] transition"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="p-2 md:p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A9284] dark:focus:ring-[#0FB19D] transition"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      ) : (
        ""
      )}

      {/* Empty state */}
      {transactions.length === 0 ? (
        <div className="text-center py-3">
          <p className="text-slate-500 dark:text-slate-400 text-3xl mb-2">
            No transactions found.
          </p>
          <p className="mb-2 text-lg text-slate-600 dark:text-slate-400">
            Start by adding your first transaction.
          </p>
          {user ? (
            <p className="text-slate-600 dark:text-slate-400">
              Go to{" "}
              <Link
                to="/add-transaction"
                className="text-[#0A9284] dark:text-[#0FB19D] font-bold hover:opacity-80 transition-opacity"
              >
                Add Transaction
              </Link>
            </p>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              <Link
                to="/login"
                className="text-[#0A9284] dark:text-[#0FB19D] font-bold hover:opacity-80 transition-opacity"
              >
                Login
              </Link>{" "}
              or{" "}
              <Link
                to="/register"
                className="text-[#0A9284] dark:text-[#0FB19D] font-bold hover:opacity-80 transition-opacity"
              >
                Register
              </Link>{" "}
              to start
            </p>
          )}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {transactions.map((txn) => (
            <div
              key={txn._id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-transform transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
            >
              <div
                className={`p-4 rounded-t-2xl border-l-4 ${
                  txn.type === "Income"
                    ? "bg-[#0FB19D]/10 border-[#0FB19D]"
                    : "bg-red-50 dark:bg-red-900/20 border-red-500"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      txn.type === "Income"
                        ? "bg-[#0FB19D]/20 text-[#0FB19D]"
                        : "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200"
                    }`}
                  >
                    {txn.type}
                  </span>
                  <span className="font-mono font-bold text-lg text-slate-700 dark:text-slate-300">
                    {txn.type === "Income" ? "+" : "-"}$
                    {txn.amount.toLocaleString()}
                  </span>
                </div>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">{txn.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {new Date(txn.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 flex flex-col md:flex-row gap-2">
                <Link
                  to={`/my-transactions/${txn._id}`}
                  state={{ transaction: txn }}
                  className="flex-1 px-3 py-2 bg-[#0FB19D] text-white rounded-lg text-center hover:opacity-90 transition"
                >
                  View Details
                </Link>
                <Link
                  to={`/transaction/update/${txn._id}`}
                  className="flex-1 px-3 py-2 bg-yellow-500 text-white rounded-lg text-center hover:opacity-90 transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(txn._id)}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg text-center hover:bg-red-700 transition"
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
