"use client";
import { FaBatteryFull, FaStore, FaExchangeAlt, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useInView, animate, motion, useReducedMotion } from "framer-motion";

type IconKind = "battery" | "tricycle" | "store" | "swap";

/* ------------------------------------------------------------------ */
/*  Custom auto-rickshaw (tricycle) glyph — wheels spin independently  */
/* ------------------------------------------------------------------ */
function TricycleIcon({ spin }: { spin: boolean }) {
  const wheelSpin = spin
    ? { animate: { rotate: 360 }, transition: { duration: 2.4, repeat: Infinity, ease: "linear" as const } }
    : {};
  const wheelStyle = { transformBox: "fill-box" as const, transformOrigin: "center" };

  return (
    <svg viewBox="0 0 512 512" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true" focusable="false">
      {/* body + canopy + skirt, window as a cut-out */}
      <path
        fillRule="evenodd"
        d="M86 300 L86 196 C86 150 118 120 168 118 L300 118
           C330 118 352 132 366 160 L404 250 C410 264 414 280 414 296
           L414 300 L430 300 L430 338 L70 338 L70 300 Z
           M150 160 L300 160 L326 224 L150 224 Z"
      />
      {/* rear wheel with hub cut-out */}
      <motion.g style={wheelStyle} {...wheelSpin}>
        <path
          fillRule="evenodd"
          d="M92 356 a58 58 0 1 0 116 0 a58 58 0 1 0 -116 0 z
             M126 356 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0 z"
        />
      </motion.g>
      {/* front fender */}
      <path d="M352 318 A52 52 0 0 1 452 338 L432 346 A40 40 0 0 0 360 330 Z" />
      {/* front wheel with hub cut-out */}
      <motion.g style={wheelStyle} {...wheelSpin}>
        <path
          fillRule="evenodd"
          d="M358 372 a42 42 0 1 0 84 0 a42 42 0 1 0 -84 0 z
             M383 372 a17 17 0 1 0 34 0 a17 17 0 1 0 -34 0 z"
        />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Per-icon signature idle animation                                  */
/* ------------------------------------------------------------------ */
function StatIcon({ kind, reduce }: { kind: IconKind; reduce: boolean }) {
  if (kind === "tricycle") {
    // gentle suspension bob + wheels spinning
    return (
      <motion.span
        className="inline-flex"
        animate={reduce ? undefined : { y: [0, -2.5, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <TricycleIcon spin={!reduce} />
      </motion.span>
    );
  }

  if (kind === "battery") {
    // "charging": scale pulse + glowing halo flash
    return (
      <motion.span
        className="inline-flex"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.14, 1],
                filter: [
                  "drop-shadow(0 0 0px rgba(255,255,255,0))",
                  "drop-shadow(0 0 7px rgba(255,255,255,0.9))",
                  "drop-shadow(0 0 0px rgba(255,255,255,0))",
                ],
              }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaBatteryFull />
      </motion.span>
    );
  }

  if (kind === "store") {
    // "open for business": soft bounce with a squash on landing
    return (
      <motion.span
        className="inline-flex"
        animate={reduce ? undefined : { y: [0, -5, 0], scaleY: [1, 1, 0.9, 1], scaleX: [1, 1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.55, 1] }}
      >
        <FaStore />
      </motion.span>
    );
  }

  // swap: arrows rotate 180° in a deliberate "exchange" beat, then reset
  return (
    <motion.span
      className="inline-flex"
      animate={reduce ? undefined : { rotate: [0, 180, 180, 360, 360] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.5, 0.8, 1] }}
    >
      <FaExchangeAlt />
    </motion.span>
  );
}

const stats: { kind: IconKind; value: number; label: string }[] = [
  { kind: "battery", value: 300, label: "Battery" },
  { kind: "tricycle", value: 2000, label: "Tricycle" },
  { kind: "store", value: 10, label: "Retail Stores" },
  { kind: "swap", value: 20, label: "Battery Swap Cabinets" },
];

/* Animated number that counts from 0 to `value` when scrolled into view */
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}+</span>;
}

export function MarketPresence() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="bg-white">
      {/* Top Contact Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <a
          href="#about"
          className="flex items-center gap-3 bg-bengal-green text-white px-8 py-3 rounded-lg font-bold underline underline-offset-4 hover:bg-green-700 transition-colors shadow-md"
        >
          Learn More About Us <FaArrowRight />
        </a>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-bengal-green rounded-full flex items-center justify-center text-white text-lg shrink-0">
            <FaPhoneAlt />
          </div>
          <div className="text-bengal-dark text-sm leading-relaxed">
            <p className="font-bold">Contact Us</p>
            <p>customer.service@bevsbd.com</p>
            <p>+880 1645-252756</p>
          </div>
        </div>
      </div>

      {/* Green Stats Band */}
      <div className="bg-bengal-green text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold inline-block">Our Market Presence</h2>
            <div className="w-48 h-0.5 bg-white/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="group flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
                initial={{ opacity: 0, y: 28, scale: 0.8, rotate: -8, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
              >
                {/* Badge with radar-ping rings */}
                <motion.div
                  className="relative w-20 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl shrink-0"
                  whileHover={reduce ? undefined : { scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <StatIcon kind={stat.kind} reduce={reduce} />
                  </span>
                </motion.div>

                <div>
                  <p className="text-3xl md:text-4xl font-bold">
                    <Counter value={stat.value} />
                  </p>
                  <p className="text-sm md:text-base text-white/90">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
