// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ClientsAndPartners } from "@/components/ClientsAndPartners";
import { AuthorizedDistributor } from "@/components/AuthorizedDistributor";
import { MarketPresence } from "@/components/MarketPresence";
import { ClientSliderWrapper } from "@/components/ClientWrapper";
import { Gallery } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      {/* Clients & Partners sits ABOVE the Authorized Distributor block */}
      <ClientsAndPartners />
      <AuthorizedDistributor />

      {/* These components have no built-in reveal, so wrap them */}
      <SectionReveal>
        <MarketPresence />
      </SectionReveal>
      <SectionReveal>
        <ClientSliderWrapper />
      </SectionReveal>
      <SectionReveal>
        <Gallery />
      </SectionReveal>

      {/* ContactSection has its own reveal built in */}
      <ContactSection />

      <Footer />
    </main>
  );
}
