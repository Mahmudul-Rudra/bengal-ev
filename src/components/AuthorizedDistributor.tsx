"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const partners = [
  {
    name: "Haitai Power",
    logo: "/assets/Distributor/Haitai.jpeg", // match your file extension
    emoji: "🤝",
    tag: "Quality | Commitment | Partnership",
  },
  {
    name: "Arra",
    logo: "/assets/Distributor/Arra.jpeg", // match your file extension
    emoji: "⚙️",
    tag: "Pioneer in Electric 3w | 2w | Battery Swapping",
  },
];

export function AuthorizedDistributor() {
  return (
    <section id="distributor" className="py-24 bg-white px-6">
      <SectionReveal>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-bengal-dark mb-12">
              Authorized Distributor Of
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="group w-full max-w-sm h-64 md:h-80 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3 px-4 text-center">
                    <span className="text-2xl">{p.emoji}</span>
                    <p className="font-semibold text-gray-800">{p.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
