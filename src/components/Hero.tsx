"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-12">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              High-Conversion Landing Page
            </span>
            <span className="block">
              for <span className="text-amber-300">Next.js 14</span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <strong className="text-white">Everything you need</strong> to
            launch fast: responsive design, built-in components, and{" "}
            <span className="text-amber-300">easy customization</span>. Perfect
            for startups and marketers.
          </p>

          <Link
            href="#features"
            className="mt-8 inline-block rounded-lg bg-pink-500 px-6 py-3 text-white font-medium hover:bg-pink-600 transition-colors"
          >
            Explore Features
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 lg:mt-0 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg lg:blur-xl opacity-30 -z-10" />
          <Image
            src="/images/hero.webp"
            width={640}
            height={640}
            alt="Landing page preview com imagem chamativa da seção principal"
            className="rounded-2xl shadow-2xl ring-1 ring-white/10 hover:ring-pink-500/50 transition-all duration-300"
            priority
            quality={90}
          />
        </motion.div>
      </div>
    </section>
  );
}
