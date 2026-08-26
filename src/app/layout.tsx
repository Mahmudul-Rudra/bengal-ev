"use client";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen"; 
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <html lang="en">
      <body className="bg-white text-bengal-dark" suppressHydrationWarning={true}>
        {/* Only remove LoadingScreen when showLoading is false */}
        {showLoading && (
          <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />
        )}
        
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}