"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              High-Conversion Landing Page
            </span>
            <br />
            <span className="text-white">
              for <span className="text-amber-300">Next.js 14</span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <strong className="text-white">Everything you need</strong> to
            launch fast: responsive design, built-in components, and{" "}
            <span className="text-amber-300">easy customization</span>. Perfect
            for startups and marketers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5"
                >
                  <svg
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs font-medium text-gray-200">
                    {tech}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://project-boostflow-vexy.vercel.app/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3.5 shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02]"
            >
              👀 View Live Preview
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-transparent text-white font-semibold px-6 py-3.5 shadow-lg hover:bg-white/10 transition border border-white/10"
            >
              🛠️ Explore Components
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-300">Fully Responsive</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-300">Easy to Customize</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 lg:mt-0 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-30 -z-10" />
          <Image
            src="/images/hero.webp"
            width={640}
            height={640}
            alt="Preview of the landing page template showing hero section and features"
            className="rounded-2xl shadow-2xl ring-1 ring-white/10 hover:ring-pink-500/50 transition-all"
            priority
            quality={90}
          />
        </motion.div>
      </div>
    </section>
  );
}
