"use client";

import { useEffect, useState } from "react";

export default function MouseFollowerBlob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden hidden sm:block">
      <div
        className="absolute w-[200] h-[200] rounded-full bg-main-green opacity-30 blur-3xl"
        style={{
          transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
        }}
      />
    </div>
  );
}
