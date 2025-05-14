import CustomCountdown from "./CustomCountdown";
import LocationCard from "./LocationCard";
import RegisterButton from "./RegisterButton";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function TitleSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full max-w-5xl px-6 py-12 text-center">
        <div className={`mb-12 w-full ${jost.className}`}>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            ACM & xSTF <br /> Capture the Flag Competition
          </h1>
          <p className="text-xl sm:text-3xl text-foreground/80 font-medium">
            May 17th, 2025
          </p>
        </div>

        <RegisterButton />

        <div className="flex-1 text-center mt-2">
          <span className="text-lg text-[#DFF6E1]">
            <a
              href={"https://forms.gle/GKXP2WbujsxQoiqP8"}
              className="underline underline-offset-4 hover:text-[#FFC107]"
              target="_blank" rel="noopener noreferrer"
            >
              Register without a team
            </a>
          </span>
        </div>

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
