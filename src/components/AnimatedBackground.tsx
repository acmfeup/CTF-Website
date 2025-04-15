"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black/95">
      <div className="relative w-full h-full">
        <div
          className={`absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full 
                     bg-[#002F6C] opacity-30 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite]" : ""}`}
        />

        <div
          className={`absolute top-[40%] right-[15%] w-[600px] h-[600px] rounded-full 
                     bg-[#0056a4] opacity-20 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite_2s]" : ""}`}
        />

        <div
          className={`absolute bottom-[10%] left-[25%] w-[450px] h-[450px] rounded-full 
                     bg-[#0077cc] opacity-25 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite_4s]" : ""}`}
        />

        <div
          className={`absolute top-[30%] left-[50%] w-[700px] h-[700px] rounded-full 
                     bg-[#004080] opacity-15 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite_6s]" : ""}`}
        />
        <div
          className={`absolute top-[5%] right-[5%] w-[300px] h-[300px] rounded-full 
                     bg-[#1a5fa0] opacity-25 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite_3s]" : ""}`}
        />
        <div
          className={`absolute top-[4%] left-[45%] w-[400px] h-[400px] rounded-full 
                     bg-[#003366] opacity-25 blur-3xl 
                     ${mounted ? "animate-[blob_18s_infinite_5s]" : ""}`}
        />
      </div>
    </div>
  );
}
