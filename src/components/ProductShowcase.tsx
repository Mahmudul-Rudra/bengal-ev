// "use client";
// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// const sections = [
//   { title: "Electric Tricycle", images: ["/assets/Products/tri1.png", "/assets/Products/tri2.png", "/assets/Products/tri3.png"] },
//   { title: "Electric Motor Cycle", images: ["/assets/Products/m1.png", "/assets/Products/m2.png"] },
//   { title: "Power Batteries", images: ["/assets/Products/b1.png", "/assets/Products/b2.png"] },
//   { title: "Battery Swap Cabinet", images: ["/assets/Products/batc1.png", "/assets/Products/batc2.png"] },
// ];

// function CategoryCarousel({ title, images }: { title: string, images: string[] }) {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

//   return (
//     <div className="mb-12 md:mb-20">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-bengal-dark border-b-2 border-bengal-green pb-2 w-fit">
//         {title}
//       </h2>
//       {/* Responsive Aspect Ratio: Uses aspect-[4/3] on mobile, aspect-video on desktop */}
//       <div className="embla overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-md bg-white aspect-[4/3] md:aspect-video" ref={emblaRef}>
//         <div className="flex h-full">
//           {images.map((src, i) => (
//             <div key={i} className="flex-[0_0_100%] h-full relative">
//               <Image 
//                 src={src} 
//                 alt={`${title} ${i + 1}`} 
//                 fill 
//                 className="object-contain p-4 md:p-8" 
//                 sizes="(max-width: 768px) 100vw, 800px"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function ProductShowcase() {
//   return (
//     <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6" id="products">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-bengal-dark">
//           Our Solutions
//         </h1>
        
//         {sections.map((s, i) => (
//           <CategoryCarousel key={i} title={s.title} images={s.images} />
//         ))}

//         <div className="mt-16 md:mt-20 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-bengal-dark">Smart Energy Stations</h2>
//           {/* Responsive container for the final image */}
//           <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3] md:aspect-video relative bg-white">
//             <Image 
//               src="/assets/Products/station.png" 
//               alt="Smart Energy Station" 
//               fill 
//               className="object-contain p-4 md:p-8" 
//               sizes="(max-width: 768px) 100vw, 800px"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// const sections = [
//   { title: "Electric Tricycle", images: ["/assets/Products/tri1.png", "/assets/Products/tri2.png", "/assets/Products/tri3.png"] },
//   { title: "Electric Motor Cycle", images: ["/assets/Products/m1.png", "/assets/Products/m2.png"] },
//   { title: "Power Batteries", images: ["/assets/Products/b1.png", "/assets/Products/b2.png"] },
//   { title: "Battery Swap Cabinet", images: ["/assets/Products/batc1.png", "/assets/Products/batc2.png"] },
// ];

// function CategoryCarousel({ title, images }: { title: string, images: string[] }) {
//   // Autoplay added to match your request
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);

//   return (
//     <div className="mb-24">
//       {/* Title with larger sizing */}
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-bengal-dark">
//         {title}
//       </h2>
      
//       {/* Wide Container to match your requested aesthetic */}
//       <div className="embla overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-100 bg-white h-[400px] md:h-[500px]" ref={emblaRef}>
//         <div className="flex h-full">
//           {images.map((src, i) => (
//             <div key={i} className="flex-[0_0_100%] h-full relative p-12">
//               <Image 
//                 src={src} 
//                 alt={title} 
//                 fill 
//                 className="object-contain" 
//                 sizes="(max-width: 1280px) 100vw, 1200px"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function ProductShowcase() {
//   return (
//     <section className="py-24 bg-gray-50 px-6" id="products">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-bengal-dark">
//           Our Solutions
//         </h1>
        
//         {/* Render sections sequentially (One below another, not in a grid) */}
//         {sections.map((s, i) => (
//           <CategoryCarousel key={i} title={s.title} images={s.images} />
//         ))}

//         {/* Final Station Image */}
//         <div className="mt-20">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-bengal-dark text-center">Smart Energy Stations</h2>
//           <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white h-[400px] md:h-[500px] relative p-12">
//             <Image 
//               src="/assets/Products/station.png" 
//               alt="Smart Energy Station" 
//               fill 
//               className="object-contain" 
//             />
//           </div>
//         </div>
//         <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100">
//           <h2 className="text-3xl font-bold mb-6 text-bengal-dark">Haitai Independent Energy Station</h2>
//           <p className="text-gray-600 leading-relaxed mb-8">
//             Our partner from China, i.e,. Haitai has developed an independent energy station that operates without relying on the national power grid, integrating solar power generation, battery swap cabinets for energy storage, and a seamless battery swap system. Users can swap batteries to meet transportation needs and even take them home for a household power supply. All equipment has been extensively tested by a vast number of users, and the Haitai battery swap platform ensures a highly integrated system that supports various daily applications, including food delivery, logistics, passenger transport, and home energy storage.
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {productList.map((item) => (
//               <div key={item} className="bg-gray-50 p-4 rounded-xl font-medium text-bengal-dark text-center border border-gray-100 hover:border-bengal-green transition-colors">
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// 1. Data Definitions
const sections = [
  { title: "Electric Tricycle", images: ["/assets/Products/tri1.png", "/assets/Products/tri2.png", "/assets/Products/tri3.png"] },
  { title: "Electric Motor Cycle", images: ["/assets/Products/m1.png", "/assets/Products/m2.png"] },
  { title: "Power Batteries", images: ["/assets/Products/b1.png", "/assets/Products/b2.png"] },
  { title: "Battery Swap Cabinet", images: ["/assets/Products/batc1.png", "/assets/Products/batc2.png"] },
];

const productList = [
  "Electric Motorcycle", "Electric Golf Cart", "Solar Power System", 
  "Electric Tricycle", "Power Battery", "Battery Swap Cabinet"
];

// 2. Carousel Component
function CategoryCarousel({ title, images }: { title: string, images: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);

  return (
    <div className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-bengal-dark">
        {title}
      </h2>
      
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

// 3. Main Export
export function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50 px-6" id="products">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-bengal-dark">
          Our Solutions
        </h1>
        
        {/* Product Carousels */}
        {sections.map((s, i) => (
          <CategoryCarousel key={i} title={s.title} images={s.images} />
        ))}

        {/* Final Station Image */}
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

        {/* Haitai Station Description Section */}
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
      </div>
    </section>
  );
}