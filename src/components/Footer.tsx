import Image from "next/image";
import GlassCard from "./GlassCard";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <footer>
      <GlassCard className="flex flex-row justify-between items-center">
        <a
          href="mailto:geral@acmfeup.eu"
          className={`${jura.className} text-2xl`}
        >
          geral@acmfeup.eu
        </a>
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/logos/acm-logo.svg"
            alt="ACM Logo"
            width={150}
            height={150}
          />
          <Image
            src="/logos/xstf-logo.svg"
            alt="ACM Logo"
            width={150}
            height={150}
          />
        </div>
      </GlassCard>
    </footer>
  );
}
