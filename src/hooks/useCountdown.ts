"use client";

import { useState, useEffect, useCallback } from "react";

export function useCountdown(targetDate: string) {
	const target = new Date(targetDate).getTime();

	const calculate = useCallback(
		() => Math.max(0, target - Date.now()),
		[target],
	);

	const [remaining, setRemaining] = useState(calculate);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(calculate());
		}, 1000);
		return () => clearInterval(interval);
	}, [calculate]);

	const pad = (n: number) => String(n).padStart(2, "0");

	return {
		d: pad(Math.floor(remaining / 86400000)),
		h: pad(Math.floor((remaining % 86400000) / 3600000)),
		m: pad(Math.floor((remaining % 3600000) / 60000)),
		s: pad(Math.floor((remaining % 60000) / 1000)),
	};
}
