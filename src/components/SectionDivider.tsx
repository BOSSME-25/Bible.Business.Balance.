interface SectionDividerProps {
  variant: "botanical" | "torn" | "wave";
  bgFrom: string;
  bgTo: string;
}

export default function SectionDivider({ variant, bgFrom, bgTo }: SectionDividerProps) {
  const bgFromMap: Record<string, string> = {
    charcoal: "bg-charcoal",
    "off-white": "bg-off-white",
    "warm-cream": "bg-warm-cream",
  };
  const bgToMap: Record<string, string> = {
    charcoal: "bg-charcoal",
    "off-white": "bg-off-white",
    "warm-cream": "bg-warm-cream",
  };

  const fillFromMap: Record<string, string> = {
    charcoal: "#1a1a1a",
    "off-white": "#faf8f4",
    "warm-cream": "#f5efe6",
  };

  const fillToMap: Record<string, string> = {
    charcoal: "#1a1a1a",
    "off-white": "#faf8f4",
    "warm-cream": "#f5efe6",
  };

  if (variant === "botanical") {
    return (
      <div className={`relative h-24 ${bgToMap[bgTo] || "bg-off-white"}`}>
        <div className={`absolute inset-x-0 top-0 h-12 ${bgFromMap[bgFrom] || "bg-charcoal"}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Botanical leaf accent */}
          <svg
            className="w-40 h-16 text-terracotta/20"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 30 C40 10, 70 5, 100 30 C130 5, 160 10, 180 30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M40 30 C55 18, 75 15, 100 30 C125 15, 145 18, 160 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="100" cy="28" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="60" cy="24" r="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="140" cy="24" r="1.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "torn") {
    return (
      <div className={`relative ${bgToMap[bgTo] || "bg-charcoal"}`}>
        <svg
          className="w-full h-16 -mb-px"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M0,0 L0,40 Q50,55 100,42 Q150,28 200,45 Q250,62 300,38 Q350,20 400,48 Q450,65 500,35 Q550,15 600,50 Q650,70 700,40 Q750,18 800,52 Q850,68 900,36 Q950,12 1000,45 Q1050,60 1100,38 Q1150,22 1200,42 L1200,0 Z`}
            fill={fillFromMap[bgFrom] || "#faf8f4"}
          />
        </svg>
      </div>
    );
  }

  // wave variant
  return (
    <div className={`relative ${bgToMap[bgTo] || "bg-warm-cream"}`}>
      <svg
        className="w-full h-20 -mb-px"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M0,0 L0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,0 Z`}
          fill={fillFromMap[bgFrom] || "#1a1a1a"}
        />
      </svg>
    </div>
  );
}
