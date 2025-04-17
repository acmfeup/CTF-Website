import { Jersey_10 } from "next/font/google";

const Jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function RegisterButton() {
  return (
    <a className="rounded-full border border-solid border-main-green/40 bg-transparent backdrop-blur-sm px-10 py-5 animate-glow cursor-pointer hover:bg-main-green/40 hover:text-white hover-fill">
      <p className={`text-6xl ${Jersey.className}`}>Register your team</p>
    </a>
  );
}
