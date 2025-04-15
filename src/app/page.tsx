import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
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
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base sm:text-lg h-14 px-10 w-full sm:w-auto min-w-[200px]"
            href="#learn-more"
          >
            Saber Mais
          </a>
        </div>
      </main>

      <div className="absolute top-8 left-8">
        <Image
          src="/acm-logo.svg"
          alt="ACM FEUP logo"
          width={300}
          height={60}
          priority
        />
      </div>
    </div>
  );
}
