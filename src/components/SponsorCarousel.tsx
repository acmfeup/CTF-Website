import Image from "next/image";
import GlassCard from "./GlassCard";
import Marquee from "react-fast-marquee";

export default function SponsorCarousel() {
  function ImageContainer({ src, index }: { src: string; index: number }) {
    return (
      <div className="relative w-[100px] h-[100px] mr-20">
        <Image
          src={src}
          alt={`Sponsor ${index + 1}`}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  const sponsors = [
    "/logos/71.png",
    "/logos/CGI.png",
    "/logos/Checkmarx.png",
    "/logos/Euronext.png",
    "/logos/MSI.png",
  ];

  return (
    <div className="w-full">
      <GlassCard>
        <Marquee
          autoFill={true}
          speed={50}
          pauseOnHover={true}
          className="w-full"
        >
          {sponsors.map((src, index) => (
            <ImageContainer key={index} src={src} index={index} />
          ))}
        </Marquee>
      </GlassCard>
    </div>
  );
}
