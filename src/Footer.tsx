import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const phoneNumber = "8801645252756"; // without the '+'
const phoneDisplay = "+880 1645-252756";
const emailAddress = "info@bevsbd.com";
const facebookUrl = "https://facebook.com/your-page-handle"; // TODO: replace with your real Facebook page URL

const quickLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#products", label: "Our Products" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/after-sales", label: "After-sales Service" },
];

const locations = [
  { name: "Head Office", address: "HALMARS Tower, 66 (Old) Outer Circular Road (New 5 Shahid Sangbadik Salina Parvin Sarak), Suite 7B, Moghbazar, Dhaka 1217, Bangladesh" },
  { name: "Exhibition Center", address: "10 Mirpara, Masterbari, Banasree – Demra Road, Demra, Dhaka" },
];

const mapUrl = (a: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-bengal-dark via-[#16241d] to-[#0b1512] text-white">
      {/* Top gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-bengal-green via-emerald-400 to-bengal-green" />

      {/* Soft glow + grid texture */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-bengal-green/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand + statement */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex">
              <div className="relative w-[170px] h-[54px]">
                <Image
                  src="/assets/Logo/logo.png"
                  alt="Bengal EV Solutions Logo"
                  fill
                  sizes="170px"
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>

            {/* Statement as a highlighted manifesto */}
            <div className="relative mt-6 rounded-2xl bg-white/[0.04] border border-white/10 p-6 pl-7">
              {/* green accent bar */}
              <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-bengal-green to-emerald-400" />
              {/* decorative quote */}
              <span className="absolute -top-3 right-4 text-6xl leading-none font-serif text-bengal-green/30 select-none">&rdquo;</span>

              <p className="text-gray-200 text-base md:text-[17px] leading-relaxed">
                BEVS is dedicated to exploring, applying, and promoting{" "}
                <span className="text-emerald-300 font-semibold">innovative green energy models</span>! Through a reliable global sourcing, local dealer networking, long-lasting partnership model, on-call technical solutions, readily available hardware &amp; spare parts and top class{" "}
                <span className="text-emerald-300 font-semibold">QUALITY</span> ensurance, we advocate for and drive the{" "}
                <span className="text-emerald-300 font-semibold">organic expansion of green energy networks</span>!
              </p>
            </div>

            {/* Social badges */}
            <div className="flex gap-3 mt-6">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-bengal-green hover:scale-110 transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:scale-110 transition-all duration-300">
                <FaWhatsapp size={20} />
              </a>
              <a href={`mailto:${emailAddress}`} aria-label="Email"
                 className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-emerald-300 mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-2 text-gray-300 text-base hover:text-white transition-colors">
                    <FaArrowRight className="text-bengal-green text-xs -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit + contact */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-emerald-300 mb-5">Visit Us</h4>
            <div className="space-y-4">
              {locations.map((loc) => (
                <a key={loc.name} href={mapUrl(loc.address)} target="_blank" rel="noopener noreferrer"
                   className="group flex items-start gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-bengal-green group-hover:text-white transition-colors">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{loc.name}</span>
                    <span className="block text-gray-300 text-sm leading-relaxed">{loc.address}</span>
                  </span>
                </a>
              ))}

              {/* Quick contact */}
              <div className="pt-2 flex flex-col gap-2">
                <a href={`tel:+${phoneNumber}`} className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-bengal-green group-hover:text-white transition-colors">
                    <FaPhoneAlt />
                  </span>
                  <span className="text-base">{phoneDisplay}</span>
                </a>
                <a href={`mailto:${emailAddress}`} className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:bg-bengal-green group-hover:text-white transition-colors">
                    <FaEnvelope />
                  </span>
                  <span className="text-base break-all">{emailAddress}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 S. M. Mahmudul Hasan Rudra &amp; Bengal EV Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-emerald-300">জনতার বাহন</span> · Green Mobility for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
