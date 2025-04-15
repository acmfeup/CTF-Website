import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-3xl w-full">
        {/* ACM Logo */}
        <div className="w-full flex justify-center sm:justify-start">
          <Image
            src="/acm-logo.svg"
            alt="ACM FEUP logo"
            width={360}
            height={38}
            priority
          />
        </div>

        <div className="text-center sm:text-left w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Competição CTFs ACM FEUP
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-medium">
            17 de maio 2025
          </p>
        </div>

        <p className="text-base sm:text-lg text-center sm:text-left text-foreground/70">
          A maior competição de CTFs em Portugal!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#002F6C] hover:bg-[#00245a] text-white gap-2 font-medium text-sm sm:text-base h-12 px-8 w-full sm:w-auto"
            href="#register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registar Agora
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-12 px-8 w-full sm:w-auto"
            href="#learn-more"
          >
            Saber Mais
          </a>
        </div>
      </main>
    </div>
  );
}
