import Countdown from "react-countdown";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function CustomCountdown() {
  interface CountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => {
    return (
      <div
        className={`flex flex-row items-stretch justify-center gap-16 bg-secondary-green/20 rounded-4xl px-16 ${jost.className}`}
      >
        <ValueContainer value={days} label="Days" />
        <div className="w-0.5 bg-gray-200/10"></div>
        <ValueContainer value={hours} label="Hours" />
        <div className="w-0.5 bg-gray-200/10"></div>
        <ValueContainer value={minutes} label="Minutes" />
        <div className="w-0.5 bg-gray-200/10"></div>
        <ValueContainer value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <Countdown
      date={new Date("2025-05-17T00:00:00")}
      renderer={renderer}
      className="mt-8"
    />
  );
}

interface ValueContainerProps {
  value: number;
  label: string;
}

function ValueContainer({ value, label }: ValueContainerProps) {
  return (
    <div className="flex flex-col py-8">
      <p className="font-bold text-6xl">{value}</p>
      <p className="text-white/50 text-2xl">{label}</p>
    </div>
  );
}
