interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
  isRounded?: boolean;
  hasPadding?: boolean;
}

export default function GlassCard({
  children,
  className,
  hasBorder,
  isRounded,
  hasPadding,
}: GlassCardProps) {
  return (
    <div
      className={` backdrop-blur-sm bg-main-green/7 ${isRounded ? "rounded-2xl" : ""} ${hasPadding ? "p-6" : ""} shadow-xl ${className} ${hasBorder ? "border border-main-green/40" : ""}`}
    >
      {children}
    </div>
  );
}
