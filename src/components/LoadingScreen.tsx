


"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Particles } from "./Particles";

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleTap = () => {
    setIsExiting(true); // Triggers the exit animation
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111827]"
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (isExiting) onLoadingComplete(); // Only remove from DOM after fade
      }}
    >
      <Particles quantity={100} />
      
      <div className="text-center z-10 flex flex-col items-center">
        <div className="relative w-[250px] h-[80px] mb-8">
          <Image 
            src="/assets/Logo/logo.png" 
            alt="Bengal EV Solutions Logo" 
            fill 
            className="object-contain brightness-0 invert" 
            priority
          />
        </div>
        
        <p className="text-gray-400 italic mb-8">Where Green Energy Meets the Road.</p>
        
        <button 
          onClick={handleTap}
          className="px-8 py-3 bg-bengal-green text-white font-bold rounded-full border border-white/20 hover:bg-white hover:text-bengal-dark transition-all duration-300"
        >
          Tap Here to Learn more
        </button>
      </div>
    </motion.div>
  );
}
