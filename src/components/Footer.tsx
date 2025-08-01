"use client";

import { motion } from "framer-motion";
import { Code, Mail, Github, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <Code className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">BoostFlow</span>
            </div>
            <p className="text-sm mb-4">
              Premium Next.js templates for developers and agencies.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                  href: "#",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  label: "Twitter",
                  href: "#",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  href: "#",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  href={social.href}
                  className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-pink-500/30 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">
              STAY UPDATED
            </h3>
            <p className="text-sm mb-4">
              Get notified about new templates and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BoostFlow Template. All rights
            reserved.
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-3 rounded-full shadow-lg border border-gray-700 transition-all"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
