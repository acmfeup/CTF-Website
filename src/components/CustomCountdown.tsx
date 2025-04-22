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

  function Separator() {
    return <div className="hidden lg:block w-0.5 bg-gray-200/10"></div>;
  }

  const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => {
    return (
      <div
        className={`grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row items-stretch justify-center gap-y-4 sm:gap-y-8 gap-x-16 bg-secondary-green/20 rounded-4xl px-8 sm:px-16 ${jost.className}`}
      >
        <ValueContainer value={days} label="Days" />
        <Separator />
        <ValueContainer value={hours} label="Hours" />
        <Separator />
        <ValueContainer value={minutes} label="Minutes" />
        <Separator />
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
    <div className="flex flex-col py-8 text-center items-center justify-center">
      <p className="text-4xl font-bold sm:text-6xl">{value}</p>
      <p className="text-white/50 text-2xl">{label}</p>
    </div>
  );
}
