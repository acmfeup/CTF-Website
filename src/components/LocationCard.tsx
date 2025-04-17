import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400"],
});

interface LocationCardProps {
  location: string;
}

export default function LocationCard({ location }: LocationCardProps) {
  return <p className={`${jura.className} font-bold text-3xl`}> @{location}</p>;
}
