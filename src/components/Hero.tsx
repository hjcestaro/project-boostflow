"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate text-white overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-32 lg:flex lg:items-center lg:justify-between lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md">
            Welcome to the Future, <br /> Welcome to BoostFlow
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Working with AI is a new way of life. Optimize your time, empower
            your team, and scale your business like never before.
          </p>

          <p className="mt-3 text-sm text-gray-400 italic">
            &ldquo;Do I really need this?&rdquo; — Only if time matters to you.
          </p>

          <div className="mt-8">
            <Link
              href="#about"
              className="inline-block rounded-xl bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg hover:bg-gray-200 transition focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              I want to learn more →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 lg:mt-0 lg:ml-12"
        >
          <Image
            src="/images/hero.jpg"
            width={600}
            height={600}
            alt="Illustration representing BoostFlow AI productivity"
            className="rounded-2xl shadow-xl ring-1 ring-white/10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
