import Image from "next/image";

export default function SponsorCarousel() {
  const sponsors = [
    "/logos/71.png",
    "/logos/CGI.png",
    "/logos/Checkmarx.png",
    "/logos/Euronext.png",
    "/logos/MSI.png",
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-[scroll_20s_linear_infinite] w-[200%]">
        {/* Group 1 */}
        <div className="flex justify-between w-full pr-4">
          {sponsors.map((src, index) => (
            <div
              key={`first-${index}`}
              className="flex-1 flex justify-center px-4"
            >
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Group 2 (duplicate) */}
        <div className="flex justify-between w-full pl-4">
          {sponsors.map((src, index) => (
            <div
              key={`second-${index}`}
              className="flex-1 flex justify-center px-4"
            >
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={src}
                  alt={`Sponsor duplicate ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
