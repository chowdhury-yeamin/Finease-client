import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const TransactionDetails = () => {
  const location = useLocation();
  const { id } = useParams();

  const [transaction, setTransaction] = useState(null);
  const [categoryTotal, setCategoryTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state?.transaction) {
      setTransaction(location.state.transaction);
      setCategoryTotal(location.state.categoryTotal ?? 0);
      setLoading(false);
    } else if (id) {
      const fetchTransaction = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://fin-ease-server-jade.vercel.app/transactions/${id}`
          );
          const data = await response.json();
          setTransaction(data.transaction);
          setCategoryTotal(data.categoryTotal ?? 0);
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: err.message,
          });
          console.error(setError(err.message));
        } finally {
          setLoading(false);
        }
      };
      fetchTransaction();
    } else {
      setLoading(false);
    }
  }, [id, location.state]);


  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  const tx = transaction || {};
  const type = tx.type || "Something";
  const description = tx.description || "No description provided.";
  const amount = tx.amount ?? 0;
  const date = tx.date || new Date().toISOString();
  const category = tx.category || "Uncategorized";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/my-transactions"
          className="inline-flex items-center gap-2 text-sm text-blue-600"
        >
          <FaArrowLeft /> Back
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Transaction details</h2>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500">Type</div>
            <div className="mt-1 font-medium">{type}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Category</div>
            <div className="mt-1 font-medium">{category}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Amount</div>
            <div
              className={`mt-1 font-medium ${
                String(type).toLowerCase() === "expense"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              ${amount}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Date</div>
            <div className="mt-1">{new Date(date).toLocaleString()}</div>
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Description</div>
          <div className="mt-1 text-sm text-gray-700">{description}</div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-xs text-gray-500">
            Total amount for category "{category}"
          </div>
          <div className="mt-1 font-semibold">${categoryTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
