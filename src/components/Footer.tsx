import Image from "next/image";
import GlassCard from "./GlassCard";
import { Mail, Instagram, Globe } from "lucide-react";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <footer>
      <GlassCard className="w-full flex flex-row justify-between items-center overflow-hidden">
        <div className="flex flex-row items-center gap-4">
          <a
            href="mailto:geral@acmfeup.eu"
            className={`${jura.className} text-2xl`}
          >
            <Mail />
          </a>
          <a
            href="https://www.instagram.com/acmfeup/"
            className={`${jura.className} text-2xl`}
          >
            <Instagram />
          </a>
          <a
            href="https://acmfeup.eu/"
            className={`${jura.className} text-2xl`}
          >
            <Globe />
          </a>
        </div>
        <div className="hidden sm:flex flex-row items-center gap-4 ">
          <Image
            src="/logos/acm-logo.svg"
            alt="ACM Logo"
            width={150}
            height={150}
            className="shrink-0"
          />
          <Image
            src="/logos/xstf-logo.svg"
            alt="xSTF Logo"
            width={150}
            height={150}
            className="shrink-0"
          />
        </div>
      </GlassCard>
    </footer>
  );
}
