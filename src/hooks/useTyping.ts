"use client";

import { useState, useEffect } from "react";

export function useTyping(lines: string[], speed = 45) {
	const [state, setState] = useState({
		lineIndex: 0,
		charIndex: 0,
		text: "",
		done: false,
	});

	useEffect(() => {
		if (state.done) return;

		const line = lines[state.lineIndex];
		if (line === undefined) {
			setState((s) => ({ ...s, done: true }));
			return;
		}

		if (state.charIndex < line.length) {
			const timeout = setTimeout(() => {
				setState((s) => ({
					...s,
					charIndex: s.charIndex + 1,
					text: s.text + line[s.charIndex],
				}));
			}, speed);
			return () => clearTimeout(timeout);
		} else {
			const isLastLine = state.lineIndex >= lines.length - 1;
			const timeout = setTimeout(() => {
				setState((s) => ({
					...s,
					lineIndex: s.lineIndex + 1,
					charIndex: 0,
					text: s.text + (isLastLine ? "" : "\n"),
				}));
			}, 600);
			return () => clearTimeout(timeout);
		}
	}, [state, lines, speed]);

	return state.text;
}
