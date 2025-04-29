import Image from "next/image";
import GlassCard from "./GlassCard";
import Marquee from "react-fast-marquee";

export default function SponsorCarousel() {
  function ImageContainer({
    src,
    index,
    url,
  }: {
    src: string;
    index: number;
    url: string;
  }) {
    return (
      <a href={url}>
        <div className="relative w-[150px] h-[150px] mr-20">
          <Image
            src={src}
            alt={`Sponsor ${index + 1}`}
            fill
            className="object-contain"
          />
        </div>
      </a>
    );
  }

  const sponsors = [
    {
      image: "/logos/71.png",
      url: "https://karriere.prosiebensat1.com/welcome-sevenone-tech-hub",
    },
    { image: "/logos/CGI.png", url: "https://www.cgi.com/portugal/pt-pt" },
    { image: "/logos/Checkmarx.png", url: "https://checkmarx.com/" },
    { image: "/logos/Euronext.png", url: "https://live.euronext.com/pt" },
    {
      image: "/logos/MSI.png",
      url: "https://sigarra.up.pt/fcup/pt/cur_geral.cur_view?pv_ano_lectivo=2025&pv_curso_id=6041",
    },
    { image: "/logos/uporto.png", url: "https://www.up.pt/portal/en/" },
    { image: "/logos/acm-logo.svg", url: "https://acmfeup.eu/" },
    { image: "/logos/xstf-logo.svg", url: "https://xstf.pt/" },
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
          {sponsors.map((sponsor, index) => (
            <ImageContainer
              key={index}
              src={sponsor.image}
              index={index}
              url={sponsor.url}
            />
          ))}
        </Marquee>
      </GlassCard>
    </div>
  );
}
