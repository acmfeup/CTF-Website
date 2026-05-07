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
									? "hidden"
									: "bg-gold/10 text-gold border border-gold/30"
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
