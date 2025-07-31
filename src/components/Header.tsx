"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#price", label: "Price" },
     { href: "#faq", label: "FAQ" },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Youtube className="w-4 h-4" />, href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/90 backdrop-blur-md py-2 shadow-md" : "bg-zinc-900 py-3"
      } border-b border-white/10`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

       
        <div className="hidden md:flex justify-end items-center space-x-4 pb-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white/70 hover:text-white rounded-full p-2 bg-white/10 hover:bg-gradient-to-r from-pink-400 to-amber-400 hover:scale-110 transition-all duration-300"
              aria-label={`Rede social ${index}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

     
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center group space-x-1">
            <span className="text-white font-bold text-2xl tracking-tight group-hover:drop-shadow-lg transition">
              Boost
            </span>
            <span className="text-pink-400 font-bold text-2xl tracking-tight group-hover:drop-shadow-lg transition">
              flow
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-pink-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-pink-400 transition p-2 rounded-lg hover:bg-white/10"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-zinc-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="flex justify-center space-x-6 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/70 hover:text-white rounded-full p-2 bg-white/10 hover:bg-gradient-to-r from-pink-400 to-amber-400 hover:scale-110 transition-all duration-300"
                    aria-label={`Rede social ${index}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <nav className="space-y-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-white/90 hover:text-pink-400 transition-colors font-medium text-center uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
