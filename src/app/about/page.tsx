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
		<div className="mb-11">
			<div
				className="font-[var(--font-barlow-condensed)] font-extrabold italic uppercase text-white"
				style={{
					fontSize: 24,
					letterSpacing: "-0.01em",
					marginBottom: 8,
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
	["MAY 20", "Registration closes. No new sign-ups after this date."],
	["MAY 22 · 20:00", "Opening ceremony — on-site at Universidad [TBA]."],
	[
		"MAY 23 · 00:00 UTC-3",
		"CTF START — all challenges go live simultaneously.",
	],
	["MAY 24 · 00:00 UTC-3", "CTF END — no new flag submissions accepted."],
	["MAY 24 · 12:00", "Award ceremony — prizes, recognition, post-mortem."],
];

const rules = [
	"No attacking the competition infrastructure.",
	"Do not share flags or solutions with other teams.",
	"Teams of up to 4 members. Solo participation allowed.",
	"Automated scanning against the platform is forbidden.",
	"Flag format: FLAG{...} unless stated otherwise.",
	"First-blood bonuses apply to the first 3 solves per challenge.",
	"All decisions by the organizing team are final.",
	"Have fun. Respect other participants.",
];

const prizes = [
	{
		place: "1ST PLACE",
		color: "#D4A827",
		desc: "Trophy + prize package + exclusive ROOT shirt",
	},
	{
		place: "2ND PLACE",
		color: "#C0C0C0",
		desc: "Prize package + HACKER shirt",
	},
	{
		place: "3RD PLACE",
		color: "#CD7F32",
		desc: "Prize package + event merch bag",
	},
];

export default function AboutPage() {
	return (
		<div className="bg-bg min-h-screen">
			<Header />

			{/* Hero Banner */}
			<div className="relative bg-surface-1 border-b border-border px-6 md:px-10 pt-20 pb-14 overflow-hidden">
				<div
					className="absolute left-[-8%] right-[-8%] h-[240px] bg-gold/[0.03] pointer-events-none"
					style={{ transform: "rotate(-5deg)", bottom: -60 }}
				/>
				<div className="relative max-w-[780px]">
					<div
						className="font-[var(--font-barlow-condensed)] font-black italic uppercase text-white mb-4"
						style={{
							fontSize: "clamp(36px, 8vw, 64px)",
							lineHeight: 0.88,
							letterSpacing: "-0.04em",
						}}
					>
						CAPTURE
						<br />
						<span className="text-gold">THE FLAG</span>
					</div>
					<div
						className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8] leading-relaxed max-w-[560px] mb-7"
						style={{ fontSize: 17 }}
					>
						A 24-hour cybersecurity competition organized by the ACM Student
						Chapter in collaboration with STF. Seven categories, 21 challenges,
						one objective: get root.
					</div>
					<div className="flex flex-col sm:flex-row gap-3.5">
						<Link href="/">
							<Button>REGISTER NOW</Button>
						</Link>
						<div className="flex gap-4 items-center sm:ml-2">
							{[
								["DATE", "May 23, 2026"],
								["DURATION", "24 hours"],
								["FORMAT", "Online + On-site"],
							].map(([label, value]) => (
								<div key={label}>
									<div
										className="font-[var(--font-ibm-plex-mono)] text-muted-text uppercase"
										style={{ fontSize: 10, letterSpacing: "0.1em" }}
									>
										{label}
									</div>
									<div
										className="font-[var(--font-barlow-semi-condensed)] text-white font-semibold mt-0.5"
										style={{ fontSize: 14 }}
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
			<div className="px-6 md:px-10 py-11 max-w-[900px]">
				{/* Schedule */}
				<Section title="Schedule" width="140">
					<div className="space-y-3.5">
						{scheduleItems.map(([time, event]) => (
							<div
								key={time}
								className="flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-baseline border-l-2 border-border pl-[18px] relative"
							>
								<div className="absolute left-[-5px] top-[7px] w-2 h-2 bg-gold rounded-full" />
								<div
									className="font-[var(--font-ibm-plex-mono)] text-gold shrink-0"
									style={{ fontSize: 12, width: 170 }}
								>
									{time}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8]"
									style={{ fontSize: 15 }}
								>
									{event}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* Categories */}
				<Section title="Categories" width="150">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
						{CATEGORIES.map((cat) => (
							<div
								key={cat}
								className="bg-surface-2 border border-surface-3 rounded p-3.5 md:p-[14px_16px]"
							>
								<div
									className="font-[var(--font-ibm-plex-mono)] text-gold mb-1.5 uppercase"
									style={{ fontSize: 11, letterSpacing: "0.06em" }}
								>
									[{cat.toUpperCase()}]
								</div>
								<div
									className="font-[var(--font-barlow-condensed)] font-extrabold italic uppercase text-white mb-1"
									style={{
										fontSize: 18,
										letterSpacing: "0.04em",
									}}
								>
									{cat}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-muted-text leading-snug"
									style={{ fontSize: 13 }}
								>
									{CATDESC[cat]}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* Rules */}
				<Section title="Rules" width="100">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
						{rules.map((rule, i) => (
							<div
								key={rule}
								className="flex gap-3 items-start bg-surface-2 border border-surface-3 rounded p-3 md:p-[11px_14px]"
							>
								<span
									className="font-[var(--font-ibm-plex-mono)] text-gold shrink-0 mt-0.5"
									style={{ fontSize: 12 }}
								>
									{String(i + 1).padStart(2, "0")}
								</span>
								<span
									className="font-[var(--font-barlow-semi-condensed)] text-[#C8C8C8] leading-snug"
									style={{ fontSize: 14 }}
								>
									{rule}
								</span>
							</div>
						))}
					</div>
				</Section>

				{/* Prizes */}
				<Section title="Prizes" width="100">
					<div className="flex flex-col sm:flex-row gap-3">
						{prizes.map((prize) => (
							<div
								key={prize.place}
								className="flex-1 bg-surface-2 rounded p-4 md:p-[16px_18px]"
								style={{
									border: `1px solid ${prize.color}44`,
									borderTop: `3px solid ${prize.color}`,
								}}
							>
								<div
									className="font-[var(--font-barlow-condensed)] font-black italic uppercase mb-1.5"
									style={{
										fontSize: 20,
										color: prize.color,
										letterSpacing: "-0.01em",
									}}
								>
									{prize.place}
								</div>
								<div
									className="font-[var(--font-barlow-semi-condensed)] text-muted-text leading-snug"
									style={{ fontSize: 13 }}
								>
									{prize.desc}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* Organizers */}
				<Section title="Organizers" width="150">
					<div className="flex flex-col sm:flex-row gap-5 flex-wrap">
						{[
							{
								name: "ACM Student Chapter",
								sub: "in collaboration with STF",
								logo: "/logos/acm-logo.svg",
							},
							{
								name: "xSTF",
								sub: "in collaboration with ACM",
								logo: "/logos/xstf-logo.svg",
							},
						].map((org) => (
							<div
								key={org.name}
								className="flex items-center gap-5 bg-surface-2 border border-surface-3 rounded p-5 md:p-[20px_24px] max-w-[480px] flex-1"
							>
								<div className="relative w-[60px] h-[60px] shrink-0 rounded-lg overflow-hidden bg-white/5">
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
											fontSize: 22,
											letterSpacing: "-0.01em",
										}}
									>
										{org.name}
									</div>
									<div
										className="font-[var(--font-ibm-plex-mono)] text-muted-text mt-0.5"
										style={{ fontSize: 12 }}
									>
										{org.sub}
									</div>
									<div
										className="font-[var(--font-ibm-plex-mono)] text-gold mt-1.5"
										style={{ fontSize: 12 }}
									>
										contact@acm-xstf.dev
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
