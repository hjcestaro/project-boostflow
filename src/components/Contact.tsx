"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-gray-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Contact Us
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
           Have questions or want to discuss your project? Fill out the form below and our team will get in touch.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800 shadow-2xl"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                <span>Name</span>
                <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="Your full name"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                <span>E-mail</span>
                <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="your@email.com"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 flex items-center gap-1">
                <span>Message</span>
                <span className="text-pink-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                placeholder="Describe your need or project..."
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-all ${
                  isLoading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/20"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Send...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            aria-live="polite"
            className="bg-green-900/20 border border-green-800/50 text-center p-8 md:p-10 rounded-xl backdrop-blur-sm"
          >
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-green-100 mb-2">Message sent successfully!</h3>
              <p className="text-green-300 mb-6">Thanks for getting in touch. Our team will respond shortly.</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="px-6 py-2 rounded-lg bg-green-900/50 border border-green-700 text-green-100 hover:bg-green-800/50 transition-colors"
              >
                Send new message
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}