"use client";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  bgColor?: string;
}

export function WaveDivider({ 
  flip = false, 
  color = "#C470A7", 
  bgColor = "white" 
}: WaveDividerProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        fill={color}
      >
        <path d="M0,64 C120,100 240,20 360,64 C480,108 600,44 720,64 C840,84 960,28 1080,64 C1200,100 1320,48 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}

export function WaveDividerAlt({ 
  flip = false, 
  color = "#C470A7", 
  bgColor = "white" 
}: WaveDividerProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20"
        fill={color}
      >
        <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
