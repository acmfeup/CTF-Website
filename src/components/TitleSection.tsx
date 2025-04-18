import CustomCountdown from "./CustomCountdown";
import LocationCard from "./LocationCard";
import RegisterButton from "./RegisterButton";

export default function TitleSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
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
  );
}
