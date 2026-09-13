"use client";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CategorySection } from "@/components/CategorySection";
import { HowItWorks } from "@/components/HowItWorks";
import { SectionReveal } from "@/components/SectionReveal";

export function ClientSliderWrapper() {
  return (
    <>
      {/* ProductShowcase reveals its own blocks internally */}
      <ProductShowcase />

      {/* These two are short enough to reveal as a whole */}
      <SectionReveal>
        <CategorySection />
      </SectionReveal>
      <SectionReveal>
        <HowItWorks />
      </SectionReveal>
    </>
  );
}
