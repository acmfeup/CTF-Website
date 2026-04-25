import type { Metadata } from "next";
import {
	Barlow_Condensed,
	Barlow_Semi_Condensed,
	IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
	variable: "--font-barlow-condensed",
	subsets: ["latin"],
	weight: ["400", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
	variable: "--font-barlow-semi-condensed",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "ACM xSTF 2026 — CTF Event",
	description: "Capture the Flag Competition by ACM and xSTF",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="CTFACM" />
			</head>
			<body
				className={`${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${ibmPlexMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
