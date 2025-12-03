import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Same data as AllItems - in production, this would come from an API or shared data source
const financialItems = [
  {
    id: 1,
    title: "Budget Planning Tool",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    shortDescription: "Create and manage your monthly budgets with our intuitive planning tool. Track expenses and stay within your limits.",
    fullDescription: "Our Budget Planning Tool helps you create comprehensive monthly budgets, categorize expenses, and track your spending against your goals. Set limits for different categories, receive alerts when approaching limits, and analyze your spending patterns over time. Perfect for individuals and families looking to take control of their finances.",
    category: "Planning",
    rating: 4.8,
    features: [
      "Monthly budget creation and management",
      "Category-based expense tracking",
      "Real-time spending alerts",
      "Historical spending analysis",
      "Goal-based budgeting",
      "Export capabilities"
    ],
  },
  {
    id: 2,
    title: "Expense Tracker",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    shortDescription: "Track all your expenses in one place. Categorize transactions and get detailed insights into your spending habits.",
    fullDescription: "The Expense Tracker is a powerful tool that allows you to record, categorize, and analyze all your expenses. With automatic categorization, receipt scanning capabilities, and detailed reports, you'll always know where your money goes. Export data, set up recurring expenses, and get personalized insights to help you save more.",
    category: "Tracking",
    rating: 4.9,
    features: [
      "Automatic expense categorization",
      "Receipt scanning and storage",
      "Recurring expense management",
      "Detailed spending reports",
      "Data export functionality",
      "Personalized saving insights"
    ],
  },
  {
    id: 3,
    title: "Income Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    shortDescription: "Monitor all your income sources and get a clear picture of your total earnings. Perfect for freelancers and multiple income streams.",
    fullDescription: "Income Management helps you track all your income sources in one centralized location. Whether you have a salary, freelance work, investments, or side hustles, this tool provides a comprehensive view of your earnings. Set income goals, track progress, and forecast future earnings based on historical data.",
    category: "Management",
    rating: 4.7,
    features: [
      "Multiple income source tracking",
      "Income goal setting",
      "Earnings forecasting",
      "Historical income analysis",
      "Tax-ready income summaries",
      "Progress tracking"
    ],
  },
  {
    id: 4,
    title: "Financial Reports",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    shortDescription: "Generate comprehensive financial reports with charts and graphs. Understand your financial health at a glance.",
    fullDescription: "Our Financial Reports feature provides detailed insights into your financial situation through beautiful charts and graphs. View spending by category, income trends, savings progress, and more. Export reports as PDF or Excel files for sharing with financial advisors or for your records.",
    category: "Reports",
    rating: 4.8,
    features: [
      "Interactive charts and graphs",
      "Category-based spending analysis",
      "Income trend visualization",
      "PDF and Excel export",
      "Customizable report periods",
      "Share with advisors"
    ],
  },
  {
    id: 5,
    title: "Goal Setting",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    shortDescription: "Set and track financial goals. Save for vacations, emergencies, or major purchases with progress tracking.",
    fullDescription: "Goal Setting allows you to define and track multiple financial goals simultaneously. Whether you're saving for a vacation, emergency fund, down payment, or any other goal, this tool helps you stay on track. Set target amounts, deadlines, and track your progress with visual indicators and milestone celebrations.",
    category: "Planning",
    rating: 4.9,
    features: [
      "Multiple goal tracking",
      "Target amount and deadline setting",
      "Visual progress indicators",
      "Milestone celebrations",
      "Goal prioritization",
      "Progress history"
    ],
  },
  {
    id: 6,
    title: "Bill Reminders",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    shortDescription: "Never miss a payment with automated bill reminders. Set up notifications for all your recurring bills.",
    fullDescription: "Bill Reminders ensures you never miss a payment deadline. Set up reminders for all your recurring bills, subscriptions, and payments. Receive notifications via email or push notifications, track payment history, and manage your bill calendar. Reduce late fees and maintain a good credit score.",
    category: "Management",
    rating: 4.6,
    features: [
      "Automated bill reminders",
      "Email and push notifications",
      "Payment history tracking",
      "Bill calendar view",
      "Recurring bill management",
      "Late fee prevention"
    ],
  },
  {
    id: 7,
    title: "Investment Tracker",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    shortDescription: "Track your investments and portfolio performance. Monitor stocks, bonds, and other assets in real-time.",
    fullDescription: "Investment Tracker provides comprehensive portfolio management capabilities. Track stocks, bonds, mutual funds, and other investments. Monitor performance, calculate returns, and view asset allocation. Get market insights and alerts for significant changes in your portfolio value.",
    category: "Tracking",
    rating: 4.7,
    features: [
      "Portfolio management",
      "Real-time performance tracking",
      "Return calculations",
      "Asset allocation views",
      "Market insights",
      "Portfolio alerts"
    ],
  },
  {
    id: 8,
    title: "Debt Payoff Calculator",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
    shortDescription: "Create a strategic plan to pay off your debts faster. Calculate optimal payment strategies and timelines.",
    fullDescription: "The Debt Payoff Calculator helps you create a strategic plan to eliminate debt efficiently. Compare different payoff strategies (snowball vs. avalanche), calculate interest savings, and set realistic timelines. Track your progress and celebrate milestones as you work toward financial freedom.",
    category: "Planning",
    rating: 4.8,
    features: [
      "Multiple payoff strategies",
      "Interest savings calculator",
      "Timeline planning",
      "Progress tracking",
      "Milestone celebrations",
      "Debt comparison tools"
    ],
  },
  {
    id: 9,
    title: "Tax Preparation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    shortDescription: "Organize your financial data for tax season. Export reports and summaries for easy tax filing.",
    fullDescription: "Tax Preparation tools help you organize all your financial data for tax season. Generate income summaries, expense reports, and deduction tracking. Export data in formats compatible with popular tax software. Save time and ensure accuracy when filing your taxes.",
    category: "Reports",
    rating: 4.5,
    features: [
      "Income summaries",
      "Expense reports",
      "Deduction tracking",
      "Tax software compatibility",
      "Data export",
      "Year-end summaries"
    ],
  },
  {
    id: 10,
    title: "Savings Calculator",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    shortDescription: "Calculate how much you need to save to reach your goals. Plan for retirement, education, or major purchases.",
    fullDescription: "Savings Calculator helps you determine how much you need to save regularly to reach your financial goals. Input your target amount, timeline, and expected interest rate to get personalized savings recommendations. Explore different scenarios and adjust your plan as needed.",
    category: "Planning",
    rating: 4.7,
    features: [
      "Goal-based calculations",
      "Timeline planning",
      "Interest rate considerations",
      "Scenario exploration",
      "Personalized recommendations",
      "Regular savings tracking"
    ],
  },
  {
    id: 11,
    title: "Receipt Scanner",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    shortDescription: "Scan and digitize receipts automatically. Extract transaction details and categorize expenses effortlessly.",
    fullDescription: "Receipt Scanner uses advanced OCR technology to extract information from receipts automatically. Simply take a photo of your receipt, and the app will extract the merchant, amount, date, and category. Store digital copies of all receipts for easy access and tax purposes.",
    category: "Tracking",
    rating: 4.6,
    features: [
      "OCR technology",
      "Automatic data extraction",
      "Digital receipt storage",
      "Tax-ready organization",
      "Search functionality",
      "Cloud backup"
    ],
  },
  {
    id: 12,
    title: "Financial Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    shortDescription: "Get a complete overview of your finances on one screen. Monitor all accounts and transactions at a glance.",
    fullDescription: "The Financial Dashboard provides a comprehensive overview of your entire financial situation. View account balances, recent transactions, spending trends, upcoming bills, and goal progress all in one place. Customize your dashboard to show the information most important to you.",
    category: "Management",
    rating: 4.9,
    features: [
      "Complete financial overview",
      "Account balance tracking",
      "Recent transaction display",
      "Spending trend visualization",
      "Upcoming bills calendar",
      "Customizable layout"
    ],
  },
];

const ItemDetails = () => {
  const { id } = useParams();
  const item = financialItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Item Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          The item you're looking for doesn't exist.
        </p>
        <Link
          to="/all-items"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to All Items
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/all-items"
          className="inline-flex items-center gap-2 text-[#0A9284] dark:text-[#0FB19D] hover:opacity-80 mb-6 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to All Items</span>
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm px-3 py-1 bg-[#0A9284]/10 text-[#0A9284] dark:bg-[#0A9284]/20 dark:text-[#0FB19D] rounded-full font-medium">
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    ⭐ {item.rating}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {item.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                {item.fullDescription}
              </p>
            </div>
          </div>

          {item.features && (
            <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <span className="text-[#0A9284] dark:text-[#0FB19D] font-bold">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 md:p-8 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-[#0A9284]/5 to-[#0FB19D]/5 dark:from-[#0A9284]/10 dark:to-[#0FB19D]/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/all-items"
                className="flex-1 text-center px-6 py-3 bg-white dark:bg-slate-800 text-[#0A9284] dark:text-[#0FB19D] border-2 border-[#0A9284] dark:border-[#0FB19D] rounded-lg hover:bg-[#0A9284]/10 dark:hover:bg-[#0FB19D]/10 transition-colors font-medium"
              >
                Explore More Tools
              </Link>
              <Link
                to="/contact"
                className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ItemDetails;

