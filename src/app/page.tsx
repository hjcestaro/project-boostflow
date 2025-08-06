"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Newsletter from "@/components/Newsletter";
import PricingSection from "@/components/Princing";
import ContactForm from "@/components/Contact";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <ContactForm />
      <Newsletter />
    </div>
  );
}
