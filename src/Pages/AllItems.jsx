import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// Sample financial services/features data
const financialItems = [
  {
    id: 1,
    title: "Budget Planning Tool",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    shortDescription: "Create and manage your monthly budgets with our intuitive planning tool. Track expenses and stay within your limits.",
    fullDescription: "Our Budget Planning Tool helps you create comprehensive monthly budgets, categorize expenses, and track your spending against your goals. Set limits for different categories, receive alerts when approaching limits, and analyze your spending patterns over time. Perfect for individuals and families looking to take control of their finances.",
    category: "Planning",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Expense Tracker",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    shortDescription: "Track all your expenses in one place. Categorize transactions and get detailed insights into your spending habits.",
    fullDescription: "The Expense Tracker is a powerful tool that allows you to record, categorize, and analyze all your expenses. With automatic categorization, receipt scanning capabilities, and detailed reports, you'll always know where your money goes. Export data, set up recurring expenses, and get personalized insights to help you save more.",
    category: "Tracking",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Income Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    shortDescription: "Monitor all your income sources and get a clear picture of your total earnings. Perfect for freelancers and multiple income streams.",
    fullDescription: "Income Management helps you track all your income sources in one centralized location. Whether you have a salary, freelance work, investments, or side hustles, this tool provides a comprehensive view of your earnings. Set income goals, track progress, and forecast future earnings based on historical data.",
    category: "Management",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Financial Reports",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    shortDescription: "Generate comprehensive financial reports with charts and graphs. Understand your financial health at a glance.",
    fullDescription: "Our Financial Reports feature provides detailed insights into your financial situation through beautiful charts and graphs. View spending by category, income trends, savings progress, and more. Export reports as PDF or Excel files for sharing with financial advisors or for your records.",
    category: "Reports",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Goal Setting",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
    shortDescription: "Set and track financial goals. Save for vacations, emergencies, or major purchases with progress tracking.",
    fullDescription: "Goal Setting allows you to define and track multiple financial goals simultaneously. Whether you're saving for a vacation, emergency fund, down payment, or any other goal, this tool helps you stay on track. Set target amounts, deadlines, and track your progress with visual indicators and milestone celebrations.",
    category: "Planning",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Bill Reminders",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    shortDescription: "Never miss a payment with automated bill reminders. Set up notifications for all your recurring bills.",
    fullDescription: "Bill Reminders ensures you never miss a payment deadline. Set up reminders for all your recurring bills, subscriptions, and payments. Receive notifications via email or push notifications, track payment history, and manage your bill calendar. Reduce late fees and maintain a good credit score.",
    category: "Management",
    rating: 4.6,
  },
  {
    id: 7,
    title: "Investment Tracker",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    shortDescription: "Track your investments and portfolio performance. Monitor stocks, bonds, and other assets in real-time.",
    fullDescription: "Investment Tracker provides comprehensive portfolio management capabilities. Track stocks, bonds, mutual funds, and other investments. Monitor performance, calculate returns, and view asset allocation. Get market insights and alerts for significant changes in your portfolio value.",
    category: "Tracking",
    rating: 4.7,
  },
  {
    id: 8,
    title: "Debt Payoff Calculator",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
    shortDescription: "Create a strategic plan to pay off your debts faster. Calculate optimal payment strategies and timelines.",
    fullDescription: "The Debt Payoff Calculator helps you create a strategic plan to eliminate debt efficiently. Compare different payoff strategies (snowball vs. avalanche), calculate interest savings, and set realistic timelines. Track your progress and celebrate milestones as you work toward financial freedom.",
    category: "Planning",
    rating: 4.8,
  },
  {
    id: 9,
    title: "Tax Preparation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    shortDescription: "Organize your financial data for tax season. Export reports and summaries for easy tax filing.",
    fullDescription: "Tax Preparation tools help you organize all your financial data for tax season. Generate income summaries, expense reports, and deduction tracking. Export data in formats compatible with popular tax software. Save time and ensure accuracy when filing your taxes.",
    category: "Reports",
    rating: 4.5,
  },
  {
    id: 10,
    title: "Savings Calculator",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    shortDescription: "Calculate how much you need to save to reach your goals. Plan for retirement, education, or major purchases.",
    fullDescription: "Savings Calculator helps you determine how much you need to save regularly to reach your financial goals. Input your target amount, timeline, and expected interest rate to get personalized savings recommendations. Explore different scenarios and adjust your plan as needed.",
    category: "Planning",
    rating: 4.7,
  },
  {
    id: 11,
    title: "Receipt Scanner",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    shortDescription: "Scan and digitize receipts automatically. Extract transaction details and categorize expenses effortlessly.",
    fullDescription: "Receipt Scanner uses advanced OCR technology to extract information from receipts automatically. Simply take a photo of your receipt, and the app will extract the merchant, amount, date, and category. Store digital copies of all receipts for easy access and tax purposes.",
    category: "Tracking",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Financial Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    shortDescription: "Get a complete overview of your finances on one screen. Monitor all accounts and transactions at a glance.",
    fullDescription: "The Financial Dashboard provides a comprehensive overview of your entire financial situation. View account balances, recent transactions, spending trends, upcoming bills, and goal progress all in one place. Customize your dashboard to show the information most important to you.",
    category: "Management",
    rating: 4.9,
  },
];

const AllItems = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", ...new Set(financialItems.map((item) => item.category))];

  const filteredAndSortedItems = useMemo(() => {
    let filtered = financialItems;

    // Filter by category
    if (filterCategory !== "all") {
      filtered = filtered.filter((item) => item.category === filterCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort items
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    return sorted;
  }, [sortOrder, filterCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          All Financial Tools
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Explore our comprehensive suite of financial management tools
        </p>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#0A0A0A] text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#0A0A0A] text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
          >
            <option value="asc">Sort: A-Z</option>
            <option value="desc">Sort: Z-A</option>
          </select>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-transform transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-[#0A9284]/10 text-[#0A9284] dark:bg-[#0A9284]/20 dark:text-[#0FB19D] rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    ⭐ {item.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                  {item.shortDescription}
                </p>
                <Link
                  to={`/item-details/${item.id}`}
                  className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  See More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No items found matching your criteria.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AllItems;

