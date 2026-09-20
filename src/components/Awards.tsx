"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";

// Add awards here. Any orientation (portrait or landscape) works.
const awards = [
  {
    title: "Akij eMobility Award",
    detail: "3rd, Territory Position · FY 2025-26",
    image: "/assets/Awards/akij_award.jpeg",
  },
  {
    title: "Certificate of Appreciation",
    detail: "Fastest Growing Partnership in South Asia",
    image: "/assets/Awards/haitai_award.jpeg",
  },
  // { title: "Another Award", detail: "Category · Year", image: "/assets/Awards/another.jpeg" },
];

export function Awards() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const many = awards.length > 1;
  const current = awards[active];

  useEffect(() => {
    if (reduce || paused || !many) return;
    const id = setInterval(() => setActive((a) => (a + 1) % awards.length), 5000);
    return () => clearInterval(id);
  }, [reduce, paused, many]);

  const go = (dir: number) => setActive((a) => (a + dir + awards.length) % awards.length);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 16 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => { mx.set(0); my.set(0); };

  return (
    <section
      id="awards"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); resetTilt(); }}
      className="relative overflow-hidden bg-gradient-to-br from-bengal-dark via-[#16241d] to-[#0b1512] text-white py-24 md:py-32 px-6"
    >
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }}
      />

      {/* Full-section vignette (blends with the page, no inner box) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(75% 68% at 50% 55%, transparent 40%, rgba(0,0,0,0.5) 100%)" }}
      />

      {/* Heading */}
      <div className="relative z-30 text-center mb-12 md:mb-16">
        <span className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-[0.22em] text-xs mb-4">
          <span className="h-px w-8 bg-emerald-300/70" /> Recognition
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Awards &amp;{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-bengal-green bg-clip-text text-transparent">Recognition</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto" style={{ perspective: 1200 }}>
        {/* Beam group (SVG light rig) — sways + breathes as one */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 z-[1] origin-top"
          animate={reduce ? undefined : { rotate: [-1.5, 1.5, -1.5], opacity: [0.85, 1, 0.85], scaleX: [1, 1.05, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="760" height="580" viewBox="0 0 760 580" fill="none" className="max-w-none">
            <defs>
              <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                <stop offset="42%" stopColor="#bbf7d0" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="src" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#d1fae5" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="pool" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#a7f3d0" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="30" />
              </filter>
              <filter id="soft2" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>
            {/* beam cone (blurred to melt all edges) */}
            <polygon points="345,0 415,0 650,560 110,560" fill="url(#beam)" filter="url(#soft)" />
            {/* source hotspot */}
            <ellipse cx="380" cy="8" rx="95" ry="34" fill="url(#src)" filter="url(#soft2)" />
            {/* floor pool */}
            <ellipse cx="380" cy="548" rx="250" ry="50" fill="url(#pool)" filter="url(#soft2)" />
          </svg>

          {/* dust motes drifting up the beam */}
          {!reduce &&
            [0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white/60"
                style={{ width: 3, height: 3, left: `${45 + i * 2}%`, top: `${24 + i * 8}%`, filter: "blur(1px)" }}
                animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0], scale: [0.7, 1.3, 0.7] }}
                transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
              />
            ))}
        </motion.div>

        {/* Lamp flicker at the source */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-[1] left-1/2 -translate-x-1/2 -top-3 w-44 h-12 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.8), rgba(167,243,208,0.3) 55%, transparent)", filter: "blur(10px)" }}
          animate={reduce ? undefined : { opacity: [0.7, 1, 0.82, 1, 0.75, 0.95, 0.7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Extra animated shimmer on the floor pool (on top of svg pool) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-[1] left-1/2 -translate-x-1/2"
          style={{ bottom: 96, width: "58%", height: 70, borderRadius: "100%", background: "radial-gradient(closest-side, rgba(255,255,255,0.35), rgba(167,243,208,0.18) 45%, transparent 78%)", filter: "blur(14px)" }}
          animate={reduce ? undefined : { opacity: [0.5, 0.95, 0.5], scaleX: [0.92, 1.1, 0.92] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Stage */}
        <div onMouseMove={onMove} className="relative z-10 h-[440px] md:h-[540px] flex items-center justify-center">
          {/* soft glow directly behind the piece */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute w-[420px] h-[300px] rounded-[100%] bg-emerald-300/12 blur-3xl"
            animate={reduce ? undefined : { opacity: [0.6, 1, 0.6], scale: [0.96, 1.05, 0.96] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Featured award */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <motion.div
                style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: "preserve-3d" }}
                className="relative"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="max-h-[280px] md:max-h-[380px] max-w-full w-auto object-contain rounded-lg drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  style={{ transform: "translateZ(50px)" }}
                />
                <img
                  src={current.image}
                  aria-hidden
                  className="absolute top-full left-0 w-full max-h-[280px] md:max-h-[380px] object-contain rounded-lg opacity-20 -scale-y-100 mt-1"
                  style={{
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 52%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 52%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {many && (
            <>
              <button onClick={() => go(-1)} aria-label="Previous award"
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-bengal-green hover:scale-110 transition-all">
                <FaChevronLeft />
              </button>
              <button onClick={() => go(1)} aria-label="Next award"
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-bengal-green hover:scale-110 transition-all">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Label */}
        <div className="relative z-30 h-20 mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 text-center"
            >
              <div className="inline-flex items-center gap-2 text-emerald-300 mb-1"><FaAward /></div>
              <h3 className="text-xl md:text-2xl font-bold">{current.title}</h3>
              <p className="mt-1 text-gray-400 text-sm">{current.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        {many && (
          <div className="relative z-30 mt-4 flex justify-center gap-3">
            {awards.map((a, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Show ${a.title}`}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border transition-all duration-300 ${
                  i === active ? "border-emerald-400 ring-2 ring-emerald-400/40 scale-105" : "border-white/10 opacity-50 hover:opacity-100"
                }`}>
                <img src={a.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
