"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

const sections = [
  { title: "Electric Tricycle", images: ["/assets/Products/tri1.png", "/assets/Products/tri2.png", "/assets/Products/tri3.png"] },
  { title: "Electric Motor Cycle", images: ["/assets/Products/m1.png", "/assets/Products/m2.png"] },
  { title: "Power Batteries", images: ["/assets/Products/b1.png", "/assets/Products/b2.png"] },
  { title: "Battery Swap Cabinet", images: ["/assets/Products/batc1.png", "/assets/Products/batc2.png"] },
];

const productList = [
  "Electric Motorcycle", "Electric Golf Cart", "Solar Power System",
  "Electric Tricycle", "Power Battery", "Battery Swap Cabinet",
];

function CategoryCarousel({ title, images }: { title: string; images: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);

  return (
    <div className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-bengal-dark">{title}</h2>

      <div className="embla overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-100 bg-white h-[350px] md:h-[500px]" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] h-full relative p-8 md:p-12">
              <Image
                src={src}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50 px-6" id="products">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-bengal-dark">
            Our Solutions
          </h1>
        </SectionReveal>

        {/* Each carousel fades in as it reaches the viewport */}
        {sections.map((s, i) => (
          <SectionReveal key={i}>
            <CategoryCarousel title={s.title} images={s.images} />
          </SectionReveal>
        ))}

        {/* Final Station Image */}
        <SectionReveal>
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-bengal-dark text-center">Smart Energy Stations</h2>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white h-[350px] md:h-[500px] relative p-8 md:p-12">
              <Image
                src="/assets/Products/station.png"
                alt="Smart Energy Station"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>
        </SectionReveal>

        {/* Haitai Station Description Section */}
        <SectionReveal>
          <div className="mt-10 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-bengal-dark">Haitai Independent Energy Station</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our partner from China, i.e,. Haitai has developed an independent energy station that operates without relying on the national power grid, integrating solar power generation, battery swap cabinets for energy storage, and a seamless battery swap system. Users can swap batteries to meet transportation needs and even take them home for a household power supply. All equipment has been extensively tested by a vast number of users, and the Haitai battery swap platform ensures a highly integrated system that supports various daily applications, including food delivery, logistics, passenger transport, and home energy storage.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {productList.map((item) => (
                <div key={item} className="bg-gray-50 p-4 rounded-xl font-medium text-bengal-dark text-center border border-gray-100 hover:border-bengal-green transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
