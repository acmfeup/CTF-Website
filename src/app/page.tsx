"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

          <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#002F6C] hover:bg-[#00245a] text-white gap-2 font-medium text-base sm:text-lg h-14 px-10 w-full sm:w-auto min-w-[200px]"
              href="#register"
            >
              Registar Agora
            </a>
            <button
              onClick={scrollToSecondSection}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base sm:text-lg h-14 px-10 w-full sm:w-auto min-w-[200px]"
            >
              Saber Mais
            </button>
          </div>
        </main>

        <div className="absolute top-8 left-8">
          <Image
            src="/acm-logo.svg"
            alt="ACM FEUP logo"
            width={120}
            height={30}
            priority
          />
        </div>
      </section>

      <section
        ref={secondSectionRef}
        className="min-h-screen w-full py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Sponsors Section */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-xl border border-white/20 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Patrocinadores
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-full p-4 w-24 h-24 flex items-center justify-center mb-2">
                    <Image
                      src="/acm-logo.svg"
                      alt={`Sponsor ${index + 1}`}
                      width={60}
                      height={60}
                      className="opacity-80"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    Sponsor {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

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

          {/* Registration Form Section */}
          <div
            id="register"
            className="backdrop-blur-lg bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-xl border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Registar Equipa
            </h2>
            <form className="max-w-2xl mx-auto">
              <div className="mb-6">
                <label htmlFor="team-name" className="block text-lg mb-2">
                  Nome da Equipa
                </label>
                <input
                  type="text"
                  id="team-name"
                  className="w-full p-3 rounded-lg bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#002F6C]"
                  placeholder="Nome da equipa"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#002F6C]"
                  placeholder="alice@email.com"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="members" className="block text-lg mb-2">
                  Número de Participantes
                </label>
                <select
                  id="members"
                  className="w-full p-3 rounded-lg bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#002F6C]"
                >
                  <option value="3">3 participantes</option>
                  <option value="4">4 participantes</option>
                  <option value="5">5 participantes</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] mx-auto block rounded-full border border-solid border-transparent transition-colors bg-[#002F6C] hover:bg-[#00245a] text-white font-medium text-lg h-14 px-10"
              >
                Submeter Inscrição
              </button>
            </form>
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
