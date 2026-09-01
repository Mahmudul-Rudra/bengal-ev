"use client";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { SectionReveal } from "./SectionReveal";

// To add another award later, just paste a new object into this array.
const awards = [
  {
    title: "Akij eMobility Award",
    detail: "3rd, Territory Position · FY 2025-26",
    image: "/assets/Awards/akij_award.jpeg", // match your file name/extension
  },
  // {
  //   title: "Another Award",
  //   detail: "Category · Year",
  //   image: "/assets/Awards/another-award.jpeg",
  // },
];

export function Awards() {
  return (
    <section id="awards" className="bg-gray-50 px-6 py-20 md:py-28">
      <SectionReveal>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-bengal-green font-bold uppercase tracking-[0.2em] text-xs mb-4">
              <span className="h-px w-8 bg-bengal-green/60" /> Recognition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-bengal-dark">
              Awards &amp; Recognition
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Proud milestones that reflect our commitment to quality and to the road ahead.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group w-full sm:w-[340px]"
              >
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white border border-gray-100 shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
                  {/* warm glow behind the plaque, appears on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-amber-300/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Plaque frame */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white ring-1 ring-gray-100">
                    <div className="aspect-[3/4] flex items-center justify-center p-4">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* shine sweep on hover */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </div>

                  {/* Award name below */}
                  <div className="relative text-center mt-6">
                    <div className="inline-flex items-center gap-2 text-bengal-green mb-1">
                      <FaAward />
                    </div>
                    <h3 className="text-lg font-bold text-bengal-dark">{a.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{a.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
