"use client";
import { FaBatteryFull, FaMotorcycle, FaStore, FaExchangeAlt, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

const stats = [
  { icon: <FaBatteryFull />, value: 300, label: "Battery" },
  { icon: <FaMotorcycle />, value: 200, label: "Tricycle" },
  { icon: <FaStore />, value: 10, label: "Retail Stores" },
  { icon: <FaExchangeAlt />, value: 20, label: "Battery Swap Cabinets" },
];

// Animated number that counts from 0 to `value` when scrolled into view
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
              <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="w-20 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">
                    <Counter value={stat.value} />
                  </p>
                  <p className="text-sm md:text-base text-white/90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}