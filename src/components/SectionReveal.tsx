"use client";
import { motion } from "framer-motion";

export function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the section is visible
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Smoother "cubic-bezier" ease
    >
      {children}
    </motion.div>
  );
}