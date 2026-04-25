export const CATDESC: Record<string, string> = {
	web: "Web application vulnerabilities — XSS, SQLi, SSRF, auth bypasses.",
	rev: "Reverse engineering — binaries, obfuscated code, firmware analysis.",
	crypto: "Cryptographic attacks — broken ciphers, weak RNG, public-key math.",
	pwn: "Binary exploitation — buffer overflows, heap attacks, shellcoding.",
	osint: "Open source intelligence — finding people, places, public records.",
	misc: "Miscellaneous — coding challenges, logic puzzles, anything goes.",
	forensics: "Digital forensics — disk images, pcaps, steganography, memory.",
};

export const CATEGORIES = [
	"web",
	"rev",
	"crypto",
	"pwn",
	"osint",
	"misc",
	"forensics",
] as const;

export type Category = (typeof CATEGORIES)[number];
