"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Costa",
    role: "Frontend Developer, StartupX",
    content:
      "This landing page template saved me 3 weeks of work. The clean code made customization effortless for my client project.",
    rating: 5,
    avatar: "/images/alex.webp",
  },
  {
    id: 2,
    name: "Julia Martins",
    role: "Marketing Specialist",
    content:
      "Our conversion rate improved by 35% after switching to this template. The mobile responsiveness is flawless.",
    rating: 5,
    avatar: "/images/julia.webp",
  },
  {
    id: 3,
    name: "Rafael Silva",
    role: "Freelance Designer",
    content:
      "As someone who isn't a React expert, I appreciated how easy it was to change colors and content with Tailwind.",
    rating: 4,
    avatar: "/images/rafaela.webp",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="relative py-28 bg-gray-950 overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-900 rounded-full filter blur-[100px]"></div>
      </div>

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
              Trusted by Creators
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feedback from developers and marketers using this template
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800/50 border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-xl overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-700"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-xl text-white font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-500/30"
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={56}
                    height={56}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/testimonials/default-avatar.webp";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-pink-500 w-6" : "bg-gray-700"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
