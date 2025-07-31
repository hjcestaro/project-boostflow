"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white"
    >
      <div className="text-center p-6">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page not found. 😕
        </motion.p>
        <Link
          href="/"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
}
