"use client";
import dynamic from 'next/dynamic';


const ProductShowcase = dynamic(() => import("@/components/ProductShowcase").then(m => m.ProductShowcase), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks").then(m => m.HowItWorks), { ssr: false });
const CategorySection = dynamic(() => import("@/components/CategorySection").then(m => m.CategorySection), { ssr: false });


export function ClientSliderWrapper() {
  return (
    <>
        <ProductShowcase />
        <CategorySection />
        <HowItWorks />
        
    </>
  );
}