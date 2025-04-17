import { Jersey_10 } from "next/font/google";
import localFont from "next/font/local";

const distortedFont = localFont({
  src: "../../public/fonts/Distorted.otf",
});

const Jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function TopNavBar() {
  return (
    <nav className="flex flex-row justify-between mt-5 mx-5">
      <div className={`text-4xl ${Jersey.className}`}>
        <p className={`text-main-green ${distortedFont.className}`}>
          ACM & xSTF
        </p>
      </div>
      <div
        className={`flex flex-row text-4xl space-x-10 ${Jersey.className} opacity-75`}
      >
        <p>About</p>
        <p>Sponsors</p>
      </div>
    </nav>
  );
}
