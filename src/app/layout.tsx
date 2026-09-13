"use client";
import { useState } from "react";
import { NavbarV2 } from "@/components/NavbarV2";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <html lang="en">
      <body className="bg-white text-bengal-dark" suppressHydrationWarning={true}>
        {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}

        <NavbarV2 />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
