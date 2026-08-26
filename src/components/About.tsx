"use client";
import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <SectionReveal>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3.75] flex items-center justify-center p-2">
              <div className="w-full h-full bg-gray-200" style={{ clipPath: "url(#squircle-path)", padding: "8px" }}>
                <div className="w-full h-full bg-white overflow-hidden" style={{ clipPath: "url(#squircle-path)" }}>
                  {/* Local image: public/assets/About/about-bevs.jpg (match your file extension) */}
                  <img
                    src="/assets/About/about.jpg"
                    alt="About Bengal EV"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
              </div>
              <svg width="0" height="0"><defs><clipPath id="squircle-path" clipPathUnits="objectBoundingBox"><path d="M0,0.5 C0,0,0,0,0.5,0 S1,0,1,0.5 S1,1,0.5,1 S0,1,0,0.5" /></clipPath></defs></svg>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-bengal-green font-bold uppercase tracking-widest text-lg mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-bengal-dark leading-tight">
                Quality Builds Value, Value Creates Brand
              </h3>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                “Banglar Tesla” or “E-Rickshaw” or “Electric Three-wheeler” or “Electric Tricycle” or “E-Tuk Tuk” or E-Tom Tom – many names can be given to the present-day mandatory transportation for the mass population segment in Bangladesh.  Bangladesh, where energy resources are limited and three-wheelers serve as the backbone of daily transportation, presents a unique opportunity for clean mobility solutions. Bengal EV Solutions (BEVS) has worked for several years on energy-efficient & low-cost mass-level transportation in Bangladesh. As part of this project, Bengal EV Solutions has partnered with China’s pioneer Haitai Power (海 泰 动 力) since 2025. BEVS is working as the exclusive agent for Haitai Power in Bangladesh. BEVS has also been working for several years on easy access to Quality products through global channeling. Our Chinese partner Haitai Power handholds with us, along with all of its global experiences and quality products. Since 2017, Haitai has pioneered the World’s First Two-Wheeled Battery Swap Project. Over the Past 7 Years, they’ve operated the World’s Largest Battery Swap Network, Deployed Over 20,000 Cabinets, Supplied Over 800,000 Batteries, and Served Over 2 Million Riders. Besides our different 2-wheeler & 3-wheeler models, we offer a complete Battery Swap Solution, to empower you with our Years of expertise and Innovative Operational Models.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
