// src/app/v2/page.tsx
import { HeroV2 } from "@/components/HeroV2";
import { About } from "@/components/About";
import { ClientsAndPartners } from "@/components/ClientsAndPartners";
import { AuthorizedDistributor } from "@/components/AuthorizedDistributor";
import { MarketPresence } from "@/components/MarketPresence";
import { Awards } from "@/components/Awards";
import { ClientSliderWrapper } from "@/components/ClientWrapper";
import { Gallery } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata = {
  title: "Bengal EV Solutions — Experience (v2)",
  description: "An experimental 3D-styled version of the Bengal EV Solutions site.",
};

export default function HomeV2() {
  return (
    <>
      {/* Faux-3D flagship hero */}
      <HeroV2 />

      {/* Existing sections reused for now; upgraded to the 3D style over time */}
      <About />
      <ClientsAndPartners />
      <AuthorizedDistributor />

      <SectionReveal>
        <MarketPresence />
      </SectionReveal>

      <Awards />

      <ClientSliderWrapper />

      <SectionReveal>
        <Gallery />
      </SectionReveal>

      <ContactSection />

      <Footer />
    </>
  );
}
