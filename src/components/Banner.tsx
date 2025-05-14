"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface BannerProps {
  defaultVisible?: boolean;
}

const Banner = ({ defaultVisible = true }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="sticky top-0 w-full bg-[#00694E] px-4 py-3 shadow-sm z-47000">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-sm text-[#DFF6E1]">
            <span className="font-medium">
              🚀 Ready to compete but missing a team?
            </span>{" "}
            {" Fill out "}
            <span className="text-[#84F0D5]">
              <a
                href={"https://forms.gle/GKXP2WbujsxQoiqP8"}
                className="underline underline-offset-4 hover:text-[#FFC107]"
                target="_blank"
                rel="noopener noreferrer"
              >
                this quick form
              </a>
            </span>
            {" and we’ll match you up."}.
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-8 w-8 flex-none text-[#DFF6E1]"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export { Banner };
