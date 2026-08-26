"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  { 
    title: "Electric 2-Wheelers", 
    img: "/assets/Categories/m-cat5.png", 
    description: "High-performance electric motorcycles engineered for urban efficiency.",
    specs: [{ label: "Max Speed", value: "70km/h" }, { label: "Range", value: "70km" }, { label: "Power", value: "2000W" }]
  },
  { 
    title: "Electric 3-Wheelers", 
    img: "/assets/Categories/tri-cat3.png", 
    description: "Versatile electric trikes for passenger and logistics transport.",
    specs: [{ label: "Capacity", value: "7 People" }, { label: "Max Speed", value: "45km/h" }, { label: "Motor", value: "1800W" }]
  },
];

export function CategorySection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-12 bg-white px-4 overflow-hidden" id="category">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-bengal-dark">Explore Our Categories</h2>

        <div className="embla overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div key={i} className="flex-[0_0_100%] flex flex-col lg:flex-row items-center p-6 lg:p-12 gap-6 lg:gap-12">
                
                {/* Image: Large on mobile (90%), standard side-by-side on desktop (70%) */}
                <div className="w-[90%] lg:w-[70%] h-[200px] md:h-[350px] lg:h-[450px] relative">
                  <Image 
                    src={slide.img} 
                    alt={slide.title} 
                    fill 
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 70vw"
                    priority
                  />
                </div>

                {/* Text: Small but readable (text-xs) on mobile, normal on desktop */}
                <div className="w-full lg:w-[30%] space-y-3 lg:space-y-4 text-center lg:text-left">
                  <h3 className="text-lg lg:text-2xl font-bold text-bengal-dark">{slide.title}</h3>
                  <p className="text-gray-600 text-[11px] lg:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                  
                  {/* Specs container: Compact for mobile, readable on desktop */}
                  <div className="grid grid-cols-1 gap-1.5 bg-gray-50 p-3 rounded-xl max-w-xs mx-auto lg:mx-0">
                    {slide.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center border-b border-gray-200 pb-1 last:border-0 last:pb-0">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">{spec.label}</span>
                        <span className="text-[11px] lg:text-sm font-bold text-bengal-dark">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full lg:w-auto px-6 py-2 bg-bengal-green text-white text-[11px] lg:text-sm font-bold rounded-lg hover:bg-green-700 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}