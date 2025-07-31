"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "How does the AI automation actually work?",
    answer:
      "Our AI analyzes your workflow patterns and automatically handles repetitive tasks. It learns from your team's behavior to optimize processes over time, providing smart suggestions and automating routine work without any manual setup.",
    category: "Product",
    icon: <HelpCircle className="w-5 h-5 text-indigo-500" />,
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The free trial gives you full access to all Professional plan features for 14 days. You can create unlimited projects, invite team members, and test all premium functionality. No credit card is required to start your trial.",
    category: "Billing",
    icon: <Mail className="w-5 h-5 text-purple-500" />,
  },
  {
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade security including AES-256 encryption, SOC 2 compliance, and regular third-party audits. Your data remains yours alone—we never sell or share it with third parties. You can also request data residency options for specific regions.",
    category: "Security",
    icon: <HelpCircle className="w-5 h-5 text-emerald-500" />,
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time with no penalties. If you cancel during a billing period, you'll retain access until the end of that period. We even provide data export tools to make transition easy.",
    category: "Billing",
    icon: <Mail className="w-5 h-5 text-purple-500" />,
  },
  {
    question: "How do you handle customer support?",
    answer:
      "We offer 24/5 email support for all plans, with response times under 4 hours for paid plans. Professional and Enterprise plans include live chat and priority support. Enterprise customers get a dedicated account manager and 24/7 phone support.",
    category: "Support",
    icon: <MessageSquare className="w-5 h-5 text-amber-500" />,
  },
  {
    question: "What integrations do you offer?",
    answer:
      "We integrate with all major tools including Slack, Microsoft Teams, Google Workspace, Salesforce, and over 50 other platforms through our API. Enterprise plans can request custom integrations tailored to specific business needs.",
    category: "Product",
    icon: <HelpCircle className="w-5 h-5 text-indigo-500" />,
  },
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "product", name: "Product" },
  { id: "billing", name: "Billing" },
  { id: "security", name: "Security" },
  { id: "support", name: "Support" },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredItems =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter(
          (item) => item.category.toLowerCase() === activeCategory
        );

  return (
    <section className="py-24" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find quick answers to common questions about our product and
            services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="mb-4 last:mb-0"
            >
              <div
                className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "shadow-md" : "hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-lg mr-4 ${
                        item.icon.props.className.includes("indigo")
                          ? "bg-indigo-100"
                          : item.icon.props.className.includes("purple")
                          ? "bg-purple-100"
                          : item.icon.props.className.includes("emerald")
                          ? "bg-emerald-100"
                          : "bg-amber-100"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.question}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.category === "Product"
                            ? "bg-indigo-100 text-indigo-800"
                            : item.category === "Billing"
                            ? "bg-purple-100 text-purple-800"
                            : item.category === "Security"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 ml-14">
                    <p className="text-white">{item.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="border-2 rounded-2xl p-8 md:p-10 inline-block">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Can't find what you're looking for? Our support team is ready to
              help you.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
