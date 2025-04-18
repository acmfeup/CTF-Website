interface GlowingRectangleProps {
  children?: React.ReactNode;
  className?: string;
  blurSide?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
}

export default function GlowingRectangle({
  children,
  className,
  blurSide,
}: GlowingRectangleProps) {
  const blurPosition = {
    bottomLeft:
      "bottom-0 left-0 transform translate-x-[-50%] translate-y-[30%] rotate-10",
    bottomRight:
      "bottom-0 right-0 transform translate-x-[50%] translate-y-[30%] -rotate-10",
    topLeft:
      "top-0 left-0 transform translate-x-[-50%] translate-y-[-30%] -rotate-10",
    topRight:
      "top-0 right-0 transform translate-x-[50%] translate-y-[-30%] rotate-10",
  }[blurSide || "bottomRight"];
  return (
    <div
      className={`min-h-screen w-full bg-transparent relative overflow-clip ${className}`}
    >
      <div
        className={`absolute w-[200%] h-1/2 bg-gradient-to-br from-main-green/40 to-transparent blur-3xl ${blurPosition} `}
      ></div>
      {children}
    </div>
  );
}
