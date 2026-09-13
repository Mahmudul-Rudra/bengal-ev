"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

export function HeroV2() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.28]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse-driven 3D tilt + glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const orbX = useTransform(mx, [-0.5, 0.5], [-30, 30]);
  const orbY = useTransform(my, [-0.5, 0.5], [-20, 20]);
  const glowXpct = useTransform(mx, [-0.5, 0.5], ["35%", "65%"]);
  const glowYpct = useTransform(my, [-0.5, 0.5], ["35%", "65%"]);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowXpct} ${glowYpct}, rgba(63,112,77,0.35), transparent 65%)`;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-bengal-dark"
    >
      {/* Background image with scroll parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale, backgroundImage: "url('/assets/bg/bg.png')" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-bengal-dark" />
      </motion.div>

      {/* Cursor-follow glow */}
      <motion.div aria-hidden style={{ background: glow }} className="absolute inset-0 z-[1]" />

      {/* Floating depth orbs (drift + react to mouse) */}
      <motion.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="absolute z-[1] top-1/4 -left-10 w-72 h-72 rounded-full bg-bengal-green/30 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="absolute z-[1] bottom-1/4 -right-10 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid sheen */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content with 3D tilt */}
      <motion.div style={{ y: contentY, opacity: contentOpacity, perspective: 1000 }} className="relative z-10 w-full">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center text-white px-4"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-[0.25em] text-xs mb-6"
          >
            <span className="h-px w-8 bg-emerald-300/70" /> Green Mobility for Bangladesh
          </motion.span>

          <motion.h1
            variants={item}
            style={{ transform: "translateZ(60px)" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            জনতার বাহন – সবুজের সাথে, সুখী পথে
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-bengal-green to-emerald-400 bg-clip-text text-transparent">
              BENGAL EV SOLUTIONS
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{ transform: "translateZ(40px)" }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Working for Green Mobility in Bangladesh
          </motion.p>

          <motion.div
            variants={item}
            style={{ transform: "translateZ(30px)" }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-bengal-green to-emerald-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-bengal-green/30 text-center"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <span className="relative">Explore Solutions</span>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg border border-white/20 transition-colors text-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          className="w-1 h-2 rounded-full bg-white/70"
          animate={reduce ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
