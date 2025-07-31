"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Brain,
  CheckCircle2,
  BarChart2,
  Users,
  Zap,
} from "lucide-react";

const steps = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Quick Setup",
    description:
      "Get started in minutes with our intuitive onboarding process.",
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Power Up",
    description: "Connect your tools and customize your workflow preferences.",
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Automation",
    description: "Our AI learns your patterns and automates repetitive tasks.",
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Real-time Insights",
    description: "Get actionable analytics and performance metrics.",
    color: "bg-amber-500",
    borderColor: "border-amber-500",
    textColor: "text-amber-500",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Collaborate",
    description: "Invite team members and streamline your processes together.",
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    textColor: "text-rose-500",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Achieve Goals",
    description:
      "Watch your productivity soar and objectives get accomplished.",
    color: "bg-teal-500",
    borderColor: "border-teal-500",
    textColor: "text-teal-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A simple, powerful process designed to boost your productivity
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-500 -ml-0.5 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 lg:pl-0"
              >
                <div
                  className={`absolute left-1/2 top-7 w-8 h-8 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-500 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg`}
                >
                  <div className="flex items-center justify-center h-full text-white">
                    {step.icon}
                  </div>
                </div>

                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "lg:ml-auto lg:mr-8 lg:pl-8 lg:pr-0"
                      : "lg:mr-auto lg:ml-8 lg:pr-8 lg:pl-0"
                  } max-w-lg`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div
                      className={`text-xs font-semibold mb-1 ${step.textColor} uppercase tracking-wider`}
                    >
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
