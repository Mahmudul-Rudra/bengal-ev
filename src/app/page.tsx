// src/app/page.tsx
import { Hero } from "@/components/Hero";
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

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      {/* Clients & Partners sits ABOVE the Authorized Distributor block */}
      <ClientsAndPartners />
      <AuthorizedDistributor />

      <SectionReveal>
        <MarketPresence />
      </SectionReveal>

      {/* Awards & Recognition */}
      <Awards />

      {/* NOTE: no SectionReveal wrapper here.
          This block (Solutions + Category + How It Works) is very tall, and
          wrapping it in one reveal kept it invisible until ~10% of the whole
          block scrolled into view, which looked like a delay. These sections
          have their own internal motion, so they appear instantly on scroll. */}
      <ClientSliderWrapper />

      <SectionReveal>
        <Gallery />
      </SectionReveal>

      {/* ContactSection has its own reveal built in */}
      <ContactSection />

      <Footer />
    </main>
  );
}
