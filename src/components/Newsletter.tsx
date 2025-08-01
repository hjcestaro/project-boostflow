"use client";

import { motion } from "framer-motion";
import { Mail, Check, Zap } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio (substitua por integração real)
    setTimeout(() => setSubmitted(true), 1000); 
  };

  return (
    <section className="relative py-28 bg-gray-950" id="newsletter">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span>Template Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Get Free Resources
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join my developer list and receive:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            "Tailwind CSS Cheat Sheet",
            "Figma Design File",
            "Exclusive Component Library"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </motion.div>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-500/20"
            >
              Get Resources
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-4 mx-auto">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Check your email!</h3>
            <p className="text-gray-400">
              I've sent your free resources to <span className="text-purple-400">{email}</span>
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500 mt-8"
        >
          No spam. Only useful content for developers. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}