"use client";

import React from "react";
import Image from "next/image";
import { SAFARI_DIVIDER_IMAGE } from "@/data/story-data";

interface SafariDividerProps {
  className?: string;
  priority?: boolean;
}

export const SafariDivider: React.FC<SafariDividerProps> = ({
  className = "",
  priority = false,
}) => {
  return (
    <section
      className={`mt-2 w-full h-32 md:h-40 lg:h-48 relative mb-8 overflow-hidden ${className}`}
    >
      <Image
        src={SAFARI_DIVIDER_IMAGE.src}
        alt={SAFARI_DIVIDER_IMAGE.alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
    </section>
  );
};
