"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useCountdown } from "@/hooks/useCountdown";
import { useTyping } from "@/hooks/useTyping";

export default function LandingPage() {
	const { d, h, m, s } = useCountdown("2026-05-23T09:00:00+01:00");
	const typed = useTyping([
		"$ ssh hacker@acm-xstf.dev -p 2026",
		"Connected. Welcome, participant.",
		"CTF starts: 2026-05-23 · 09:00 · FEUP",
		"10h · 8 categories · 21 challenges",
		"$ _",
	]);

	const countdownItems = [
		{ value: d, label: "DAYS" },
		{ value: h, label: "HRS" },
		{ value: m, label: "MIN" },
		{ value: s, label: "SEC" },
	];

	return (
		<main className="relative min-h-screen bg-bg flex flex-col overflow-hidden">
			{/* Scanlines overlay */}
			<div
				className="fixed inset-0 pointer-events-none z-[5]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.018) 3px,rgba(255,255,255,0.018) 4px)",
				}}
			/>

			{/* Background slash */}
			<div
				className="absolute left-[-20%] right-[-20%] h-[360px] bg-gold/[0.035] pointer-events-none"
				style={{ transform: "rotate(-7deg)", top: "38%" }}
			/>

			{/* Top Nav */}
			<div className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
				<Logo size={26} />
				<div className="flex items-center gap-4">
					<Link
						href="/about"
						className="hidden md:block font-[var(--font-barlow-condensed)] font-bold italic uppercase text-[13px] tracking-wider px-3 py-[5px] bg-gold/10 text-gold border botder-gold/30 rounded transition-all duration-150"
					>
						ABOUT
					</Link>
				</div>
			</div>

			{/* Hero */}
			<div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pb-16 pt-4 relative z-20 gap-0">
				{/* Big glitch wordmark */}
				<div className="text-center mb-5 animate-glitch">
					<div className="relative inline-block">
						<div
							className="absolute left-[-16px] right-[-16px] bg-gold z-0"
							style={{
								height: 60,
								top: "42%",
								transform: "skewX(-6deg)",
								opacity: 0.88,
							}}
						/>
						<div
							className="relative z-[1] font-[var(--font-barlow-condensed)] font-black italic uppercase text-white select-none"
							style={{
								fontSize: "clamp(60px, 15vw, 148px)",
								lineHeight: 0.86,
								letterSpacing: "-0.04em",
							}}
						>
							ACM
							<br />
							xSTF
						</div>
					</div>
					<div
						className="font-[var(--font-barlow-condensed)] font-bold italic text-gold mt-2.5 animate-fade-up"
						style={{
							fontSize: "clamp(18px, 3vw, 28px)",
							letterSpacing: "0.08em",
							animationDelay: "0.4s",
						}}
					>
						2026
					</div>
				</div>

				{/* Subtitle */}
				<div
					className="font-[var(--font-barlow-condensed)] font-extrabold italic uppercase text-muted-text mb-8 text-center animate-fade-up"
					style={{
						fontSize: "clamp(12px, 2vw, 18px)",
						letterSpacing: "0.18em",
						animationDelay: "0.5s",
					}}
				>
					CAPTURE THE FLAG &nbsp;·&nbsp; FEUP &nbsp;·&nbsp; MAY 23, 2026
				</div>

				{/* Countdown */}
				<div
					className="flex items-start gap-0 mb-9 animate-fade-up"
					style={{ animationDelay: "0.6s" }}
				>
					{countdownItems.map((item, i) => (
						<div key={item.label} className="flex items-start">
							{i > 0 && (
								<div
									className="font-[var(--font-ibm-plex-mono)] text-border px-1.5 mt-0.5"
									style={{ fontSize: "clamp(24px, 5vw, 44px)" }}
								>
									:
								</div>
							)}
							<div className="text-center min-w-[60px] md:min-w-[88px]">
								<div
									className="font-[var(--font-ibm-plex-mono)] font-semibold text-white leading-none"
									style={{
										fontSize: "clamp(32px, 8vw, 56px)",
										letterSpacing: "-0.02em",
									}}
								>
									{item.value}
								</div>
								<div
									className="font-[var(--font-ibm-plex-mono)] text-muted-text mt-1"
									style={{
										fontSize: 10,
										letterSpacing: "0.18em",
									}}
								>
									{item.label}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Terminal */}
				<div
					className="bg-[#0C0C0C] border border-border rounded p-4 md:p-[14px_18px] w-full max-w-[460px] mb-9 animate-fade-up shadow-[0_0_32px_rgba(0,0,0,0.8)]"
					style={{ animationDelay: "0.7s" }}
				>
					<div className="flex gap-1.5 mb-2.5">
						{["#F44336", "#D4A827", "#4CAF50"].map((color) => (
							<div
								key={color}
								className="w-2.5 h-2.5 rounded-full"
								style={{ backgroundColor: color }}
							/>
						))}
						<span
							className="font-[var(--font-ibm-plex-mono)] text-muted-text ml-2"
							style={{ fontSize: 11 }}
						>
							acm-xstf — bash
						</span>
					</div>
					<pre
						className="font-[var(--font-ibm-plex-mono)] text-gold whitespace-pre-wrap break-all min-h-[84px]"
						style={{ fontSize: 13, lineHeight: 1.65 }}
					>
						{typed}
						<span className="inline-block w-2 h-3.5 bg-gold align-middle animate-blink-cursor" />
					</pre>
				</div>

				{/* CTAs */}
				<div
					className="flex flex-col sm:flex-row gap-3.5 animate-fade-up"
					style={{ animationDelay: "0.9s" }}
				>
					<Button size="lg" className="animate-gold-pulse" onClick={() => {}}>
						REGISTER NOW
					</Button>
					<Link href="/about" className="w-full sm:w-auto block">
						<Button variant="ghost" size="lg" fullWidth>
							LEARN MORE
						</Button>
					</Link>
				</div>

				{/* Footer brand */}
				<div className="absolute bottom-5 flex items-center gap-2.5 opacity-35">
					<span
						className="font-[var(--font-ibm-plex-mono)] text-muted-text"
						style={{ fontSize: 11, letterSpacing: "0.12em" }}
					>
						ACM FEUP × xSTF 2026
					</span>
				</div>
			</div>
		</main>
	);
}
