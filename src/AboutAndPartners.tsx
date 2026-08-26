"use client";
import { SectionReveal } from "./SectionReveal";

export function AboutAndPartners() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <SectionReveal>
        <div className="max-w-7xl mx-auto">
          
          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative w-full aspect-square md:aspect-[4/3.75] flex items-center justify-center p-2">
              <div className="w-full h-full bg-gray-200" style={{ clipPath: "url(#squircle-path)", padding: "8px" }}>
                <div className="w-full h-full bg-white overflow-hidden" style={{ clipPath: "url(#squircle-path)" }}>
                  {/* Was: https://bevsbd.com/wp-content/uploads/2025/10/WhatsApp-Image-...jpg
                      Now local. Download that image and save it as: public/assets/About/about-bevs.jpg
                      (match the extension to your actual file) */}
                  <img 
                    src="/assets/About/about.jpg" 
                    alt="About Bengal EV" 
                    className="w-full h-full object-cover scale-105" 
                  />
                </div>
              </div>
              <svg width="0" height="0"><defs><clipPath id="squircle-path" clipPathUnits="objectBoundingBox"><path d="M0,0.5 C0,0,0,0,0.5,0 S1,0,1,0.5 S1,1,0.5,1 S0,1,0,0.5" /></clipPath></defs></svg>
            </div>

            <div>
              <h2 className="text-bengal-green font-bold uppercase tracking-widest text-lg mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-bengal-dark leading-tight">
                Quality Builds Value, Value Creates Brand
              </h3>
              <p className="mt-6 text-gray-600 text-m leading-relaxed">
                “Banglar Tesla” or “E-Rickshaw” or “Electric Three-wheeler” or “Electric Tricycle” or “E-Tuk Tuk” or E-Tom Tom – many names can be given to the present-day mandatory transportation for the mass population segment in Bangladesh.  Bangladesh, where energy resources are limited and three-wheelers serve as the backbone of daily transportation, presents a unique opportunity for clean mobility solutions. Bengal EV Solutions (BEVS) has worked for several years on energy-efficient & low-cost mass-level transportation in Bangladesh. As part of this project, Bengal EV Solutions has partnered with China’s pioneer Haitai Power (海 泰 动 力) since 2025. BEVS is working as the exclusive agent for Haitai Power in Bangladesh. BEVS has also been working for several years on easy access to Quality products through global channeling. Our Chinese partner Haitai Power handholds with us, along with all of its global experiences and quality products. Since 2017, Haitai has pioneered the World’s First Two-Wheeled Battery Swap Project. Over the Past 7 Years, they’ve operated the World’s Largest Battery Swap Network, Deployed Over 20,000 Cabinets, Supplied Over 800,000 Batteries, and Served Over 2 Million Riders. Besides our different 2-wheeler & 3-wheeler models, we offer a complete Battery Swap Solution, to empower you with our Years of expertise and Innovative Operational Models.
              </p>
            </div>
          </div>

          {/* Partners & Statements Section */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-bengal-dark mb-12">Authorized Distributor Of</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Partner 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm h-64 md:h-80 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6">
                  {/* Was: https://bevsbd.com/wp-content/uploads/2026/06/...-1-768x181.jpeg
                      Now local: public/assets/Partners/haitai-power.png
                      (match the extension to your actual file) */}
                  <img src="/assets/Distributor/Haitai.jpeg" alt="Haitai Power" className="max-h-full w-full object-contain" />
                </div>
                <div className="flex items-center gap-3 px-4 text-center">
                  <span className="text-2xl">🤝</span>
                  <p className="font-semibold text-gray-800">Quality | Commitment | Partnership</p>
                </div>
              </div>

              {/* Partner 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm h-64 md:h-80 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6">
                  {/* Was: https://bevsbd.com/wp-content/uploads/2026/06/...-300x300.jpeg
                      Now local: public/assets/Partners/arra.png
                      (match the extension to your actual file) */}
                  <img src="/assets/Distributor/Arra.jpeg" alt="Arra" className="max-h-full w-full object-contain" />
                </div>
                <div className="flex items-center gap-3 px-4 text-center">
                  <span className="text-2xl">⚙️</span>
                  <p className="font-semibold text-gray-800">Pioneer in Electric 3w | 2w | Battery Swapping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
