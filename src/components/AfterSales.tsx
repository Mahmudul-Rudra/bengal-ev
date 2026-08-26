"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaTools,
  FaUserCog,
  FaExchangeAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaHeadset,
} from "react-icons/fa";

const WHATSAPP = "8801645252756";
const PHONE = "+8801645252756";
const EMAIL = "info@bevsbd.com";

const pillars = [
  {
    icon: <FaShieldAlt />,
    title: "Warranty You Can Count On",
    text: "Coverage on the parts that matter, handled without the runaround.",
  },
  {
    icon: <FaTools />,
    title: "Genuine Spare Parts",
    text: "Authentic Haitai and BEVS components, so your vehicle performs like day one.",
  },
  {
    icon: <FaUserCog />,
    title: "Trained Technicians",
    text: "A team that knows electric drivetrains, batteries, and swap systems inside out.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Battery Swap Support",
    text: "Guidance and service for our complete battery swap ecosystem.",
  },
];

const steps = [
  { title: "Reach Out", text: "Call the hotline or message us on WhatsApp with your issue." },
  { title: "Diagnosis", text: "We assess the vehicle and explain what needs attention, clearly." },
  { title: "Service & Parts", text: "Repairs and maintenance using genuine components." },
  { title: "Quality Check", text: "Every vehicle is tested before it leaves our hands." },
  { title: "Back on the Road", text: "You ride away with confidence, and we stay reachable." },
];

const locations = [
  {
    name: "Head Office",
    address: "House 68, 69/A, Rd 9/6, Blk G, S. Banasree, Khilgaon, Dhaka",
  },
  {
    name: "Exhibition Center",
    address: "10 Mirpara, Masterbari, Banasree – Demra Road, Demra, Dhaka",
  },
];

const faqs = [
  {
    q: "How do I book a service appointment?",
    a: "Call our hotline or message us on WhatsApp, and we will arrange a time that works for you.",
  },
  {
    q: "Does my vehicle come with a warranty?",
    a: "Yes. Coverage depends on the model, and our team will walk you through the exact terms for your vehicle.",
  },
  {
    q: "Do you use genuine spare parts?",
    a: "Always. We fit authentic components so your EV keeps performing the way it was built to.",
  },
  {
    q: "How does battery swap servicing work?",
    a: "We support the full swap ecosystem, from cabinet checks to battery health, guided by our trained team.",
  },
  {
    q: "How long does a typical service take?",
    a: "Minor maintenance is often same day. For larger repairs we give you a clear timeline up front.",
  },
  {
    q: "Can I get support after purchase if something goes wrong?",
    a: "Absolutely. After-sales support is exactly what this team is here for. Reach out any time during working hours.",
  },
];

function GlowOrbs() {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-bengal-green/40 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-28 -right-20 w-96 h-96 rounded-full bg-emerald-500/25 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function AfterSales() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bengal-dark via-[#16241d] to-[#0b1512] text-white px-6 py-24 md:py-32">
        <GlowOrbs />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-300">After-Sales Service</span>
          </div>

          <span className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-[0.2em] text-xs mb-5">
            <span className="h-px w-8 bg-emerald-300/70" /> Service &amp; Support
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            After-Sales{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-bengal-green bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every Bengal EV is backed by real people, genuine parts, and a promise to keep you on the road. Here is how we look after you and your vehicle.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bengal-green to-emerald-600 px-8 py-3.5 rounded-full font-bold shadow-lg shadow-bengal-green/30 hover:scale-105 transition-transform"
            >
              <FaPhoneAlt /> Call the Hotline
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* PILLARS */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-bengal-dark">What Our Support Covers</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Four things you can rely on, long after the sale is done.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-bengal-green/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-bengal-green/10 text-bengal-green text-2xl flex items-center justify-center mb-6 group-hover:bg-bengal-green group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-bengal-dark mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE JOURNEY */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-bengal-dark">How Service Works</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              From your first call to riding away, five simple steps.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* connecting line on desktop */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-bengal-green/20 via-bengal-green/40 to-bengal-green/20" />
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bengal-green to-emerald-600 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-bengal-green/30 z-10">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-bold text-bengal-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-[14rem]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE NETWORK */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-bengal-dark">Where to Find Us</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Visit us in person, or reach the service hotline from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {locations.map((loc, i) => (
              <motion.a
                key={loc.name}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex items-start gap-4 p-7 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-bengal-green/10 text-bengal-green flex items-center justify-center group-hover:bg-bengal-green group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className="font-bold text-bengal-dark">{loc.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{loc.address}</p>
                  <span className="mt-2 inline-block text-xs font-semibold text-bengal-green">Open in Maps →</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 p-6 rounded-3xl bg-bengal-green text-white">
            <FaHeadset className="text-2xl shrink-0" />
            <p className="font-semibold">
              Service Hotline:{" "}
              <a href={`tel:${PHONE}`} className="underline underline-offset-4">{PHONE}</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-bengal-dark">Frequently Asked Questions</h2>
            <p className="mt-3 text-gray-500">Quick answers to the things people ask us most.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? "border-bengal-green/40 bg-gray-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-bengal-dark">{f.q}</span>
                    <FaChevronDown
                      className={`shrink-0 text-bengal-green transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 pb-24">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-bengal-dark via-[#16241d] to-[#0b1512] text-white text-center px-6 py-16 md:py-20 shadow-2xl">
          <GlowOrbs />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold">Need Help Right Now?</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Our team is ready. Pick whichever way is easiest for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-bengal-green to-emerald-600 px-7 py-3.5 rounded-full font-bold shadow-lg shadow-bengal-green/30 hover:scale-105 transition-transform"
              >
                <FaPhoneAlt /> Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-7 py-3.5 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-7 py-3.5 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Prefer a form?{" "}
              <Link href="/#contact" className="text-emerald-300 underline underline-offset-4">
                Send us a message
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
