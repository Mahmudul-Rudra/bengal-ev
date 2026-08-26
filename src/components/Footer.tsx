import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const phoneNumber = "8801645252756"; // Without the '+'
  const emailAddress = "info@bevsbd.com";
  const facebookUrl = "https://facebook.com/your-page-handle"; // TODO: replace with your real Facebook page URL

  return (
    <footer className="bg-bengal-dark text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex">
            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/assets/Logo/logo.png"
                alt="Bengal EV Solutions Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Pioneering sustainable energy in Bangladesh through high-performance electric transport.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bengal-green transition">
              <FaFacebook size={28} />
            </a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp size={28} />
            </a>
            <a href={`mailto:${emailAddress}`} className="hover:text-blue-400 transition">
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:justify-self-center">
          <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#about" className="hover:text-bengal-green transition-colors">About Us</Link></li>
            <li><Link href="#products" className="hover:text-bengal-green transition-colors">Our Products</Link></li>
            <li><Link href="#gallery" className="hover:text-bengal-green transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 text-sm space-y-4">
          <h4 className="font-bold text-white text-sm uppercase tracking-widest">Connect</h4>
          <div>
            <p className="font-semibold text-white">Head Office:</p>
            <p>House 68, 69/A, Rd 9/6, Blk G, S. Banasree, Khilgaon, Dhaka</p>
          </div>
          <div>
            <p className="font-semibold text-white">Exhibition Center:</p>
            <p>10 Mirpara, Masterbari, Banasree – Demra Road, Demra, Dhaka</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
        © 2025 S. M. Mahmudul Hasan Rudra & Bengal EV Solutions. All rights reserved.
      </div>
    </footer>
  );
}
