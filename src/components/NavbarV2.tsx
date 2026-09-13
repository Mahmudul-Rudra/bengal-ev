"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#category", label: "Category" },
  { href: "/#gallery", label: "Gallery" },
];
const serviceLinks = [
  { href: "/after-sales", label: "After-sales Service" },
  { href: "/after-sales#faq", label: "FAQ" },
];
const PHONE = "+8801645252756";
const PHONE_DISPLAY = "+880 1645-252756";
const EMAIL = "info@bevsbd.com";

/* Magnetic link: leans toward the cursor on hover (desktop only). */
function MagneticLink({ href, label }: { href: string; label: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15 });
  const sy = useSpring(y, { stiffness: 250, damping: 15 });
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="relative text-bengal-dark hover:text-bengal-green transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-bengal-green after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </motion.a>
  );
}

export function NavbarV2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // logo 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 15 });
  const onLogoMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLogoLeave = () => { mx.set(0); my.set(0); };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-lg shadow-black/5"
          : "bg-white/70 backdrop-blur-md border-b border-gray-100/60"
      }`}
    >
      {/* subtle gradient hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bengal-green/40 to-transparent" />

      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        {/* Logo (full color) with 3D tilt */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <motion.div
            onMouseMove={onLogoMove}
            onMouseLeave={onLogoLeave}
            style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformPerspective: 600 }}
            className="relative w-[140px] h-[46px]"
          >
            <Image src="/assets/Logo/logo.png" alt="Bengal EV Solutions Logo" fill sizes="140px" className="object-contain" priority />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 font-medium text-sm">
          {links.map((l) => (
            <MagneticLink key={l.href} href={l.href} label={l.label} />
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-bengal-dark hover:text-bengal-green transition-colors">
              Service
              <FaChevronDown className="text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {serviceLinks.map((s, i) => (
                  <Link key={s.href} href={s.href} className={`block px-4 py-3 text-sm text-bengal-dark hover:bg-gray-50 hover:text-bengal-green transition-colors ${i > 0 ? "border-t border-gray-50" : ""}`}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA + contact (right) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden bg-gradient-to-r from-bengal-green to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md shadow-bengal-green/25"
          >
            Contact Us
          </motion.a>
          <div className="hidden lg:flex items-center gap-3">
            <span className="h-9 w-px bg-gradient-to-b from-transparent via-bengal-green/40 to-transparent" />
            <div className="flex flex-col gap-1">
              <a href={`tel:${PHONE}`} className="group flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-bengal-green to-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform"><FaPhoneAlt /></span>
                <span className="flex flex-col leading-none">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-0.5">Call us</span>
                  <span className="text-[12px] font-bold text-bengal-dark group-hover:text-bengal-green transition-colors">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-bengal-green to-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform"><FaEnvelope /></span>
                <span className="flex flex-col leading-none">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-0.5">Email</span>
                  <span className="text-[12px] font-bold text-bengal-dark group-hover:text-bengal-green transition-colors">{EMAIL}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="md:hidden w-10 h-10 flex items-center justify-center text-bengal-dark text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden overflow-hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-2 rounded-lg text-bengal-dark font-medium hover:bg-gray-50 hover:text-bengal-green transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-gray-100">
                <p className="px-2 pb-1 text-xs font-bold uppercase tracking-wider text-gray-400">Service</p>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-3 px-2 rounded-lg text-bengal-dark font-medium hover:bg-gray-50 hover:text-bengal-green transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-3 border-t border-gray-100 px-2 space-y-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-bengal-green to-emerald-600 text-white flex items-center justify-center"><FaPhoneAlt /></span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Call us</span>
                    <span className="text-sm font-bold text-bengal-dark">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-bengal-green to-emerald-600 text-white flex items-center justify-center"><FaEnvelope /></span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Email</span>
                    <span className="text-sm font-bold text-bengal-dark">{EMAIL}</span>
                  </span>
                </a>
              </div>
              <Link href="/#contact" onClick={() => setOpen(false)} className="mt-3 text-center bg-gradient-to-r from-bengal-green to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
