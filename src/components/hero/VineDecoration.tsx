"use client";

interface VineDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const VineDecoration = ({ position }: VineDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 scale-x-[-1]";
      case "bottom-left":
        return "bottom-0 left-0 scale-y-[-1]";
      case "bottom-right":
        return "bottom-0 right-0 scale-x-[-1] scale-y-[-1]";
      default:
        return "top-0 left-0";
    }
  };

  return (
    <div
      className={`absolute ${getPositionClasses()} w-32 h-32 md:w-48 md:h-48 z-5 animate-sway`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Vine Branch */}
        <path
          d="M10 10 Q50 30 80 60 Q110 90 140 130 Q160 160 180 190"
          stroke="#2d5016"
          strokeWidth="6"
          fill="none"
          className="animate-pulse"
        />

        {/* Secondary Branches */}
        <path
          d="M40 45 Q60 50 75 65"
          stroke="#2d5016"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M90 95 Q105 100 115 115"
          stroke="#2d5016"
          strokeWidth="4"
          fill="none"
        />

        {/* Leaves */}
        <ellipse
          cx="35"
          cy="35"
          rx="8"
          ry="12"
          fill="#4ade80"
          transform="rotate(25 35 35)"
        />
        <ellipse
          cx="55"
          cy="50"
          rx="6"
          ry="10"
          fill="#16a34a"
          transform="rotate(-15 55 50)"
        />
        <ellipse
          cx="85"
          cy="75"
          rx="10"
          ry="14"
          fill="#22c55e"
          transform="rotate(45 85 75)"
        />
        <ellipse
          cx="120"
          cy="110"
          rx="8"
          ry="12"
          fill="#15803d"
          transform="rotate(-30 120 110)"
        />
        <ellipse
          cx="155"
          cy="145"
          rx="9"
          ry="13"
          fill="#166534"
          transform="rotate(60 155 145)"
        />

        {/* Small decorative leaves */}
        <ellipse
          cx="70"
          cy="60"
          rx="4"
          ry="6"
          fill="#4ade80"
          transform="rotate(0 70 60)"
        />
        <ellipse
          cx="105"
          cy="85"
          rx="5"
          ry="7"
          fill="#16a34a"
          transform="rotate(90 105 85)"
        />
        <ellipse
          cx="135"
          cy="125"
          rx="4"
          ry="6"
          fill="#22c55e"
          transform="rotate(-45 135 125)"
        />
      </svg>
    </div>
  );
};
