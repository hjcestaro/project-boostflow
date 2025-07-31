"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content:
      "This product completely transformed our workflow. The AI automation saves us at least 20 hours per week, allowing our team to focus on strategic initiatives.",
    rating: 5,
    avatar: "/avatars/sarah-johnson.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, StartupX",
    content:
      "The implementation was seamless and the results were immediate. Our productivity metrics improved by 35% in the first month alone.",
    rating: 5,
    avatar: "/avatars/michael-chen.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager, InnovateCo",
    content:
      "The collaborative features are game-changing. Our distributed teams can now work together as if they were in the same office.",
    rating: 4,
    avatar: "/avatars/emma-rodriguez.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Operations Lead, ScaleFast",
    content:
      "The real-time analytics helped us identify bottlenecks we didn't even know existed. Highly recommended for growing businesses.",
    rating: 5,
    avatar: "/avatars/david-kim.jpg",
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "CEO, DigitalFirst",
    content:
      "Worth every penny. The ROI was evident within weeks. Customer support is also exceptional - responsive and knowledgeable.",
    rating: 5,
    avatar: "/avatars/lisa-wong.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Head of Product, GrowthLabs",
    content:
      "We've tried many solutions but this one stands out for its intuitive interface and powerful features. Our team adoption was 100% from day one.",
    rating: 5,
    avatar: "/avatars/james-wilson.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const totalGroups = Math.ceil(testimonials.length / itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextGroup = () => {
    setCurrentIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const prevGroup = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentIndex * itemsPerView + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            their experience.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={prevGroup}
            className="hidden md:flex absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-indigo-600"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextGroup}
            className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-indigo-600"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-3">
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <div className="bg-white h-full rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img
                                className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                onError={(
                                  e: React.SyntheticEvent<
                                    HTMLImageElement,
                                    Event
                                  >
                                ) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src =
                                    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?_gl=1*xwj4kd*_ga*MjYxMjEyMDk2LjE3NTE1NjYwODY.*_ga_8JE65Q40S6*czE3NTM5MDYyMDIkbzMkZzAkdDE3NTM5MDYyNDYkajE2JGwwJGgw";
                                }}
                              />
                              <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow">
                                <div className="bg-indigo-500 text-white rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < testimonial.rating
                                      ? "text-amber-400 fill-amber-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <blockquote className="text-gray-700 relative pl-6">
                          <svg
                            className="absolute left-0 top-0 w-5 h-5 text-indigo-200"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="mb-4">{testimonial.content}</p>
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1.5 w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-indigo-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonials group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
