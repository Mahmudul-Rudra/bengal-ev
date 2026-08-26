"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { SectionReveal } from "./SectionReveal";

type Method = "whatsapp" | "email";

export function ContactSection() {
  const [method, setMethod] = useState<Method>("whatsapp");
  const [name, setName] = useState("");
  const [contact, setContact] = useState(""); // WhatsApp number OR email
  const [message, setMessage] = useState("");

  const companyWhatsApp = "8801645252756"; // without the '+'
  const companyEmail = "info@bevsbd.com";

  const handleSend = () => {
    if (!name.trim() || !contact.trim() || !message.trim()) {
      alert("Please fill in your name, contact info, and message.");
      return;
    }

    if (method === "whatsapp") {
      const text =
        `Hello Bengal EV Solutions,\n\n` +
        `Name: ${name}\n` +
        `My WhatsApp: ${contact}\n\n` +
        `${message}`;
      window.open(
        `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      const subject = `Website enquiry from ${name}`;
      const body = `Name: ${name}\nEmail: ${contact}\n\n${message}`;
      window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:bg-white focus:border-bengal-green focus:ring-4 focus:ring-bengal-green/15";

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white"
    >
      <SectionReveal>
        <div
          suppressHydrationWarning
          className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          {/* Dark gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-bengal-dark via-[#16241d] to-[#0b1512]" />

          {/* Animated glow orbs */}
          <motion.div
            aria-hidden
            className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-bengal-green/40 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-28 -right-16 w-96 h-96 rounded-full bg-emerald-500/25 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-teal-400/20 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Fine grid sheen */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 p-8 md:p-14">
            {/* Left column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="flex flex-col justify-center text-white"
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-[0.2em] text-xs mb-4"
              >
                <span className="h-px w-8 bg-emerald-300/70" /> Get in touch
              </motion.span>

              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Let&rsquo;s Talk{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-bengal-green bg-clip-text text-transparent">
                  Energy
                </span>
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-5 text-gray-300 text-lg leading-relaxed max-w-md"
              >
                Ready to electrify your fleet? Reach out and our team will help you find
                the right clean-mobility solution.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-10 space-y-4"
              >
                <a href="tel:+8801645252756" className="group flex items-center gap-4 w-fit">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-bengal-green group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <FaPhoneAlt />
                  </span>
                  <span className="text-gray-200 group-hover:text-white transition-colors">
                    +880 1645-252756
                  </span>
                </a>
                <a href="mailto:info@bevsbd.com" className="group flex items-center gap-4 w-fit">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-bengal-green group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <FaEnvelope />
                  </span>
                  <span className="text-gray-200 group-hover:text-white transition-colors">
                    info@bevsbd.com
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right column: form panel */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl border border-white/60"
            >
              {/* Method toggle with sliding pill */}
              <div className="relative grid grid-cols-2 p-1.5 mb-6 bg-gray-100 rounded-2xl">
                {(["whatsapp", "email"] as Method[]).map((m) => {
                  const active = method === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMethod(m)}
                      className={`relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 ${
                        active ? "text-white" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="method-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-bengal-green to-emerald-600 shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative flex items-center gap-2">
                        {m === "whatsapp" ? <FaWhatsapp /> : <FaEnvelope />}
                        {m === "whatsapp" ? "WhatsApp" : "Email"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className={inputBase}
                />

                {/* Field that swaps with an animated height/fade */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {method === "whatsapp" ? (
                      <input
                        type="tel"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Your WhatsApp Number"
                        className={inputBase}
                      />
                    ) : (
                      <input
                        type="email"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Your Email"
                        className={inputBase}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help?"
                  className={`${inputBase} h-28 resize-none`}
                />

                {/* Send button with shine sweep + animated label */}
                <motion.button
                  type="button"
                  onClick={handleSend}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-bengal-green to-emerald-600 shadow-lg shadow-bengal-green/30"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative flex items-center justify-center gap-2">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={method}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        {method === "whatsapp" ? <FaWhatsapp /> : <FaPaperPlane />}
                        {method === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
