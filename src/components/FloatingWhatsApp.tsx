"use client";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const phoneNumber = "8801645252756"; // without the '+'
  const message = "Hello! I'm interested in Bengal EV Solutions.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9998] flex items-center gap-3 group"
    >
      {/* Text label - hidden on small screens, shows on hover on desktop */}
      <span className="hidden md:flex items-center bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Need Help? <b className="ml-1 text-bengal-dark">Chat with us</b>
      </span>

      {/* Green circular button */}
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <FaWhatsapp className="text-white" size={30} />
      </div>
    </a>
  );
}