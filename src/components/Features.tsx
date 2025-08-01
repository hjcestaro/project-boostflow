"use client";

import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Component,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "All Essential Sections",
      description:
        "Hero, Features, Testimonials, FAQ - everything you need for a high-converting LP.",
      badge: "Ready-to-use",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Next.js 14 + TypeScript",
      description:
        "Built with App Router and modern practices for top performance.",
      badge: "Trending Tech",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Fully Responsive",
      description: "Perfectly adapted for all devices, from mobile to desktop.",
      badge: "Mobile-First",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Easy to Customize",
      description:
        "Change colors, fonts, and content with Tailwind CSS classes.",
      badge: "Dev-Friendly",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Optimized Performance",
      description:
        "90+ Lighthouse score with optimized images and fast loading.",
      badge: "Fast",
    },
    {
      icon: <Component className="w-5 h-5" />,
      title: "Reusable Components",
      description: "Buttons, cards, and navbars ready for easy customization.",
      badge: "Modular",
    },
  ];

  return (
    <section
      className="relative py-28 bg-gray-950 overflow-hidden"
      id="features"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Why Choose This Template
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A{" "}
            <span className="text-amber-400 font-semibold">
              single landing page
            </span>{" "}
            focused on what really matters -{" "}
            <span className="text-white">convert visitors</span> and launch fast
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-pink-500/30 transition-all group overflow-hidden"
            >
              {feature.badge && (
                <div
                  className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    feature.badge === "Ready-to-use"
                      ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      : feature.badge === "Trending Tech"
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "bg-pink-500/10 text-pink-400 border-pink-500/20"
                  }`}
                >
                  {feature.badge}
                </div>
              )}

              <div
                className={`bg-gray-800/50 group-hover:bg-pink-500/10 w-12 h-12 rounded-lg flex items-center justify-center border ${
                  feature.badge === "Ready-to-use"
                    ? "border-purple-500/30 group-hover:border-purple-500/50 group-hover:text-white"
                    : "border-gray-700 group-hover:border-pink-500/30 group-hover:text-white"
                } transition-all mb-4`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
