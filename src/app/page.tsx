"use client";

import SponsorCarousel from "@/components/SponsorCarousel";
import TitleSection from "@/components/TitleSection";
import { useRef } from "react";
import AboutTheEvent from "@/components/AboutTheEvent";
import Footer from "@/components/Footer";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <TitleSection />
      <section ref={secondSectionRef} className="w-full">
        {/* Sponsor Carousel */}
        <SponsorCarousel />

        {/* Subtitle */}
        <div
          className={`flex flex-col items-center text-center ${jura.className} text-5xl mt-16`}
        >
          <p>Team up (3-5 players).</p>
          <p>Capture the flags.</p>
          <p>Win awesome prizes!</p>
        </div>

        <div className="mt-16">
          <AboutTheEvent />
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
