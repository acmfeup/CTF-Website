"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

export function Header() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);

	const navLinks = [{ href: "/about", label: "ABOUT" }];

	return (
		<header className="fixed top-0 left-0 right-0 z-[300] h-14 bg-bg/96 backdrop-blur-md border-b border-border">
			<div className="flex items-center justify-between h-full px-5 md:px-10">
				{/* Logo */}
				<Logo size={20} />

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`font-[var(--font-barlow-condensed)] font-bold italic uppercase text-[13px] tracking-wider px-3 py-[5px] rounded transition-all duration-150 ${
								pathname === link.href
									? "bg-gold/10 text-gold border border-gold/30"
									: "bg-transparent text-muted-text border border-transparent hover:text-white"
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Mobile Hamburger */}
				<button
					type="button"
					className="md:hidden flex flex-col gap-1 p-2"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					<span
						className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="md:hidden absolute top-14 left-0 right-0 bg-surface-2 border-b border-border p-4 flex flex-col gap-2 animate-fade-up">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setMobileOpen(false)}
							className={`font-[var(--font-barlow-condensed)] font-bold italic uppercase text-[13px] tracking-wider px-3 py-2 rounded transition-all duration-150 ${
								pathname === link.href
									? "bg-gold/10 text-gold border border-gold/30"
									: "bg-transparent text-muted-text border border-transparent"
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
