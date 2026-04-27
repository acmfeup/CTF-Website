import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { GoldRule } from "@/components/ui/GoldRule";
import { CATDESC, CATEGORIES } from "@/lib/data";

function Section({
	title,
	children,
	width,
}: {
	title: string;
	children: React.ReactNode;
	width?: string;
}) {
	return (
		<div className="mb-14">
			<div
				className="font-[var(--font-barlow-condensed)] font-extrabold italic uppercase text-white"
				style={{
					fontSize: 28,
					letterSpacing: "-0.01em",
					marginBottom: 10,
				}}
			>
				{title}
			</div>
			<GoldRule width={width || 120} />
			{children}
		</div>
	);
}

const scheduleItems = [
	["9:00", "Opening ceremony - B002, FEUP"],
	["9:30", "Beginning of the competition"],
	["13:00 - 15:00", "Lunch window"],
	["19:30", "End of the competition"],
	["20:00", "Closing ceremony & awards - B002, FEUP"],
];

const rules = [
	"No attacking the competition infrastructure.",
	"Do not share flags or solutions with other teams.",
	"Teams of up to 4 members.",
	"Automated scanning against the platform is forbidden.",
	"All decisions by the organizing team are final.",
	"Have fun. Respect other participants.",
];

const prizes = [
	{
		place: "1ST PLACE",
		color: "#D4A827",
		desc: "TO BE ANNOUNCED",
	},
	{
		place: "2ND PLACE",
		color: "#C0C0C0",
		desc: "TO BE ANNOUNCED",
	},
	{
		place: "3RD PLACE",
		color: "#CD7F32",
		desc: "TO BE ANNOUNCED",
	},
];

export default function AboutPage() {
	return (
		<div className="bg-bg min-h-screen">
			<Header />

			{/* Hero Banner */}
			<div className="relative bg-surface-1 border-b border-border px-6 md:px-10 pt-20 pb-16 overflow-hidden">
				<div
					className="absolute left-[-8%] right-[-8%] h-[240px] bg-gold/[0.03] pointer-events-none"
					style={{ transform: "rotate(-5deg)", bottom: -60 }}
				/>
				<div className="relative max-w-[780px] mx-auto">
					<div
						className="font-[var(--font-barlow-condensed)] font-black italic uppercase text-white mb-4"
						style={{
							fontSize: "clamp(40px, 8vw, 72px)",
							lineHeight: 0.88,
							letterSpacing: "-0.04em",
						}}
					>
						CAPTURE
						<br />
						<span className="text-gold">THE FLAG</span>
					</div>
					<div
						className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8] leading-relaxed max-w-[600px] mb-8"
						style={{ fontSize: 19 }}
					>
						A cybersecurity competition organized by ACM FEUP and xSTF. 8
						categories, X challenges, one objective: solve them all.
					</div>
					<div className="flex flex-col sm:flex-row gap-3.5">
						<Link href="/">
							<Button>REGISTER NOW</Button>
						</Link>
						<div className="flex gap-5 items-center sm:ml-2">
							{[
								["DATE", "May 23, 2026"],
								["DURATION", "10 hours"],
								["FORMAT", "On-site (FEUP)"],
							].map(([label, value]) => (
								<div key={label}>
									<div
										className="font-[var(--font-ibm-plex-mono)] text-muted-text uppercase"
										style={{ fontSize: 11, letterSpacing: "0.1em" }}
									>
										{label}
									</div>
									<div
										className="font-[var(--font-barlow-semi-condensed)] text-white font-semibold mt-0.5"
										style={{ fontSize: 16 }}
									>
										{value}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="px-6 md:px-10 py-14 max-w-[1000px] mx-auto">
				{/* Prizes */}
				<Section title="Prizes" width="100">
					<div className="flex flex-col sm:flex-row gap-3">
						{prizes.map((prize) => (
							<div
								key={prize.place}
								className="flex-1 bg-surface-2 rounded p-5 md:p-[18px_20px]"
								style={{
									border: `1px solid ${prize.color}44`,
									borderTop: `3px solid ${prize.color}`,
								}}
							>
								<div
									className="font-[var(--font-barlow-condensed)] font-black italic uppercase mb-2"
									style={{
										fontSize: 22,
										color: prize.color,
										letterSpacing: "-0.01em",
									}}
								>
									{prize.place}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-muted-text leading-snug"
									style={{ fontSize: 15 }}
								>
									{prize.desc}
								</div>
							</div>
						))}
					</div>

					{/* Extra prizes teaser */}
					<div className="mt-4 w-full bg-gold/[0.03] rounded p-5 md:p-6 border border-dashed border-gold/40">
						<div
							className="font-[var(--font-barlow-condensed)] font-black italic uppercase text-gold mb-2"
							style={{
								fontSize: 20,
								letterSpacing: "-0.01em",
							}}
						>
							MORE THAN THE PODIUM
						</div>
						<div
							className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8] leading-relaxed"
							style={{ fontSize: 16 }}
						>
							Extra on-the-spot prizes will be handed out throughout the event.
							Everyone has a shot; you don't need to top the scoreboard to win.
						</div>
					</div>
				</Section>
				{/* Schedule */}
				<Section title="Schedule" width="140">
					<div
						className="font-[var(--font-barlow-semi-condensed)] text-muted-text mb-4 leading-relaxed"
						style={{ fontSize: 15 }}
					>
						When the lunch window is open participants are free to eat at any point
						during that period. The competition continues; this is not a
						mandatory break. There will also be snacks available throughout the day.
					</div>
					<div className="space-y-4">
						{scheduleItems.map(([time, event]) => (
							<div
								key={time}
								className="flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-baseline border-l-2 border-border pl-[18px] relative"
							>
								<div className="absolute left-[-5px] top-[7px] w-2 h-2 bg-gold rounded-full" />
								<div
									className="font-[var(--font-ibm-plex-mono)] text-gold shrink-0 w-full sm:w-[170px]"
									style={{ fontSize: 14 }}
								>
									{time}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8]"
									style={{ fontSize: 17 }}
								>
									{event}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* Categories */}
				<Section title="Categories" width="150">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{CATEGORIES.map((cat) => (
							<div
								key={cat}
								className="bg-surface-2 border border-surface-3 rounded p-4 md:p-5"
							>
								<div
									className="font-[var(--font-ibm-plex-mono)] text-gold mb-2 uppercase"
									style={{ fontSize: 12, letterSpacing: "0.06em" }}
								>
									[{cat.toUpperCase()}]
								</div>
								<div
									className="font-[var(--font-barlow-condensed)] font-extrabold italic uppercase text-white mb-1.5"
									style={{
										fontSize: 20,
										letterSpacing: "0.04em",
									}}
								>
									{cat}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-muted-text leading-snug"
									style={{ fontSize: 15 }}
								>
									{CATDESC[cat]}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* Rules */}
				<Section title="Rules" width="100">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{rules.map((rule, i) => (
							<div
								key={rule}
								className="flex gap-3 items-start bg-surface-2 border border-surface-3 rounded p-4 md:p-[14px_16px]"
							>
								<span
									className="font-[var(--font-ibm-plex-mono)] text-gold shrink-0 mt-0.5"
									style={{ fontSize: 14 }}
								>
									{String(i + 1).padStart(2, "0")}
								</span>
								<span
									className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8] leading-snug"
									style={{ fontSize: 16 }}
								>
									{rule}
								</span>
							</div>
						))}
					</div>
				</Section>

				{/* Organizers */}
				<Section title="Organizers" width="150">
					<div className="flex flex-col sm:flex-row gap-5 flex-wrap">
						{[
							{
								name: "ACM FEUP",
								logo: "/logos/acm-logo-square.svg",
								email: "geral@acmfeup.eu",
							},
							{
								name: "xSTF",
								logo: "/logos/xstf-logo-square.svg",
								email: "xstf.team@gmail.com",
							},
						].map((org) => (
							<div
								key={org.name}
								className="flex items-center gap-5 bg-surface-2 border border-surface-3 rounded p-5 md:p-[24px_28px] max-w-[520px] flex-1"
							>
								<div className="relative w-[68px] h-[68px] shrink-0 rounded-lg overflow-hidden bg-white/5">
									<Image
										src={org.logo}
										alt={org.name}
										fill
										className="object-contain p-1"
									/>
								</div>
								<div>
									<div
										className="font-[var(--font-barlow-condensed)] font-black italic uppercase"
										style={{
											fontSize: 24,
											letterSpacing: "-0.01em",
										}}
									>
										{org.name}
									</div>
									<div
										className="font-[var(--font-ibm-plex-mono)] text-gold mt-1.5"
										style={{ fontSize: 13 }}
									>
										{org.email}
									</div>
								</div>
							</div>
						))}
					</div>
				</Section>
			</div>
		</div>
	);
}
