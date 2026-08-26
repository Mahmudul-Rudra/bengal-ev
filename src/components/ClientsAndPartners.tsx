"use client";
import { SectionReveal } from "./SectionReveal";

const clients = [
  {name: "RENATA", logo: "https://renata-ltd.com/assets/logoicon-blue-BAKnJa16.png"},
  {name: "RFL", logo: "https://images.seeklogo.com/logo-png/25/1/rfl-logo-png_seeklogo-250040.png"},
  {name: "AKIJVenture", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl6zxBI3ok-XwXa29csURnWcrApQC1mRO0zZawjp4bcmtjurMzlXDEg3c&s=10"},
  {name: "MedBox", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiPP-4H_9GZCt3c0-hE86pANQJ8v80RX1sNPAn_gcLIKyCB9nzA_-z5M1&s=10"},
  {name: "Pioneer", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfh1YH7Pld2eYCR4g9zUoSnaHAxh4ozGnTIX-Y41byJA&s=10"},  
  {name: "UTC", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kcwd3DfCUeQZ4RVL0zTGb8dY_aZJa3NygH-WWM18Ge2d3jykgGqb7Bg&s=10"},
  {name: "Takwa", logo:"/assets/Partners/takwa.png"},  
  {name: "Mamun", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG31OwjVljFVktYb0Rtghdj8A__rp7AW-NC4al96khsw&s=10"},
  {name: "Sifat", logo:"/assets/Partners/sifat.png"},  
  {name: "Riverfish", logo:"/assets/Partners/river_fish.png"}, 
  {name: "Agraniautomobile", logo:"/assets/Partners/aal.png"},
  {name: "moto", logo:"/assets/Partners/moto.png"},
  {name: "arabian", logo:"/assets/Partners/arabian.png"}
];

export function ClientsAndPartners() {
  return (
    <section id="clients" className="py-24 bg-gray-50 px-6">
      <SectionReveal>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-bengal-dark mb-16">Clients & Partners</h3>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-[60%] max-h-[60%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}