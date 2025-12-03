import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Contact Us
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0A9284]/10 dark:bg-[#0A9284]/20 rounded-lg">
                  <Mail className="w-6 h-6 text-[#0A9284] dark:text-[#0FB19D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Email Address
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    chowdhuryyeamin07@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0A9284]/10 dark:bg-[#0A9284]/20 rounded-lg">
                  <Phone className="w-6 h-6 text-[#0A9284] dark:text-[#0FB19D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    +880 1701101422
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0A9284]/10 dark:bg-[#0A9284]/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#0A9284] dark:text-[#0FB19D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Office Address
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#0A9284] focus:outline-none resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#0A9284] to-[#0FB19D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

