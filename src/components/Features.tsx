"use client";

import { Zap, RefreshCw, Rocket, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automated Workflows",
    description:
      "Let AI handle repetitive tasks, so your team can focus on what matters most.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    hoverColor: "hover:border-indigo-300",
    linkText: "Explore automation",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Real-Time Sync",
    description:
      "Instant updates across devices and teams. No delays, no confusion.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverColor: "hover:border-emerald-300",
    linkText: "See sync in action",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Productivity Boost",
    description:
      "Turn hours of work into minutes with smart task suggestions and automation.",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverColor: "hover:border-rose-300",
    linkText: "Boost your workflow",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Features() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-900 to-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Powerful Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Discover what makes our solution stand out from the competition
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-gray-850 p-8 rounded-xl border border-gray-700 shadow-lg ${feature.hoverColor} hover:shadow-xl transition-all duration-300 group`}
            >
              <div
                className={`absolute top-0 left-6 -translate-y-1/2 p-4 rounded-xl ${feature.bgColor} shadow-md`}
              >
                <div className={feature.iconColor}>{feature.icon}</div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  {feature.linkText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
