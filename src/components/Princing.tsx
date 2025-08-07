"use client";

import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      duration: "/month",
      description: "Perfect for small projects & startups",
      popular: false,
      features: [
        "All essential sections",
        "Basic customization",
        "1 domain license",
        "Standard support",
        "3 months updates"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$99",
      duration: "/month",
      description: "For growing businesses",
      popular: true,
      features: [
        "Everything in Starter",
        "Premium sections",
        "3 domain licenses",
        "Priority support",
        "6 months updates",
        "Custom components"
      ],
      cta: "Popular Choice"
    },
    {
      name: "Enterprise",
      price: "$199",
      duration: "/month",
      description: "For large scale projects",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited domains",
        "24/7 VIP support",
        "Lifetime updates",
        "White-label rights",
        "Custom development"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="relative py-28 bg-gray-950 overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            No hidden fees. Switch plans or cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border ${
                plan.popular 
                  ? "border-pink-500/30 shadow-lg shadow-pink-500/20" 
                  : "border-gray-800"
              } transition-all hover:shadow-lg hover:shadow-purple-500/10`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-pink-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-white ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/30"
                    : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>Need custom solutions? <a href="#contact" className="text-pink-400 hover:underline">Contact our team</a></p>
        </div>
      </div>
    </section>
  );
}