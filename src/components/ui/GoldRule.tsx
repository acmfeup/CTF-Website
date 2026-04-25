interface GoldRuleProps {
	width?: string | number;
	className?: string;
}

export function GoldRule({ width = "100%", className = "" }: GoldRuleProps) {
	return (
		<div
			className={`h-[3px] bg-gold my-[18px] ${className}`}
			style={{
				transform: "skewX(-6deg)",
				width: typeof width === "number" ? `${width}px` : width,
			}}
		/>
	);
}
