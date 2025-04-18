import GlassCard from "./GlassCard";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutTheEvent() {
  return (
    <div
      className={`px-8 grid gap-4 justify-center items-start w-full max-w-screen-xl mx-auto ${jura.className} 
	grid-cols-1 md:grid-cols-2 `}
    >
      <GlassCard
        hasBorder={true}
        isRounded={true}
        className="h-full w-full space-y-4"
        hasPadding={true}
      >
        <h1 className="text-5xl font-bold">Networking?</h1>
        <p className="text-3xl">Talk with the companies & meet new hackers.</p>
      </GlassCard>
      <GlassCard
        hasBorder={true}
        isRounded={true}
        className="h-full w-full space-y-4"
        hasPadding={true}
      >
        <h1 className="text-5xl font-bold">Food?</h1>
        <p className="text-3xl">
          We supply Lunch and Coffee Break to all participants.
        </p>
      </GlassCard>
      <GlassCard
        hasBorder={true}
        isRounded={true}
        className="h-full w-full space-y-4"
        hasPadding={true}
      >
        <h1 className="text-5xl font-bold">Difficulty Level?</h1>
        <p className="text-3xl">
          Beginner-friendly with mini workshops to help you start.
        </p>
      </GlassCard>
      <GlassCard
        hasBorder={true}
        isRounded={true}
        className="h-full w-full space-y-4"
        hasPadding={true}
      >
        <h1 className="text-5xl font-bold">Prizes?</h1>
        <p className="text-3xl">
          We’re giving prizes totaling over 800€ – don’t waste your chance!
        </p>
      </GlassCard>
    </div>
  );
}
