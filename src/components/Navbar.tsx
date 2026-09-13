"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <div className="relative w-[140px] h-[50px]">
            <Image
              src="/assets/Logo/logo.png"
              alt="Bengal EV Solutions Logo"
              fill
              sizes="140px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-bengal-dark font-medium text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative hover:text-bengal-green transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-bengal-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}

          {/* Service dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 hover:text-bengal-green transition-colors">
              Service
              <FaChevronDown className="text-[10px] mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {serviceLinks.map((s, i) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-4 py-3 text-sm text-bengal-dark hover:bg-gray-50 hover:text-bengal-green transition-colors ${
                      i > 0 ? "border-t border-gray-50" : ""
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right cluster: contact info + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Phone + email, shown on large screens beside the button */}
          <div className="hidden lg:flex flex-col items-end leading-tight text-xs text-bengal-dark">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-bengal-green transition-colors">
              <FaPhoneAlt className="text-bengal-green text-[11px]" />
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-bengal-green transition-colors">
              <FaEnvelope className="text-bengal-green text-[11px]" />
              <span className="font-semibold">{EMAIL}</span>
            </a>
          </div>

          <Link
            href="/#contact"
            className="bg-bengal-accent text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-10 h-10 flex items-center justify-center text-bengal-dark text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 rounded-lg text-bengal-dark font-medium hover:bg-gray-50 hover:text-bengal-green transition-colors"
                >
                  {l.label}
                </Link>
              ))}

              {/* Service group */}
              <div className="mt-2 pt-3 border-t border-gray-100">
                <p className="px-2 pb-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Service
                </p>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-2 rounded-lg text-bengal-dark font-medium hover:bg-gray-50 hover:text-bengal-green transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>

              {/* Contact info in mobile menu */}
              <div className="mt-2 pt-3 border-t border-gray-100 px-2 space-y-2 text-sm">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-bengal-dark hover:text-bengal-green transition-colors">
                  <FaPhoneAlt className="text-bengal-green text-xs" /> {PHONE_DISPLAY}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-bengal-dark hover:text-bengal-green transition-colors">
                  <FaEnvelope className="text-bengal-green text-xs" /> {EMAIL}
                </a>
              </div>

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center bg-bengal-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
