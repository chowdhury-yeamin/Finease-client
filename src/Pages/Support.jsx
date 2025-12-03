import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Book, MessageSquare, FileText, Search } from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      questions: [
        {
          q: "How do I create an account?",
          a: "Click on the Register button in the navigation bar, fill in your email and password, and you'll be ready to start managing your finances.",
        },
        {
          q: "Is FinEase free to use?",
          a: "Yes, FinEase offers a free tier with essential features. Premium features are available with our paid plans.",
        },
        {
          q: "How do I add my first transaction?",
          a: "After logging in, navigate to 'Add Transaction' from the menu. Fill in the details including type (income/expense), amount, category, and date.",
        },
      ],
    },
    {
      title: "Account Management",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          q: "How do I update my profile?",
          a: "Go to 'My Profile' from the navigation menu, then click 'Manage Account' to edit your display name and photo URL.",
        },
        {
          q: "Can I change my email address?",
          a: "Currently, email changes require contacting our support team. We're working on adding this feature directly in the app.",
        },
        {
          q: "How do I reset my password?",
          a: "On the login page, click 'Forgot Password' and follow the instructions sent to your email address.",
        },
      ],
    },
    {
      title: "Transactions & Reports",
      icon: <FileText className="w-6 h-6" />,
      questions: [
        {
          q: "How do I edit a transaction?",
          a: "Go to 'My Transactions', find the transaction you want to edit, and click on it. Then select 'Update' to modify the details.",
        },
        {
          q: "Can I export my transaction data?",
          a: "Yes, you can export your transactions and reports. Go to the Reports page and use the export functionality available there.",
        },
        {
          q: "How are my reports generated?",
          a: "Reports are automatically generated based on your transactions. They include spending by category, monthly totals, and visual charts for better insights.",
        },
      ],
    },
    {
      title: "Technical Support",
      icon: <MessageSquare className="w-6 h-6" />,
      questions: [
        {
          q: "The app is not loading properly. What should I do?",
          a: "Try clearing your browser cache, refreshing the page, or using a different browser. If the issue persists, contact our support team.",
        },
        {
          q: "Is my data secure?",
          a: "Yes, we use Firebase authentication and secure data storage. Your financial data is encrypted and only accessible to you.",
        },
        {
          q: "Does FinEase work on mobile devices?",
          a: "Yes, FinEase is fully responsive and works on all devices including smartphones and tablets.",
        },
      ],
    },
  ];

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Support Center
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions or get help with your account
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 md:p-8 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#0A9284]/10 dark:bg-[#0A9284]/20 rounded-lg text-[#0A9284] dark:text-[#0FB19D]">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <details
                    key={index}
                    className="group p-4 bg-slate-50 dark:bg-slate-900 rounded-lg cursor-pointer border border-slate-200 dark:border-slate-700"
                  >
                    <summary className="font-semibold text-slate-800 dark:text-slate-100 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="text-[#0A9284] dark:text-[#0FB19D] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 pl-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6 opacity-90">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#0A9284] rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Contact Support
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support;

