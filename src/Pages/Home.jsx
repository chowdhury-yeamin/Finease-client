import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import CountUp from "../Components/CountUp";
import img1 from "../assets/FinEase-Logo.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "https://fin-ease-server-jade.vercel.app/transactions"
        );
        const data = await res.json();
        const userData = data.filter(
          (t) => t.userEmail?.toLowerCase() === user?.email?.toLowerCase()
        );
        setTransactions(userData);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) load();
    else setLoading(false);
  }, [user]);

  // Carousel slides
  const slides = [
    {
      title: "Take Control of Your Finances",
      description:
        "Track income & expenses with a modern, vibrant interface. Start your journey to financial freedom today.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
      buttonText: "Get Started",
      buttonLink: user ? "/add-transaction" : "/register",
    },
    {
      title: "Smart Budget Planning",
      description:
        "Create comprehensive budgets, track spending, and achieve your financial goals with ease.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      buttonText: "Explore Tools",
      buttonLink: "/all-items",
    },
    {
      title: "Detailed Financial Reports",
      description:
        "Get insights into your spending habits with beautiful charts and comprehensive reports.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      buttonText: "View Reports",
      buttonLink: user ? "/reports" : "/register",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const income = transactions
    .filter((t) => t.type?.toLowerCase() === "income")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const expenses = transactions
    .filter((t) => t.type?.toLowerCase() === "expense")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const balance = income - expenses;

  // Featured items for All Items section
  const featuredItems = [
    {
      id: 1,
      title: "Budget Planning Tool",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      shortDescription:
        "Create and manage your monthly budgets with our intuitive planning tool.",
      category: "Planning",
    },
    {
      id: 2,
      title: "Expense Tracker",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      shortDescription:
        "Track all your expenses in one place with detailed insights.",
      category: "Tracking",
    },
    {
      id: 3,
      title: "Financial Reports",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      shortDescription:
        "Generate comprehensive financial reports with charts and graphs.",
      category: "Reports",
    },
    {
      id: 4,
      title: "Goal Setting",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      shortDescription:
        "Set and track financial goals with progress monitoring.",
      category: "Planning",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-600 dark:border-cyan-400"></div>
      </div>
    );
  }

  return (
    <main className="grow">
      {user ? (
        <></>
      ) : (
        <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400 mt-2">
          Login to unlock all features
        </div>
      )}
      {/* CAROUSEL */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16 mt-5">
        <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${
                currentSlide === index ? "z-10" : "z-0"
              }`}
            >
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl text-white">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20,
                        }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20,
                        }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl mb-6 text-gray-200"
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 20,
                        }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          to={slide.buttonLink}
                          className="inline-block px-8 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
                        >
                          {slide.buttonText}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ALL ITEMS SECTION - 4 cards per row */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Featured Financial Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Explore our comprehensive suite of financial management tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-transform transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs px-2 py-1 bg-[#0A9284]/10 text-[#0A9284] dark:bg-[#0A9284]/20 dark:text-[#0FB19D] rounded-full w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                  {item.shortDescription}
                </p>
                <Link
                  to={`/item-details/${item.id}`}
                  className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                >
                  See More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/all-items"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View All Items
          </Link>
        </div>
      </section>

      {/* OVERVIEW SECTION (if user is logged in) */}
      {user && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-[#0A9284] to-[#0FB19D] bg-clip-text text-transparent dark:from-[#0FB19D] dark:to-[#0A9284] mb-10">
            Your Financial Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                label: "Total Balance",
                value: balance,
                color: "text-[#0A9284] dark:text-[#0FB19D]",
              },
              {
                icon: "📈",
                label: "Total Income",
                value: income,
                color: "text-green-500 dark:text-green-400",
              },
              {
                icon: "📉",
                label: "Total Expenses",
                value: expenses,
                color: "text-red-500 dark:text-red-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center transition-transform transition-shadow duration-300"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                  {item.label}
                </h4>
                <p className={`text-2xl font-bold ${item.color}`}>
                  <CountUp from={0} to={item.value || 0} duration={1} />
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Browse by Category
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Find the tools you need by category
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Planning", "Tracking", "Management", "Reports"].map(
            (category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0A9284] to-[#0FB19D] p-6 rounded-xl text-center text-white hover:scale-105 transition-transform cursor-pointer"
              >
                <h3 className="text-xl font-bold">{category}</h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* TOP-RATED/HIGHLIGHTED ITEMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Top-Rated Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Most popular tools trusted by thousands of users
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Real-time Tracking",
              desc: "Monitor your finances in real-time",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Secure & Private",
              desc: "Your data is encrypted and secure",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Fast & Efficient",
              desc: "Lightning-fast performance",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="text-[#0A9284] dark:text-[#0FB19D] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMOTIONAL/OFFER SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A9284] to-[#0FB19D] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Financial Journey Today
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are taking control of their finances
            with FinEase
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/register"
                  className="px-8 py-3 bg-white text-[#0A9284] rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Sign Up Free
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white/20 text-white border-2 border-white rounded-lg hover:bg-white/30 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </>
            ) : (
              <Link
                to="/add-transaction"
                className="px-8 py-3 bg-white text-[#0A9284] rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Add Transaction
              </Link>
            )}
          </div>
        </motion.div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.01 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700 text-center transition-transform transition-shadow duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for financial tips, updates, and
            exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT/BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={img1} alt="FinEase" className="w-full max-w-md mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-transform transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-[#0A9284] dark:text-[#0FB19D] mb-4">
              About FinEase
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              FinEase is a simple, beautiful and secure personal finance manager
              built to help you track income and expenses, understand spending
              habits, and reach financial goals.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Record transactions in seconds, visualize reports, and access your
              data across devices.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
