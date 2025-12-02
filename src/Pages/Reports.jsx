import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { AuthContext } from "../Context/AuthContext";

const Reports = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://fin-ease-server-jade.vercel.app/transactions"
        );
        const data = await res.json();

        const userData = data.filter(
          (item) => item.userEmail?.toLowerCase() === user?.email?.toLowerCase()
        );
        setTransactions(userData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
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

  //  Colors
  const COLORS = [
    "#4F46E5",
    "#06B6D4",
    "#F59E0B",
    "#EF4444",
    "#10B981",
    "#6366F1",
  ];

  const expenseTransactions = transactions.filter(
    (t) => String(t.type).toLowerCase() === "expense"
  );

  const categoryMap = {};
  expenseTransactions.forEach((t) => {
    const category = t.category || "Other";
    categoryMap[category] =
      (categoryMap[category] || 0) + Number(t.amount || 0);
  });

  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const monthMap = {};
  transactions.forEach((t) => {
    const date = new Date(t.date);
    if (!isNaN(date)) {
      const month = date.toLocaleString("default", { month: "short" });
      monthMap[month] = (monthMap[month] || 0) + Number(t.amount || 0);
    }
  });

  const monthlyData = Object.keys(monthMap).map((key) => ({
    month: key,
    total: monthMap[key],
  }));

  return (
    <main className=" py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center  bg-clip-text text-[#0FB19D] mb-10">
          Financial Reports
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">
            <span className="loading loading-spinner loading-xl"></span>
          </p>
        ) : transactions.length === 0 ? (
          <p className="text-center text-gray-600">
            No transactions to display yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Spending by Category
              </h2>

              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Monthly Totals
              </h2>

              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Reports;
