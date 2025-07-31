'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19/mo",
    description: "For individual trainers starting out.",
    features: ["1 Landing Page", "Basic Contact Form", "Email Support"],
    extra: "Perfect for those who want an online presence with a modern look but without advanced features."
  },
  {
    name: "Professional",
    price: "$49/mo",
    description: "Best for growing businesses and active trainers.",
    features: ["Up to 5 Pages", "Lead Capture Forms", "Priority Support"],
    extra: "Great for professionals who want more control, branding, and access to custom components."
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For studios, gyms or coaching teams.",
    features: ["Unlimited Pages", "CRM Integration", "Custom Features"],
    extra: "Tailored solutions for large teams with advanced needs. Contact us for a custom quote."
  },
];

export default function PricingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative isolate bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-24 px-6 lg:px-12" id="price">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-300 mb-16">Simple and flexible pricing for every stage of your fitness journey.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-lg hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-sm text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" /> {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 transition-colors px-4 py-2 rounded-xl text-sm font-medium"
              >
                {openIndex === index ? "Hide Details" : "Learn More"}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="mt-4 text-sm text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="pt-4 border-t border-white/10">{plan.extra}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
