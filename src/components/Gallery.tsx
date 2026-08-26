"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const gallerySets = [
  ["/assets/Gallery/5.png", "/assets/Gallery/7.png", "/assets/Gallery/10.png", "/assets/Gallery/14.jpeg", "/assets/Gallery/15.jpeg"],
  ["/assets/Gallery/11.png", "/assets/Gallery/13.png", "/assets/Gallery/16.jpeg", "/assets/Gallery/19.jpeg"],
  ["/assets/Gallery/18.jpeg", "/assets/Gallery/19.jpeg", "/assets/Gallery/20.jpeg", "/assets/Gallery/21.jpeg"],
];

function GalleryCarousel({ images, delay }: { images: string[], delay: number }) {
  // Use a callback ref to initialize Embla
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla overflow-hidden rounded-3xl shadow-lg w-full aspect-[4/3]" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_100%] h-full relative min-w-0">
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              fill 
              className="object-contain rounded-[3rem]" 
              sizes="(max-width: 768px) 100vw, 33vw"
              // Priority prevents the "blank" flash on initial load
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="py-24 bg-gray-50 px-6" id="gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-bengal-dark">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallerySets.map((set, i) => (
            <GalleryCarousel 
              key={i} 
              images={set} 
              delay={3000 + (i * 500)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}