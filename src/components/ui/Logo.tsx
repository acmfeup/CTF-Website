import Link from "next/link";

interface LogoProps {
	size?: number;
}

export function Logo({ size = 26 }: LogoProps) {
	const barHeight = size * 0.24;
	return (
		<Link
			href="/"
			className="relative inline-block cursor-pointer leading-none"
			style={{ lineHeight: 0.88 }}
		>
			<div
				className="absolute left-[-4px] right-[-4px] bg-gold z-0"
				style={{
					height: barHeight,
					top: "40%",
					transform: "skewX(-6deg)",
				}}
			/>
			<div
				className="relative z-[1] font-[var(--font-barlow-condensed)] font-black italic uppercase text-white select-none"
				style={{
					fontSize: size,
					letterSpacing: "-0.03em",
					lineHeight: 0.88,
				}}
			>
				ACM
				<br />
				xSTF
			</div>
		</Link>
	);
}
