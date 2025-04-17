"use client";

import CustomCountdown from "@/components/CustomCountdown";
import LocationCard from "@/components/LocationCard";
import RegisterButton from "@/components/RegisterButton";
import SponsorCarousel from "@/components/SponsorCarousel";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <section className="flex flex-col items-center justify-center min-h-screen w-full">
        <main className="flex flex-col items-center justify-center w-full max-w-5xl px-6 py-12 text-center">
          <div className="mb-12 w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Competição CTFs ACM FEUP
            </h1>
            <p className="text-2xl sm:text-3xl text-foreground/80 font-medium">
              17 de maio 2025
            </p>
          </div>

          <RegisterButton />

          <div className="mt-8">
            <CustomCountdown />
          </div>

          <div className="mt-6">
            <LocationCard location="FEUP, Porto" />
          </div>
        </main>
      </section>

      <section
        ref={secondSectionRef}
        className="min-h-screen w-full py-20 px-6"
      >
        {/* Sponsor Carousel */}
        <SponsorCarousel />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Description */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold mb-4">Sobre a Competição</h2>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                leo metus, congue at convallis ut, egestas nec risus. Sed eu
                eros ac lorem vehicula pulvinar.
              </p>
              <p className="text-lg">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>

            {/* Event Details */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold mb-4">Detalhes do Evento</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="font-bold mr-2">Data:</span> 17 de maio 2025
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Hora:</span> TBD
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Local:</span> FEUP{" "}
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Formato:</span> Equipas de
                  3-5 pessoas
                </li>
              </ul>
            </div>
          </div>

          {/* Prizes */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-xl border border-white/20 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Prémios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">1º Lugar</div>
                <p className="text-xl">TBD</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">2º Lugar</div>
                <p className="text-xl">TBD</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">3º Lugar</div>
                <p className="text-xl">TBD</p>
              </div>
            </div>
          </div>
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
