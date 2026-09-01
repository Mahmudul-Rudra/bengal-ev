"use client";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CategorySection } from "@/components/CategorySection";
import { HowItWorks } from "@/components/HowItWorks";

export function ClientSliderWrapper() {
  return (
    <>
      <ProductShowcase />
      <CategorySection />
      <HowItWorks />
    </>
  );
}
