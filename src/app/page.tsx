"use client";

import SponsorCarousel from "@/components/SponsorCarousel";
import TitleSection from "@/components/TitleSection";
import Image from "next/image";
import { useRef } from "react";
import AboutTheEvent from "@/components/AboutTheEvent";
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
      <section ref={secondSectionRef} className="min-h-screen w-full py-20 ">
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

        <div className="ml-80">
          <AboutTheEvent />
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-lg bg-white/5 dark:bg-black/30 border-t border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Image
              src="/acm-logo.svg"
              alt="ACM FEUP logo"
              width={100}
              height={25}
            />
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#002F6C] transition-colors">
              Contacto
            </a>
            <a href="#" className="hover:text-[#002F6C] transition-colors">
              ACM FEUP
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
