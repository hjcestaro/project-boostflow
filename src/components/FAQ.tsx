"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Palette, Smartphone, CreditCard, Shield } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "What exactly is included?",
    answer: "This is a single, high-conversion landing page template with all essential sections: Hero, Features, Testimonials, FAQ, and Newsletter. Includes 15+ reusable components built with Next.js 14 and Tailwind CSS.",
    category: "Template",
    icon: <Code className="w-5 h-5 text-purple-500" />
  },
  {
    question: "How customizable is it?",
    answer: "Very easy! Change colors via Tailwind config, edit content directly in the components, and modify layouts as needed. No complex setup required - perfect for developers and designers.",
    category: "Customization",
    icon: <Palette className="w-5 h-5 text-amber-500" />
  },
  {
    question: "Is it mobile-friendly?",
    answer: "Yes! The template is fully responsive and tested on all devices. Mobile-specific styles are included for key sections.",
    category: "Technology",
    icon: <Smartphone className="w-5 h-5 text-blue-500" />
  },
  {
    question: "What license do I get?",
    answer: "Regular ThemeForest license covers use for 1 end product. You can use it for client projects, but each final product requires a separate license.",
    category: "License",
    icon: <Shield className="w-5 h-5 text-indigo-500" />
  },
  {
    question: "How do updates work?",
    answer: "You'll receive free updates for bug fixes and minor improvements. Major updates may require purchasing again if you want the newest version.",
    category: "Support",
    icon: <Shield className="w-5 h-5 text-emerald-500" />
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! ThemeForest offers 30-day money-back guarantees if the template doesn't work as described.",
    category: "Purchase",
    icon: <CreditCard className="w-5 h-5 text-pink-500" />
  }
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "template", name: "Template" },
  { id: "customization", name: "Customization" },
  { id: "technology", name: "Technology" },
  { id: "license", name: "License" },
  { id: "support", name: "Support" },
  { id: "purchase", name: "Purchase" }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredItems = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category.toLowerCase() === activeCategory);

  return (
    <section className="relative py-28 bg-gray-950 overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Common Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clear answers about this landing page template
          </p>
        </motion.div>
    
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

     
        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 last:mb-0"
            >
              <div 
                className={`border border-gray-800 rounded-xl overflow-hidden ${
                  activeIndex === index ? "bg-gray-900/50" : "bg-gray-900/30 hover:bg-gray-900/40"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      item.category === "Template" ? "bg-purple-500/10 text-purple-400" :
                      item.category === "Customization" ? "bg-amber-500/10 text-amber-400" :
                      item.category === "Technology" ? "bg-blue-500/10 text-blue-400" :
                      item.category === "License" ? "bg-indigo-500/10 text-indigo-400" :
                      item.category === "Support" ? "bg-emerald-500/10 text-emerald-400" :
                      "bg-pink-500/10 text-pink-400"
                    }`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeIndex === index ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 ml-14 border-t border-gray-800/50">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Still unsure?</h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Contact me through ThemeForest for specific questions about this template.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              ✉️ Ask a Question
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}